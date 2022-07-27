<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import RwvHeader from "@/components/navbar.vue"
import RwvFooter from "@/components/TheFooter.vue"
export default {
  name: "App",
  components: {
    RwvHeader,
    RwvFooter
  }
};
</script>

<template>
  <div id="app">
    <RwvHeader />
    <router-view></router-view>
    <RwvFooter />
  </div>
</template>
