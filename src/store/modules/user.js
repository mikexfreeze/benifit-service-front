/**
 * Created by Micheal Xiao on 2017/12/29.
 */
const user = {
  state: {
    role: localStorage.getItem('role'),
    level: initLevel(),
  },
  mutations: {
    // SET_ONXHR: state => {
    //   state.onXHR = true
    // },
    // SET_NOTXHR: state => {
    //   state.onXHR = false
    // },
  },
}

function initLevel () {
  let level = 0
  let role = localStorage.getItem('role')
  if (role) {
    switch (role) {
      case 'BE':
        break
      case 'Trainer':
        level = 1
        break
      case 'SDE':
        level = 2
        break
      case 'SDM':
        level = 3
        break
      case 'Supervisor':
        level = 4
        break
      default:
    }
  }

  return level
}

export default user
