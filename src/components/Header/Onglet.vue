<template>
  <div class="c-onglet">
    <component :is="dynamiIcon"></component>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
export default defineComponent({
  name: "Onglet",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamiIcon() {
      return defineAsyncComponent(() => import(`../icons/${this.icon}.vue`));
    },
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/bases/index.scss";
.c-onglet {
  width: 50px;
  height: 50px;
  background-color: $gray-light;
  display: flex;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  cursor: pointer;
}
</style>
