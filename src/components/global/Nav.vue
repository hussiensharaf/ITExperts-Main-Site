<template>
  <div id="nav">
    <v-app-bar class="elevation-0 border" :absolute="smAndDown" :fixed="smAndDown" :style="appBarStyle">

      <v-app-bar-title>
        <div class="d-flex" style="width: 120px; height: 100px">
          <img src="@/assets/logo.png" alt="Company Logo" @click="goToId('nav')" class="clickable-logo"
            :style="{ filter: logoFilter }" />
        </div>
      </v-app-bar-title>

      <v-list class="horizontal d-flex transparent" v-if="!smAndDown">
        <v-list-item v-for="(item, index) in navItems" :key="index" @click="goTo(index)">
          <v-list-item-title>
            <a class="nav-item text-decoration-none d-flex" :href="item.ref" :style="{ color: textColor }">
              <v-icon size="small" class="mr-3" :icon="item.icon" />
              {{ item.name }}
            </a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <template #append>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon color="surface" v-if="smAndDown" @click="drawer = true" />
      </template>

      <!-- Rest of your template remains the same -->
    </v-app-bar>
    <v-navigation-drawer v-if="smAndDown" v-model="drawer" order="-1" :style="appBarStyle" max-width="100%" temporary
      app location="left" class="d-flex flex-column">
      <v-row no-gutters justify="end">
        <v-icon color="surface" class="pa-4" @click="drawer = false">
          fas fa-times
        </v-icon>
      </v-row>
      <v-list dense class="mx-auto" width="100%">
        <v-list-item-group>
          <v-list-item @click="drawer = false" v-for="(item, index) in navItems" :key="index * 5">
            <v-list-item-title @click="tab = index">
              <v-icon color="surface" size="small" class="mr-4" :icon="item.icon"></v-icon>
              <a :href="item.ref" class="nav-item">
                {{ item.name }}
              </a>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script setup>
import { useDisplay } from "vuetify";
import { ref, computed, watch } from "vue";
import { DataMixin } from '../../composables/DataMixin'
import Mixin from './mixins/Mixin'

const { smAndDown } = useDisplay()
const { scrollPosition } = DataMixin()
const { goToId } = Mixin.methods

const drawer = ref(false)
const logoFilter = ref('grayscale(1) brightness(7)')
const textColor = ref('rgb(226, 228, 237)')

const navItems = ref([
  { name: "Our Solutions", icon: "fas fa-globe", ref: '#solution' },
  { name: "Products", icon: "fas fa-shopping-bag", ref: '#products' },
  { name: "Contact Us", icon: "fas fa-phone", ref: '#contact' }
])


const appBarStyle = computed(() => ({
  backdropFilter: 'blur(28px)',
  background: scrollPosition.value < 600
    ? 'linear-gradient(135deg, rgba(27, 32, 50, 0.1) 0%, rgba(53, 153, 176, 0.05) 100%)'
    : 'white',
  transition: 'all 0.3s ease'
}))

watch(scrollPosition, (newVal) => {
  let scrollPercent = Math.min(newVal / 600, 1)
  if (newVal / 600 < 1)
    scrollPercent = 3
  logoFilter.value = `grayscale(${scrollPercent - 1}) brightness(${scrollPercent})`

  // Adjust text color
  textColor.value = newVal < 600
    ? 'rgb(226, 228, 237)'
    : 'rgb(27, 32, 50)'
})

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
  border-radius: 12px !important;
}

.v-list-item .v-list-item {
  transition: color 0.4s ease;
  color: rgba(255, 255, 255, 0.979) !important;
}

.v-list-item:hover .v-list-item:hover .v-icon {
  color: rgb(236, 242, 255) !important;

}

a.nav-item {
  color: v-bind(textColor);
  position: relative;
  text-decoration: none;

  &::after {
    transition: all 0.4s ease-out;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: v-bind(textColor);
    width: 0;
  }

  &:hover {
    color: rgb(var(--v-theme-on-surface-light));
    width: 100%;
  }

  &:hover::after {
    width: 100%;
  }
}

.v-list-item-title a {
  color: v-bind(textColor) !important;
}
</style>