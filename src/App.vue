<script setup lang="ts">
import Logo from "./components/Logo.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Header from "./components/Header/Header.vue";
import Market from "@/components/Trading/Market/Market.vue";
import Annonce from "./components/Ads/Annonce.vue";
import Overview from "./components/Trading/Overview/Overview.vue";
</script>

<template>
  <div class="parent">
    <div class="navbar">
      <Logo />
      <Navbar />
    </div>
    <div class="header">
      <Header />
    </div>
    <div class="portofolio">
      <Overview />
    </div>
    <div class="market">
      <Market />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/bases/index.scss";
.parent {
  display: grid;
  grid-template-columns: 0.2fr 2fr;
  grid-template-rows: 0.3fr 0.6fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 130vh;
}

.header,
.portofolio,
.market {
  background-color: $white;
  margin-right: 1%;

  div {
    margin-left: 2%;
    width: 96%;
  }
}

.navbar {
  grid-area: 1 / 1 / 6 / 2;
  display: flex;
  margin-top: 20%;
  flex-direction: column;
  height: 70%;
  align-items: center;
  justify-content: space-between;
}

.header {
  margin-top: 1%;
  grid-area: 1 / 2 / 2 / 3;
  border-radius: $border-radius-home $border-radius-home 0px 0px;
}
.portofolio {
  grid-area: 2 / 2 / 3 / 3;
}
.market {
  grid-area: 3 / 2 / 4 / 3;
  margin-bottom: 1%;
  border-radius: 0px 0px $border-radius-home $border-radius-home;
}
</style>
