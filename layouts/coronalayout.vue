<template>
  <v-app>
    <!-- navbar -->
    <TrackerCoronaComponentNavbar />
    <!-- navbar -->

    <v-main>
      <!-- Main area -->

      <div class="h-full bg-gray-50 pa-16">
        <v-container fluid>
          <nuxt />
        </v-container>
      </div>

      <!-- Main area -->
    </v-main>

    <!-- <TrackerCoronaComponentFooter />  -->
  </v-app>
</template>

<script>
export default {
  head: {
    title: "Tracker Corona"
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ]
    };
  }
};
</script>

<style></style>
