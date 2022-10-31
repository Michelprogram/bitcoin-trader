<template>
  <div>
    <div class="title"><p>Cards</p></div>
    <div class="c-cards">
      <!--       <div class="card" data-index="0">
        <div class="header">
          <p>VISA</p>
        </div>
        <div class="number">
          <p>3455 4562 7710 3507</p>
        </div>
        <div class="c-info">
          <div class="name">
            <p>Card holder name</p>
            <p>John Carter</p>
          </div>
          <div class="date">
            <p>Expire date</p>
            <p>02/09</p>
          </div>
        </div>
      </div>
      <div class="card" data-index="1">
        <div class="header">
          <p>Master</p>
        </div>
        <div class="number">
          <p>3455 4562 7710 3507</p>
        </div>
        <div class="c-info">
          <div class="name">
            <p>Card holder name</p>
            <p>John Carter</p>
          </div>
          <div class="date">
            <p>Expire date</p>
            <p>02/09</p>
          </div>
        </div>
      </div> -->
      <div class="card" data-index="2">
        <div class="header">
          <p>Black card</p>
        </div>
        <div class="number">
          <p>3455 4562 7710 3507</p>
        </div>
        <div class="c-info">
          <div class="name">
            <p>Card holder name</p>
            <p>John Carter</p>
          </div>
          <div class="date">
            <p>Expire date</p>
            <p>02/09</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import VanillaTitlt from "vanilla-tilt";
export default defineComponent({
  name: "Cards",
  mounted() {
    const el = document.querySelector(".card[data-index='2']") as HTMLElement;
    VanillaTitlt.init(el, {
      glare: true,
    });
  },
  /*   methods: {
    hoverEffect(event: MouseEvent, index: Number) {
      const card: HTMLElement = document.querySelector(
        `.card[data-index='${index}'`
      ) as HTMLElement;
      const [height, width] = [card.offsetWidth, card.offsetHeight];
      const [x, y] = [event.offsetX, event.offsetY];
      const [halfHeight, halfWidth] = [height / 2, width / 2];
      const [rotateX, rotateY] = [
        ((x - halfWidth) / halfWidth) * 10,
        ((y - halfHeight) / halfHeight) * 10,
      ];
      card.style.transition = "";
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },

    leaveEffect(index: Number) {
      const card: HTMLElement = document.querySelector(
        `.card[data-index='${index}'`
      ) as HTMLElement;

      card.style.transition = "transform 2s";
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    },
  }, */
});
</script>
<style lang="scss" scoped>
@import "@/assets/bases/index.scss";

.title {
  font-size: $size2;
  font-weight: 700;
}

.c-cards {
  width: 400px;
  height: 220px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .blur-effect {
    width: 30px;
    height: 30px;
    position: absolute;
    background-color: red;
    z-index: 10;
  }
  .card {
    position: absolute;
    width: 330px;
    height: 180px;
    background: linear-gradient(
      117deg,
      rgba(241, 101, 41, 1) 0%,
      rgba(255, 60, 33, 1) 47%,
      rgba(22, 8, 76, 1) 100%
    );
    color: $white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .header {
      text-align: right;
      font-weight: 500;
      letter-spacing: 0.1em;
      margin-top: 3px;
      margin-right: 3px;
    }
    .number {
      font-size: $size2;
      text-align: center;
      background-color: hsla(0, 0%, 0%, 0.721);
      transform-style: preserve-3d;
      transform: translate3d(0px, 0px, 0px);

      &:hover {
        transform: translate3d(0px, 0px, 100px);
      }
    }
    .c-info {
      display: flex;
      justify-content: space-around;

      .name,
      .date {
        p:first-child {
          font-size: 0.7em;
          font-weight: 100;
        }
      }
    }
  }
}
</style>
