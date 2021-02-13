/* eslint-disable implicit-arrow-linebreak */
import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const HomePage = () => import(/* webpackChunkName: "home" */ '../views/Home.vue');
const AboutPage = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const LatihanSatu = () =>
    import(/* webpackChunkName: "latihan-satu" */ '../views/tutorpage/LatihanVueSatu.vue');

const ModalDemo = () => import('../views/tutorpage/ModalDemo.vue');

const SlotDemo = () => import('../views/slotpage/ModalSlotDemo.vue');

const routes = [
    {
        path: '/',
        name: 'LatihanSatu',
        component: LatihanSatu,
    },
    {
        path: '/modaldemo',
        name: 'ModalDemo',
        component: ModalDemo,
    },
    {
        path: '/slotdemo',
        name: 'SlotDemo',
        component: SlotDemo,
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
