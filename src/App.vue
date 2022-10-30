<template>
  <div class="c-app">
    <div class="navbar">
      <Logo />
      <Navbar />
    </div>
    <div class="c-parent">
      <div class="header">
        <Header />
      </div>
      <router-view v-slot="{ Component }">
        <component :is="Component" class="c-information" />
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Logo from "@/components/Logo.vue";
import Header from "@/components/Header/Header.vue";
export default defineComponent({
  name: "app",
  components: { Navbar, Logo, Header },
});
</script>

<style lang="scss" scoped>
@import "@/assets/bases/index.scss";

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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.15fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  background-color: $white;
  border-radius: $border-radius-home;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-right: 1%;

  .header,
  .c-information {
    margin-left: 2%;
    width: 96%;
  }

  .header {
    grid-area: 1 / 1 / 2 / 2;
  }
  .c-information {
    grid-area: 2 / 1 / 3 / 2;
  }
}
</style>
