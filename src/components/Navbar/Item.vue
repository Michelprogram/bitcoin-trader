<template>
  <div class="c-item-navbar">
    <component class="icon" :is="icon"></component>
  </div>
</template>
<script lang="ts">
import Wallet from "@/components/icons/Wallet.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "item",
  props: {
    icon: { type: Object, required: true },
    route: { type: String, required: true },
  },
  components: { Wallet },
});
</script>
<style lang="scss" scoped>
.c-item-navbar {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .icon {
    transition: all 0.5s;
  }

  &:hover {
    .icon {
      filter: invert(65%) sepia(7%) saturate(14%) hue-rotate(317deg)
        brightness(98%) contrast(98%);
    }
  }
}
</style>
