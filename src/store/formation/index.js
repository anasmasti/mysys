import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'
import { state } from './state'

export const formationStore = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations, //mutations
  actions: actions,
  //METHODS
  methods: {
    //UPDATE WINDOW'S TITLE
    UpdateDocTitle(title) {
      document.title = title;
    }
  }
};