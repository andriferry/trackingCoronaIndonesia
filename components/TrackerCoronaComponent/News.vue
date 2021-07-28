<template>
  <v-item-group mandatory color="primary">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="pa-0 text-decoration-none"
          v-for="(data, index) in getnews"
          :key="index"
          tag="a"
          :href="data.url"
        >
          <v-hover v-slot="{ hover }">
            <v-list-item three-line>
              <v-list-item-avatar size="100" rounded="xl">
                <v-img
                  :lazy-src="data.urlToImage"
                  eager
                  :src="data.urlToImage"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-subtitle
                  class="font-weight-bold text-body-1"
                  :class="hover ? 'red--text' : 'primaryColor--text'"
                >
                  {{ data.title }}
                </v-list-item-subtitle>

                <v-list-item-subtitle>
                  <span class="text-capitalize"
                    >{{ data.publishedAt | day(data.publishedAt) }},</span
                  >

                  <span>{{ data.publishedAt | toDate(data.publishedAt) }}</span>

                  <span>{{ data.publishedAt | month(data.publishedAt) }}</span>
                  <span>{{ data.publishedAt | year(data.publishedAt) }}</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  {{ data.content }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  props: ["news"],
  data() {
    return {
      articles: [],
      date: new Date()
    };
  },
  computed: {
    getnews() {
      let articles = [];
      for (let i = 0; i < 5; i++) {
        articles.push(this.news[i]);
      }
      return articles;
    }
  }
};
</script>

<style></style>
