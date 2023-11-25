import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Job from '../views/Job.vue';

const routes = [
    {
        path: '/devjobs-web-app/',
        name: 'Home',
        component: Home
    },
    {
        path: '/job/:id',
        name: 'Job',
        component: Job,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    }
});

export default router;
