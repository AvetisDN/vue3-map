import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createYmaps } from "vue-yandex-maps";

createApp(App)
  .use(
    createYmaps({
      apikey: "1e8c4e00-cd38-4764-b126-066c30584a29",
    })
  )
  .mount("#app");
