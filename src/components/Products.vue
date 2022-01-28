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
            <v-card-text style="min-height: 110px !important">
              {{ item.desc }}
            </v-card-text>
            <v-card-text style="min-height: 110px !important">
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
background: #008080;
background: -o-linear-gradient(to left, #008080 20%, #05C1FF 29%, #005757 100%);
background: -webkit-linear-gradient(to left, #008080 20%, #05C1FF 29%, #005757 100%);
background: -moz-linear-gradient(to left, #008080 20%, #05C1FF 29%, #005757 100%);
background: linear-gradient(to left, #008080 20%, #05C1FF 29%, #005757 100%);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
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
          imgName: "charts.png",
          desc: `A solution for allowing end users to dynamically generate queries and reports; and save their preferences. It can be plugged into different database management systems.  it has modern inteface with awsome controls and  full featrued data grids with all possible sets of filtering and grouping  and sorting like exel   and has report viwer ,for datavisulaization with multi tabs so it may show several reports  and data grids at same time , `,
          subDesc:'supports pdf merge from several data sources includes exel, data export to exel csv, has integrations with several google maps apis  ',
          prodName: "DataChannel (DC)",
        },
        {
          imgName: "charts.png",
          desc: `A solution for allowing end users to process and extract data from Big Data sets.`,
          prodName: "DBV",
        },
        {
          imgName: "charts.png",
          desc: `A solution for processing unlimited text files on the fly.`,
          prodName: "BDP",
        },
        {
          imgName: "PowerBI.png",
          desc: `monitoring system for companies those counting on working on PCs , it records opened programs and browsers tabs for each employee and how much he spends on each , takes screenshots , show activity status   `,
          subDesc:'itegrate with admin panels and reports shows every emplyee performance ',
          prodName: "Easy Logging",
        },
        {
          imgName: "charts.png",
          desc: `A solution for generating reports from dynamically changing databases. It can be installed as a front-end for any Sqlserver DB.`,
          prodName: "Dynamic Report System (DRS)",
        },
        {
          imgName: "charts.png",
          desc: `supports data syncronations between two data sources eg. data bases on separte data base servers through installed windows service that is working whenever your pc is running 
          ,user can set whatever interval time he wants , based on query strings for each table integrate with many ERP systems`,
          
 
          subDesc:'also provides you with auto emailing sending based on predefined actions set ', 
          prodName: "Windows Service Based Solution",
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