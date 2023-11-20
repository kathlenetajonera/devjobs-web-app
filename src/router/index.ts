import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Job from '../views/Job.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/job',
        name: 'Job',
        component: Job
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
