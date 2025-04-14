<template>
  <v-row no-gutters style="background-color: white" id="solution">
    <v-col cols="12">
      <v-row no-gutters justify="center">
        <h1 class="sec-d-hd black--text mb-3">Our Solutions</h1>
      </v-row>

      <v-row no-gutters justify="center" class="sol-row">
        <v-col justify="center" align="center" cols="12" xl="3" lg="3" sm="12"
          v-for="(sol, index) in this.solutionsData" :key="index">
          <v-card align="center" class="sol-card grey lighten-5 ma-6 pa-5" min-height="55vh" max-width="500px" flat>
            <v-icon v-text="sol.icon" class="sol-icon my-3" size="80"> </v-icon>

            <v-card-title class="justify-center">{{ sol.title }}</v-card-title>
            <v-card-text style="min-height: 110px !important">{{ sol.subTitle }}</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn class="contact-btn px-4 mx-2" rounded @click="goToId('contact')">
                Get in touch
                <v-icon class="ml-2" size="18" color="white">fas fa-long-arrow-alt-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.sol-icon {
  background: -moz-linear-gradient(90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 23%,
      rgba(0, 212, 255, 1) 100%);
  background: -webkit-linear-gradient(90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 23%,
      rgba(0, 212, 255, 1) 100%);
  background: linear-gradient(90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 23%,
      rgba(0, 212, 255, 1) 100%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sol-row {
  min-height: 50vh;
}

.sol-card {
  border-radius: 10px !important;
  transition: 0.3s ease;
}

.sol-card:hover {
  transform: scale(1.02) !important;
  background-color: white !important;
  box-shadow: -1px 1px 5px 1px rgba(0, 0, 0, 0.1) !important;
  -webkit-box-shadow: -1px 1px 31px 2px rgba(0, 0, 0, 0.03) !important;
  -moz-box-shadow: -1px 1px 31px 2px rgba(0, 0, 0, 0.1) !important;
  border: 1px solid !important;
  border-radius: 20px !important;
  border-color: #dfdfdf !important;
}
</style>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

import DataMixin from "@/components/global/mixins/DataMixin"
export default {
  name: "SolutionsSec",
  mixins: [DataMixin],
  mounted() {

    this.$nextTick(() => {
      const cards = document.querySelectorAll(".sol-card");

      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 60,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.1
        });
      });
    });
  }



};
</script>