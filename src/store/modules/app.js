
const app = {
  state: {
    // sidebar: {
    //     isCollapse: false
    // },
    onXHR: false,
  },
  mutations: {
    // TOGGLE_SIDEBAR: state => {
    //   state.sidebar.isCollapse = !state.sidebar.isCollapse
    // },
    // OPEN_SIDEBAR: state => {
    //   state.sidebar.isCollapse = false
    // },
    SET_ONXHR: state => {
      state.onXHR = true
    },
    SET_NOTXHR: state => {
      state.onXHR = false
    },
  },
}

export default app
