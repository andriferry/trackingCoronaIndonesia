<template>
  <div>
    <v-app-bar
      color="white"
      app
      tile
      elevation="2"
      fixed
      height="100px"
      class="flex justify-center px-10"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="text-capitalize primaryColor--text font-weight-bold flex align-center"
        >covid 19 Tracker Indonesia
        <v-icon size="60" color="red">mdi-virus-outline</v-icon>
      </v-toolbar-title>

      Dark Mode side
    </v-app-bar>

    <TrackerCoronaComponentDrawer />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
