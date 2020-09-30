<template>
    <div class="column">
        <div class="column--content">
            <div>{{ list.name }}</div>
            <draggable v-model="tasks" tag="ul" group="all-users" ghost-class="moving-card" :animation="200" @start="drag=true" @end="drag=false">
                <CardBoard 
                    v-for="element in tasks"
                    :key="element.id"
                    :task="element"
                />
            </draggable>
            <button @click="openPopup()">Add new task <font-awesome-icon icon="plus" size="1x" /></button>
        </div>
        <PopupElement
            :statePopup="popupOpen"
            @closePopup="closePopup()"
        />
    </div>
</template>

<script>
import CardBoard from './CardBoard';
import Draggable from "vuedraggable";
import PopupElement from './PopupElement';

export default {
    components: {
        CardBoard,
        Draggable,
        PopupElement
    },
    props: {
        list: {
            type: Object,
            default: () => ({})
        }
    },
    provide() {
        return {
            tasks: this.tasks
        };
    },
    data() {
        return {
            tasks: this.list.tasks,
            popupOpen: false
        }
    },
    methods: {
        closePopup() {
            this.popupOpen = false;
        },
        openPopup() {
            this.popupOpen = true;
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
        }
    }
</style>