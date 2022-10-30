<template>
  <router-link :to="item.route" :class="isActive">
    <component class="icon" :is="item.icon"></component>
  </router-link>
</template>
<script lang="ts">
import Wallet from "@/components/icons/Wallet.vue";
import { defineComponent } from "vue";
import type { navbar } from "@/types/components";
export default defineComponent({
  name: "item",
  props: {
    item: { type: Object as () => navbar, required: true },
  },
  components: { Wallet },
  computed: {
    isActive(): String {
      const route = this.$route.name;
      return route == this.item.tab ? "c-item-navbar active" : "c-item-navbar";
    },
  },
});
</script>
<style lang="scss" scoped>
custom-after {
  content: "";
  height: 3px;
  border-radius: 35px;
  position: absolute;
  width: 0px;
  bottom: 8px;
  left: 10px;
  background: #bcdfff;
  transition: all 0.4s cubic-bezier(0.09, 0.63, 0.4, 1.04);
}

.c-item-navbar {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &::after {
    @extend custom-after;
  }

  &.active {
    &::after {
      @extend custom-after;
      width: 40px;
    }
  }
}
</style>
