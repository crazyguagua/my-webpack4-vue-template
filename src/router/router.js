const router = [{
    path: '/',
    redirect: '/home' //根路径重定向到home
}, {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout'),
    children:[
        {
            path: 'home',
            name: 'home',
            component: () => import('@/views/home')
        },
        {
            path: 'order',
            name: 'order',
            component: () => import('@/views/order')
        }, {
            path: 'my',
            name: 'my',
            component: () => import('@/views/my')
        }, {
            path: 'explore',
            name: 'explore',
            component: () => import('@/views/explore')
        }
    ]
}, {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news')
},
{
    path: '/cnode',
    name: 'cnode',
    component: () => import('@/views/cnode/cnode.vue')
}]

export default router