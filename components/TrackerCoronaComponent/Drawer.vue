<template>
  <v-navigation-drawer
    class="elevation-12"
    v-model="drawer"
    color="grey lighten-5"
    mini-variant-width="80px"
    mini-variant
    stateless
    app
>
    <v-card height="100px" tile flat color="grey lighten-5" nuxt to="/">
      <v-card-text class="d-flex justify-center">
        <v-icon size="60" color="red">mdi-virus-outline</v-icon>
      </v-card-text>
    </v-card>

    <v-item-group mandatory @change="itemGroup">
      <v-container>
        <v-row class="pa-2">
          <v-col cols="12" v-for="(data, index) in items" :key="index" class="">
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'red' : 'grey lighten-5'"
                flat
                nuxt
                :to="data.link"
                @click="toggle"
              >
                <v-card-actions>
                  <v-icon
                    :color="active ? 'white' : 'primaryColor'"
                    v-text="data.icon"
                  ></v-icon>
                </v-card-actions>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      listGroup: 0,
      items: [
        { icon: "mdi-view-dashboard", link: "/" },
        {
          icon: "mdi-map-search-outline",
          link: "/search"
        },
        {
          icon: "mdi-chart-timeline-variant",
          link: "/search"
        },
        { icon: "mdi-earth", link: "/search" },
        { icon: "mdi-newspaper", link: "/search" },
        {
          icon: "mdi-information-outline",
          link: "/search"
        }
      ]
    };
  },
  methods: {
    itemGroup(value) {
      // console.log(value);
    }
  }
};
</script>

<style></style>
