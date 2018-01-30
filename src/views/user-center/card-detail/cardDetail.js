/**
 * Created by Micheal Xiao on 2018/1/22.
 */
import { GetMemberBonus } from '@/api/memberApi'
import moment from 'moment'

export default {
  created () {
    GetMemberBonus()
      .then((response)=>{
        this.bonusList = response.data.slice(0,2)
      })
  },
  data () {
    return {
      bonusList: [],
    }
  },
  filters: {
    cptExpiryDate: function (value) {
      let date = moment(value).add(1, 'y').format("YYYY/MM/DD")
      return date
    }
  },
}