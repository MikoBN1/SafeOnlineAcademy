<template>
  <v-container v-if="topic">
    <v-btn to="/" variant="text" prepend-icon="mdi-arrow-left" class="mb-4">
      Back to Home
    </v-btn>

    <h1 class="text-h3 font-weight-bold mb-2">
      <v-icon :icon="topic.icon" color="primary" class="mr-2"></v-icon>
      {{ topic.title }}
    </h1>
    <p class="text-subtitle-1 text-grey-darken-1 mb-6">{{ topic.description }}</p>

    <v-tabs v-model="tab" color="primary" align-tabs="start">
      <v-tab value="learn">Learn</v-tab>
      <v-tab value="quiz">Examine</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="mt-6">
      <v-window-item value="learn">
        <v-card variant="flat">
          <v-img :src="topic.image" height="300" cover class="rounded-lg mb-6 bg-grey-lighten-2"></v-img>
          <div class="text-body-1 content-html" v-html="topic.content"></div>
        </v-card>
      </v-window-item>

      <v-window-item value="quiz">
        <QuizComponent :questions="topic.questions" />
      </v-window-item>
    </v-window>
  </v-container>
  
  <v-container v-else class="text-center mt-10">
    <v-icon icon="mdi-alert-circle" size="64" color="error"></v-icon>
    <h2 class="text-h4 mt-4">Topic Not Found</h2>
    <v-btn to="/" color="primary" class="mt-4">Go Home</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { topics } from '../data/topics';
import QuizComponent from '../components/QuizComponent.vue';

const route = useRoute();
const tab = ref('learn');

const topic = computed(() => {
  return topics.find(t => t.id === route.params.id);
});
</script>

<style>
.content-html h2 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1976D2;
}
.content-html h3 {
  font-size: 1.25rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #424242;
}
.content-html p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
.content-html ul {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}
.content-html li {
  margin-bottom: 0.5rem;
}
</style>
