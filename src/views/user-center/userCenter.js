import { GetMemberInfo } from '@/api/memberApi'

export default {
  created () {
    this.setOpenIdLocal()
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
