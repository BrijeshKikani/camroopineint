<template>
  <v-container class="pa-0 py-5">
    <v-card>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h3"> Contact Us</v-card-title>

          <v-card-text class="py-0 text-h5">
            1st Floor, D/87, Ananad Dhara,
          </v-card-text>
          <v-card-text class="py-0 text-h5"> Mota Varachha, </v-card-text>
          <v-card-text class="py-0 text-h5">
            Surat-394101, Gujarat, INDIA
          </v-card-text>
          <v-card-text class="py-0 text-h5">
            Phone :
            <a href="tel:+919909850089">+91-9909850089</a>
          </v-card-text>
          <v-card-text class="py-0 pt-3 text-h5">
            C-119/122, Lakmi Narayan Industries,
          </v-card-text>
          <v-card-text class="py-0 text-h5"> BRC compound, </v-card-text>
          <v-card-text class="py-0 text-h5">
            Near Lakmi Narayan Temple,
          </v-card-text>
          <v-card-text class="py-0 text-h5">
            Surat-392010, Gujarat, INDIA
          </v-card-text>
          <v-card-text class="py-0 text-h5">
            Phone :
            <a href="tel:+9195370003666">+91-95370003666</a>
          </v-card-text>

          <v-card-text class="py-0 text-h5">
            Email :
            <a href="mailto:sales@camroopineint.com">sales@camroopineint.com</a>
          </v-card-text>
        </div>

        <v-avatar class="ma-3" size="500" tile>
          <v-img src="../assets/home.png"></v-img>
        </v-avatar>
      </div>
    </v-card>

    <v-card class="my-5">
      <v-card-subtitle>
        Easily accessible with over 18,000 sqft Facility , Located Just North of
        the Airport, off Airport Road North of Derry, just South of Steeles
      </v-card-subtitle>
      <GoogleMap />
    </v-card>

    <v-card height="100" class="my-5">
      <v-card-title class="pt-9">
        Manufacturer of Architectural Aluminum Products
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import GoogleMap from "./GoogleMap.vue";
export default Vue.extend({
  name: "ContactUs",
  components: {
    GoogleMap,
  },
  data: () => ({}),
});
</script>
