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
        },
        setTitleTask({commit, getters}, {title, id}) {
            const task = getters.getTask(id);
            commit('changeTitle', {title, task})
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
        changeTitle(state, {title, task}) {
            task.name = title;
        },
        addTask(state, {tasks, name}) {
            tasks.push(
                {
                    description: '',
                    name: name,
                    id: Math.floor(Math.random() * Date.now()),
                    user: null
                }
            );
        },
        removeTask(state, {tasks, indexTask}) {
            tasks.splice(indexTask, 1);
        },
        updateColumnsData(state, {tasks, indexColumn}) {
            state.board.columns[indexColumn].tasks = tasks;
        }
    }
})
