export default [
    {
        path: '/home',
        component: () => import('@/pages/home/index.vue'),
    }, 
    {
        path: '/skill',
        component: () => import('@/pages/posts/index.vue'),
    },
    {
        path: '/demo',
        component: () => import('@/pages/demo/index.vue'),
    },
    // 重定向
    {
        path: '/',
        redirect: '/home'
    }
]