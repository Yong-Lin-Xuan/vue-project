<template>
  <div class="main">
    <div id="bg"></div>
    <TheContent></TheContent>
    <TheContent />
    <TheContent />
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import TheContent from "@/components/TheContent.vue";
export default {
  components: {
    TheContent,
  },
  methods: {
    onScroll() {
      var headerBg = document.getElementById("bg");
      this.windowTop = window.top.scrollY;
      headerBg.style.opacity = 0.2 + this.windowTop / 2000;
    },
    refresh() {
      ScrollTrigger.refresh();
    },
    scrollAnimation() {
      gsap.timeline().from("#demo", { y: 160, duration: 1.5, opacity: 0, ease: "back" });
    },
  },
  mounted() {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    window.addEventListener("scroll", this.refresh, { once: true });
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped lang="scss">
.main {
  position: relative;
  width: 100%;
  background-color: #000;
  #bg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background: url(/images/993-1440x900.jpg);
    background-attachment: fixed;
  }
}
</style>
