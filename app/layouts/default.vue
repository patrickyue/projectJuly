<script lang="ts" setup>
const appUrl = useRuntimeConfig().public.url;

useSeoMeta({
  ogImage: `${appUrl}/images/og.png`,
  twitterImage: `${appUrl}/images/og.png`,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <AppHeader />

    <Main> <slot /> </Main>

    <AppFooter />
  </div>
</template>
