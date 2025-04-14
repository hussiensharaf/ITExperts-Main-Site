<template>
  <v-card id="nav">
    <v-app-bar elevation="0" :absolute="this.$vuetify.breakpoint.smAndDown" :fixed="!this.$vuetify.breakpoint.smAndDown"
      dark :class="[scrollPosition >= 100 ? 'change_color' : 'transparent']">

      <v-app-bar-title>
        <div class="d-flex" style="width: 120px; height: 120px; filter: grayscale(1) brightness(2.2);">
          <v-img @click="goToId('nav')" src="../../assets/logo.png" class="ctitle logo" />
        </div>
      </v-app-bar-title>

      <v-list class="horezental d-flex transparent" v-if="!$vuetify.breakpoint.smAndDown">
        <v-list-item class="v-list-item" v-for="(item, index) in this.navItems" :key="index" @click="goTo(index)">
          <v-list-item-title>
            <a class="nav-item d-flex" :href="item.ref">
              <v-icon small class="mr-3" v-text="item.icon"></v-icon>
              {{ item.name }}
            </a>
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <template>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = true" />
      </template>
    </v-app-bar>

    <!--Navigation bar start -->

    <v-navigation-drawer v-model="drawer" fixed temporary dark right
      src="https://i.picsum.photos/id/381/1920/1080.jpg?hmac=Y4UtABAPV9MnyUdX2rsci7mdAeIGyClx_taShHQmN0A">

      <v-list dense class="mx-auto" width="80%">
        <v-list-item-group>
          <v-list-item @click="drawer = false" v-for="(item, index) in navItems" :key="index * 5" class=" white--text">
            <v-list-item-title @click="tab = index">
              <v-icon small class="mr-2" v-text="item.icon"></v-icon>
              <a :href="item.ref" class="nav-item">
                {{ item.name }}

              </a></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Navigation bar ends-->
  </v-card>
</template>

<style scoped>
.logo {
  cursor: pointer;
}

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

.v-list-item {
  transition: all 0.4s ease;
}

.v-list-item a.nav-item,
.v-list-item .v-icon {
  transition: color 0.4s ease;
  color: rgba(255, 255, 255, 0.979) !important;
}

.v-list-item:hover a.nav-item,
.v-list-item:hover .v-icon {
  color: rgb(255, 191, 172) !important;
}


.ctitle {
  /* font-size: clamp(16px, 3vw, 32px); */
  font-family: "Courier New", monospace;
}

.change_color {
  backdrop-filter: blur(28px);
  background: linear-gradient(135deg,
      rgb(27, 32, 50) 0%,
      rgba(53, 153, 176, 0.2) 100%) !important;
  border-radius: 0 !important;
}
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
          ref: '#solution'
        },

        {
          name: "Products",
          icon: "fas fa-shopping-bag",
          ref: '#products'
        },
        {
          name: "Contact Us",
          icon: "fas fa-phone",
          ref: '#contact'
        }
      ]

    };
  },
  mixins: [DataMixin],
  methods: {
    goTo(index) {
      this.goToId(this.navItems[index].ref)
    }
  }

};
</script>