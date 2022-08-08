<template>
  <div class="home">
    <!-- Header -->
    <HeaderComponent class="header-space"/>
    <!-- Next Prediction -->
    <NextPrediction class="next-prediction-space" price="$10,000.00" percentage="2%" status="bull"/>
    <!-- History -->
    <HistoryComponent class="history-space" />
    <!-- Chart -->
   <PlanetChart />

    <!-- Old Prices -->
    <div class="old-price-list old-price-list-space">
        <CardComponent v-for="(item, index) in items" :key="index" :record="item"/>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.header-space {
  margin-bottom: 1.5rem;
}
.next-prediction-space {
  margin-bottom: 1.5rem;
}
.history-space {
  margin-bottom: 1.5rem;
}
.old-price-list-space {
  margin-bottom: 1.5rem;
}
</style>
<script>
import NextPrediction from '@/components/NextPrediction.vue'
import HistoryComponent from '@/components/HistoryComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
// @ is an alias to /src
import PlanetChart from '@/components/PlanetChart.vue'

export default {
  data () {
    return {
      items: [
        { date: '20.10.2022', percentage: '2%',
          state: 'bull', price: '10.000$'
        },
        { date: '22.10.2022', percentage: '5%',
          state: 'bear', price: '6.000$'
        },
        { date: '23.10.2022', percentage: '6%',
          state: 'bear', price: '8.000$'
        },
        { date: '24.10.2022', percentage: '10%',
          state: 'bull', price: '10.000$'
        },
        { date: '25.10.2022', percentage: '2%',
          state: 'bear', price: '7.000$'
        },
        { date: '26.10.2022', percentage: '2%',
          state: 'bull', price: '15.000$'
        },
       
      ]
    }
  },
  name: 'HomeView',
  components: {
    NextPrediction,
    HistoryComponent,
    CardComponent,
    HeaderComponent,
    PlanetChart
  }
}
</script>
