<template>
  <v-btn :small="smAndDown" icon="fas fa-angle-up" rounded="pill" flat tile class="go-up-btn" @click="goToId('nav')" />
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

<script setup>
import { DataMixin } from "../composables/DataMixin";
import { useDisplay } from "vuetify/lib/composables/display";
const { smAndDown } = useDisplay()
import { ref, watch, onMounted } from 'vue'
import Mixin from "./global/mixins/Mixin";

const { goToId } = Mixin.methods

// Convert mixin to composable usage
const { scrollPosition } = DataMixin()

const isShown = ref(false)

// Reference to the button element
const goUpBtn = ref(null)

onMounted(() => {
  goUpBtn.value = document.getElementsByClassName("go-up-btn")[0]
})

watch(scrollPosition, (val) => {
  if (!goUpBtn.value) return

  const atBottom = val === document.body.scrollHeight - document.body.offsetHeight

  if (val > 200 || atBottom) {
    if (!isShown.value) {
      goUpBtn.value.classList.add("go-up-btn-show")
    }
  } else {
    goUpBtn.value.classList.remove("go-up-btn-show")
  }
})
</script>