<template>
  <div id="app">
    <!-- temp tag to test loading states -->
    <a class="force-load-test" href="#" @click="forceLoad()"></a>
    <the-logo class="the-logo" rel="preload"></the-logo>
    <the-header class="the-header"></the-header>
    <the-splash-page class="the-splash-page" rel="preload"></the-splash-page>
    <the-tour-dashboard class="the-tour-dashboard"></the-tour-dashboard>
    <map-dashboard mapId="main-map" class="main-map-dashboard"></map-dashboard>
    <the-footer class="the-footer"></the-footer>
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheLogo from "@/components/TheLogo.vue";
import MapDashboard from "@/components/MapDashboard.vue";
import TheTourDashboard from "@/components/TheTourDashboard.vue";
import TheSplashPage from "@/components/TheSplashPage.vue";

export default {
  name: "app",
  components: {
    MapDashboard,
    TheFooter,
    TheHeader,
    TheLogo,
    TheSplashPage,
    TheTourDashboard
  },
  methods: {
    /**
     * TEMPORARY
     * Forces the state of the app from loading to loaded
     */
    forceLoad() {
      this.$store.dispatch("finishLoadingApp");
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

#app {
  padding: absolute;
  top: 0;
  left: 0;
  width: $app-width;
  height: $app-height;

  font-family: $standard-font-family;
}

.the-logo {
  position: absolute;
  top: 0;
  left: 0;
  height: $header-height;
  z-index: z("logo");
}

.the-header {
  position: absolute;
  top: 0;
  left: 0;
  width: $app-width;
  height: $header-height;
  z-index: z("site-header");

  background: $light-tan;
}

.the-tour-dashboard {
  z-index: z("tour-dashboard");
}

.main-map-dashboard {
  position: absolute;
  top: $header-height;
  bottom: $footer-height;
  left: 0;
  width: $app-width;

  z-index: z("main-map");
}

.the-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: $app-width;
  height: $footer-height;
  z-index: z("site-footer");

  background: $light-tan;
}

.the-splash-page {
  z-index: z("splash-page");
}

// Temporary
.force-load-test {
  position: fixed;
  top: 0;
  left: 50vw;
  width: 15px;
  height: 15px;
  background: transparent;
  outline: 0.5px solid black;

  z-index: z("test-object");
}
</style>
