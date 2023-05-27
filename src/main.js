// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')



import { createApp, h } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";


import App from "./App.vue";
import BlogHome from "./components/BlogHome.vue"
import BlogPost from "./components/BlogPost.vue"

const routes = [
  {
    path: '/blog/',
    name: 'blog-home',
    component: BlogHome
  },
  {
    path: '/blog/:id',
    name: 'blog-post',
    component: BlogPost
  }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp({
  render: () => h(App),
});

app.use(router);
app.mount("#app");
