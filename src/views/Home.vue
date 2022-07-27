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
  </div>
  <div class="title" id="sec"><h1>現代</h1></div>
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
}

var headerBg = document.getElementById('bg')
window.addEventListener('scroll',function(){
    headerBg.style.opacity = -0.1+window.pageYOffset/2000+''
})
</script>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    //overflow-x:clip; //修正X軸溢出問題(使用style)
}
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
.action{
    &:hover{
        background-image: linear-gradient(0deg, #FE8076,#FEB85D );
        color: #fff;
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