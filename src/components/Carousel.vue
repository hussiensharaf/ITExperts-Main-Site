<template>
  <div class="parallax">
    <v-carousel class="mt-n16 carousel-style" v-model="currentCarouselPage" progress show-arrows-on-hover
      interval="6000" height="100vh" cycle>
      <template #next="{ props }">
        <v-btn @click="props.onClick()" variant="plain" size="100" rounded="pill" color="surface" density="comfortable">
          <v-icon size="70" icon="ri-arrow-right-wide-line" />
        </v-btn>
      </template>
      <template #prev="{ props }">
        <v-btn @click="props.onClick()" variant="plain" size="100" rounded="pill" color="surface" density="comfortable">
          <v-icon size="70" icon="ri-arrow-left-wide-line" />
        </v-btn>
      </template>
      <v-carousel-item v-for="(item, i) in items" cover :key="i" :src="getImageUrl(item.src)">
        <div class="titlePhrase montserrat-alternates-extrabold" :style="textStyles.titlePhrase">ITEM provides</div>
        <div class="subtitlePhrase montserrat-alternates-extrabold" :style="textStyles.subtitlePhrase">
          {{ solutionsData[i]?.title }}
        </div>
        <div class="description" :style="textStyles.description">
          {{ solutionsData[i]?.subTitle }}
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
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
  { src: 'BluePlanets.png' },
  { src: 'img5.jpg' },
  { src: 'DarkBlueTechnology.jpg' }
])

const currentCarouselPage = ref(0)
const { smAndDown } = useDisplay()

const solutionsData = ref([
  { title: 'Solutions', subTitle: 'Websites, Cloud-Based Solutions, Data analysis, Data integrations and Data synchronization systems.' },
  { title: 'System Integration', subTitle: 'With us you can have your new system or integrate with existing systems or cloud services.' },
  { title: 'Hosting', subTitle: 'We provide domain names, websites hosting, and dataBases hosting, maintinance and monitoring.' }
])

// Computed styles based on breakpoint
const textStyles = computed(() => ({
  titlePhrase: {
    marginLeft: smAndDown.value ? '8vw' : '11vw',
    marginTop: smAndDown.value ? '100px' : '200px',
    fontSize: 'clamp(5px, 1.5rem, 28px)'
  },
  subtitlePhrase: {
    marginLeft: '11vw',
    marginTop: '0.4vw',
    fontSize: 'clamp(5px, 2rem, 35px)'
  },
  description: {
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
    .to('.description', {
      duration: 0.2,
      autoAlpha: 0,
      opacity: 0,
      ease: Power4.easeOut
    })
    .to('.titlePhrase', {
      duration: 0.2,
      marginLeft: '8vw',
      autoAlpha: 0,
      opacity: 0,
      ease: Power4.easeOut
    }, 0)
    .to('.subtitlePhrase', {
      duration: 0.2,
      autoAlpha: 0,
      opacity: 0,
      text: '',
      ease: Power4.easeOut
    }, 0)
}

const animateTextIn = () => {
  return gsap.timeline()
    .to('.titlePhrase', {
      duration: 1,
      marginLeft: textStyles.value.titlePhrase.marginLeft,
      autoAlpha: 1,
      opacity: 1,
      ease: Power4.easeOut
    })
    .to('.subtitlePhrase', {
      duration: 1,
      opacity: 1,
      autoAlpha: 1,
      ease: Power4.easeOut
    })
    .to('.description', {
      duration: 1.5,
      opacity: 1,
      autoAlpha: 1,
      ease: Power4.easeOut
    })
}

// Handle carousel changes
watch(currentCarouselPage, async (_, __) => {
  await animateTextOut()
  animateTextIn()
})

// Initial animation
onMounted(() => {
  animateTextIn()
})
</script>

<style scoped>
.parallax {
  background-attachment: fixed;
}

.carousel-style {
  box-shadow:
    rgba(52, 82, 152, 0.7) 0px 5px,
    rgba(73, 110, 195, 0.3) 0px 15px,
    rgba(73, 110, 195, 0.2) 0px 30px,
    rgba(73, 110, 195, 0.1) 0px 60px,
    rgba(73, 110, 195, 0.05) 0px 90px;
  ;
}

.titlePhrase,
.subtitlePhrase,
.description {
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