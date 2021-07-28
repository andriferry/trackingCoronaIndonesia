<template>
  <div class="pa-2">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title
          class="font-weight-bold capitalize primaryColor--text"
        >
          <span class="text-sm" v-show="buttonPencilActive"
            >{{ firstProvince }}
          </span>
          <v-btn
            v-show="buttonPencilActive"
            class="mx-1"
            @click="dynamicalComponent"
            icon
            x-small
            color="orange darken-4"
          >
            <v-icon v-text="'mdi-circle-edit-outline'"></v-icon>
          </v-btn>

          <TrackerCoronaComponentAutocomplete
            :autocompleteActive="openAutoComplete"
            :province="allProvince"
            @startEmit="closeComponent"
          />
        </v-list-item-title>
        <v-list-item-subtitle class="capitalize"
          >berdasarkan gender
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-for="data in 2" :key="data">
      <v-list-item-content>
        <v-list-item-title class="capitalize">6</v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
        locajjs
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openAutoComplete: false,
      buttonPencilActive: true,
      allProvince: []
    };
  },
  computed: {
    firstProvince() {
      return this.allProvince[0];
    }
  },
  methods: {
    dynamicalComponent() {
      this.buttonPencilActive = false;
      this.openAutoComplete = true;
    },
    closeComponent(e) {
      this.openAutoComplete = false;
      this.buttonPencilActive = true;
    }
  },
  async fetch() {
    // await this.$axios.$get("/location/").then(result => {
    //   let { list_data } = result;

    //   list_data.forEach(element => {
    //     this.allProvince.push(element.key);
    //   });
    // });
    await this.getLocation().then(result => {
      let { list_data } = result;
      list_data.forEach(element => {
        this.allProvince.push(element.key);
      });
    });
  }
};
</script>

<style></style>
