<template>
  <v-row class="mb-3" no-gutters style="background-color: white; min-height: 100vh" id="products">
    <v-col cols="12">
      <v-row no-gutters justify="center">
        <h1 class="section__header mb-16">Our Products</h1>
      </v-row>

      <v-row no-gutters class="prod-row" v-for="(item, index) in items" :key="index">
        <v-col cols="12" xl="6" lg="6" sm="12">
          <v-card class="prod-card d-flex flex-column justify-center pa-6" min-height="55vh" flat>
            <v-card-title class="product-name">{{ item.prodName }}</v-card-title>
            <v-card-text class="product-desc">
              {{ item.desc }}
            </v-card-text>
            <v-card-text class="product-desc">
              {{ item.subDesc }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="contact-btn px-4 mx-2" rounded @click="goToId('contact')">
                get in touch
                <v-icon class="ml-2 mt-1" size="18">fas fa-long-arrow-alt-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col justify="center" align="center" cols="12" xl="6" lg="6" sm="12"
          :class="index % 2 == 0 && !smAndDown ? 'order-first' : ''">
          <v-img min-height="70vh" class="prod-img" :src="getImageUrl(item.imgName)">
          </v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const { smAndDown } = useDisplay()

const items = ref([
  {
    imgName: "Big-Data.jpg",
    desc: `DC is a solution for allowing end users to dynamically generate queries and reports and save their preferences. DC can be connected to different DBMS. It has modern inteface with professional controls and fully featrued data grids with all possible sets of filtering, grouping and sorting like Excel.`,
    subDesc: `DC also designed to display the final data in a report viewer and can display more than one data grid and reports at the same time in different tabs.
                    DC supports PDF merging from multiple data sources and is designed to export data as Excel and CSV files etc.
                    DC also can integrate with other systems using APIs.`,
    prodName: "DataChannel (DC)",
  },
  {
    imgName: "time-tracker.jpg",
    desc: `Easy Logging is a monitoring system for businesses that rely on PCs. It records open programs even tabs opened in browsers for each employee and the amount of time they spend.`,
    subDesc: `Easy Logging takes screenshots, show activity status, integrates with admin panels and finally it generates reports on each emplyee's performance.`,
    prodName: "Easy Logging",
  },
  {
    imgName: "PowerBI.png",
    desc: `Create amazing dashboards, easily to connect and creating memorable reports personalized with your KPIs and brand.`,
    subDesc: 'Help you connecting to all your data sources with the scale to analyze, share, and promote insights across your organization while maintaining data accuracy, consistency, and security.',
    prodName: "Data Visualization",
  },
  {
    imgName: "WinServices.jpg",
    desc: `Supports data synchronization between two data sources, for example Databases on separte database servers through installed windows service that is working whenever your pc is running.`,
    subDesc: 'Users can set the interval they want, based on query strings for each table integrates with many ERP systems. It also provides you with automatic email sending based on preset actions.',
    prodName: "Windows Services - Based Solutions",
  },
  {
    imgName: "AI.jpg",
    desc: `All our product can integrate with Artificial Intelligence platforms such as Tensorflow and Pytorch.`,
    prodName: "Integration with AI Platforms",
  },
])

const getImageUrl = (name) => {
  return new URL(`../assets/imgs/${name}`, import.meta.url).href
}

const goToId = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const animateElements = [
    { selector: ".prod-card", x: -500 },
    { selector: ".prod-img", x: 500 },
  ]

  animateElements.forEach(({ selector, x }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
        },
        opacity: 0,
        x,
        duration: 1.2,
      })
    })
  })
})
</script>

<style scoped>
.product-name {
  font-weight: 700;
  color: rgb(24, 36, 49);
  font-size: clamp(17px, 3vw, 20px);
}
</style>