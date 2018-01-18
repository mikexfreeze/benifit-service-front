/**
 * Created by Micheal Xiao on 2017/12/15.
 */
import app from './modules/app.js'
import user from './modules/user.js'
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    user,
  },
})

export default store
