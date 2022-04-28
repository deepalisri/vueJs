import { createWebHistory, createRouter } from "vue-router";
import Users from '@/components/Users.vue'
import Posts from "@/components/Posts.vue"
import PostDetails from "@/components/PostDetails.vue"
const routes = [
  {
    path: "/",
    name: "Users",
    component: Users,
  },
  {
      path: "/users/:id/posts",
      name: "Posts",
      component: Posts,
      props: true
  },
  {
    path: "/posts/:postId/comments",
    name: "PostDetails",
    component: PostDetails,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;