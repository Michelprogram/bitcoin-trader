<template>
  <div class="c-navbar">
    <ItemVue v-for="(item, index) in items" :item="item" :key="index" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { items } from "@/constants/components";
import ItemVue from "@/components/Navbar/Item.vue";
export default defineComponent({
  name: "navbar",
  components: {
    ItemVue,
  },
  data() {
    return {
      items: items,
    };
  },
});
</script>
<style lang="scss" scoped>
.c-navbar {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
