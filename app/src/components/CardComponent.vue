<template>
    <div class="card">
        <div class="left">
            <img v-if="record.state == 'bull'" src="../assets/bull.svg" alt="Bull">
            <img v-else src="../assets/bear.svg" alt="Bull">
        </div>
        <div class="middle">
            <h5 class="date">{{ record.date }}</h5>
            <h5 v-if="record.state == 'bull'" class="pourcentage">{{ record.percentage }}</h5>
            <h5 v-else class="pourcentage">{{ record.percentage }}</h5>
        </div>
        <div class="right">
            <h5 class="price">{{ record.price }}</h5>
        </div>
    </div>
</template>

<script>

export default {
  name: 'HomeView',
  props: {
    record: Object,
  }
}
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #FFFFFF;
        border-radius: 20px;
        padding: 10px 20px;
        .left {
            width: 50px;
            height: 50px;
            padding-right: 20px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .middle {
            flex: 2;
            .date {
                font-weight: 700;
                font-size: 17px;
                color: #03314B;
            }
            .pourcentage {
                font-weight: 700;
                font-size: 15px;
                color: #1DCC98;
            }
        }
        .right {
            .price {
                font-weight: 700;
                font-size: 17px;
                color: #03314B;
            }
        }
    }
</style>
