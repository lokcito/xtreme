import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/home-page";
import About from "./views/about-page";

const router = new createRouter({
  routes: [{
    path: "/home",
    name: "home",
    component: Home
  }, {
    path: "/about",
    name: "about",
    component: About
  }, {
    path: "/",
    redirect: "/home"
  },],
  history: createWebHashHistory()
});

export default router;