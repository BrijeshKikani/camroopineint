<template>
  <v-container class="pa-0 py-5">
    <v-card>
      <v-row>
        <v-col cols="5">
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
              <v-card-text class="py-0 pt-8 text-h5">
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
                <a href="tel:+919537003666">+91-9537003666</a>
              </v-card-text>

              <v-card-text class="py-0 text-h5">
                Email :
                <a href="mailto:sales@camroopineint.com"
                  >sales@camroopineint.com</a
                >
              </v-card-text>
            </div>
          </div>
        </v-col>
        <v-col cols="7">
          <v-img
            contain
            height="700"
            width="600"
            src="../assets/home-page.png"
          ></v-img>
        </v-col>
      </v-row>
      <!-- </div> -->
    </v-card>

    <v-card class="my-5">
      <v-card-subtitle> </v-card-subtitle>
      <GoogleMap />
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
