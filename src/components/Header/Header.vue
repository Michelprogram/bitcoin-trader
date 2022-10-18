<template>
  <div class="c-header">
    <div class="title">
      <p>Overview</p>
    </div>
    <div class="info-user">
      <Onglet icon="Search" />
      <Onglet icon="Ring" />
      <Profil name="Dorian" surname="Gauron" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import Onglet from "./Onglet.vue";
import Profil from "./Profil.vue";
export default defineComponent({
  name: "Header",
  components: { Onglet, Profil },
});
</script>
<style lang="scss" scoped>
@import "@/assets/bases/index.scss";

.c-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 2%;
  height: 100%;
  .title {
    p {
      font-size: $title;
      font-weight: 700;
    }
  }
  .info-user {
    display: flex;
    align-items: end;
    justify-content: space-between;
    width: 26%;
  }
}
</style>
