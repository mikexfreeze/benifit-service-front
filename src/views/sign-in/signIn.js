/**
 * Created by Micheal Xiao on 2017/12/13.
 */
/* eslint-disable */
// function initialize () {
//   var mp = new BMap.Map('map-container')
//   mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11)
// }
//
// function loadScript () {
//   var script = document.createElement('script')
//   script.src = 'http://api.map.baidu.com/api?v=2.0&ak=w9PI0vKODszjVnCMo6k6q3cKXO1e54uC&callback=initialize'
//   document.body.appendChild(script)
// }
//
// window.onload = loadScript
/* eslint-enable */

import { BaiduMap, BmGeolocation } from 'vue-baidu-map'
import { GetSigns, GetSignOuts, SignIn } from '@/api/signApi'
import moment from 'moment'

export default {
  created () {
    this.getSigns()
    let self = this
    setInterval(self.updateClock, 1000)
  },
  data () {
    return {
      todaySignNum: 0,
      moment: moment,
      clock: '',
      isIn: this.$route.params.type === 'signIn',
      myLocation: {},
      memo: '',
    }
  },
  components: {
    BaiduMap,
    BmGeolocation,
  },
  methods: {
    getSigns () {
      if (this.isIn) {
        GetSigns({taskId: this.$route.params.taskId})
          .then((response) => {
            this.todaySignNum = response.data.length
          })
      } else {
        GetSignOuts({taskId: this.$route.params.taskId})
          .then((response) => {
            this.todaySignNum = response.data.length
          })
      }
    },
    handleSign () {
      let postData = {
        in: this.isIn,
        'taskId': this.$route.params.taskId,
        latitude: this.myLocation.lat,
        longitude: this.myLocation.lng,
        address: this.myLocation.address,
        memo: this.memo,
      }
      let msg = this.isIn ? '签到成功' : '签退成功'
      SignIn(postData)
        .then(() => {
          this.$message({
            message: msg,
            type: 'success'
          })
          // TODO 显示签退次数
          this.getSigns()
        })
    },
    updateClock () {
      this.clock = moment().format('LT')
    },
    mapReady (m) {
      let BMap = m.BMap
      let map = m.map
      let self = this
      let geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          let mk = new BMap.Marker(r.point)
          map.addOverlay(mk)
          map.panTo(r.point)
          map.setZoom(14)
          self.myLocation = {
            lng: r.point.lng,
            lat: r.point.lat
          }
          // alert('您的位置：' + r.point.lng + ',' + r.point.lat)
          // 创建地理编码实例
          let myGeo = new BMap.Geocoder()
          // 根据坐标得到地址描述
          myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function (result) {
            if (result) {
              self.myLocation.address = result.address
            }
          })
        } else {
          alert('failed' + this.getStatus())
        }
      }, {enableHighAccuracy: true})
    },
  }
}
