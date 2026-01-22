<template>
  <!-- Hero Section -->
  <v-sheet color="primary" class="d-flex align-center justify-center text-center py-16 px-4 w-100" elevation="3">
    <div class="d-flex flex-column align-center">
      <v-icon icon="mdi-shield-check-outline" size="80" class="mb-4 text-secondary"></v-icon>
      <h1 class="text-h2 font-weight-bold mb-4">Welcome to Safe Online Academy</h1>
      <p class="text-h5 font-weight-light mb-8 text-rgba-white-90">
        Your ultimate guide to staying safe and secure on the internet. Master cybersecurity basics today.
      </p>
      <v-btn color="secondary" size="x-large" variant="elevated" elevation="4" rounded="pill" href="#topics">
        Start Learning Now
        <v-icon end icon="mdi-arrow-down-circle-outline"></v-icon>
      </v-btn>
    </div>
  </v-sheet>

  <v-container id="topics" class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-h3 font-weight-bold text-primary mb-2">Learning Topics</h2>
      <v-divider length="100" thickness="4" color="secondary" class="mx-auto rounded"></v-divider>
    </div>

    <v-row>
      <v-col v-for="topic in topics" :key="topic.id" cols="12" md="4">
        <v-card 
          class="h-100 d-flex flex-column transition-swing" 
          hover 
          elevation="2" 
          :to="{ name: 'topic', params: { id: topic.id } }"
          border
        >
          <v-img
            :src="topic.image"
            height="220"
            cover
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
          >
            <v-card-title class="text-white text-h5 font-weight-bold pl-4 pb-4">{{ topic.title }}</v-card-title>
          </v-img>
          
          <v-card-text class="pt-6 flex-grow-1">
            <div class="d-flex align-center mb-4">
              <v-chip color="secondary" label size="small" class="font-weight-bold text-uppercase mr-2">
                <v-icon start :icon="topic.icon"></v-icon>
                Module
              </v-chip>
              <v-chip color="info" variant="outlined" size="small" class="font-weight-medium">
                5 min read
              </v-chip>
            </div>
            <p class="text-body-1 text-medium-emphasis">{{ topic.description }}</p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-4 bg-background">
            <span class="text-caption text-disabled ml-2">Beginner Friendly</span>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="flat" append-icon="mdi-arrow-right">
              Explore
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
.text-rgba-white-90 {
  color: rgba(255, 255, 255, 0.9);
}
.transition-swing {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.transition-swing:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 0.2) !important;
}
</style>
