export default {
    name: 'progress',
    path: '/progress',
    component: () => import('../layouts/Layout.vue'),
    children: [
        {
            name: 'progress-index',
            path: '',
            component: () => import('../views/Index.vue')
        }
    ]
}