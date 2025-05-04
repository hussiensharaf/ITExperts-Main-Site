<template>
  <v-row no-gutters id="solution">
    <v-col cols="12">
      <v-row no-gutters justify="center">
        <h1 class="section__header">Our Solutions</h1>
      </v-row>

      <v-row no-gutters justify="center" class="sol-row">
        <v-col justify="center" align="center" cols="12" xl="3" lg="3" sm="12" v-for="(sol, index) in solutionsData"
          :key="index">
          <v-card align="center" class="sol-card" min-height="55vh" max-width="500px" flat>
            <img :src="getImage(sol.image)" class="sol-icon my-3">

            <v-card-title class="justify-center">{{ sol.title }}</v-card-title>
            <v-card-text style="min-height: 110px !important">{{ sol.subTitle }}</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn class="contact-btn px-4 mx-2" rounded @click="goToId('contact')">
                Get in touch
                <v-icon class="ml-2" size="15">fas fa-long-arrow-alt-right</v-icon>
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
  color: rgba(var(--v-theme-primary));
  background: -moz-linear-gradient(90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 23%,
      rgba(0, 212, 255, 1) 100%);

  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  /* -webkit-text-fill-color: transparent; */
}

.sol-row {
  display: flex;
  gap: 1.375rem;
  margin: 0 1.2rem;
  /* min-height: 50vh; */
}

.sol-card {
  margin-top: 3.5rem;
  padding: 1.5rem 0;
  border-radius: 10px;
  transition: 0.5s ease;
}

.sol-card:hover {
  color: rgba(var(--v-theme-on-surface));
  transform: scale(1.01) !important;
  border: 1px solid;
  background-color: rgba(var(--v-theme-surface));
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: -1px 1px 31px 2px rgba(0, 0, 0, 0.03);
  -moz-box-shadow: -1px 1px 31px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border-color: rgba(var(--v-theme-border));
}
</style>
<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { DataMixin } from '../composables/DataMixin'

gsap.registerPlugin(ScrollTrigger)

const { solutionsData } = DataMixin()

const getImage = (name) => {
  return new URL(`../assets/SolutionCards/${name}`, import.meta.url).href
}

const initAnimations = () => {
  nextTick(() => {
    const cards = document.querySelectorAll('.sol-card')

    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 60,
        duration: 0.6,
        ease: 'power2.out',
        delay: index * 0.1
      })
    })
  })
}

// Lifecycle hook
onMounted(() => {
  initAnimations()
})
</script>