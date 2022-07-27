<template>
  <TheSlider />
  
  <div class="main">
    <div id="bg"></div>
    <div class="shadow-b-r"></div>
    <div class="shadow-w"></div>
    <div class="title text-white" id="pic"><h1>地球概論</h1></div>
    <TheTextCard />
    <div class="title text-white" id="intro"><h1>生態系統</h1></div>
    <TheIntroCard />
    <div class="title text-white" id="inform"><h1>人類的影響</h1></div>
    <TheContent />
    <div class="title" id="sec"><h1>現代</h1></div>
  </div>
  <TheSection />
</template>

<script>
import TheSlider from '@/components/TheSlider.vue'
import TheTextCard from '@/components/TheTextCard.vue'
import TheIntroCard from '@/components/TheIntroCard.vue'
import TheContent from '@/components/TheContent.vue'
import TheSection from '@/components/TheSection.vue'
export default{
  components: { 
    TheSlider,
    TheTextCard,
    TheIntroCard,
    TheContent,
    TheSection,
  },
  mounted() {
  window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
  window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
  onScroll(e) {
    var headerBg = document.getElementById('bg')
    this.windowTop = window.top.scrollY
    headerBg.style.opacity = -0.1+this.windowTop/2000+''
    // console.log(this.windowTop);
    }
  }
}
</script>

<style scoped lang="scss">
.main{
    position: relative;
    width: 100%;
    background-color: #000;
    #bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:url(/images/993-1440x900.jpg);
        background-attachment: fixed;
    }
}
.shadow-b{
    &-r{
        content: '';
        width: 100%;
        height: 50%;
        position: absolute;
        background: linear-gradient(to bottom, #000,transparent 60%);
    }
}
.shadow-w{
    content: '';
    bottom: 0;
    width: 100%;
    height: 10%;
    position: absolute;
    background: linear-gradient(to top, #fff,transparent);
}

.title{
    position: relative;
    width: 100%;
    margin: auto;
    text-align:center;
    ::before,::after{
        content: '';
        display: block;
        height: 5px;
        width: 1em;
        flex-grow: 1;
        background-color: #aaa;
        margin: auto 1em;
    }
    h1{
        width: 100%;
        box-sizing: border-box;
        font-size: 350%;
        padding-top: .5em;
        margin-bottom: .5em;
        display: flex;
    }
}
</style>