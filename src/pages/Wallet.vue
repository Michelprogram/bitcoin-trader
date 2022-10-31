<template>
  <div class="parent">
    <Card />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import Card from "@/components/wallet/Cards.vue";
export default defineComponent({
  name: "Wallet",
  components: { Card },
});
</script>
<style lang="scss" scoped>
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

.portofolio {
  grid-area: 2 / 1 / 3 / 2;
}
</style>
