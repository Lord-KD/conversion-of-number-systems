import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    errors: {
      b: 0,
      o: 0,
      d: 0,
      h: 0
    },
    questions: null,
    topics: null
  },
  mutations: {
    setquestions(state, q){
      state.questions = q
    },
    setErrors(state, error){
      state.errors[error] += 1
    }
  },
  actions: {

  }
})
