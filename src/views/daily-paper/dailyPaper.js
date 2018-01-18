import { CreateDailyReport } from '@/api/dailyApi'

export default {
  data () {
    return {
      report: {
        // 'dateTime': '2017-12-20T02:03:07.797Z',
        'dayQuota': 0,
        dayCompletion: 0,
        dayCompletionRate: 0,
        // spilt
        'eyebrowTimes': 0,
        'eyebrowLipsTimes': 0,
        'eyebrowLipsJawTimes': 0,
        'serviceSalesVolume': 0,
        // spilt
        'eyebrowSeries': 0,
        'poreSeries': 0,
        'facePowderSeries': 0,
        'concealerSeries': 0,
        'seasonNew': 0,
        // 'storeId': 'string',
        taskId: this.$route.params.taskId
      }
    }
  },
  watch: {
    'report.dayQuota': function () {
      this.comDayComRate()
    },
    'report.dayCompletion': function () {
      this.comDayComRate()
    },
  },
  methods: {
    handleSubmitReport () {
      CreateDailyReport(this.report)
        .then((response) => {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        })
    },
    comDayComRate () {
      this.report.dayCompletionRate = (this.report.dayCompletion / this.report.dayQuota * 100).toFixed(2)
    }
  }
}
