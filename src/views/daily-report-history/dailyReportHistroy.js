/**
 * Created by Micheal Xiao on 2017/12/29.
 */
import { GetReportList } from '@/api/dailyApi'

export default {
  data () {
    return {
      reportList: [],
    }
  },
  created () {
    GetReportList()
      .then((response) => {
        this.reportList = response.data
      })
  },
}
