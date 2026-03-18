import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// prime vue
import PrimeVue from "primevue/config";
import { VRIVTheme } from "./theme";
import { createPinia } from "pinia";
import "primeicons/primeicons.css";

// router
import router from "./router";

// estados
const pinia = createPinia();

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: VRIVTheme,
      options: {
        darkModeSelector: ".dark",
      },
    },
  })
  .use(router)
  .use(pinia)
  .mount("#app");
