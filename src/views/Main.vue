<template>
  <div class="main">
    <div id="bg"></div>
    <TheContent />
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TheContent from "@/components/TheContent.vue";
export default {
  name: "second",
  components: {
    TheContent,
  },
  methods: {
    onScroll(e) {
      var headerBg = document.getElementById("bg");
      this.windowTop = window.top.scrollY;
      headerBg.style.opacity = 0.2 + this.windowTop / 1000 + "";
    },
    aproposAnimation() {
      var n = true;
      gsap.registerPlugin(ScrollTrigger);
      const hide = (el) => {
        gsap.to(el, { autoAlpha: 0, overwrite: "auto" });
      };
      const animateFrom = (el, direction) => {
        direction = direction || 1;
        var x = 0,
          y = direction * 100;
        if (el.classList.contains("gs_reveal_fromLeft")) {
          x = -100;
          y = 0;
        } else if (el.classList.contains("gs_reveal_fromRight")) {
          x = 100;
          y = 0;
        }
        gsap.fromTo(
          el,
          { x: x, y: y, autoAlpha: 0 },
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            duration: 3,
            ease: "expo",
          }
        );
      };
      gsap.utils.toArray(".gs_reveal").forEach(function (el) {
        ScrollTrigger.create({
          trigger: el,
          onEnter: function () {
            animateFrom(el, n);
          },
          onEnterBack: function () {
            animateFrom(el, -1);
          },
          onLeave: function () {
            hide(el);
            if (n) {
              ScrollTrigger.refresh();
              n = !n;
            }
          },
          onLeaveBack: function () {
            hide(el);
          },
        });
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    ScrollTrigger.getAll().forEach((st) => st.kill());
    this.aproposAnimation();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
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
