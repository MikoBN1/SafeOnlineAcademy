```
<template>
  <v-app class="bg-background">
    <v-app-bar color="primary" elevation="2" density="comfortable">
      <template v-slot:prepend>
        <v-icon icon="mdi-shield-lock" size="large" class="ml-2"></v-icon>
      </template>
      <v-toolbar-title class="text-h5 font-weight-bold" style="cursor: pointer" @click="$router.push('/')">
        Safe Online Academy
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <LanguageSwitcher />
    </v-app-bar>

    <v-main>
      <v-container fluid class="fill-height pa-0 align-start">
        <router-view>
        </router-view>
      </v-container>
    </v-main>

    <v-footer color="surface" class="text-center d-flex flex-column py-4" elevation="4">
      <div class="text-caption text-medium-emphasis">
        {{ new Date().getFullYear() }} — <strong>{{ $t('general.footerText') }}</strong> — Educational Purpose Only
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import LanguageSwitcher from './components/LanguageSwitcher.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
