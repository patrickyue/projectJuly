<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
useHead({
  titleTemplate: title => title ? `${title} - ${runtimeConfig.public.name}` : runtimeConfig.public.name,
})
</script>

<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>
