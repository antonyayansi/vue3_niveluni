import routerCourses from '../modules/courses/router';
import routerProgress from '../modules/progress/router';

export default {
    name: 'index',
    path: '/',
    component: () => import('../layouts/Layout.vue'),
    children: [
        {
            name: 'home',
            path: '',
            component: () => import('../views/Index.vue')
        },
        {
            name: 'my-account',
            path: '/my-account',
            component: () => import('../views/MyAccount.vue')
        },
        {
            name: 'courses',
            ...routerCourses
        },
        {
            name: 'progress',
            ...routerProgress
        }
    ]
}