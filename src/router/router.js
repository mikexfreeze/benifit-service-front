import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import userCenter from '@/views/user-center/userCenter.vue'
import memberIcon from '@/views/user-center/member-nav/memberNav'
import cardDetail from '@/views/user-center/card-detail/cardDetail.vue'
import userTel from '@/views/user-tel/userTel.vue'
import couponTab from '@/views/coupon-tab/couponTab.vue'
import memberInfo from '@/views/member-info/memberInfo.vue'
import barCode from '@/views/bar-code/barCode.vue'
import cardList from '@/views/user-center/card-List/cardList.vue'
import memberVip from '@/views/user-center/member-vip/memberVip.vue'

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
      name: '绑定页面',
      component: userTel
    },
    {
      path: '/coupon-tab',
      name: '优惠券',
      component: couponTab
    },
    {
      path: '/member-info',
      name: '注册会员',
      component: memberInfo
    },
    {
      path: '/bar-code',
      name: '会员条形码',
      component: barCode
    },
    {
       path:'/detail',
       component:cardList
    },
    {
       path:'/member',
       component:memberVip
    }
  ]
})

export default router
