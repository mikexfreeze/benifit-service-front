import { GetMemberInfo } from '@/api/memberApi'

export default {
  created () {
    GetMemberInfo()
      .then((response)=>{
        this.member = response.data
      })
  },
  data () {
    return {
      member: {}
    }
  },
}
