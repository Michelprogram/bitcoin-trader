<script lang="ts">
import Header from "@/components/Header/Header.vue";
import Market from "@/components/Trading/Market/Market.vue";
import Annonce from "@/components/Ads/Annonce.vue";
import Overview from "@/components/Trading/Overview/Overview.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    Header,
    Market,
    Annonce,
    Overview,
  },
});
</script>

<template>
  <div class="parent">
    <div class="portofolio">
      <Overview />
    </div>
    <div class="market">
      <Market />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/bases/index.scss";
</style>
