<template>
  <v-container>
    <div class="text-center mb-10">
      <h1 class="text-h3 font-weight-bold text-primary mb-4">Welcome to Safe Online Academy</h1>
      <p class="text-subtitle-1">Your guide to staying safe and secure on the internet.</p>
    </div>

    <v-row>
      <v-col v-for="topic in topics" :key="topic.id" cols="12" md="4">
        <v-card class="h-100 d-flex flex-column" hover :to="{ name: 'topic', params: { id: topic.id } }">
          <v-img
            :src="topic.image"
            height="200"
            cover
            class="align-end bg-grey-lighten-2"
          >
            <v-card-title class="text-white bg-black-opacity">{{ topic.title }}</v-card-title>
          </v-img>
          
          <v-card-text class="pt-4 flex-grow-1">
            <div class="d-flex align-center mb-2">
              <v-icon :icon="topic.icon" color="primary" class="mr-2"></v-icon>
              <span class="text-h6">{{ topic.title }}</span>
            </div>
            <p>{{ topic.description }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" variant="text" block>
              Start Learning
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { topics } from '../data/topics';
</script>

<style scoped>
.bg-black-opacity {
  background: rgba(0, 0, 0, 0.6);
}
</style>
