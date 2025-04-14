<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row no-gutters style="height: 100vh">
      <v-col cols="12">

        <v-carousel progress show-arrows-on-hover interval="6000" height="100vh" cycle @change="changeindex">
          <template v-slot:prev="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="prev">
              <v-icon large>mdi-chevron-left</v-icon>
            </v-btn>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="next">
              <v-icon large>mdi-chevron-right</v-icon>
            </v-btn>
          </template>
          <v-carousel-item ripple v-for="(item, i) in items" :key="i" :src="require('../assets/imgs/' + item.src)"
            class="pa-0 ma-0">
            <div class="tph" ref="tph">ITEM provides</div>
            <div class="sbh" ref="sbh"></div>
            <div class="desc" ref="desc">
              {{ solutionsData[i].subTitle }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row no-gutters style="background-color: white" id="solution">
      <v-col cols="12">
        <v-row no-gutters justify="center">
          <h1 class="section__header black--text mb-3">Our Solutions</h1>
        </v-row>

        <v-row no-gutters justify="center" class="sol-row">
          <v-col justify="center" align="center" cols="12" xl="3" lg="3" sm="12"
            v-for="(sol, index) in this.solutionsData" :key="index">
            <v-card align="center" class="sol-card grey lighten-5 ma-6 pa-5" min-height="55vh" max-width="500px" flat>
              <v-icon v-text="sol.icon" class="my-3" style="
              
               
                 background:-moz-linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,rgba(9, 9, 121, 1) 23%, rgba(0, 212, 255, 1) 100%); 
        background: -webkit-linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,rgba(9, 9, 121, 1) 23%,rgba(0, 212, 255, 1) 100%); 
        background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 23%,rgba(0, 212, 255, 1) 100%);
        
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
       -webkit-text-fill-color:transparent;
                " size="80">
              </v-icon>
              <v-card-title class="justify-center">{{
                sol.title
              }}</v-card-title>
              <v-card-text>{{ sol.subTitle }}</v-card-text>
              <v-card-actions class="justify-center">
                <v-btn class="contact-btn white--text px-4 mx-2" rounded @click="goToContact">
                  Get in touch
                  <v-icon class="ml-2" size="18">fas fa-long-arrow-alt-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row no-gutters class="contact" id="contact">
      <v-col>
        <v-row no-gutters justify="center">
          <!-- <h1 class="section__header white--text mb-3">Find Us</h1> -->
        </v-row>
        <v-row no-gutters class="map">
          <v-col class="px-16 py-16" cols="12" xl="6" lg="6" sm="12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.4718192719015!2d31.32783571459513!3d30.10930972246145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581594e11a46f1%3A0xb880ebdfadb7d4bc!2s16%20Ahmed%20Abd%20El-Ghaffar%2C%20El-Nozha%2C%20El%20Nozha%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1641169360869!5m2!1sen!2seg"
              style="
                border: 0;
                position: relative;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              " allowfullscreen="" loading="lazy"></iframe>
          </v-col>
          <v-col class="px-16 py-16" cols="12" xl="6" lg="6" sm="12">
            <v-row class="white--text pt-2 flex-nowrap align-start">
              <v-icon class="pr-2">fas fa-map-marker-alt</v-icon>
              <h4>16 Ahmed Abd El Gaffar st., 11351, Heliopolis, Cairo</h4>
            </v-row>
            <v-row class="white--text pt-7">
              <v-icon class="pr-2"> mdi-phone</v-icon>
              <h4>+2022 6376959</h4>
            </v-row>
            <v-row class="white--text pt-7 flex-nowrap justify-start  align-start">
              <v-icon class="pr-2"> mdi-email</v-icon>
              <a href="mailto:dr.sharaf@from-masr.com">
                <h4>dr.sharaf@from-masr.com</h4>
              </a>
            </v-row>
            <!-- <a href="mailto:email@echoecho.com?subject=SweetWords&body=Please send me a copy of your new program!">Email Me</a> -->
            <v-row class="white--text pl-8">
              <a href="mailto:hussiensharaf@from-masr.com">
                <h4>ite@from-masr.com</h4>
              </a>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Map from "@/components/Map.vue";
import { createSimpleTransition } from "vuetify/lib/components/transitions/createTransition";
import gsap from "gsap";
import { Power4 } from "gsap";
import TextPlugin from "gsap/TextPlugin.js";

