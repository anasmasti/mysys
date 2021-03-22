import Vue from 'vue';
import Vuex from 'vuex';
import { formationStore } from './formation/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        formation_module: formationStore
    }
})