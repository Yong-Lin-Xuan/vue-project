<template>
  <div class="main">
    <div id="bg"></div>
  </div>
  <TheSection />
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import TheSlider from "@/components/TheSlider.vue";
import TheTextCard from "@/components/TheTextCard.vue";
import TheIntroCard from "@/components/TheIntroCard.vue";
import TheContent from "@/components/TheContent.vue";
import TheSection from "@/components/TheSection.vue";
export default {
  name: "Animate",
  components: {
    TheSlider,
    TheTextCard,
    TheIntroCard,
    TheContent,
    TheSection,
  },
  methods: {
    onScroll(e) {
      var headerBg = document.getElementById("bg");
      this.windowTop = window.top.scrollY;
      headerBg.style.opacity = -0.1 + this.windowTop / 2000 + "";
    },
    aproposAnimation() {
      // console.log(ScrollTrigger.getAll());
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
            duration: 5,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto",
          }
        );
      };
      gsap.utils.toArray(".gs_reveal").forEach(function (el) {
        hide(el);
        ScrollTrigger.create({
          trigger: el,
          onEnter: function () {
            animateFrom(el);
          },
          onEnterBack: function () {
            animateFrom(el, -1);
          },
          onLeave: function () {
            hide(el);
          },
          onLeaveBack: function () {
            hide(el);
          },
        });
      });
    },
  },
  mounted() {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    this.aproposAnimation();
    window.addEventListener("scroll", this.onScroll);
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(/images/993-1440x900.jpg);
    background-attachment: fixed;
  }
}
.shadow-b {
  &-r {
    content: "";
    width: 100%;
    height: 50%;
    position: absolute;
    background: linear-gradient(to bottom, #000, transparent 60%);
  }
}
.shadow-w {
  content: "";
  bottom: 0;
  width: 100%;
  height: 10%;
  position: absolute;
  background: linear-gradient(to top, #fff, transparent);
}

.title {
  position: relative;
  width: 100%;
  margin: auto;
  text-align: center;
  ::before,
  ::after {
    content: "";
    display: block;
    height: 5px;
    width: 1em;
    flex-grow: 1;
    background-color: #aaa;
    margin: auto 1em;
  }
  h1 {
    width: 100%;
    box-sizing: border-box;
    font-size: 350%;
    padding-top: 0.5em;
    margin-bottom: 0.5em;
    display: flex;
  }
}
</style>
