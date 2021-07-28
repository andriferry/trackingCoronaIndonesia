<template>
  <div class="pa-5">
    <canvas id="myChart" ref="polarArea" height="270px" width="270"></canvas>
  </div>
</template>

<script>
export default {
  props: ["resultDataLocation"],

  computed: {
    location() {
      let keyLocation = [];
      for (let i = 0; i < 5; i++) {
        keyLocation.push(this.resultDataLocation[i].key);
      }
      return keyLocation;
    },
    dataCases() {
      let resultCases = [];
      for (let i = 0; i < 5; i++) {
        resultCases.push(this.resultDataLocation[i].jumlah_kasus);
      }
      return resultCases;
    }
  },

  mounted() {
    let options = {
      layout: {
        paddding: 80
      },
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 20,
            pointStyle: "circle",
            usePointStyle: true
          }
        }
      },
      scales: {
        r: {
          ticks: {
            display: false
          }
        }
      }
    };

    let data = {
      labels: this.location,
      datasets: [
        {
          label: "Laki Laki",
          data: this.dataCases,
          borderWidth: 2,
          borderRadius: 5,
          backgroundColor: ["rgba(255,0,23,0.42)"]
        }
      ]
    };
    this.$chart(this.$refs.polarArea, "polarArea", data, options);
  }
};
</script>

<style></style>
