<template>
  <div class="c-user-info">
    <Picture class="logo" />
    <div class="info-user">
      <p>{{ displayName }}</p>
      <span>></span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Picture from "../icons/Picture.vue";
export default defineComponent({
  name: "Profil",
  props: {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
  },
  components: { Picture },
  computed: {
    displayName(): String {
      return `${this.name} ${this.surname[0]}.`;
    },
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/bases/index.scss";
.c-user-info {
  display: flex;
  border-radius: 27px;
  color: $purple-dark;
  align-items: center;
  background-color: $gray-light;
  height: 40px;
  width: 180px;
  .logo {
    transform: translateY(-10px);
    width: 60px;
  }

  .info-user {
    font-size: $size3;
    font-weight: 500;
    display: flex;

    p {
      padding: 8px;
    }

    span {
      transform: rotate(90deg);
    }
  }
}
</style>
