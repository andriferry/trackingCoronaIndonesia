<template>
  <v-autocomplete
    v-show="autocompleteActive"
    :items="province"
    v-model="province[0]"
    eager
    @keydown.enter="hiddenComponent"
    label="Masukan Provinsi Yang Ingin Di Cari"
    class="primaryColor--text"
    required
  ></v-autocomplete>
</template>

<script>
export default {
  props: ["autocompleteActive", "province"],

  methods: {
    hiddenComponent(e) {
      this.$emit("startEmit", false);
    }
  }
};
</script>

<style></style>
