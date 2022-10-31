<template>
  <div class="c-header">
    <div class="title" ref="title">
      <p>{{ title }}</p>
    </div>
    <div class="info-user">
      <Onglet icon="Search" />
      <Onglet icon="Ring" />
      <Profil name="Dorian" surname="Gauron" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Onglet from "./Onglet.vue";
import Profil from "./Profil.vue";
export default defineComponent({
  name: "Header",
  data() {
    return {
      title: String,
    };
  },
  watch: {
    $route(to, from) {
      this.triggerTitleClass();
      this.title = to.name;
      this.triggerTitleClass();
    },
  },
  methods: {
    triggerTitleClass(): void {
      const title = this.$refs.title as HTMLElement;
      const classList = title.classList;
      if (classList.contains("title")) {
        title.classList.remove("title");
        title.style.opacity = "0";
      } else {
        setTimeout(() => {
          title.classList.add("title");
          title.style.opacity = "1";
        }, 100);
      }
    },
  },
  components: { Onglet, Profil },
});
</script>
<style lang="scss" scoped>
@import "@/assets/bases/index.scss";
@import "@/assets/animations/index.scss";

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
      letter-spacing: 0.15rem;
    }

    animation: slideInTitle 0.5s ease-in;
  }
  .info-user {
    display: flex;
    align-items: end;
    justify-content: space-between;
    width: 26%;
  }
}
</style>
