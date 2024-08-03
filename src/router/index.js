import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores/index'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    { path: '/manage', component: () => import('@/views/manage/ManageEcharts.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/music/homepage',
      children: [
        {
          path: '/music/homepage',
          component: () => import('@/views/music/HomePage.vue')
        },
        {
          path: '/music/aboutus',
          component: () => import('@/views/music/AboutUs.vue')
        },
        {
          path: '/music/musiccommunity',
          component: () => import('@/views/music/MusicCommunity.vue')
        },
        {
          path: '/music/musicrecommendations',
          component: () => import('@/views/music/MusicRecommendations.vue')
        },
        {
          path: '/music/specialtopic',
          component: () => import('@/views/music/SpecialTopic.vue')
        },
        { path: '/user/personalcenter', component: () => import('@/views/user/PersonalCenter.vue') }
      ]
    }
  ]
})

export default router

router.beforeEach((to) => {
  const userStore = useUserStore()
  if (!userStore.token && to.path == '/user/personalcenter') return '/login'
})
