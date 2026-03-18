export default {
    name: 'courses',
    path: '/courses',
    component: () => import('../layouts/Layout.vue'),
    children: [
        {
            name: 'courses-index',
            path: '',
            component: () => import('../views/Index.vue')
        }
    ]
}