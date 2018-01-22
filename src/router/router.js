import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import userCenter from '@/views/userCenter/userCenter.vue'
import userCenterList from '@/views/userCenterList/userCenterList.vue'
import userTel from '@/views/userTel/userTel.vue'
import couponTab from '@/views/couponTab/couponTab.vue'
import memberInfo from '@/views/memberInfo/memberInfo.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: HelloWorld
    },
    {
      path: '/userCenter',
      name: '个人中心',
      component: userCenter
    },
    {
      path: '/userCenterList',
      name: '个人中心列表',
      component: userCenterList
    },
    {
      path: '/userTel',
      name: 'userTel',
      component: userTel
    },
    {
      path: '/couponTab',
      name: 'Tab',
      component: couponTab
    },
    {
      path: '/memberInfo',
      name: '注册会员',
      component: memberInfo
    }
  ]
})

export default router
