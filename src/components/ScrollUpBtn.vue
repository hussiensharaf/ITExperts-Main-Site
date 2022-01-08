<template>
  <v-btn
    :small="this.$vuetify.breakpoint.smAndDown"
    elevation="2"
    fab
    class="blue go-up-btn"
    @click="goToId('nav')"
  >
    <v-icon>fas fa-angle-up</v-icon>
  </v-btn>
</template>

<style scoped>
.go-up-btn-show {
  display: block !important;
}

.go-up-btn {
  z-index: 6;
  transform-origin: center center;
  display: none;
  transition: 2s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
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
        val ==  document.body.scrollHeight -  document.body.offsetHeight
      ) {
        goUpBtn.classList.add("go-up-btn-show");
      } else {
        goUpBtn.classList.remove("go-up-btn-show");
      }
    },
  },
};
</script>