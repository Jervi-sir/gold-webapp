<template>
  <div class="next-prediction">
      <div class="left">
          <h5 class="title">Next Prediction</h5>
          <h3 class="price">{{ price }}</h3>
          <h6 class="pourcentage-container">
              <span class="pourcentage">{{percentage}}</span>
              <img v-if="status == 'bull'" src="../assets/arrow-up.svg" alt="arrow up">
              <img v-else src="../assets/arrow-up.svg" alt="arrow up">
          </h6>
      </div>
      <div class="right">
          <img src="../assets/gold.svg" alt="gold">
      </div>
  </div>
</template>

<script>
export default {
  name: 'NextPrediction',
  props: {
    price: String,
    percentage: String,
    status: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.next-prediction {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px;
    background: #032A41;
    border-radius: 21px;

    .left {
        .title {
            font-weight: 300;
            font-size: 13px;
            color: #7999B3;
        }
        .price {
            font-weight: 300;
            font-size: 25px;
            color: #FFFFFF;
        }
        .pourcentage-container {
            display: flex;
            justify-content: flex-end;
            .pourcentage {
                font-weight: 500;
                font-size: 10px;
                color: #1CCB96;
            }
        }
    }

    .right {
        img {
            width: 100%;
        }
    }
}

</style>
