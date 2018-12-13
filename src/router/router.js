const router = [{
    path: '/',
    redirect: '/home' //根路径重定向到home
}, {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home')
}, {
    path: '/order',
    name: 'order',
    component: () => import('@/views/order')
}, {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my')
}, {
    path: '/explore',
    name: 'explore',
    component: () => import('@/views/explore')
}]

export default router