<template>
  <v-app>
    <Splash v-if="overlay" />

    <Nav v-if="overlay == false" />
    <v-main v-if="overlay == false"> <router-view /> </v-main>
  </v-app>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Nav from "./components/global/Nav.vue";
import Splash from "./components/global/Splash.vue";
const overlay = ref(true)

onMounted(() => {
  setTimeout(() => {
    overlay.value = false;
  }, 400)
})
</script>
