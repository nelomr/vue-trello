export default {
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