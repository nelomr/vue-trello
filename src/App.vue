<template>
  <div id="app">
    <header>Drello</header>
    <div class="list-columns" v-if="list">
      <ColumnBoard v-for="(column, index) in list" :key="'column'+index" :list="column" />
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
    padding: 2em;
    margin-bottom: 30px;
    color: $light-color;
    background-color: $secondary-color;
    border-bottom: 2px solid rgb(0, 255, 195);
  }

  .list-columns {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1000px;
    padding: 0 15px;
    margin: 0 auto;
  }
</style>
