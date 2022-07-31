<script>
import RwvHeader from "@/components/TheNavbar.vue";
import RwvFooter from "@/components/TheFooter.vue";
export default {
  name: "App",
  components: {
    RwvHeader,
    RwvFooter,
  },
};
</script>

<template>
  <div id="app">
    <RwvHeader />
    <router-view></router-view>
    <RwvFooter />
  </div>
</template>
