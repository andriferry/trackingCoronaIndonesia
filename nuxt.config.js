import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - trackingCoronaIndonesia",
    title: "trackingCoronaIndonesia",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/mixins.js", "~/plugins/chart.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/dotenv"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/proxy"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    credentials: false,
    common: {
      Accept: "application/json, text/plain, */*",
      "Access-Control-Allow-Origin": "*"
    }
  },

  proxy: {
    "/update": {
      target: `${process.env.dataCovidUrl}/update.json`,
      pathRewrite: { "^/update/": "" }
    },
    "/location": {
      target: `${process.env.dataCovidUrl}/prov.json`,
      pathRewrite: { "^/location/": "" }
    },
    "/news": {
      target: `${process.env.newsUrl}/everything`,
      pathRewrite: { "^/news/": "" }
    },
    "/vaksinasi": {
      target: `${process.env.vaksinasiUrl}`,
      pathRewrite: { "^/vaksinasi/": "" }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primaryColor: "#444",
          instagramColor: "#fd1d1d",
          secondaryColor: "#00BFA5",
          greenColor100: "#def7ec",
          greenColor200: "#34D399",
          greenColor250: "#A7F3D0",
          grayColor100: "#f4f5f7",
          grayColor200: "#E5E7EB",
          grayColor300: "#e8e1df",
          redColor100: "#FEE2E2",
          blueColor100: "#BFDBFE",
          yellowColor100: "#fcf3cf",
          purpleColor100: "#e8daef"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
