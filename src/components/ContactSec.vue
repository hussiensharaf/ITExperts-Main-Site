<template>
  <v-row no-gutters class="contact" id="contact">
    <v-col>
      <v-row no-gutters justify="center">
        <h1 class="section__header white--text">Find Us</h1>
      </v-row>
      <v-row no-gutters class="mapdiv">
        <v-col class="map px-16 py-16" cols="12" xl="6" lg="6" sm="12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.4718192719015!2d31.32783571459513!3d30.10930972246145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581594e11a46f1%3A0xb880ebdfadb7d4bc!2s16%20Ahmed%20Abd%20El-Ghaffar%2C%20El-Nozha%2C%20El%20Nozha%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1641169360869!5m2!1sen!2seg"
            style="border-radius: 20px;position: relative;top: 0;left: 0;width: 100%;height: 100%;" allowfullscreen=""
            loading="lazy">
          </iframe>
        </v-col>
        <v-col class="conts px-16 py-16" cols="12" xl="6" lg="6" sm="12">
          <v-row class="pt-2 flex-nowrap align-start">
            <v-icon class="pr-2 white--text">fas fa-map-marker-alt</v-icon>
            <h4>16 Ahmed Abd El Gaffar st., 11351, Heliopolis, Cairo</h4>
          </v-row>
          <v-row class="pt-7">
            <v-icon class="pr-2 white--text">fa-solid fa-phone</v-icon>
            <h4>+201006262621 &thinsp;</h4>
            <h4> | +201006613794</h4>
          </v-row>
          <v-row class="pt-7 flex-nowrap justify-start align-start">
            <v-icon class="pr-2 white--text">fa-solid fa-envelope</v-icon>
            <a href="mailto:dr.sharaf@from-masr.com">dr.sharaf@from-masr.com</a>
          </v-row>
          <!-- <v-row>
            <a href="mailto:hussiensharaf@from-masr.com">hussiensharaf@from-masr.com</a>
          </v-row> -->
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.contact {
  background: linear-gradient(135deg,
      rgb(15, 17, 27) 0%,
      rgb(7, 33, 39) 100%) !important;
  min-height: 100vh !important;
}

.mapdiv {
  min-height: 80vh !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: rgb(241, 240, 255);
}

.section__header {
  padding-top: 110px;
  letter-spacing: 3px;
  font-size: clamp(20px, 3vw, 40px);
}
</style>