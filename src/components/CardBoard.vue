<template>
    <li class="card-board">
        <div class="card-board--title">
            <input
                @input="changeTitle()"
                type="text"
                v-model="title"
            >
        </div>
        <div class="card-board--content">
            <div class="card-board--description">
                <textarea
                    @input="changeDescription()"
                    resize="false"
                    v-model="description"
                    placeholder="Add some description..."
                    type="text"
                />
                <div class="card-board--buttons">
                    <a href="#" @click.prevent="'#'"><font-awesome-icon icon="trash-alt" size="1x" /></a>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    components: {
    },
    props: {
        task: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            enableEdit: false,
            title: this.task.name,
            description: this.task.description
        }
    },
    computed: {
        ...mapGetters(['getTask']),
        getCurrentTask() {
            return this.getTask(this.task.id);
        }
    },
    methods: {
        addDescription() {
            this.enableEdit = !this.enableEdit;
        },
        changeDescription() {
            this.$store.dispatch('setDescriptionTask', {description: this.description, id: this.task.id});
        },
        changeTitle() {
            this.$store.dispatch('setTitleTask', {title: this.title, id: this.task.id});
        }
    }
}
</script>

<style lang="scss">
    .card-board {
        padding: 1em;
        margin-bottom: 30px;
        background-color: $light-color;
        list-style: none;
        border-color: $light-color;
        border-radius: .5em;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);

        &:last-child {
            margin-bottom: 0;
        }
    }

    .card-board--title input {
        font-size: 16px;
        font-weight: bold;
    }

    .card-board--buttons {
        display: flex;
        justify-content: flex-end;

        a {
            display: block;
            color: $secondary-color;
        }
    }
</style>