/**
 * Created by Micheal Xiao on 2018/1/22.
 */
import { GetMemberBonus,GetCoupons,GetMemberInfo } from '@/api/memberApi'
import moment from 'moment'

export default {
  created () {
    GetMemberInfo()
      .then((response)=>{
        if(response.data.bonusPointBalance !== '0'){
          this.isShowBonus=true;
        }
      })
    GetMemberBonus()
      .then((response)=>{
        this.bonusList = response.data.slice(0,2)
      })
    GetCoupons()
      .then((response)=>{
        this.cardList = response.data.slice(0,2)
      })
  },
  data () {
    return {
      bonusList: [],
      cardList:[],
      isShowBonus:false
    }
  },
  filters: {
    cptExpiryDate: function (value) {
      let date = moment(value).add(1, 'y').format("YYYY/MM/DD")
      return date
    }
  },
}
