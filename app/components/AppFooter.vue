<template>
  <v-footer
    class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3"
    color="surface-light"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="3"
          class="text-center justify-center"
          v-for="link in smallLinks"
          :key="link.text"
        >
          <v-btn :href="link.to" target="_blank" :text="link.text" variant="text">
          </v-btn>
        </v-col>
        <v-col cols="12" class="text-center">
          <div class="flex-1-0-100 text-center mt-2">
            &copy;{{ new Date().getFullYear() }} —
            <strong>{{ componentName }}.&nbsp;</strong>All rights reserved.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script lang="ts" setup>
const appConfig = useAppConfig();
const componentName = appConfig.footer.componentName;
const smallLinks = appConfig.footer.smallLinks;
</script>
