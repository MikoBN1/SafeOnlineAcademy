<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        color="white"
        variant="text"
        v-bind="props"
        prepend-icon="mdi-translate"
      >
        {{ currentLocale.toUpperCase() }}
        <v-icon end icon="mdi-chevron-down"></v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale.code"
        @click="changeLocale(locale.code)"
        :active="locale.code === currentLocale"
      >
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
  { code: 'kz', name: 'Қазақша' }
];

const currentLocale = computed(() => locale.value);

function changeLocale(newLocale: string) {
  locale.value = newLocale;
}
</script>
