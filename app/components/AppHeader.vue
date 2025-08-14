<template>
  <!-- Mobile -->
  <v-layout class="w-100">
    <v-navigation-drawer
      v-model="sideBar"
      mobile
      class=""
      temporary
      :width="250"
    >
      <v-list-item
        title="My Application"
        subtitle="Vuetify"
      />
      <v-divider />
      <v-list-item
        link
        title="List Item 1"
      />
      <v-list-item
        link
        title="List Item 2"
      />
      <v-list-item
        link
        title="List Item 3"
      />
    </v-navigation-drawer>
  </v-layout>

  <!-- Desktop -->
  <v-toolbar
    :elevation="2"
    class="px-4"
    color="primary"
    dark
  >
    <template #prepend>
      <v-app-bar-nav-icon
        class="d-flex"
        @click="sideBar = !sideBar"
      />
    </template>

    <v-app-bar-title>KaKa's Home</v-app-bar-title>

    <v-toolbar-items>
      <v-list-item
        link
        title="Home"
      />
      <v-list-item
        link
        title="About"
      />
      <v-list-item
        link
        title="Service"
      />
    </v-toolbar-items>
    <v-spacer />
    <v-btn>
      <v-icon :icon="mdiLock" />
      <span class="ml-2">Login</span>
    </v-btn>
    <v-btn>
      <v-icon :icon="mdiAccount" />
      <span class="ml-2">Register</span>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts" setup>
import { mdiLock, mdiAccount } from '@mdi/js'

const description = 'Test Page description.'

const sideBar = ref(false)

useSeoMeta({
  title: 'Test Page - Nuxt and NuxtHub',
  description,
})
</script>
