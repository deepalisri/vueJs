import { createWebHistory, createRouter } from "vue-router";
import Users from '@/components/Users.vue'
import UserDetail from "@/components/UserDetail.vue"
const routes = [
  {
    path: "/",
    name: "Users",
    component: Users,
  },
  {
      path: "/users/:id/posts",
      name: "UserDetail",
      component: UserDetail,
      props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;