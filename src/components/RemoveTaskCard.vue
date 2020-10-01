<template>
    <div class="new-task-card">
        <div class="new-task-card--content">
           <h2>Are you sure?</h2>
        </div>
        <div class="new-task-card--buttons">
            <a @click.prevent="closePopup()" href="#">Cancel</a>
            <a @click.prevent="removeTask()" href="#">Yes</a>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['tasks'],
    data() {
        return {
            name: '',
            description: ''
        }
    },
    methods: {
        removeTask() {
            this.$store.commit('removeTask',{
                tasks: this.tasks,
                indexTask: 1,
            });
        },
        closePopup() {
            this.$emit('closePopup');
        }
    }
}
</script>

<style lang="scss">
    .new-task-card {
        padding: 40px;
    }

    .new-task-card--field {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;

        label {
            font-size: 16px;
            font-weight: bold;
            text-align: left;
        }
    }

    .new-task-card--buttons {
        display: flex;
        justify-content: space-between;

        a {
            color: $dark-color;
            text-decoration: none;
        }
    }
</style>