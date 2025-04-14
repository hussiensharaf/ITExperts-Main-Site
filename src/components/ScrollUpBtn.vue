<template>
  <v-btn :small="this.$vuetify.breakpoint.smAndDown" fab class="go-up-btn transition-swing" @click="goToId('nav')">
    <v-icon>fas fa-angle-up</v-icon>
  </v-btn>
</template>

<style scoped>
.go-up-btn-show {
  transform: scale(1) rotate(360deg) !important;

}

.go-up-btn {

  transform: scale(0) rotate(180deg);
  box-shadow: 0 4px 14px rgba(0, 73, 183, 0.5) !important;
  z-index: 6;
  color: rgb(240, 240, 245);
  transform-origin: center center;
  background-color: #0d5ecf !important;
  transition: all .5s cubic-bezier(.25, .8, .5, 1) !important;
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