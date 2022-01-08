<template>
     <v-row no-gutters style="height: 100vh">
      <v-col cols="12">
        <v-carousel
          progress
          show-arrows-on-hover
          interval="6000"
          height="100vh"
          cycle
          @change="updateIndex"
        >
          <template v-slot:prev="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon large>mdi-chevron-left</v-icon>
            </v-btn>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon large>mdi-chevron-right</v-icon>
            </v-btn>
          </template>
          <v-carousel-item
            ripple
            v-for="(item, i) in items"
            :key="i"
            :src="require('../assets/imgs/' + item.src)"
            class="pa-0 ma-0"
          >
            <div class="tph" ref="tph">ITEM provides</div>
            <div class="sbh" ref="sbh"></div>
            <div class="desc" ref="desc">
              {{ solutionsData[i].subTitle }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
</template>

<style scoped >
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
  transition: 1.5s cubic-bezier(0.7, 0.3, 0.5, 1) !important;
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
</style>
<script>

import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin.js";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import { Power4 } from "gsap";
gsap.registerPlugin(TextPlugin, ScrollTrigger);

import DataMixin from "@/components/global/mixins/DataMixin";
export default {
  mixins: [DataMixin],
   mounted() {
    const tph = document.getElementsByClassName("tph");
    const sbh = document.getElementsByClassName("sbh");
    const desc = document.getElementsByClassName("desc");

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
      currentCarouslePage: 0,
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
            text: this.solutionsData[this.currentCarouslePage].title,
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
    updateIndex(e) {
      this.currentCarouslePage = e;
      this.animateUpHead(e);
    },
  }
    
}
</script>