gsap.registerPlugin(TextPlugin);
export default {
  components: {
    Map,
  },
  mounted() {
    const newTransition = createSimpleTransition("new-transition");
    this.$once("hook:components", () => {
      newTransition;
    });

    const tph = document.getElementsByClassName("tph");
    const sbh = document.getElementsByClassName("sbh");
    const desc = document.getElementsByClassName("desc");

    gsap
      .timeline()
      .to(tph, {
        duration: 1,
        'margin-left': '11vw',
        autoAlpha: 1,
        opacity: 1,
        ease: Power4.easeOut,
      })
      .to(".sbh", {
        duration: 1,
        opacity: 1,
        autoAlpha: 1,
        text: this.solutionsData[0].title,
      })
      .to(".desc", {
        duration: 1.5,
        opacity: 1,
        autoAlpha: 1,
        ease: Power4.easeOut,
      });

    //this.typingAnimation();
  },
  data() {
    return {
      markersList: [
        {
          location: { lat: 30.000577, lng: 32.558635 },
          label: "A",
        },
        {
          location: { lat: 29.995936132279272, lng: 32.556022302311476 },
          label: "B",
        },
        {
          location: { lat: 29.990137864220497, lng: 32.5506149692907 },
          label: "C",
        },
      ],
      currentCarIndex: 0,
      xMargin: this.$vuetify.breakpoint.smAndDown ? 80 : 120,
      solutionsData: [
        {
          title: "Software Solutions",
          subTitle: `websites, cloud based Solutions, data analysis, data integrations and data synchronization systems `,
          icon: "fas fa-globe",
        },
        {
          title: "System integration",
          subTitle: `with us you can have your new system or integrate with existing
                systems or cloud services`,
          icon: "fas fa-project-diagram",
        },
        {
          title: "Hosting",
          subTitle: `we provide domain names, websites hosting, and dataBases hosting, maintinance and monitoring  `,
          icon: "fa fa-server",
        },
      ],
      items: [
        {
          src: "img6.jpg",
        },
        {
          src: "img5.jpg",
        },
        {
          src: "img3.jpg",
        },
      ],
    };
  },
  methods: {
    goToContact() {
      document.getElementById('contact').scrollIntoView()
    },
    typingAnimation() {
      const words = [
        "modern websites",
        "system integrations",
        "web hosting",
        "data syncrounous solutions",
      ];

      let cursor = gsap.to(".cursor", {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1,
      });
      let masterTl = gsap.timeline({ repeat: -1 }).pause();
      let boxTl = gsap.timeline();

      boxTl
        .to(".box", {
          duration: 1,
          width: "17vw",
          delay: 0.5,
          ease: "power4.inOut",
        })
        .from(".hi", { duration: 1, y: "7vw", ease: "power3.out" })
        .to(".box", {
          duration: 1,
          height: "7vw",
          ease: "elastic.out",
          onComplete: () => masterTl.play(),
        })
        .to(".box", {
          duration: 2,
          autoAlpha: 0.7,
          yoyo: true,
          repeat: -1,
          ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
        });
      words.forEach((word) => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
        tl.to(".text", { duration: 1, text: word });
        masterTl.add(tl);
      });
    },

    animateUpHead(e) {
      const tph = document.getElementsByClassName("tph");
      let sbh = document.getElementsByClassName("sbh");
      const desc = document.getElementsByClassName("desc");
      if ((tph, sbh, desc)) {
        gsap.to(".desc", {
          display: "none",
          autoAlpha: -1,
          opacity: 0,
        });
        let xMargin = 0;
        this.xMargin = this.$vuetify.breakpoint.smAndDown ? 80 : 120;
        gsap.timeline().to([tph], {
          duration: 0.2,
          "margin-left": "8vw",
          autoAlpha: -1,
          opacity: 0,
          ease: Power4.easeOut,
        });

        gsap.to(".sbh", {
          display: "none",
          autoAlpha: -1,
          opacity: 0,
          text: "",
          ease: Power4.easeOut,
        });
      }
      this.xMargin = this.$vuetify.breakpoint.smAndDown ? 100 : 150;
      setTimeout(() => {
        sbh = document.getElementsByClassName("sbh");
        sbh.innerHTML = "";
        gsap
          .timeline()
          .to(tph, {
            duration: 1,
            "margin-left": "11vw",
            autoAlpha: 1,
            opacity: 1,
            ease: Power4.easeOut,
          })
          .to(".sbh", {
            duration: 1,
            opacity: 1,
            autoAlpha: 1,
            display: "block",
            text: this.solutionsData[this.currentCarIndex].title,
          })
          .to(".desc", {
            duration: 0.5,
            opacity: 1,
            autoAlpha: 1,
            display: "block",
            ease: Power4.easeOut,
          });
      }, 1200);
    },
    prev(e) {
      //this.animateUpHead(e);
    },
    next(e) {
      //this.animateUpHead(e);
    },
    changeindex(e) {

      this.currentCarIndex = e;
      this.animateUpHead(e);
    },
  },
};
</script>


