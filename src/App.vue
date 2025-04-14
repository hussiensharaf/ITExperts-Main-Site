<template>
  <v-app>
    <v-overlay :opacity="1" :value="overlay">
      <Splash />
    </v-overlay>

    <Nav v-if="overlay == false" />
    <v-main v-if="overlay == false"> <router-view /> </v-main>
  </v-app>
</template>
<script>
import Nav from "@/components/global/Nav";
import Splash from "@/components/global/Splash";
export default {
  name: "App",

  data: () => ({
    overlay: true,
  }),
  mounted() {
    // hide the overlay when everything has loaded
    // you could choose some other event, e.g. if you're loading
    // data asynchronously, you could wait until that process returns
    setTimeout(() => {
      this.overlay = false;
    }, 400);
  },
  components: {
    Nav,
    Splash
  },
};
</script>
