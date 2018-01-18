import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import signin from '@/views/sign-in/signIn.vue'
import SigninRemark from '@/views/signin-remark/signinRemark.vue'
import SigninHistory from '@/views/signin-history/signinHistory.vue'
import leave from '@/views/leave/leave.vue'
import taskToday from '@/views/task-today/taskToday.vue'
import EditTask from '@/views/edit-task/editTask.vue'
import TaskDetails from '@/views/task-details/taskDetails.vue'
import TaskCalendar from '@/views/task-calendar/taskCalendar.vue'
import demo from '@/views/demo/demo.vue'
import accessShop from '@/views/access-shop/accessShop.vue'
import calendar from '@/components/calendar/calendar.vue'
import dailyPaper from '@/views/daily-paper/dailyPaper.vue'
import dailyReportHistory from '@/views/daily-report-history/dailyReportHistroy.vue'
import acccessTrainer from '@/views/access-Trainer/accessTrainer.vue'
import userCenter from '@/views/userCenter/userCenter.vue'
import userCenterList from '@/views/userCenterList/userCenterList.vue'
import userTel from '@/views/userTel/userTel.vue'
import couponTab from '@/views/couponTab/couponTab.vue'
import memberInfo from '@/views/memberInfo/memberInfo.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/',
      name: 'dashboard',
      component: HelloWorld
    },
    {
      path: '/signin/:taskId/:type?',
      name: '签到',
      component: signin
    },
    {
      path: '/signinremark',
      name: '签到-填写备注',
      component: SigninRemark
    },
    {
      path: '/signinhistory/:taskId/:type',
      name: '签到历史',
      component: SigninHistory
    },
    {
      path: '/leave/:userId?',
      name: '请假',
      component: leave
    },
    {
      path: '/tasktoday/:userId/:role?',
      name: '当日任务',
      component: taskToday
    },
    {
      path: '/creat-task',
      name: '新建任务',
      component: EditTask
    },
    {
      path: '/edittask/:id',
      name: '编辑任务',
      component: EditTask
    },
    {
      path: '/taskdetails/:id',
      name: '任务详情',
      component: TaskDetails
    },
    {
      path: '/taskcalendar/:userId/:role?',
      name: '任务日历',
      component: TaskCalendar
    },
    {
      path: '/accessshop',
      name: '访问表',
      component: accessShop
    },
    {
      path: '/acccesstrainer',
      name: '访问表trainer',
      component: acccessTrainer
    },
    {
      path: '/calendar',
      name: '日历示例',
      component: calendar
    },
    {
      path: '/dailypaper/:taskId',
      name: '日报填写',
      component: dailyPaper
    },
    {
      path: '/daily-report-history',
      name: '日报历史',
      component: dailyReportHistory
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
