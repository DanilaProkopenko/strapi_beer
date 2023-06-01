import { createApp, h } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";


import App from "./App.vue";
import BlogHome from "./components/BlogHome.vue"
import BlogPost from "./components/BlogPost.vue"
import BookingForm from "./components/BookingForm.vue"
import TestBlog from "./components/TestBlog.vue"

const routes = [
  {
    path: '/blog',
    name: 'blog-home',
    component: BlogHome
  },
  {
    path: "/blog/:id",
    component: BlogPost,
    props: true
  },
  {
    path: '/booking-form',
    name: 'booking-form',
    component: BookingForm
  },
  {
    path: '/test-blog',
    name: 'test-blog',
    component: TestBlog
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp({
  render: () => h(App),
});

app.use(router);
app.mount("#app");
