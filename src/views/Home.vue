<template>
  <div class="gs_reveal"></div>
  <TheSlider />
  <div class="main">
    <div id="bg"></div>
    <div class="shadow-b-r"></div>
    <div class="shadow-w"></div>
    <div class="title text-white gs_reveal" id="pic"><h1>地球概論</h1></div>
    <TheTextCard />
    <div class="title text-white gs_reveal" id="intro"><h1>生態系統</h1></div>
    <TheIntroCard />
    <div class="title text-white gs_reveal" id="inform"><h1>人類的影響</h1></div>
    <TheContent />
    <div class="title gs_reveal" id="sec"><h1>現代</h1></div>
  </div>
  <TheSection />
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TheSlider from "@/components/TheSlider.vue";
import TheTextCard from "@/components/TheTextCard.vue";
import TheIntroCard from "@/components/TheIntroCard.vue";
import TheContent from "@/components/TheContent.vue";
import TheSection from "@/components/TheSection.vue";
export default {
  name: "home",
  components: {
    TheSlider,
    TheTextCard,
    TheIntroCard,
    TheContent,
    TheSection,
  },
  methods: {
    onScroll() {
      var headerBg = document.getElementById("bg");
      this.windowTop = window.top.scrollY;
      headerBg.style.opacity = -0.1 + this.windowTop / 2000 + "";
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
  background-color: rgba($color: #000000, $alpha: 1);
  #bg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
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
