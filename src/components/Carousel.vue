<template>
  <v-carousel next-icon="fas fa-arrow-right" prev-icon="fas fa-arrow-left" class="mt-n16 carousel-style"
    v-model="currentCarouselPage" progress show-arrows-on-hover interval="6000" height="100vh" cycle>
    <v-carousel-item v-for="(item, i) in items" cover :key="i" :src="getImageUrl(item.src)" class="pa-0 ma-0">
      <div class="tph montserrat-alternates-extrabold" :style="textStyles.tph">ITEM provides</div>
      <div class="sbh montserrat-alternates-extrabold" :style="textStyles.sbh">
        {{ solutionsData[i]?.title }}
      </div>
      <div class="desc" :style="textStyles.desc">
        {{ solutionsData[i]?.subTitle }}
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useDisplay } from 'vuetify'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Power4 } from 'gsap'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

// Props or data
const items = ref([
  { src: 'img6.jpg' },
  { src: 'img5.jpg' },
  { src: 'img3.jpg' }
])

const currentCarouselPage = ref(0)
const { smAndDown } = useDisplay()

// Sample data - replace with your actual data
const solutionsData = ref([
  { title: 'Solution 1', subTitle: 'Description for solution 1' },
  { title: 'Solution 2', subTitle: 'Description for solution 2' },
  { title: 'Solution 3', subTitle: 'Description for solution 3' }
])

// Computed styles based on breakpoint
const textStyles = computed(() => ({
  tph: {
    marginLeft: smAndDown.value ? '8vw' : '11vw',
    marginTop: smAndDown.value ? '100px' : '200px',
    fontSize: 'clamp(5px, 1.5rem, 28px)'
  },
  sbh: {
    marginLeft: '11vw',
    marginTop: '0.4vw',
    fontSize: 'clamp(5px, 2rem, 35px)'
  },
  desc: {
    marginLeft: '11vw',
    marginTop: '0.4vw',
    fontSize: 'clamp(5px, 1rem, 28px)',
    maxWidth: '20rem'
  }
}))

// Image handling
const getImageUrl = (name) => {
  return new URL(`../assets/imgs/${name}`, import.meta.url).href
}

// Animation functions
const animateTextOut = () => {
  return gsap.timeline()
    .to('.desc', {
      duration: 0.2,
      autoAlpha: 0,
      opacity: 0,
      ease: Power4.easeOut
    })
    .to('.tph', {
      duration: 0.2,
      marginLeft: '8vw',
      autoAlpha: 0,
      opacity: 0,
      ease: Power4.easeOut
    }, 0)
    .to('.sbh', {
      duration: 0.2,
      autoAlpha: 0,
      opacity: 0,
      text: '',
      ease: Power4.easeOut
    }, 0)
}

const animateTextIn = () => {
  return gsap.timeline()
    .to('.tph', {
      duration: 1,
      marginLeft: textStyles.value.tph.marginLeft,
      autoAlpha: 1,
      opacity: 1,
      ease: Power4.easeOut
    })
    .to('.sbh', {
      duration: 1,
      opacity: 1,
      autoAlpha: 1,
      ease: Power4.easeOut
    })
    .to('.desc', {
      duration: 1.5,
      opacity: 1,
      autoAlpha: 1,
      ease: Power4.easeOut
    })
}

// Handle carousel changes
watch(currentCarouselPage, async (newVal, oldVal) => {
  await animateTextOut()
  animateTextIn()
})

// Initial animation
onMounted(() => {
  animateTextIn()
})
</script>

<style scoped>
.carousel-style {
  box-shadow:
    rgba(52, 82, 152, 0.7) 0px 5px,
    rgba(73, 110, 195, 0.3) 0px 15px,
    rgba(73, 110, 195, 0.2) 0px 30px,
    rgba(73, 110, 195, 0.1) 0px 60px,
    rgba(73, 110, 195, 0.05) 0px 90px;
  ;
}

.tph,
.sbh,
.desc {
  align-self: center !important;
  visibility: hidden;
  opacity: 0;
  color: white;
  z-index: 3;
  position: relative;
}

.v-window-x-transition-enter-active,
.v-window-x-reverse-transition-enter-active,
.v-window-y-transition-enter-active,
.v-window-y-reverse-transition-enter-active,
.v-window-x-transition-leave-active,
.v-window-x-reverse-transition-leave-active,
.v-window-y-transition-leave-active,
.v-window-y-reverse-transition-leave-active {
  transition: 1.5s cubic-bezier(0.7, 0.3, 0.5, 1) !important;
}

.new-transition-leave-active {
  position: absolute;
}

.new-transition-enter-active,
.new-transition-leave,
.new-transition-leave-to {
  transition: 2000ms;
}

.new-transition-enter,
.new-transition-leave-to {
  opacity: 0;
}
</style>