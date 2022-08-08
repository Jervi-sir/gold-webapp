<template>
  <div>
    <canvas id="view-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from '../planet-data.js'

export default {
  name: 'PlanetChart',
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('view-chart');
    new Chart(ctx, this.planetChartData);
  }
}
</script>