<template>
  <div class="c-market-place">
    <div class="c-header-market">
      <p class="market-down">Market is down 0.80%</p>
      <div class="info">
        <div>
          <p>24h <span class="arrow">></span></p>
        </div>
        <div>
          <p>Top gainers <span class="arrow">></span></p>
        </div>
      </div>
    </div>
    <div class="c-grid-market">
      <Place v-for="(item, index) in market" :key="index" :item="item" />
    </div>
    <div class="c-ad">
      <Annonce class="annonce" />
    </div>
  </div>
</template>
<script lang="ts">
import Place from "@/components/Trading/Market/Place.vue";
import market from "@/constants/market";
import { defineComponent } from "vue";
import Annonce from "../../Ads/Annonce.vue";
export default defineComponent({
  name: "Market",
  data() {
    return {
      market,
    };
  },
  components: { Place, Annonce },
});
</script>
<style lang="scss" scoped>
@import "@/assets/bases/index.scss";
.c-market-place {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  gap: 0px 40px;
  height: 100%;
}

.c-ad {
  grid-area: 1 / 2 / 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;

  .annonce {
    position: relative;
    &::after {
      content: "";
      width: 300px;
      height: 300px;
      position: absolute;
    }
  }
}
.c-header-market {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .market-down {
    font-size: $size1;
    font-weight: 700;
  }

  .info {
    display: flex;
    justify-content: space-between;
    font-size: $size3;
    width: 25%;
    p {
      border: 2px solid $gray-tin;
      padding: 5px 10px;
      border-radius: 22px;
      span {
        display: inline-block;
        transform: rotate(90deg);
      }
    }
  }
}
.c-grid-market {
  grid-area: 2 / 1 / 4 / 2;
  display: flex;
  flex-direction: column;
  gap: 20px 0px;
}
</style>
