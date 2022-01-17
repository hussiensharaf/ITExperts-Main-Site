<template>
  <v-card id="nav">
    <!-- :extended="drawer" -->
    <v-app-bar
      :flat="scrollPosition < 500 ? true : false"
      :absolute="this.$vuetify.breakpoint.smAndDown"
      :fixed="!this.$vuetify.breakpoint.smAndDown"
      dark
      :class="[scrollPosition >= 100 ? 'change_color' : 'transparent']"
    >
      <!-- <v-app-bar-title  class="black--text font-weight-black title">ITEM</v-app-bar-title> -->
      <a href="#nav"  class="ctitle white--text font-weight-black pl-7 pt-2">ITEM</a>

      <v-list
        class="horezental d-flex transparent"
        v-if="!$vuetify.breakpoint.smAndDown"
      >
        <v-list-item
          class="ml-5 mt-2"
          v-for="(item, index) in this.navItems"
          :key="index"
          @click="goTo(index)"
        >
          <v-list-item-title
            ><a :href="item.ref" class="nav-item">{{
              item.name
            }}</a></v-list-item-title
          >
        </v-list-item>
      </v-list>
      <!-- 
        <v-list dense class="vertical transparent mx-auto " v-if="$vuetify.breakpoint.smAndDown && drawer">
        <v-list-item
          class=""
          v-for="(item, index) in this.navItems"
          :key="index"
        >
          <v-list-item-title
            ><a href="#solution" class="nav-item">
              <h5>{{item.name}}</h5>
            </a></v-list-item-title
          >
        </v-list-item>
      </v-list> -->
      <!-- v-if="$vuetify.breakpoint.smAndDown" -->
      <template>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          v-if="$vuetify.breakpoint.smAndDown"
          @click="drawer = true"
          color="white"
        ></v-app-bar-nav-icon>
      </template>
    </v-app-bar>

    <!--Navigation bar start -->

    <v-navigation-drawer v-model="drawer" fixed  temporary dark right
    src="https://i.picsum.photos/id/381/1920/1080.jpg?hmac=Y4UtABAPV9MnyUdX2rsci7mdAeIGyClx_taShHQmN0A"
    >
      
      <v-list dense class="mx-auto" width="80%">
        <v-list-item-group>
          <v-list-item
            @click="drawer = false"
            v-for="(item, index) in navItems"
            :key="index * 5"
            class=" white--text"
          >
            <v-list-item-title @click="tab = index">
              <v-icon small class="mr-2" v-text="item.icon"></v-icon>
              <a :href="item.ref" class="nav-item">
                {{ item.name }}
                
              </a></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Navigation bar ends-->
  </v-card>
</template>

<!--<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      fixed

      dark
      fade-img-on-scroll
      scroll-threshold="200"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>-->
<style scoped>
.vertical {
  position: absolute;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
a {
  text-decoration: none;
}
.horezental {
  margin-left: 100px !important;
}
.nav-item {
  color: white !important;
}
.nav-item:hover {
  color: yellow !important;
}
.ctitle {
  font-size: clamp(16px, 3vw, 32px);
  font-family: "Courier New", monospace;
}
.change_color {
  background: linear-gradient(
    270deg,
    rgba(9, 9, 121, 1) 28%,
    rgba(8, 8, 109, 1) 52%,
    rgba(0, 212, 255, 1) 96%,
    rgba(2, 0, 36, 0.8743872549019608) 100%
  ) !important;
  background: linear-gradient(
    270deg,
    rgba(9, 9, 121, 1) 28%,
    rgba(8, 8, 109, 1) 52%,
    rgba(0, 212, 255, 1) 96%,
    rgba(2, 0, 36, 0.8743872549019608) 100%
  ) !important;
}
/* header:not(v-app-bar--is-scrolled) {
  background-color: black !important;
}
.v-app-bar--is-scrolled {
  background-color: aqua !important;
}*/
</style> 
<script>
import DataMixin from "@/components/global/mixins/DataMixin.js"
export default {
  name: "Nav",
  data() {
    return {
      drawer: false,
      tab: null,
      navItems: [
        {
          name: "Our Solutions",
          icon: "fas fa-globe",
          ref:'#solution'
        },
        
        {
          name: "Products",
          icon: "fas fa-shopping-bag",
          ref:'#products'
        },
        {
          name: "Contact Us",
          icon: "fas fa-phone",
          ref:'#contact'
        }
      ]
      
    };
  },
   mixins: [DataMixin], 
   methods:{
     goTo(index){
       this.goToId(this.navItems[index].ref)
     }
   }
  
};
</script>