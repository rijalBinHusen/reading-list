import { onAuthStateChanged } from "firebase/auth";
import { createApp } from "vue";
import App from "./App.vue";
import { auth } from "./firebase/firebaseApp";
import router from "./router";

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
