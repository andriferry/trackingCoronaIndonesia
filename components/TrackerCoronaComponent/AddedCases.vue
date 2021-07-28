<template>
  <div class="pa-2">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold primaryColor--text"
          >Penambahan Kasus</v-list-item-title
        >
        <v-list-item-subtitle class="capitalize"
          >Update Pada
          <span>{{ addedCases.created | day(addedCases.created) }},</span>
          <span>{{ addedCases.created | toDate(addedCases.created) }}</span>
          <span>{{ addedCases.created | month(addedCases.created) }}</span>
          <span>{{ addedCases.created | year(addedCases.created) }}</span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-for="(data, index) in dataCases" :key="index">
      <v-list-item-content>
        <v-list-item-title class="capitalize">{{ data.key }}</v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
        {{ data.total.toLocaleString("id-ID") }}
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: ["addedCases"],
  data() {
    return {
      dataCases: [
        { key: "Jumlah Positif", total: this.addedCases.jumlah_positif },
        {
          key: "Jumlah di rawat",
          total: this.addedCases.jumlah_dirawat
        },
        { key: "Jumlah Sembuh", total: this.addedCases.jumlah_sembuh },
        { key: "Jumlah meningggal", total: this.addedCases.jumlah_meninggal }
      ]
    };
  }
};
</script>

<style></style>
