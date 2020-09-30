<template>
    <div class="new-task-card">
        <div class="new-task-card--content">
            <div class="new-task-card--field">
                <label for="name">Task Name</label>
                <input type="text" name="name" v-model="name">
            </div>
            <div class="new-task-card--field">
                <label for="name">Description</label>
                <textarea v-model="description" />
            </div>
        </div>
        <div class="new-task-card--buttons">
            <a @click.prevent="resetTask()" href="#">Cancel</a>
            <a @click.prevent="addTask()" href="#">Add</a>
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
        addTask() {
            this.name.length > 0 && this.$store.commit('addTask',{
                tasks: this.tasks,
                name: this.name,
                description: this.description
                });
            this.resetTask();
        },
        closePopup() {
            this.$emit('closePopup');
        },
        resetTask() {
            this.name = '';
            this.description = '';
            this.closePopup()
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