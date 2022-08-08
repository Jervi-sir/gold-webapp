<template>
   <header>
        <img class="logo" src="../assets/logo.svg" alt="Gold Prediction">
        <h1 class="title">Gold Predictor</h1>
        <h2 class="date">{{ today }}</h2>
    </header>
</template>

<script>

export default {
  
  name: 'HeaderComponent',
  data () {
    return {
        today: '',
    }
  },
  mounted() {
    const months = [
        'January', 'February', 'March', 
        'April', 'May', 'June', 
        'July', 'August', 'September', 
        'October', 'November', 'December'
    ];

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth()); //January is 0!

    this.today = dd + ' ' + months[mm];
  },
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .logo {
        width: 45px;
        margin-right: 10px;
    }
    .title {
        flex: 2;
        font-weight: 500;
        font-size: 20px;
        color: #032A41;
    }
    .date {
        font-weight: 500;
        font-size: 15px;
        color: #7E93A0;
    }

}
</style>