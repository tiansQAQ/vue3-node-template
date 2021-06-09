import Layout from '@/layout'
export default {
  path: '/',
  component: Layout,
  meta: { title: '首页', keepAlive: true },
  redirect: '/home',
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', keepAlive: true }
    },
    {
      path: 'my',
      name: 'my',
      component: () => import('@/views/my/index'),
      meta: { title: '我的', keepAlive: true }
    }
  ]
}
