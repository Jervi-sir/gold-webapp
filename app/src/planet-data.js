export const planetChartData = {
    type: "line",
    data: {
      labels: ["20 Oct", "21 Oct", "22 Oct", "23 Oct", "24 Oct", "25 Oct", "26 Oct"],
      datasets: [
        {
          label: "Price",
          data: [10000, 8000, 6000, 8000, 10000, 7000, 15000],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            position: "right",
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default planetChartData;