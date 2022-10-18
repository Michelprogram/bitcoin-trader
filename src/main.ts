import { createApp } from "vue";
import App from "./App.vue";
import "./assets/bases/index.scss";
import router from "@/routes/index"

createApp(App).use(router).mount("#app");
