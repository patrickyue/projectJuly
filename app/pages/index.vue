<template>
  <div>
    <hero-banner />
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" class="text-center mb-3">
          <h1 class="text-h2">Our Services</h1>
          <p>Services Description</p>
        </v-col>
        <v-col cols="12" md="6" lg="4" class="text-center">
          <v-card class="mx-auto">
            <v-img
              class="align-end text-white"
              height="200"
              src="/assets/images/docks.jpg"
              cover
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text="Share"></v-btn>

              <v-btn color="orange" text="Explore"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4" class="text-center">
          <v-card class="mx-auto">
            <v-img
              class="align-end text-white"
              height="200"
              src="/assets/images/docks.jpg"
              cover
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text="Share"></v-btn>

              <v-btn color="orange" text="Explore"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4" class="text-center">
          <v-card class="mx-auto">
            <v-img
              class="align-end text-white"
              height="200"
              src="/assets/images/docks.jpg"
              cover
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text="Share"></v-btn>

              <v-btn color="orange" text="Explore"></v-btn>
            </v-card-actions>
          </v-card> </v-col
      ></v-row>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white">{{ card.title }}</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="medium-emphasis" icon="mdi-heart" size="small"></v-btn>

              <v-btn color="medium-emphasis" icon="mdi-bookmark" size="small"></v-btn>

              <v-btn
                color="medium-emphasis"
                icon="mdi-share-variant"
                size="small"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="my-16">
        <v-col cols="12" class="text-center mb-3">
          <h1 class="text-h2">Our FAQ</h1>
          <p class="">FAQ Description</p>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
              v-for="i in 3"
              :key="i"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              title="Item"
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const description = "Test Page description.";

const cards = [
  {
    title: "Pre-fab homes",
    src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
    flex: 12,
  },
  {
    title: "Favorite road trips",
    src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
    flex: 6,
  },
  {
    title: "Best airlines",
    src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
    flex: 6,
  },
];

useSeoMeta({
  title: "Test - Page",
  description,
});
</script>
