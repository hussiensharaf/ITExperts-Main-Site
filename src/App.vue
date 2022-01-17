<template>
  <v-app>
    <v-overlay :opacity="1" :value="overlay">
      <Splash/>
    </v-overlay>

    <Nav v-if="overlay == false" />
    <v-main v-if="overlay == false"> <router-view /> </v-main>
  </v-app>
</template>
<style >

.sec-d-hd {
  padding-top: 110px;
  letter-spacing: 3px;
  font-family: "Open Sans";
  font-size: clamp(20px, 3vw, 40px);
}
* {
  scroll-behavior: smooth;
}
html,
body {
  height: 100%;
}

/* 
.container_d {
  background-image: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  max-width: 100vw;
  background-color: black;
  height: 5000px;
} */
</style>
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
