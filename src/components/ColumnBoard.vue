<template>
    <div class="column" v-if="list">
        <div class="column--content">
            <div>{{ list.name }}</div>
            <div class="column--wrapper">
                <draggable
                    v-model="list.tasks"
                    tag="ul"
                    group="tasks"
                    ghost-class="moving-card"
                    :animation="200"
                     @start="drag=true"
                     @end="update()">
                    <CardBoard 
                        v-for="task in list.tasks"
                        :key="task.id"
                        :task="task"
                    />
                </draggable>
            </div>
            <!-- <button @click="openPopup()">Add new task <font-awesome-icon icon="plus" size="1x" /></button> -->
            <input class="column--add" type="text" v-model="name" placeholder="+ Add new task" @keyup.enter="addTask(name)">
            <button class="column--button" v-show="name.length > 0" @click="addTask(name)">Add <font-awesome-icon icon="plus" size="1x" /></button>
        </div>
    </div>
</template>

<script>
import CardBoard from './CardBoard';
import Draggable from "vuedraggable";
import { mapState } from 'vuex';

export default {
    name:'columnBoard',
    components: {
        CardBoard,
        Draggable
    },
    props: {
        indexColumn: {
            type: Number,
            default: 0
        }
    },
    provide() {
        return {
            tasks: this.list.tasks
        };
    },
    data() {
        return {
            name: '',
        }
    },
    computed: {
        ...mapState(['board']),
        list: {
            get() {
                return this.board.columns[this.indexColumn]
            },
            set(value) {
                this.$store.commit('updateColumnsData', {tasks: value, indexColumn: this.indexColumn})
            }
        }
    },
    methods: {
        addTask(name) {
            this.name.length > 0 && this.$store.commit('addTask',{tasks: this.list.tasks, name: name});
            this.name = '';
        },
        update() {
           this.$store.commit('updateColumnsData', {tasks: this.list.tasks, indexColumn: this.indexColumn})
        }
    }
}
</script>

<style lang="scss">
    button {
        border: none;
        background: none;
        appearance: none;
        outline: none;
        cursor: pointer;

        svg {
            margin-left: 5px;
        }
    }

    .column {
        flex: 1 1 100%;

        @include breakpoint($min-tablet) {
            flex: 0 1 calc(50% - 15px);
        }

        .sortable-chosen {
            cursor: pointer;
        }

        ul {
            padding: 0;
            margin-bottom: 0;
        }
    }

    .column--content {
        padding: 10px;
        background-color: $grey-light-color;
    }

    .column--wrapper {
        max-height: 800px;
        overflow: auto;
    }

    input[type=text].column--add {
        background-color: transparent;
    }
</style>