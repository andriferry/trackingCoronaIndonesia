<template>
  <v-container fluid>
    <h2 class="text-h4 pb-5 capitalize font-weight-medium primaryColor--text">
      Dashboard
    </h2>

    <v-row>
      <v-col>
        <v-card class="pa-4 pt-0" color="transparent" elevation="0">
          <v-row>
            <v-col v-for="(data, index) in dataStat" :key="index">
              <v-card rounded="lg">
                <v-card-text class="d-flex pt-2 pb-0 justify-center">
                  <v-icon x-large v-text="data.emoticon"></v-icon>
                </v-card-text>

                <v-card-title
                  class="text-capitalize text-subtitle-1 font-weight-bold px-0 primaryColor--text d-flex justify-center"
                  v-text="data.title"
                >
                </v-card-title>

                <v-card-subtitle
                  class="d-flex font-weight-medium justify-center primaryColor--text"
                >
                  {{ data.total.toLocaleString("id-ID") }}
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>

          <v-card rounded="lg" class="pa-2 my-5">
            <v-card-title
              class="capitalize font-weight-normal primayrColor--text text-h6"
              >Data total covid 19 di beberapa provinsi di
              indonesia</v-card-title
            >
            <v-card-subtitle class="pa-10">
              <TrackerCoronaComponentChartPolarArea
                :resultDataLocation="locationResult"
              />
            </v-card-subtitle>
          </v-card>
        </v-card>
      </v-col>
      <v-col>
        <v-card min-height="95%" rounded="lg" max-height="95%">
          <v-card-text>
            <TrackerCoronaComponentNews :news="newsResult" />
          </v-card-text>

          <v-card-actions class="px-6">
            <NuxtLink
              to="/allNews"
              class="capitalize font-weight-bold blue--text pa-1"
            >
              <v-hover v-slot="{ hover }" open-delay="20" close-delay="50">
                <v-btn
                  text
                  class="text-xl tracking-widest"
                  :class="hover ? 'red white--text' : false"
                >
                  All news
                  <v-icon :color="hover ? 'white' : 'orange darken-4'" right>
                    mdi-open-in-new
                  </v-icon>
                </v-btn>
              </v-hover>
            </NuxtLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card rounded="lg" min-height="275" max-height="275" class="">
            <TrackerCoronaComponentChartLineChart :dataPerDays="countDay" />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card rounded="lg" min-height="275" max-height="275">
            <TrackerCoronaComponentAddedCases :addedCases="addedEveryday" />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="" min-height="275" max-height="275" rounded="lg">
            <TrackerCoronaComponentDataByLocation />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  loading: {
    color: "red",
    height: "5px"
  },
  async asyncData({ $axios }) {
    function vaccineTarget() {
      return $axios.$get("/vaksinasi/");
    }
    function getTotalCorona() {
      return $axios.$get("/update/");
    }

    function getNews() {
      return $axios.$get("/news/", {
        headers: {
          Authorization: process.env.NEWS_TOKEN
        },
        params: {
          q: "Corona",
          language: "id"
        }
      });
    }

    function polarAreaLocation() {
      return $axios.$get("/location/");
    }

    const [pasien, news, location, vaccine] = await Promise.all([
      getTotalCorona(),
      getNews(),
      polarAreaLocation(),
      vaccineTarget()
    ]);

    return {
      totalPasien: pasien.update.total,
      countDay: pasien.update.harian,
      newsResult: news.articles,
      locationResult: location.list_data,
      targetVaccine: vaccine.monitoring,
      addedEveryday: pasien.update.penambahan
    };
  },

  layout: "coronalayout",

  mounted() {
    this.dataStat[0].total = this.totalPasien.jumlah_positif;
    this.dataStat[1].total = this.totalPasien.jumlah_sembuh;
    this.dataStat[2].total = this.totalPasien.jumlah_meninggal;
  },

  data() {
    return {
      dataStat: [
        {
          title: "total positif",
          emoticon: "mdi-emoticon-sad-outline",
          total: ""
        },
        {
          title: "total sembuh",
          emoticon: "mdi-emoticon-happy-outline",
          total: ""
        },
        {
          title: "total meninggal",
          emoticon: "mdi-emoticon-cry-outline",
          total: ""
        }
      ]
    };
  }
};
</script>

<style></style>
