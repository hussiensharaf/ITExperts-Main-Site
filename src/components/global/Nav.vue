<template>
  <div id="nav">

    <v-app-bar class="elevation-0 border" :absolute="smAndDown" :fixed="smAndDown" :style="appBarStyle">

      <v-app-bar-title>
        <div class="d-flex" style="width: 120px; height: 100px">
          <img src="../../assets/logo.png" alt="Company Logo" @click="goToId('nav')" class="clickable-logo"
            transition="scale-transition" />
        </div>
      </v-app-bar-title>

      <v-list class="horizontal d-flex transparent" v-if="!smAndDown">
        <v-list-item class="v-list-item" v-for="(item, index) in navItems" :key="index" @click="goTo(index)">
          <v-list-item-title>
            <a class="nav-item text-decoration-none d-flex" :href="item.ref">
              <v-icon size="small" class="mr-3" :icon="item.icon" />
              {{ item.name }}
            </a>
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <template #append>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon v-if="smAndDown" @click="drawer = true" />
      </template>
    </v-app-bar>

    <v-navigation-drawer width="100%" v-if="smAndDown" v-model="drawer" fixed temporary class="change_color"
      src="https://i.picsum.photos/id/381/1920/1080.jpg?hmac=Y4UtABAPV9MnyUdX2rsci7mdAeIGyClx_taShHQmN0A">
      <v-row no-gutters justify="end">
        <v-icon class="pa-4 drawer-close-icon" @click="drawer = false" color="white">
          fas fa-times
        </v-icon>
      </v-row>
      <v-list dense class="mx-auto" width="100%">
        <v-list-item-group>
          <v-list-item @click="drawer = false" v-for="(item, index) in navItems" :key="index * 5" class="text-white">
            <v-list-item-title @click="tab = index">
              <v-icon small class="mr-2" :icon="item.icon"></v-icon>
              <a :href="item.ref" class="nav-item">
                {{ item.name }}

              </a></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/composables/display";
const { smAndDown } = useDisplay()
import { ref, computed } from "vue";

import Mixin from './mixins/Mixin'
import { DataMixin } from '../../composables/DataMixin'
const { scrollPosition } = DataMixin()
// Reactive state
const drawer = ref(false)

const appBarStyle = computed(() => ({
  backdropFilter: 'blur(28px)',
  background: scrollPosition.value < 600
    ? 'linear-gradient(135deg, rgb(27, 32, 50, 0.1) 0%, rgba(53, 153, 176, 0.05) 100%)'
    : 'white',
  transition: 'all 0.3s ease'
}))


const navItems = ref([
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
])
const { goToId } = Mixin.methods

const goTo = (index) => {
  goToId(navItems.value[index].ref)
}



</script>


<style lang="scss" scoped>
.v-list {
  background-color: transparent;
}

.clickable-logo {
  cursor: pointer;
  filter: grayscale(1) brightness(2.2);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0) brightness(1);
  }

  &:active {
    filter: grayscale(0.4) brightness(1.5);
  }
}

.horizontal {
  margin-left: 100px !important;
}

.v-list-item {
  transition: all 0.4s ease;
}

.v-list-item .v-list-item {
  transition: color 0.4s ease;
  color: rgba(255, 255, 255, 0.979) !important;
}

.v-list-item:hover a.nav-item,
.v-list-item:hover .v-icon {
  color: rgb(255, 191, 172) !important;
}

a.nav-item {
  color: rgb(226, 228, 237) !important;
  // color: rgb(27, 29, 42) !important;

}
</style>