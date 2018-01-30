/**
 * Created by Micheal Xiao on 2017/12/25.
 */
export default function () {
  if (this.$route.params.openId) {
    localStorage.setItem('openId', this.$route.params.openId)
  } else {
    localStorage.removeItem('openId')
  }
  if (this.$route.params.role) {
    localStorage.setItem('role', this.$route.params.role)
  } else {
    localStorage.removeItem('role')
  }
}
