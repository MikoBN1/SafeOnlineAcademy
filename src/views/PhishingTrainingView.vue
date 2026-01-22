<template>
  <v-container class="fill-height py-8" fluid>
    <v-row class="fill-height">
      <!-- Sidebar / Email List -->
      <v-col cols="12" md="4" lg="3" class="d-flex flex-column h-100">
        <v-card class="flex-grow-1 d-flex flex-column" elevation="3">
          <v-toolbar color="primary" density="compact">
            <v-toolbar-title class="text-subtitle-1 font-weight-bold">
              <v-icon icon="mdi-email-outline" start></v-icon>
              Inbox Simulation
            </v-toolbar-title>
            <v-chip size="small" color="white" variant="outlined" class="mr-2">
              Score: {{ score }}/{{ completedCount }}
            </v-chip>
          </v-toolbar>
          
          <v-list lines="two" class="flex-grow-1 overflow-y-auto pa-0">
            <v-list-item
              v-for="email in emailScenarios"
              :key="email.id"
              :value="email"
              @click="selectEmail(email)"
              :active="selectedEmail?.id === email.id"
              :class="{ 'bg-blue-lighten-5': selectedEmail?.id === email.id }"
              color="primary"
            >
              <template v-slot:prepend>
                <v-avatar color="grey-lighten-2">
                  <v-icon :icon="getStatusIcon(email.id)" :color="getStatusColor(email.id)"></v-icon>
                </v-avatar>
              </template>
              
              <v-list-item-title class="font-weight-bold">{{ email.senderName }}</v-list-item-title>
              <v-list-item-subtitle>{{ email.subject }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
          
          <v-divider></v-divider>
          <div class="pa-4 bg-grey-lighten-4 text-caption text-center">
            Select an email to inspect it.
          </div>
        </v-card>
      </v-col>

      <!-- Email Content / Inspection Area -->
      <v-col cols="12" md="8" lg="9" class="d-flex flex-column h-100">
        <v-card v-if="selectedEmail" class="flex-grow-1 d-flex flex-column" elevation="3">
          <!-- Email Header -->
          <div class="pa-6 border-b">
            <div class="d-flex justify-space-between align-start mb-4">
              <h2 class="text-h5 font-weight-bold">{{ selectedEmail.subject }}</h2>
              <div class="d-flex flex-column align-end">
                <span class="text-body-2 text-medium-emphasis">{{ selectedEmail.date }}</span>
              </div>
            </div>
            
            <div class="d-flex align-center">
              <v-avatar color="primary" class="mr-3" size="48">
                <span class="text-h6 text-white">{{ selectedEmail.senderName.charAt(0) }}</span>
              </v-avatar>
              <div>
                <div class="font-weight-bold">{{ selectedEmail.senderName }}</div>
                <div class="text-body-2 text-medium-emphasis">
                  &lt;{{ selectedEmail.senderEmail }}&gt;
                </div>
              </div>
            </div>
          </div>

          <!-- Email Body -->
          <v-card-text class="flex-grow-1 overflow-y-auto pa-6">
            <div class="email-body text-body-1" v-html="selectedEmail.body"></div>
          </v-card-text>

          <!-- Interaction / Decision Area -->
          <v-divider></v-divider>
          <div class="pa-6 bg-grey-lighten-5">
            <div v-if="!hasAnswered(selectedEmail.id)">
              <div class="text-h6 mb-4 text-center">Is this email safe or a phishing attempt?</div>
              <div class="d-flex justify-center gap-4">
                <v-btn 
                  color="error" 
                  size="large" 
                  prepend-icon="mdi-alert-decagram"
                  class="mr-4"
                  @click="makeDecision(true)"
                  elevation="2"
                >
                  Report Phishing
                </v-btn>
                <v-btn 
                  color="success" 
                  size="large" 
                  prepend-icon="mdi-shield-check"
                  @click="makeDecision(false)"
                  elevation="2"
                >
                  Mark as Safe
                </v-btn>
              </div>
            </div>

            <!-- Feedback Result -->
            <v-alert
              v-else
              :type="getResultType(selectedEmail.id)"
              :title="getResultTitle(selectedEmail.id)"
              variant="tonal"
              border="start"
              class="mb-0"
            >
              <div class="text-body-1 mb-2">
                {{ selectedEmail.explanation }}
              </div>
              <div v-if="selectedEmail.isPhishing && selectedEmail.redFlags" class="mt-2">
                <strong>Red Flags:</strong>
                <v-chip 
                  v-for="flag in selectedEmail.redFlags" 
                  :key="flag" 
                  color="error" 
                  size="small" 
                  class="ml-2" 
                  variant="outlined"
                >
                  {{ flag }}
                </v-chip>
              </div>
            </v-alert>
          </div>
        </v-card>

        <!-- Empty State -->
        <v-sheet v-else class="flex-grow-1 d-flex align-center justify-center bg-grey-lighten-4 rounded-lg border border-dashed">
          <div class="text-center">
            <v-icon icon="mdi-email-search-outline" size="64" color="grey"></v-icon>
            <h3 class="text-h5 text-grey mt-4">Select an email to start training</h3>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { emailScenarios, type EmailScenario } from '../data/phishing_simulation';

const selectedEmail = ref<EmailScenario | null>(null);
const userDecisions = ref<Record<number, boolean>>({}); // Map: emailId -> result (true=correct, false=wrong)

// UI Helpers
const score = computed(() => Object.values(userDecisions.value).filter(v => v).length);
const completedCount = computed(() => Object.keys(userDecisions.value).length);

function selectEmail(email: EmailScenario) {
  selectedEmail.value = email;
}

function hasAnswered(id: number) {
  return id in userDecisions.value;
}

function getStatusIcon(id: number) {
  if (!hasAnswered(id)) return 'mdi-email';
  return userDecisions.value[id] ? 'mdi-check-circle' : 'mdi-close-circle';
}

function getStatusColor(id: number) {
  if (!hasAnswered(id)) return 'grey';
  return userDecisions.value[id] ? 'success' : 'error';
}

function makeDecision(markedAsPhishing: boolean) {
  if (!selectedEmail.value) return;
  
  const isActuallyPhishing = selectedEmail.value.isPhishing;
  const isCorrect = markedAsPhishing === isActuallyPhishing;
  
  userDecisions.value[selectedEmail.value.id] = isCorrect;
}

function getResultType(id: number) {
  return userDecisions.value[id] ? 'success' : 'error';
}

function getResultTitle(id: number) {
  return userDecisions.value[id] ? 'Correct Decision!' : 'Incorrect Decision';
}
</script>

<style scoped>
.email-body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}
.gap-4 {
  gap: 16px;
}
</style>
