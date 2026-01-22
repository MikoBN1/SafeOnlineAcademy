

<template>
  <v-app class="bg-background">
    <v-app-bar color="primary" elevation="2" density="comfortable">
      <template v-slot:prepend>
        <v-icon icon="mdi-shield-lock" size="large" class="ml-2"></v-icon>
      </template>
      <v-app-bar-title class="font-weight-bold">Safe Online Academy</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" variant="text" prepend-icon="mdi-home">Home</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="fill-height pa-0 align-start">
        <router-view>
        </router-view>
      </v-container>
    </v-main>

    <v-footer color="surface" class="text-center d-flex flex-column py-4" elevation="4">
      <div class="text-caption text-medium-emphasis">
        {{ new Date().getFullYear() }} — <strong>Safe Online Academy</strong> — Educational Purpose Only
      </div>
    </v-footer>
  </v-app>
</template>

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
