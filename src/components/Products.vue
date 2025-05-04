<template>
  <section id="products" class="mx-4">
    <h1 class="section__header mb-12">Our Products</h1>

    <v-row v-for="(item, index) in items" :key="index" no-gutters class="prod-row">
      <v-col cols="12" sm="6" align-self="center" :class="alternativeColStyle(index)">
        <v-img :src="getImageUrl(item.imgName)" class="prod-img rounded-xl" cover />
      </v-col>

      <v-col class="d-flex flex-column justify-center">
        <v-card class="details-card d-flex flex-column justify-sm-space-evenly ga-4" flat>
          <h4 class="product-name">{{ item.prodName }}</h4>
          <span class="font-weight-light product-desc">
            {{ item.desc }}<br />
            {{ item.subDesc }}
          </span>
          <v-btn class="contact-btn" width="200" rounded @click="goToId('contact')">
            {{ item.actionTitle }}
            <v-icon class="ml-2 mt-1" size="18">fas fa-long-arrow-alt-right</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const { smAndUp } = useDisplay()

const alternativeColStyle = (index) => {
  if (index % 2 === 0 && smAndUp.value)
    return 'order-last ml-n12'
  return 'mr-n12'
}

const items = ref([
  {
    imgName: "DataChannel.png",
    desc: `DC is a solution for allowing end users to dynamically generate queries and reports and save their preferences. DC can be connected to different DBMS. It has modern inteface with professional controls and fully featrued data grids with all possible sets of filtering, grouping and sorting like Excel.`,
    subDesc: `DC also designed to display the final data in a report viewer and can display more than one data grid and reports at the same time in different tabs.
                    DC supports PDF merging from multiple data sources and is designed to export data as Excel and CSV files etc.
                    DC also can integrate with other systems using APIs.`,
    prodName: "DataChannel (DC)",
    actionTitle: "Follow For More",
  },
  {
    imgName: "time-tracker.jpg",
    desc: `Easy Logging is a monitoring system for businesses that rely on PCs. It records open programs even tabs opened in browsers for each employee and the amount of time they spend.`,
    subDesc: `Easy Logging takes screenshots, show activity status, integrates with admin panels and finally it generates reports on each emplyee's performance.`,
    prodName: "Easy Logging",
    actionTitle: "Follow For More",
  },
  {
    imgName: "PowerBI.png",
    desc: `Create amazing dashboards, easily to connect and creating memorable reports personalized with your KPIs and brand.`,
    subDesc: 'Help you connecting to all your data sources with the scale to analyze, share, and promote insights across your organization while maintaining data accuracy, consistency, and security.',
    prodName: "Data Visualization",
    actionTitle: "Follow For More",
  },
  {
    imgName: "WinServices.jpg",
    desc: `Supports data synchronization between two data sources, for example Databases on separte database servers through installed windows service that is working whenever your pc is running.`,
    subDesc: 'Users can set the interval they want, based on query strings for each table integrates with many ERP systems. It also provides you with automatic email sending based on preset actions.',
    prodName: "Windows Services - Based Solutions",
    actionTitle: "Follow For More",
  },
  {
    imgName: "AI.jpg",
    desc: `All our product can integrate with Artificial Intelligence platforms such as Tensorflow and Pytorch.`,
    prodName: "Integration with AI Platforms",
    actionTitle: "Follow For More",
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
    { selector: ".details-card", x: -500 },
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

<style lang="scss">
.glass-effect {
  --background-opacity: 0.3;
  backdrop-filter: blur(55px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(var(--v-theme-surface), var(--background-opacity));
}

.details-card {
  @extend .glass-effect;
  min-height: 55vh;
  border-radius: 1.5rem;
  padding: 1.5rem;
}

.product-name {
  font-weight: 700;
  color: rgb(24, 36, 49);
  font-size: clamp(17px, 3vw, 20px);
}
</style>