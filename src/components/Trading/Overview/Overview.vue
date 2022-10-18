<template>
  <div class="c-overview">
    <div class="portofolio">
      <p class="title">Portofolio</p>
      <Portofolio />
    </div>
    <div class="assets">
      <p class="title">Your Assets</p>
      <div class="c-assets">
        <Assets v-for="(asset, index) in assets" :key="index" :item="asset" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Portofolio from "../../icons/Portofolio.vue";
import Assets from "./Assets.vue";
import { assets } from "@/constants/components";
export default defineComponent({
  name: "Overview",
  data() {
    return {
      assets,
    };
  },
  components: { Portofolio, Assets },
});
</script>
<style lang="scss" scoped>
@import "@/assets/bases/index.scss";
.c-overview {
  display: flex;

  .portofolio {
    width: 45%;
  }

  .assets {
    width: 50%;
  }
  .title {
    font-size: $size2;
    font-weight: 700;

    margin-bottom: 2%;
  }

  .assets {
    .c-assets {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
