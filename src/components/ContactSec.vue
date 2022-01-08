<template>
  <v-row no-gutters class="contact" id="contact">
    <v-col>
      <v-row no-gutters justify="center">
        <h1 class="sec-d-hd white--text mb-3">Find Us</h1>
      </v-row>
      <v-row no-gutters class="mapdiv">
        <v-col class="map px-16 py-16" cols="12" xl="6" lg="6" sm="12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.4718192719015!2d31.32783571459513!3d30.10930972246145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581594e11a46f1%3A0xb880ebdfadb7d4bc!2s16%20Ahmed%20Abd%20El-Ghaffar%2C%20El-Nozha%2C%20El%20Nozha%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1641169360869!5m2!1sen!2seg"
            style="
              border: 0;
              position: relative;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </v-col>
        <v-col class="conts px-16 py-16" cols="12" xl="6" lg="6" sm="12">
          <v-row class="white--text pt-2 flex-nowrap align-start">
            <v-icon class="pr-2" color="white">fas fa-map-marker-alt</v-icon>
            <h4>16 Ahmed Abd El Gaffar st., 11351, Heliopolis, Cairo</h4>
          </v-row>
          <v-row class="white--text pt-7">
            <v-icon class="pr-2" color="white"> mdi-phone</v-icon>
            <h4>+2022 6376959</h4>
          </v-row>
          <v-row class="white--text pt-7 flex-nowrap justify-start align-start">
            <v-icon class="pr-2" color="white"> mdi-email</v-icon>
            <a href="mailto:dr.sharaf@from-masr.com"
              ><h4>dr.sharaf@from-masr.com</h4></a
            >
          </v-row>
          <!-- <a href="mailto:email@echoecho.com?subject=SweetWords&body=Please send me a copy of your new program!">Email Me</a> -->
          <v-row class="white--text pl-8">
            <a href="mailto:hussiensharaf@from-masr.com"
              ><h4>ite@from-masr.com</h4></a
            >
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.contact {
  background-color: black !important;
  min-height: 100vh !important;
}

.mapdiv {
  min-height: 80vh !important;
}

.sec-d-hd {
  padding-top: 110px;
  letter-spacing: 3px;
  font-family: "Open Sans";
  font-size: clamp(20px, 3vw, 40px);
}
</style>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    // gsap.from(".conts", {
    //   x: 500,
    //   duration: 1,
    //   opacity: 0.8,
      
    //   scrollTrigger: {
    //     trigger: [".map", ".conts"],
    //     toggleActions:"play continue continue continue "
    //   },
    // });

    // // gsap.from(".map", {
    // //   x: -500,
    // //   duration: 1,
    // //   opacity: 0.8,
    // //   scrollTrigger: {
    // //     trigger: [".map", ".conts"],
    // //   },
    // // });

  //   const t = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: [".map", ".conts"],
  //     },
  //   });
  //   t.from(".conts", {
  //     x: 1000,
  //     duration: 1,
  //     opacity: 0.8,
  //   });
  //   t.from(".map", {
  //     x: -1000,
  //     duration: 1,
  //     opacity: 0.8,
  //   });
  // },
  }
};
</script>