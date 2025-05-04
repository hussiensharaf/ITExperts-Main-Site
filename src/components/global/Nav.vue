<template>
  <div id="nav">
    <v-app-bar class="elevation-0 border-b" :absolute="smAndDown" :fixed="smAndDown" :style="appBarStyle">
      <v-container>
        <v-row no-gutters justify="center">
          <v-col cols="12" md="6">
            <div class="d-flex" style="width: 140px; height: 120px">
              <img src="@/assets/logo.png" @click="goToId('nav')" class="clickable-logo"
                :style="{ filter: logoFilter }" />
            </div>
          </v-col>
          <v-col v-if="!smAndDown" class="d-flex justify-end">
            <v-list-item v-for="(item, index) in navItems" :key="index" @click="goTo(index)">
              <a class="nav-item" :href="item.ref" :style="{ color: textColor }">
                <v-icon size="14" class="mr-3" :icon="item.icon" />
                {{ item.name }}
              </a>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>
      <template #append>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon icon="ri-menu-3-line" color="surface" v-if="smAndDown" @click="drawer = true" />
      </template>

    </v-app-bar>
    <v-navigation-drawer v-if="smAndDown" v-model="drawer" order="-1" :style="appBarStyle" max-width="100%" temporary
      app location="left">
      <v-row no-gutters justify="end">
        <v-icon icon="ri-close-line" :color="textColor" class="pa-6" @click="drawer = false" />
      </v-row>

      <v-list-item @click="drawer = false" v-for="(item, index) in navItems" :key="index * 5">
        <a :href="item.ref" class="nav-item">
          <v-icon size="x-small" :color="textColor" class="mr-3" :icon="item.icon" />
          {{ item.name }}
        </a>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>
<script setup>

import { useDisplay } from "vuetify"
import { ref, computed, watch } from "vue"
import { DataMixin } from '../../composables/DataMixin'
import Mixin from './mixins/Mixin'

const { smAndDown } = useDisplay()
const { scrollPosition } = DataMixin()
const { goToId } = Mixin.methods

const drawer = ref(false)
const logoFilter = ref('grayscale(1) brightness(7)')
const textColor = ref('rgb(226, 228, 237)')

const navItems = ref([
  { name: "Our Solutions", icon: "ri-global-line", ref: '#solution' },
  { name: "Products", icon: "ri-shopping-bag-2-line", ref: '#products' },
  { name: "Contact Us", icon: "ri-phone-line", ref: '#contact' }
])


const appBarStyle = computed(() => ({
  backdropFilter: 'blur(28px)',
  background: scrollPosition.value < 600
    ? 'linear-gradient(135deg, rgba(27, 32, 50, 0.1) 0%, rgba(53, 153, 176, 0.05) 100%)'
    : 'surface',
  transition: 'all 0.3s ease'
}))

watch(scrollPosition, (newVal) => {
  let scrollPercent = Math.min(newVal / 600, 1)
  if (newVal / 600 < 1)
    scrollPercent = 3
  logoFilter.value = `grayscale(${scrollPercent - 1}) brightness(${scrollPercent})`

  textColor.value = newVal < 600
    ? 'rgb(226, 228, 237)'
    : 'rgb(27, 32, 50)'
})

const goTo = (index) => {
  goToId(navItems.value[index].ref)
}
</script>


<style lang="scss">
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
  display: flex;
}

.v-list-item {
  border-radius: 12px !important;
}

.v-list-item .v-list-item {
  transition: color 0.4s ease;
  color: rgba(255, 255, 255, 0.979) !important;
}

.v-list-item:hover .v-list-item:hover .v-icon {
  color: rgb(236, 242, 255) !important;

}


.text-color {
  color: v-bind(textColor);
}

@import "@/assets/main.scss";

.nav-item {
  @extend .text-color;
  @extend .redirect-btn;

  &::after {
    background-color: v-bind(textColor);
  }
}

.v-list-item-title a {
  color: v-bind(textColor) !important;
}
</style>