<template>
  <div class="c-assets" :style="style">
    <div class="header">
      <div class="first-line">
        <p>{{ item.quantity }} {{ item.unite }}</p>
        <Dot />
      </div>
      <p class="value">$ {{ item.value }}</p>
    </div>
    <div class="footer">
      <div class="logo">
        <component :is="dynamiIcon"></component>
      </div>
      <p>+ {{ item.percentage }}%</p>
    </div>
  </div>
</template>
<script lang="ts">
import Dot from "@/components/icons/Dot.vue";
import { defineComponent, type StyleValue, defineAsyncComponent } from "vue";
import type { assets } from "@/types/components";
export default defineComponent({
  name: "Assets",
  components: {
    Dot,
  },
  props: {
    item: { type: Object as () => assets, required: true },
  },
  computed: {
    style(): StyleValue {
      return `background-color:${this.item.color}`;
    },
    dynamiIcon() {
      return defineAsyncComponent(
        () => import(`../../icons/Crypto/${this.item.logo}.vue`)
      );
    },
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/bases/index.scss";
.c-assets {
  color: $gray;
  width: 190px;
  height: 244px;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10 px;

  .first-line,
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header,
  .footer {
    width: 80%;
    margin: auto;
  }

  .header {
    .value {
      font-size: $size3;
      font-weight: 400;
    }

    .first-line {
      p {
        font-size: $size2;
        font-weight: 700;
        line-height: 35px;
      }
    }
  }

  .footer {
    font-size: $size3;
    color: $purple;
    font-weight: 400;
    letter-spacing: 0.02em;
    .logo {
      background-color: $white;
      padding: 10px 15px;
      border-radius: 14px;
    }
  }
}
</style>
