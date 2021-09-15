<template>
  <v-app>
    <v-container class="pa-0" style="color: #5a5a5a">
      <v-card class="mx-auto" flat>
        <v-card flat>
          <v-card-title>
            <div class="d-flex align-center">
              <v-img
                src="./assets/logo.png"
                max-height="100"
                contain
                max-width="250"
                @click="changeRoute('Contact Us')"
              />
            </div>

            <v-spacer></v-spacer>
            <span> Contact us: </span>
            <v-btn
              icon
              href="https://www.facebook.com/Camroopine-international-107696214964039"
              target="_blank"
            >
              <v-icon color="blue darken-2">mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://www.linkedin.com/company/camroopine-international/"
              target="_blank"
            >
              <v-icon color="blue darken-2">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon href="mailto:sales@camroopineint.com">
              <v-icon color="red darken-2">mdi-email</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>

        <v-main>
          <v-card>
            <v-tabs v-model="tab" dark>
              <v-tab
                v-for="item in items"
                :key="item.tab"
                @click="changeRoute(item.routeName)"
              >
                {{ item.tab }}
              </v-tab>
            </v-tabs>
          </v-card>
          <router-view />
          <v-card height="100" class="my-5">
            <v-card-title class="pt-9">
              Manufacturer of Aluminum extrusion Products
            </v-card-title>
          </v-card>
        </v-main>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data() {
    return {
      tab: null,
      items: [
        { tab: "Contact Us", routeName: "Contact Us" },
        { tab: "Home", routeName: "Home" },
      ],
    };
  },
  methods: {
    changeRoute(routeName) {
      this.$router.push({ name: routeName });
    },
  },
  mounted() {
    if (this.$route.name == null) {
      this.tab = 0;
      this.$router.push({ name: "Contact Us" });
    } else if (this.$route.name !== "Contact Us") {
      this.tab = 1;
    }
  },
});
</script>
