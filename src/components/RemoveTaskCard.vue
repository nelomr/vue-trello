<template>
    <div class="remove-task-card">
        <div class="remove-task-card--content">
           <h2>Are you sure?</h2>
        </div>
        <div class="remove-task-card--buttons">
            <a  @click.prevent="closePopup()" href="#">Cancel</a>
            <a @click.prevent="removeTask()" href="#">Yes</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RemoveTask',
    inject: ['task','indexColumn'],
    methods: {
        removeTask() {
            this.$store.commit('removeTask',{
                tasks: this.getTasks,
                indexTask: this.getIndexTask
            });
            this.closePopup();
        },
        closePopup() {
            this.$emit('closePopup');
        }
    },
    computed: {
        getIndexTask() {
            return this.getTasks.findIndex(task => task.id === this.task.id);
        },
        getTasks() {
            return this.$store.state.board.columns[this.indexColumn].tasks;
        }
    }
}
</script>

<style lang="scss">
    .remove-task-card {
        padding: 40px;
    }

    .remove-task-card--field {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;

        label {
            font-size: 16px;
            font-weight: bold;
            text-align: left;
        }
    }

    .remove-task-card--buttons {
        display: flex;
        justify-content: space-between;

        a {
            font-size: 16px;
            font-weight: bold;
            color: $dark-color;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>