<template>
    <li class="card-board">
        <div class="card-board--title">{{ title }}</div>
        <div class="card-board--content">
            <div class="card-board--description">
                <textarea @input="changeDescription()" v-show="enableEdit" resize="false" v-model="description" type="text" :disabled="!enableEdit" />
                <div v-show="!enableEdit" v-html="description" @click.prevent="addDescription()"></div>
                <div class="card-board--buttons">
                    <a href="#" @click.prevent="addDescription()"><font-awesome-icon icon="edit" size="1x" /></a>
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