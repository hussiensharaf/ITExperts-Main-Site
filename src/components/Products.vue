<template>
  <v-row
    no-gutters
    style="background-color: white; min-height: 100vh"
    id="products"
  >
    <v-col cols="12">
      <v-row no-gutters justify="center">
        <h1 class="sec-d-hd black--text mb-3">Our Products</h1>
      </v-row>

      <v-row no-gutters class="prod-row" v-for="index in 5" :key="index">
        <v-col cols="12" xl="6" lg="6" sm="12">
          <v-card class="prod-card mt-6 pa-5" min-height="55vh" flat>
            <v-card-title>product {{ index }}</v-card-title>
            <v-card-text style="min-height: 110px !important">
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
              pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla pla
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="contact-btn blue white--text px-4 mx-2"
                elevation="2"
                rounded
                @click="goToId('contact')"
              >
                get in touch
                <v-icon class="ml-2" size="18" color="white"
                  >fas fa-long-arrow-alt-right</v-icon
                >
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col justify="center" align="center" cols="12" xl="6" lg="6" sm="12">
          <v-img
            class="prod-img mt-6"
            :src="require('../assets/imgs/' + 'charts.png')"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.contact-btn {
}
</style>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "SolutionsSec",

  mounted() {
    gsap.utils.toArray(".prod-card").forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
        },
        opacity: 0,
        x: -500,
        duration: 1,
        stagger: 0.1,
      });
    });

    gsap.utils.toArray(".prod-img").forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
        },
        opacity: 0,
        x: 500,
        duration: 1,
        stagger: 0.1,
      });
    });
  },
};
</script>