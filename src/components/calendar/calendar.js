/**
 * Created by Micheal Xiao on 2017/12/13.
 */
import 'moment'
import 'fullcalendar'
import 'fullcalendar/dist/locale/zh-cn.js'
// import '@/assets/moment/moment.min.js'
// import '@/assets/fullcalendar/fullcalendar.min.js'
import '@/assets/fullcalendar/fullcalendar.min.css'
import { Message } from 'element-ui'

export default {
  data () {
    return {
      startTime: new Date()
    }
  },
  mounted () {
    let self = this
    $(document).ready(function () {
      let $calendar = $('#calendar')
      // page is now ready, initialize the calendar...
      $calendar.fullCalendar({
        customButtons: {
          newEventBtn: {
            text: '新建',
            click: function () {
              if (self.$store.state.user.level === 0) {
                Message({message: '没有权限'})
              } else {
                self.$router.push({name: '新建任务', params: {startTime: self.startTime}})
              }
            }
          }
        },
        ocale: 'zh-cn',
        height: 'auto',
        header: {
          center: 'prev title next',
          left: 'today',
          right: 'newEventBtn',
        },
        views: {
          month: { // name of view
            titleFormat: 'YYYY年MM月',
            // other view-specific options here
          }
        },
        // selectable: true,
        // unselectAuto: true,
        // select: function (start, end) {
        //   let eventData = {
        //     start: start,
        //     end: end
        //   }
        //   console.log(eventData)
        //   self.startTime = start
        //   self.$emit('selectTime', start)
        // },
        // selectLongPressDelay: 0,
        // put your options and callbacks here
        dayClick: function (date, jsEvent, view) {
          $(this).addClass('active').siblings().removeClass('active').parents('.fc-row').siblings().find('td').removeClass('active')
          // console.log('a day has been clicked!')
          // console.log(date)
          self.$emit('selectTime', date)
          // $calendar.fullCalendar('gotoDate', date)
        }
      })
    })
  }
}
