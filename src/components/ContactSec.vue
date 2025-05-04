<template>
  <v-row class="contact" id="contact">
    <v-col cols="12">
      <h1 class="header">Find Us</h1>
    </v-col>
    <v-col cols="12" sm="6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.4718192719015!2d31.32783571459513!3d30.10930972246145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581594e11a46f1%3A0xb880ebdfadb7d4bc!2s16%20Ahmed%20Abd%20El-Ghaffar%2C%20El-Nozha%2C%20El%20Nozha%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1641169360869!5m2!1sen!2seg"
        style="border-radius: 20px;width: 100%;height: 100%;" loading="lazy">
      </iframe>
    </v-col>
    <v-col cols="12" sm="6" class="d-flex align-center flex-column ga-6">

      <div class="d-flex ga-2">
        <v-icon color="surface" icon="ri-map-pin-line" />
        <h4>16 Ahmed Abd El Gaffar st., 11351, Heliopolis, Cairo</h4>
      </div>
      <div class="d-flex ga-2">
        <v-icon color="surface" icon="ri-phone-line" />
        <h4>+201006262621 &thinsp; | +201006613794</h4>
      </div>
      <div class="d-flex ga-2">
        <v-icon color="surface" icon="ri-mail-line" />
        <a class="footer-item text-surface" href="mailto:dr.sharaf@from-masr.com">dr.sharaf@from-masr.com</a>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss">
@import '@/assets/main.scss';

.contact {
  background: linear-gradient(135deg,
      rgb(var(--v-theme-dark-background)) 0%,
      rgb(var(--v-theme-dark-background-lighten-1)) 100%);
  min-height: 500px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: rgb(var(--v-theme-surface));
}

.header {
  @extend .section__header;
  background: transparent !important;
  letter-spacing: 3px;
  font-size: clamp(26px, 4vw, 40px);
}


.footer-item {
  @extend .redirect-btn;

  &::after {
    background-color: rgba(var(--v-theme-surface));
  }

}
</style>