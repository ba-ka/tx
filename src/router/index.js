import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/x/:id",
      name: "x",
      component: PostView,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
});

export default router;