<style scoped>
.contact {
  background-color: black !important;
  min-height: 100vh !important;
}

.map {
  min-height: 80vh !important;
}

.sol-row {
  min-height: 75vh;
}

.sol-card {
  transition: 0.3s ease;
}

.sol-card:hover {
  transform: scale(1.1);
  background-color: white !important;
  box-shadow: -1px 1px 5px 1px rgba(0, 0, 0, 0.53) !important;
  -webkit-box-shadow: -1px 1px 31px 2px rgba(0, 0, 0, 0.1) !important;
  -moz-box-shadow: -1px 1px 31px 2px rgba(0, 0, 0, 0.53) !important;
  /*border-bottom: 5px solid #00D2FD  !important;
   border-top: 5px solid #00D2FD  !important;*/

  border-style: solid !important;
  border-image: linear-gradient(90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 23%,
      rgba(0, 212, 255, 1) 100%);
  border-image-slice: 1 !important;
  border-top: 0;
  border-left: 0;
  border-right: 0;
}

.section__header {
  padding-top: 110px;
  letter-spacing: 3px;
  font-family: "Open Sans";
  font-size: clamp(20px, 3vw, 40px);
}

.hi,
.text {
  font-size: clamp(16px, 1.5vw, 28px);
  color: white;
}

.rowd {
  height: 100vh !important;
  /*scroll-snap-align: start;*/
}

/* .tph , .sbh{
margin-left:120
} */
.tph {
  margin-left: 8vw;
  margin-top: 200px;
  font-size: clamp(5px, 1.5rem, 28px);
}

.sbh {
  margin-left: 11vw;
  margin-top: 0.4vw;

  font-size: clamp(5px, 2rem, 35px);
  z-index: 3;
}

.desc {
  margin-left: 11vw;
  margin-top: 0.4vw;
  font-size: clamp(5px, 1rem, 28px);
  max-width: 20rem;
  z-index: 0;
}

.tph,
.sbh,
.desc {
  /*font-family: fantasy;*/
  align-self: center !important;
  visibility: hidden;
  opacity: 0;

  color: white;
}

@keyframes mymove {
  from {
    margin-top: 25vh;
    display: none;
    opacity: 0;
  }

  to {
    margin-top: 30vh;
    display: block;
    opacity: 1;
  }
}

.v-window-x-transition-enter-active,
.v-window-x-reverse-transition-enter-active,
.v-window-y-transition-enter-active,
.v-window-y-reverse-transition-enter-active,
.v-window-x-transition-leave-active,
.v-window-x-reverse-transition-leave-active,
.v-window-y-transition-leave-active,
.v-window-y-reverse-transition-leave-active {
  /*transition: 1.5s cubic-bezier(0.7, -0.3, 0.5, 1) !important; hela hob*/
  /*transition: 1.5s cubic-bezier(0.5, 0.3, 0.5, 1) !important; smoothy */
  transition: 1.5s cubic-bezier(0.7, 0.3, 0.5, 1) !important;
  /*slow then fast */
  /*transition: 1.5s cubic-bezier(0.2, 0.9, 0.5, 1) !important;   fast then slow*/
  /*transition: 1.5s cubic-bezier(0.2, 2, 0.3, -0.1) !important; raye7 gay*/
  /*transition: 1.5s cubic-bezier(0.25, .1, 0.25, 1) ease  fast  then slow */
  /*transition: 1.5s cubic-bezier(0.34, 0.88, 0.9, -0.71);*/
}

.new-transition-leave-active {
  position: absolute;
}

.new-transition-enter-active,
.new-transition-leave,
.new-transition-leave-to {
  transition: 2000ms;
  /* here you can define your desired time for transition */
}

.new-transition-enter,
.new-transition-leave-to {
  opacity: 0;
}

.cont {
  background-image: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  max-width: 100vw;
  background-color: black;
  height: 5000px;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */

.fade-in {
  animation: fade-in-frame 2s;
  opacity: 1;
  transition: width 0vw;
}

.fade-in-img {
  animation: fade-in-img-frame 2s;
  opacity: 1;
  transition: width 0vw;
}

@keyframes fade-in-img-frame {
  from {
    opacity: 0;

    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes fade-in-frame {
  from {
    opacity: 0;
    width: 0vw;
  }

  to {
    opacity: 1;
    width: 30vw;
  }
}
</style>
