import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import initialBoard from '../use/initial-board';

Vue.use(Vuex);
const board = initialBoard;

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })],
    state: {
        board
    },
    actions: {
        setDescriptionTask({commit, getters}, {description, id}) {
            const task = getters.getTask(id);
            commit('changeDescription', {description, task})
        }
    },
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
    },
    mutations: {
        changeDescription(state, {description, task}) {
            task.description = description;
        },
        addTask(state, {tasks, name, description}) {
            tasks.push(
                {
                    description: description.length > 0 || 'Some description...',
                    name: name,
                    id: Math.floor(Math.random() * Date.now()),
                    user: null
                }
            );
        }
    }
})
