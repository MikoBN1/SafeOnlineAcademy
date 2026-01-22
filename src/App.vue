

<template>
  <v-app>
    <v-app-bar color="primary" app>
      <v-toolbar-title>Safe Online Academy</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Home</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer color="primary" app>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Safe Online Academy</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style>
/* Global styles if needed, mostly handled by Vuetify */
</style>
