import { CreateLeave } from './api/leaveApi'

export default {
  created () {
    this.setUserLocal()
  },
  data () {
    return {
      // flag: true,
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      leaveData: initLeaveData(),
      startDay: '',
      endDay: '',
      inform: true,
      hadSubmit: false,
    }
  },
  methods: {
    handleCreateLeave () {
      if (this.leaveData.reason === '') {
        this.$message({
          message: '请假事由不能为空',
          type: 'error'
        })
        return false;
      } else if (this.leaveData.startDateTime === '') {
        this.$message({
          message: '请填写开始时间',
          type: 'error'
        })
        return false;
      } else if (this.leaveData.endDateTime === '') {
        this.$message({
          message: '请填写结束时间',
          type: 'error'
        })
        return false;
      } else if (this.leaveData.endDateTime.getTime() - 3600 * 1000 <= this.leaveData.startDateTime.getTime()) {
        this.$message({
          message: '结束时间必须大于开始时间1小时',
          type: 'error'
        })
        return false;
      } else if (this.leaveData.hours === 0) {
        this.$message({
          message: '请填写请假时长',
          type: 'error'
        })
        return false;
      } else if (this.leaveData.hours <= 0) {
        this.$message({
          message: '请填写请假时长不能为负',
          type: 'error'
        })
        return false;
      } else {
        CreateLeave(this.leaveData)
          .then(() => {
            this.$message({
              message: '申请已提交',
              type: 'success'
            })
            this.hadSubmit = true
            // this.$router.back()
            window.history.back()
          })
      }
    }

  }
}

function initLeaveData () {
  return {
    'endDateTime': '',
    'hours': 1,
    // "id": 0,
    'isToNotify': true,
    // "proposeDateTime": "2017-12-18T06:54:00.950Z",
    // "proposer": "string",
    'reason': '',
    'startDateTime': ''
  }
}
