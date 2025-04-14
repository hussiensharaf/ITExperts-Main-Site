<template>
  <v-btn :small="this.$vuetify.breakpoint.smAndDown" fab class="blue go-up-btn transition-swing" @click="goToId('nav')">
    <v-icon>fas fa-angle-up</v-icon>
  </v-btn>
</template>

<style scoped>
.go-up-btn-show {
  transform: scale(1) !important;

}

.go-up-btn {

  transform: scale(0);

  z-index: 6;
  transform-origin: center center;

  transition: all .3s cubic-bezier(.25, .8, .5, 1) !important;
  position: fixed;
  bottom: 45px;
  right: 30px;
}
</style>

<script>
import DataMixin from "@/components/global/mixins/DataMixin.js";
export default {
  name: "",
  mixins: [DataMixin],
  data() {
    return {
      isShown: false,
    };
  },
  watch: {
    scrollPosition: function (val) {
      // var height = Math.max(
      //   body.scrollHeight,
      //   body.offsetHeight,
      //   html.clientHeight,
      //   html.scrollHeight,
      //   html.offsetHeight
      // );

      let goUpBtn = document.getElementsByClassName("go-up-btn")[0];

      if (
        (val > 200 && !this.$vuetify.breakpoint.smAndDown) ||
        val == document.body.scrollHeight - document.body.offsetHeight
      ) {
        this.isShown == false ? goUpBtn.classList.add("go-up-btn-show") : null;
      } else {
        goUpBtn.classList.remove("go-up-btn-show");
      }
    },
  },
};
</script>