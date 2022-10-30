<template>
  <div class="c-app">
    <div class="navbar">
      <Logo />
      <Navbar />
    </div>
    <router-view v-slot="{ Component }">
      <component :is="Component" class="c-parent" />
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Logo from "@/components/Logo.vue";

export default defineComponent({
  name: "app",
  components: { Navbar, Logo },
});
</script>

<style>
.c-app {
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 130vh;
}

.navbar {
  grid-area: 1 / 1 / 6 / 2;
  display: flex;
  margin-top: 20%;
  flex-direction: column;
  height: 80%;
  align-items: center;
  justify-content: space-between;
}
.c-parent {
  grid-area: 1 / 2 / 6 / 6;
}
</style>
