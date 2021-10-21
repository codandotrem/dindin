import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Cursos from "../views/cursos.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: Cursos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
