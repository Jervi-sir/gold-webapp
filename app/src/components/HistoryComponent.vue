<template>
<div>
    <div class="history">
        <h3 class="title">History</h3>
        <div class="selector">
            <button>1D</button>
            <button class="active">1W</button>
            <button>1M</button>
            <button>1Y</button>
            <button>ALL</button>
        </div>
    </div>
    <div class="chart"></div>
</div>
</template>
<script>

export default {
  name: 'HistoryComponent',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.history {
    .title {
        font-weight: 600;
        font-size: 20px;
        padding-left: 20px;
        color: #032A41;
    }

    .selector {
        display: flex;
        justify-content: space-between;
        button {
            flex: 1;
            background-color: transparent;
            border: none;
            font-weight: 500;
            font-size: 12px;
            color: #A9AEB6;
            padding: 7px;
            
            &.active {
                background-color: #1CCB96;
                color: #FFFFFF;
                border-radius: 10px;
            }
        }
    }
}
</style>