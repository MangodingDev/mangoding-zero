import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexMain from './components/main/IndexMain.vue'
import Dashboard from './components/main/Dashboard.vue'
import NotFound from './components/main/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: IndexMain,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/',
                redirect: '/dashboard'
            },
            {
                path: "/dashboard",
                name: "Dashboard",
                components: {
                    default: IndexMain,
                    MainView: Dashboard
                }
            },
            {
                path: "/404",
                name: "NotFound",
                components: {
                    default: IndexMain,
                    MainView: NotFound
                }
            },
            {
                path: '*',
                redirect: '/404'
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router;