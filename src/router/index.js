import { createRouter, createWebHistory } from 'vue-router';
import CompanyList from '../components/CompanyList.vue';
import CompanyDetails from '../components/CompanyDetails.vue';

const routes = [
    {
        path: '/',
        name: 'CompanyList',
        component: CompanyList
    },
    {
        path: '/company/:id',
        name: 'CompanyDetails',
        component: CompanyDetails
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
