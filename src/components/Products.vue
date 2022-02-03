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

      <v-row
        no-gutters
        class="prod-row"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-col cols="12" xl="6" lg="6" sm="12">
          <v-card class="prod-card mt-6 pa-5" min-height="55vh" flat>
            <v-card-title class="product-name">{{ item.prodName }}</v-card-title>
            <v-card-text class="product-desc" style="min-height: 110px !important">
              {{ item.desc }}
            </v-card-text>
            <v-card-text class="product-desc" style="min-height: 110px !important">
              {{ item.subDesc }}
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
        <v-col
          justify="center"
          align="center"
          cols="12"
          xl="6"
          lg="6"
          sm="12"
          :class="index % 2 == 0 ? 'order-first' : ''"
        >
          <v-img
            class="prod-img mt-6"
            :src="require('../assets/imgs/' + item.imgName)"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.product-name{
  color:red !important;
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  font-size: 32px;
  background: #008080;
  background: -o-linear-gradient(to left, #008080 20%, #05C1FF 29%, #005757 100%);
  background: -webkit-linear-gradient(to left, #008080 20%, #05C1FF 29%, #005757 100%);
  background: -moz-linear-gradient(to left, #008080 20%, #05C1FF 29%, #005757 100%);
  background: linear-gradient(to left, #008080 20%, #05C1FF 29%, #005757 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.product-desc{
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  font-size: 1em;
}
</style>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "SolutionsSec",
  data() {
    return {
      items: [
        {
          imgName: "Big-Data.jpg",
          desc: `DC is a solution for allowing end users to dynamically generate queries and reports and save their preferences. DC can be connected to different DBMS. It has modern inteface with professional controls and fully featrued data grids with all possible sets of filtering, grouping and sorting like Excel.`,
          subDesc:`DC also designed to display the final data in a report viewer and can display more than one data grid and reports at the same time in different tabs.
                    DC supports PDF merging from multiple data sources and is designed to export data as Excel and CSV files etc.
                    DC also can integrate with other systems using APIs.`,
          prodName: "DataChannel (DC)",
        },
        /*{
          imgName: "charts.png",
          desc: `A solution for processing unlimited text files on the fly.`,
          prodName: "BDP",
        },*/
        {
          imgName: "time-tracker.jpg",
          desc: `Easy Logging is a monitoring system for businesses that rely on PCs. It records open programs even tabs opened in browsers for each employee and the amount of time they spend.`,
          subDesc:`Easy Logging takes screenshots, show activity status, integrates with admin panels and finally it generates reports on each emplyee's performance.`,
          prodName: "Easy Logging",
        },
        {
          imgName: "PowerBI.png",
          desc: `Create amazing dashboards, easily to connect and creating memorable reports personalized with your KPIs and brand.`,
          subDesc:'Help you connecting to all your data sources with the scale to analyze, share, and promote insights across your organization while maintaining data accuracy, consistency, and security.',
          prodName: "Data Visualization",
        },
        {
          imgName: "WinServices.jpg",
          desc: `Supports data synchronization between two data sources, for example Databases on separte database servers through installed windows service that is working whenever your pc is running.`,
          subDesc:'Users can set the interval they want, based on query strings for each table integrates with many ERP systems. It also provides you with automatic email sending based on preset actions.', 
          prodName: "Windows Services - Based Solutions",
        },
        {
          imgName: "AI.jpg",
          desc: `All our product can integrate with Artificial Intelligence platforms such as Tensorflow and Pytorch.`,
          prodName: "Integration with AI Platforms",
        },
      ],
    };
  },
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