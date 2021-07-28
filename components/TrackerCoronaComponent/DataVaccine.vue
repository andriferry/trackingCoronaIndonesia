<template>
  <div class="d-flex flex-column align-center">
    <v-card-title v-text="'Target Vaksinasi'"></v-card-title>

    <v-card-text class="text-h6 d-flex justify-center">
      {{ vaccineTarget.total_sasaran_vaksinasi.toLocaleString("id-ID") }}
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ["vaccine"],
  computed: {
    vaccineTarget() {
      return this.vaccine[this.vaccine.length - 1];
    }
  }
};
</script>

<style></style>
