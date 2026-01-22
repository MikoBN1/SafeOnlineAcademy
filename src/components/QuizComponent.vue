<template>
  <v-card class="mt-8 mx-auto" elevation="4" max-width="800" rounded="lg">
    <v-card-item class="bg-primary py-6 px-6">
      <v-card-title class="text-h4 font-weight-bold text-white mb-1">
        <v-icon icon="mdi-lightbulb-on" class="mr-3"></v-icon>
        {{ $t('quiz.title') }}
      </v-card-title>
      <v-card-subtitle class="text-white text-opacity-80 text-body-1">
        {{ $t('quiz.subtitle') }}
      </v-card-subtitle>
    </v-card-item>
    
    <v-card-text class="pa-6">
      <div v-if="!submitted">
        <v-window v-model="currentQuestionStep">
          <v-window-item v-for="(question, index) in questions" :key="question.id" :value="index">
            <div class="mb-6">
              <div class="d-flex align-center mb-4">
                <v-avatar color="secondary" size="36" class="mr-3 font-weight-bold text-white">
                  {{ index + 1 }}
                </v-avatar>
                <h3 class="text-h6 font-weight-medium">{{ question.text }}</h3>
              </div>
              
              <v-radio-group v-model="answers[index]" class="ml-2">
                <v-radio
                  v-for="(option, optIndex) in question.options"
                  :key="optIndex"
                  :label="option"
                  :value="optIndex"
                  color="secondary"
                  class="mb-2"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-window-item>
        </v-window>

        <div class="d-flex justify-space-between align-center mt-6">
           <v-btn 
            v-if="currentQuestionStep > 0"
            variant="text" 
            prepend-icon="mdi-arrow-left"
            @click="currentQuestionStep--"
          >
            {{ $t('quiz.previous') }}
          </v-btn>
          <v-spacer v-else></v-spacer>

          <v-btn 
            v-if="currentQuestionStep < questions.length - 1"
            color="primary" 
            append-icon="mdi-arrow-right"
            @click="currentQuestionStep++"
            elevation="2"
          >
            {{ $t('quiz.next') }}
          </v-btn>
          <v-btn 
            v-else
            color="success" 
            size="large" 
            prepend-icon="mdi-check"
            @click="submitQuiz" 
            :disabled="!allAnswered"
            elevation="3"
          >
            {{ $t('quiz.submit') }}
          </v-btn>
        </div>
        
        <div class="text-caption text-center mt-4 text-medium-emphasis">
          {{ $t('quiz.questionProgress', { current: currentQuestionStep + 1, total: questions.length }) }}
        </div>
        <v-progress-linear 
          :model-value="((currentQuestionStep + 1) / questions.length) * 100" 
          color="secondary" 
          height="6" 
          class="mt-2 rounded-pill"
        ></v-progress-linear>
      </div>

      <div v-else>
        <div class="text-center py-8">
          <v-progress-circular
            :model-value="scorePercentage"
            :color="scoreColor"
            size="150"
            width="15"
            class="mb-6"
            bg-color="grey-lighten-4"
          >
            <div class="d-flex flex-column align-center">
              <span class="text-h3 font-weight-bold">{{ score }}/{{ questions.length }}</span>
              <span class="text-caption text-uppercase font-weight-medium text-medium-emphasis">{{ $t('quiz.score') }}</span>
            </div>
          </v-progress-circular>
          
          <v-alert
            :color="scoreColor"
            :icon="scorePercentage >= 80 ? 'mdi-trophy' : 'mdi-information'"
            variant="tonal"
            class="mb-8 mx-auto"
            max-width="600"
            border="start"
          >
            <h3 class="text-h6 font-weight-bold mb-1">{{ feedbackMessage }}</h3>
          </v-alert>
        </div>

        <h3 class="text-h5 font-weight-bold mb-4 ml-1">{{ $t('quiz.review') }}</h3>
        <v-expansion-panels variant="popout" class="mb-6">
          <v-expansion-panel
            v-for="(question, index) in questions"
            :key="question.id"
            :class="isCorrect(index) ? 'border-success' : 'border-error'"
          >
            <v-expansion-panel-title>
              <template v-slot:default="{ expanded }">
                <v-row no-gutters>
                  <v-col cols="1" class="d-flex justify-center">
                     <v-icon :color="isCorrect(index) ? 'success' : 'error'">
                      {{ isCorrect(index) ? 'mdi-check-circle' : 'mdi-close-circle' }}
                    </v-icon>
                  </v-col>
                  <v-col class="d-flex align-center font-weight-medium">
                    {{ question.text }}
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="pa-2">
                <div class="mb-3">
                  <v-chip size="small" :color="isCorrect(index) ? 'success' : 'error'" class="mr-2 font-weight-bold" label>{{ $t('quiz.yourAnswer') }}</v-chip>
                  <span class="text-body-1">{{ getUserAnswer(question, index) }}</span>
                </div>
                
                <div v-if="!isCorrect(index)" class="mb-3">
                  <v-chip size="small" color="success" class="mr-2 font-weight-bold" variant="outlined" label>{{ $t('quiz.correctAnswer') }}</v-chip>
                  <span class="text-body-1">{{ question.options?.[question.correctAnswer] }}</span>
                </div>

                <v-alert type="info" variant="tonal" class="mt-4" density="comfortable" icon="mdi-school">
                   <strong>{{ $t('quiz.explanation') }}</strong> {{ question.explanation }}
                </v-alert>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <div class="d-flex justify-center">
          <v-btn class="mt-2" variant="outlined" color="primary" size="large" @click="resetQuiz" prepend-icon="mdi-refresh">
            {{ $t('quiz.retake') }}
          </v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Question } from '../data/topics';

const { t } = useI18n();

const props = defineProps<{
  questions: Question[];
}>();

const answers = ref<number[]>(new Array(props.questions.length).fill(-1));
const submitted = ref(false);
const currentQuestionStep = ref(0);

const allAnswered = computed(() => {
  return answers.value.every(a => a !== -1);
});

const score = computed(() => {
  return answers.value.reduce((acc, curr, index) => {
    return acc + (curr === props.questions[index]?.correctAnswer ? 1 : 0);
  }, 0);
});

const scorePercentage = computed(() => {
  return (score.value / props.questions.length) * 100;
});

const scoreColor = computed(() => {
  if (scorePercentage.value >= 80) return 'success';
  if (scorePercentage.value >= 50) return 'warning';
  return 'error';
});

const feedbackMessage = computed(() => {
  if (scorePercentage.value === 100) return t('quiz.feedback.perfect');
  if (scorePercentage.value >= 80) return t('quiz.feedback.great');
  if (scorePercentage.value >= 50) return t('quiz.feedback.good');
  return t('quiz.feedback.tryAgain');
});

function submitQuiz() {
  submitted.value = true;
}

function isCorrect(index: number) {
  return answers.value[index] === props.questions[index]?.correctAnswer;
}

function resetQuiz() {
  answers.value = new Array(props.questions.length).fill(-1);
  submitted.value = false;
  currentQuestionStep.value = 0;
}

function getUserAnswer(question: Question, index: number) {
  const ansIdx = answers.value[index];
  if (ansIdx !== undefined && ansIdx !== -1) {
    return question.options[ansIdx];
  }
  return t('quiz.noAnswer');
}
</script>
