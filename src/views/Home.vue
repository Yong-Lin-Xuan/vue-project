<template>
  <TheSlider />
  <div class="main">
    <div id="bg"></div>
    <div class="shadow-b-r"></div>
    <div class="shadow-w"></div>
    <div class="flex">
      <img
        ref=""
        class="top-left hs"
        src="@/assets/img/undraw_woman_re_afr8.svg"
        style="max-height: 10em"
      />
      <div class="title text-white back" id="pic"><h1>地球概論</h1></div>
    </div>
    <TheTextCard />
    <div class="flex" style="justify-content: end">
      <img
        class="top-right hss"
        src="../assets/img/undraw_traveling_2vx4.svg"
        style="max-height: 10em"
      />
      <div class="title text-white back" id="intro"><h1>生態系統</h1></div>
    </div>
    <TheIntroCard />
    <div class="title text-white back" id="inform"><h1>人類的影響</h1></div>
    <TheContent />
    <div class="title back" id="sec"><h1>現代</h1></div>
  </div>
  <TheSection />
</template>

<!-- 
    var start, end;
    start = new Date().getTime();
    end = new Date().getTime();
    console.log(end - start); 
-->

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import TheSlider from "@/components/TheSlider.vue";
import TheTextCard from "@/components/TheTextCard.vue";
import TheIntroCard from "@/components/TheIntroCard.vue";
import TheContent from "@/components/TheContent.vue";
import TheSection from "@/components/TheSection.vue";
export default {
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
      headerBg.style.opacity = -0.1 + this.windowTop / 2000;
    },
    refresh() {
      // ScrollTrigger.refresh();
    },
    scrollAnimation() {
      const { hs, hss } = this.$refs;
      gsap.utils.toArray(".back").forEach(function (el) {
        var x = 0;
        if (el.classList.contains("back_left")) {
          x = -100;
        } else if (el.classList.contains("back_right")) {
          x = 100;
        }
        ScrollTrigger.create({
          trigger: el,
          onEnter() {
            gsap.from(el, { x: x, y: 100, duration: 1.5, autoAlpha: 0, ease: "back" });
          },
          onEnterBack() {
            gsap.from(el, { x: x, y: -100, duration: 1.5, autoAlpha: 0, ease: "back" });
          },
        });
      });
      gsap.from(".hs", {
        scrollTrigger: {
          trigger: ".hs",
          scrub: 3,
          start: "top 90%",
          end: "bottom 30%",
          markers: true,
        },
        x: -300,
      });
      gsap.from(".hss", {
        scrollTrigger: {
          trigger: ".hss",
          scrub: 3,
          start: "top 90%",
          end: "bottom 30%",
          markers: true,
        },
        x: 300,
      });
    },
  },
  mounted() {
    var start, end;
    start = new Date().getTime();
    ScrollTrigger.getAll().forEach((st) => st.kill());
    this.scrollAnimation();
    window.addEventListener("scroll", this.refresh, { once: true });
    window.addEventListener("scroll", this.onScroll);
    end = new Date().getTime();
    console.log(end - start);
  },
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
}
.top {
  &-left {
    position: absolute;
    z-index: 1;
  }
  &-right {
    position: absolute;
    z-index: 1;
  }
}
.main {
  overflow-x: hidden;
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
