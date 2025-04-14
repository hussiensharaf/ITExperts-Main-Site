<template>
  <v-container fluid class="pa-0 ma-0">
    <Carousel />
    <ScrollDownBtn />
    <SolutionsSec />
    <Products/>
    <ContactSec />
    <ScrollUpBtn />
  </v-container>
</template>

<script>
import ScrollDownBtn from "@/components/ScrollDownBtn.vue";
import SolutionsSec from "@/components/SolutionsSec.vue";
import Products from "@/components/Products.vue";
import ContactSec from "@/components/ContactSec.vue";
import ScrollUpBtn from "@/components/ScrollUpBtn.vue";
import Carousel from "@/components/Carousel.vue";

import DataMixin from "@/components/global/mixins/DataMixin";
export default {
  mixins: [DataMixin],
  components: {
    Products,
    ScrollDownBtn,
    ContactSec,
    ScrollUpBtn,
    SolutionsSec,
    Carousel
  }
};
</script>
 
