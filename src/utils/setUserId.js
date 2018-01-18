/**
 * Created by Micheal Xiao on 2017/12/25.
 */
export default function () {
  if (this.$route.params.userId) {
    localStorage.setItem('userId', this.$route.params.userId)
  } else {
    localStorage.removeItem('userId')
  }
  if (this.$route.params.role) {
    localStorage.setItem('role', this.$route.params.role)
  } else {
    localStorage.removeItem('role')
  }
}
