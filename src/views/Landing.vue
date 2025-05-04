<template>
  <v-container fluid class="pa-0 ma-0 ga-16 d-flex flex-column">
    <Carousel />
    <ScrollDownBtn />
    <SolutionsSec />
    <TeamMembersSection />
    <Products />
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
import TeamMembersSection from "@/components/TeamMembersSection.vue";


import { DataMixin } from "../composables/DataMixin";
export default {
  mixins: [DataMixin],
  components: {
    Products,
    ScrollDownBtn,
    ContactSec,
    ScrollUpBtn,
    SolutionsSec,
    TeamMembersSection,
    Carousel
  }
};
</script>
