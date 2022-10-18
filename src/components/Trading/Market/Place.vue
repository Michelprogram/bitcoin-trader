<template>
  <div class="place-item">
    <div class="description">
      <component :is="item.icon" class="logo"></component>
      <div>
        <p>{{ item.name }}</p>
        <p>{{ item.unite }}</p>
      </div>
    </div>
    <p class="p-data">${{ item.price }}</p>
    <p class="p-data">+{{ item.chanee }}%</p>
    <p class="p-data">${{ item.marketCap }}M</p>
    <span v-if="item.watch">
      <Star class="star" />
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { market } from "@/types/market";
import Star from "@/components/icons/Star.vue";
export default defineComponent({
  name: "place",
  props: {
    item: { type: Object as () => market, required: true },
  },
  components: { Star },
});
</script>
<style lang="scss" scoped>
@import "@/assets/bases/index.scss";

.place-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: $size3;

  .description {
    display: flex;
    gap: 0px 5px;

    width: 30%;
    .logo {
      width: 50px;
      height: 50px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $gray-dark;
    }

    p:nth-child(1) {
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    p:nth-child(2) {
      font-weight: 400;
      color: $gray-light3;
    }
  }

  .p-data {
    font-weight: 500;
    width: 10%;
    &:nth-child(3) {
      font-weight: 400;
      color: $green;
    }
  }

  .star {
    cursor: pointer;
  }
}
</style>
