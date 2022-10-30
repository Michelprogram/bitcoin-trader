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
    <div class="header">
      <Header />
    </div>
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

.parent {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 0.9fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.header,
.portofolio,
.market {
  background-color: $white;
  margin-right: 1%;

  div {
    margin-left: 2%;
    width: 96%;
  }
}

.header {
  margin-top: 1%;
  grid-area: 1 / 1 / 2 / 2;
  border-radius: $border-radius-home $border-radius-home 0px 0px;
}
.portofolio {
  grid-area: 2 / 1 / 3 / 2;
}
.market {
  grid-area: 3 / 1 / 4 / 2;
  margin-bottom: 1%;
  border-radius: 0px 0px $border-radius-home $border-radius-home;
}
</style>
