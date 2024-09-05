import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import AboutView from "@/views/AboutView.vue"
import App from "@/App.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "app",
        component: App,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AboutView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
