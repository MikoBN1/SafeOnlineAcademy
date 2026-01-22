<template>
  <v-card class="mt-4" elevation="2">
    <v-card-title class="bg-primary text-white">
      Quiz: Test Your Knowledge
    </v-card-title>
    
    <v-card-text class="pt-4">
      <div v-if="!submitted">
        <div v-for="(question, index) in questions" :key="question.id" class="mb-6">
          <p class="text-h6 mb-2">{{ index + 1 }}. {{ question.text }}</p>
          <v-radio-group v-model="answers[index]" hide-details>
            <v-radio
              v-for="(option, optIndex) in question.options"
              :key="optIndex"
              :label="option"
              :value="optIndex"
              color="primary"
            ></v-radio>
          </v-radio-group>
        </div>
        
        <v-btn color="primary" size="large" block @click="submitQuiz" :disabled="!allAnswered">
          Submit Answers
        </v-btn>
      </div>

      <div v-else>
        <div class="text-center mb-6">
          <v-progress-circular
            :model-value="scorePercentage"
            :color="scoreColor"
            size="100"
            width="15"
          >
            {{ score }} / {{ questions.length }}
          </v-progress-circular>
          <h3 class="mt-4" :class="`text-${scoreColor}`">{{ feedbackMessage }}</h3>
        </div>

        <v-expansion-panels>
          <v-expansion-panel
            v-for="(question, index) in questions"
            :key="question.id"
            :class="isCorrect(index) ? 'bg-green-lighten-5' : 'bg-red-lighten-5'"
          >
            <v-expansion-panel-title>
              <v-icon :color="isCorrect(index) ? 'success' : 'error'" class="mr-2">
                {{ isCorrect(index) ? 'mdi-check-circle' : 'mdi-close-circle' }}
              </v-icon>
              {{ question.text }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p><strong>Your Answer:</strong> {{ getUserAnswer(question, index) }}</p>
              <p><strong>Correct Answer:</strong> {{ question.options?.[question.correctAnswer] }}</p>
              <v-alert type="info" variant="tonal" class="mt-2" density="compact">
                {{ question.explanation }}
              </v-alert>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-btn class="mt-6" variant="outlined" block @click="resetQuiz">
          Try Again
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Question } from '../data/topics';

const props = defineProps<{
  questions: Question[];
}>();

const answers = ref<number[]>(new Array(props.questions.length).fill(-1));
const submitted = ref(false);

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
  if (scorePercentage.value === 100) return 'Perfect! You are a security expert!';
  if (scorePercentage.value >= 80) return 'Great job! You know your stuff.';
  if (scorePercentage.value >= 50) return 'Good effort, but there is room for improvement.';
  return 'Keep learning! Review the material and try again.';
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
}

function getUserAnswer(question: Question, index: number) {
  const ansIdx = answers.value[index];
  if (ansIdx !== undefined && ansIdx !== -1) {
    return question.options[ansIdx];
  }
  return 'No answer';
}
</script>
