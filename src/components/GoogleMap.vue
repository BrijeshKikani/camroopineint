<template>
  <div>
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 21.15394427909781, lng: 72.84870640244903 },
      markers: [],
    };
  },
  mounted() {
    this.markers.push({ position: this.center });
  },
});
</script>
