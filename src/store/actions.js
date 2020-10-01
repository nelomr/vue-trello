export default {
    setDescriptionTask({commit, getters}, {description, id}) {
        const task = getters.getTask(id);
        commit('changeDescription', {description, task})
    },
    setTitleTask({commit, getters}, {title, id}) {
        const task = getters.getTask(id);
        commit('changeTitle', {title, task})
    }
}