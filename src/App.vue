<template>
    <div id="app">
        <header>Drello</header>
        <div class="list-columns" v-if="list">
            <ColumnBoard
                v-for="(column, indexColumn) in list"
                :key="'column'+indexColumn"
                :indexColumn="indexColumn"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ColumnBoard from './components/ColumnBoard';


export default {
    name: 'Drello',
    components: {
        ColumnBoard
    },
    computed: {
        ...mapState(['board']),
        list() {
            return this.board.columns;
        }
    }
}
</script>

<style lang="scss">
  header {
    padding: 1em 2em;
    margin-bottom: 30px;
    color: $dark-color;
    background-color: $primary-color;
    border-bottom: 2px solid $secondary-color;
  }

  .list-columns {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1000px;
    padding: 0 15px 40px;
    margin: 0 auto;
  }
</style>
