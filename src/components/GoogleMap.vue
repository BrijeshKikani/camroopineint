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
      center: { lat: 21.151099922717272, lng: 72.84864648543207 },
      markers: [],
    };
  },
  mounted() {
    this.markers.push({ position: this.center });
  },
});
</script>
