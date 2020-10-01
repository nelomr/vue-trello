import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import initialBoard from '../use/initial-board';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);
const board = initialBoard;

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })],
    state: {
        board
    },
    actions,
    mutations,
    getters: {
        getTask(state) {
            return (id) => {
                for (const column of state.board.columns) {
                    for (const task of column.tasks) {
                        if (task.id === id) {
                            return task;
                        }
                    }
                }
            }
        }
    }
})
