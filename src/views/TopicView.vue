<template>
  <v-container v-if="topic">
    <v-btn to="/" variant="text" prepend-icon="mdi-arrow-left" class="mb-4">
      {{ $t('backToHome') }}
    </v-btn>

    <h1 class="text-h3 font-weight-bold mb-2">
      <v-icon :icon="topic.icon" color="primary" class="mr-2"></v-icon>
      {{ $t(`topics.${topic.id}.title`) }}
    </h1>
    <p class="text-subtitle-1 text-grey-darken-1 mb-6">{{ $t(`topics.${topic.id}.description`) }}</p>

    <v-tabs v-model="tab" color="primary" align-tabs="start">
      <v-tab value="learn">{{ $t('learn') }}</v-tab>
      <v-tab value="quiz">{{ $t('examine') }}</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="mt-6">
      <v-window-item value="learn">
        <v-card variant="flat" color="transparent">
          <v-img :src="images[topic.id]" height="300" cover class="rounded-lg mb-6 bg-grey-lighten-2"></v-img>
          <div class="text-body-1 content-html" v-html="$t(`topics.${topic.id}.content`)"></div>
        </v-card>
      </v-window-item>

      <v-window-item value="quiz">
        <QuizComponent :questions="questions" />
      </v-window-item>
    </v-window>
  </v-container>
  
  <v-container v-else class="text-center mt-10">
    <v-icon icon="mdi-alert-circle" size="64" color="error"></v-icon>
    <h2 class="text-h4 mt-4">{{ $t('topicNotFound') }}</h2>
    <v-btn to="/" color="primary" class="mt-4">{{ $t('goHome') }}</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { topics } from '../data/topics';
import type { Question } from '../data/topics';
import QuizComponent from '../components/QuizComponent.vue';
import phishing from '../assets/img/phishing.jpg'
import password from '../assets/img/passwords.jpg'
import cyber from '../assets/img/cyber_hygiene.jpeg'
import social from '../assets/img/social_engineering.jpeg'
import malware from '../assets/img/malware.jpeg'
import mobile from '../assets/img/mobile.jpeg'
import physical from '../assets/img/physical.jpeg'
import removal from '../assets/img/removal.jpeg'
import safe from '../assets/img/safe.jpeg'
import osint from '../assets/img/osint.jpeg'
import remote from '../assets/img/remote.jpeg'
import iot from '../assets/img/iot.jpeg'

const images = ref<Record<string, string>>({
  phishing: phishing,
  passwords: password,
  hygiene: cyber,
  "social-engineering": social,
  malware: malware,
  "mobile-security": mobile,
  "physical-security": physical,
  "usb-security": removal,
  "safe-browsing": safe,
  "data-privacy": osint,
  "remote-work": remote,
  "iot-security": iot
})

const route = useRoute();
const { tm } = useI18n();
const tab = ref('learn');

const topic = computed(() => {
  return topics.find(t => t.id === route.params.id);
});

const questions = computed<Question[]>(() => {
  if (!topic.value) return [];
  const q = tm(`topics.${topic.value.id}.questions`);
  return q as Question[];
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
