<template>
  <svg
    width="24"
    height="21"
    viewBox="0 0 24 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 17.5H20.5L17 14.5V6.5L14.5 2.5H8.5L5.5 6.5V14.5L2.5 17.5Z"
      stroke="#020B2A"
      stroke-width="2"
    />
    <circle cx="17" cy="4.5" r="4.5" fill="white" />
    <circle cx="17" cy="4.5" r="3.5" fill="#FF5E5E" />
    <mask id="path-4-inside-1_370_3" fill="white">
      <path d="M11.5 20.5L10 19.5V18H13.5V19.5L11.5 20.5Z" />
    </mask>
    <path
      d="M10 19.5H7V21.1056L8.3359 21.9962L10 19.5ZM11.5 20.5L9.8359 22.9962L11.2845 23.9619L12.8416 23.1833L11.5 20.5ZM13.5 19.5L14.8416 22.1833L16.5 21.3541V19.5H13.5ZM13.5 18H16.5V15H13.5V18ZM10 18V15H7V18H10ZM8.3359 21.9962L9.8359 22.9962L13.1641 18.0038L11.6641 17.0038L8.3359 21.9962ZM12.8416 23.1833L14.8416 22.1833L12.1584 16.8167L10.1584 17.8167L12.8416 23.1833ZM16.5 19.5V18H10.5V19.5H16.5ZM13.5 15H10V21H13.5V15ZM7 18V19.5H13V18H7Z"
      fill="#020B2A"
      mask="url(#path-4-inside-1_370_3)"
    />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Ring",
});
</script>
