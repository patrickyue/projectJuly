<template>
  <!-- Mobile -->
  <v-layout class="w-100">
    <v-navigation-drawer v-model="sideBar" mobile class="" temporary :width="250">
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="List Item 1"></v-list-item>
      <v-list-item link title="List Item 2"></v-list-item>
      <v-list-item link title="List Item 3"></v-list-item>
    </v-navigation-drawer>
  </v-layout>

  <!-- Desktop -->
  <v-toolbar :elevation="2" class="px-4" color="primary" dark>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="sideBar = !sideBar" class="d-flex"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>KaKa's Home</v-app-bar-title>

    <v-toolbar-items>
      <v-list-item link title="Home"></v-list-item>
      <v-list-item link title="About"></v-list-item>
      <v-list-item link title="Service"></v-list-item
    ></v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn>
      <v-icon :icon="mdiLock"></v-icon>
      <span class="ml-2">Login</span>
    </v-btn>
    <v-btn>
      <v-icon :icon="mdiAccount"></v-icon>
      <span class="ml-2">Register</span>
    </v-btn>
  </v-toolbar>
</template>
<script lang="ts" setup>
import type { UserSession } from "#auth-utils";
import { mdiLock, mdiAccount } from "@mdi/js";

const { $csrfFetch } = useNuxtApp();

const { loggedIn, session, user } = useUserSession();

const items = [
  [
    {
      label: "Profile",
      to: "/profile",
      icon: "i-ph-user-duotone",
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-ph-sign-out-duotone",
      onSelect: async () => {
        await $csrfFetch("/api/_auth/session", {
          method: "DELETE",
        });

        session.value = {} as UserSession;

        await navigateTo("/");
      },
    },
  ],
];

const title = useRuntimeConfig().public.name;
const icon = useAppConfig().app.logo;

const description = "Test Page description.";

const sideBar = ref(false);

useSeoMeta({
  title: "Test Page - Nuxt and NuxtHub",
  description,
});
</script>
