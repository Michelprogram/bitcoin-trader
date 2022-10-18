<template>
  <div class="c-ad">
    <div class="ad">
      <div class="c-text">
        <div class="text">
          <p>
            Earn
            <span class="c-span">
              <span>free</span>
            </span>
            crypto
          </p>
          <p>with Coinview Earn !</p>
        </div>
        <p class="learn">
          Learn about different cryptocurrencies and earn them for free!
        </p>
        <div class="button">Earn now</div>
      </div>
      <div class="rects">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "annonce",
});
</script>
<style lang="scss" scoped>
@import "@/assets/bases/index.scss";

.c-ad {
  position: relative;
  z-index: 10;
  width: 450px;
  height: 350px;

  overflow: hidden;

  .ad {
    width: 100%;
    height: 100%;
    color: $white;
    background-color: $gray-dark;

    position: relative;
    border-radius: 30px;
  }
}

.c-text {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin: auto;
  height: 100%;

  .text {
    .c-span {
      position: relative;
      z-index: 1;
      line-height: 40px;
      span {
        display: inline-block;
        color: $pink;
        position: relative;
        border: 2px solid $pink;
        padding: 0px 20px;
        transform: rotate(350deg);
        border-radius: 13px;
        background-color: $gray-dark;
      }

      &:after {
        display: block;
        content: "";
        position: absolute;
        background-color: $pink;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 13px;
        transform: rotate(340deg);
        z-index: -1;
      }
    }

    p {
      font-size: $size1;
      font-weight: 600;
      line-height: 50px;
    }
  }

  .learn {
    font-size: $size3;
    font-weight: 300;
    letter-spacing: 0.05em;
    line-height: 22px;
  }

  .button {
    color: $black;
    font-weight: 600;
    font-size: $size3;
    background-color: $blue;
    border-radius: 23px;
    width: fit-content;
    padding: 10px 40px;
    cursor: pointer;
  }
}

.rects {
  div {
    position: absolute;
    display: block;
    width: 300px;
    height: 300px;
    background-color: transparent;
    border: 2px solid $pink;
    border-radius: 11px;
  }

  .rect1 {
    right: -180px;
    bottom: -160px;
    transform: rotate(84deg);
  }

  .rect2 {
    right: -151px;
    bottom: -173px;
    transform: rotate(69deg);
  }
  .rect3 {
    right: -132px;
    bottom: -209px;
    transform: rotate(66deg);
  }
}
</style>
