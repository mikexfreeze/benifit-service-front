import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import userCenter from '@/views/user-center/userCenter.vue'
import memberIcon from '@/views/user-center/member-nav/memberNav'
import cardDetail from '@/views/user-center/card-detail/cardDetail.vue'
import userTel from '@/views/user-tel/userTel.vue'
import couponTab from '@/views/coupon-tab/couponTab.vue'
import memberInfo from '@/views/member-info/memberInfo.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: HelloWorld
    },
    {
      path: '/user-center',
      name: '个人中心',
      component: userCenter,
      redirect: '/user-center/nav',
      children: [
        {path: 'nav', component: memberIcon},
        {path: 'list', component: cardDetail}
      ]
    },
    {
      path: '/user-tel',
      name: 'userTel',
      component: userTel
    },
    {
      path: '/coupon-tab',
      name: 'Tab',
      component: couponTab
    },
    {
      path: '/member-info',
      name: '注册会员',
      component: memberInfo
    }
  ]
})

export default router
