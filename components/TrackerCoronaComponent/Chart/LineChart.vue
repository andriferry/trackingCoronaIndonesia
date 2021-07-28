<template>
  <div class="pa-3">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title
          class="capitalize font-weight-bold primaryColor--text"
          >Statistik positif Covid 19 Selama 7 Hari
        </v-list-item-title>
        <v-list-item-subtitle class="capitalize"
          >Lihat statistik lainnya di sini
          <NuxtLink to="/statistic">
            <v-hover v-slot="{ hover }">
              <v-icon
                x-small
                :color="hover ? 'primaryColor' : 'orange darken-4'"
              >
                mdi-open-in-new
              </v-icon>
            </v-hover>
          </NuxtLink>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <canvas id="lineChart" ref="lineChart" class="w-52 h-62 block"></canvas>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: ["dataPerDays"],

  methods: {
    getPerDays() {
      let data = [];
      let namesDay = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

      for (let i = 0; i < 7; i++) {
        let getData = new Date(this.dataPerDays[i].key_as_string);
        data.push(namesDay[getData.getDay()]);
      }

      return data;
    }
  },

  computed: {
    getDataTotal() {
      let data = [];
      for (let i = 0; i < 7; i++) {
        data.push(this.dataPerDays[i].jumlah_positif.value);
      }
      return data;
    }
  },
  mounted() {
    let options = {
      layout: {
        padding: 10
      },
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        xAxis: {
          grid: {
            display: false
          }
        }
      }
    };

    const data = {
      labels: this.getPerDays(),
      datasets: [
        {
          label: "",
          data: this.getDataTotal,
          fill: false,
          borderColor: "rgb(255,0,23)",
          tension: 0.4,
          xAxisID: "xAxis",
          pointRadius: 6,
          pointBorderWidth: 2,
          pointHoverRadius: 8,
          pointBackgroundColor: "white",
          pointHoverBackgroundColor: "red",
          pointHoverBorderColor: "white"
        }
      ]
    };

    this.$chart(this.$refs.lineChart, "line", data, options);
  }
};
</script>

<style></style>
