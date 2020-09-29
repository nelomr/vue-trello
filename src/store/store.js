import Vue from 'vue';
import Vuex from 'vuex';
import initialBoard from '../use/initial-board';

Vue.use(Vuex);
const board = initialBoard;

export default new Vuex.Store({
    state: {
        board
    },
    mutations: {}
})
