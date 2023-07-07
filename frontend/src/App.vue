<script>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>

<template>
  <Sidebar />
  <RouterView />
</template>
