<template>
    <!-- 介紹圖卡 : introduceCard.scss -->
    <div class="container wrap-i justify-content-center">
      <div class="item-i" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div data-aos="flip-left">
          <img src="/images/430-1200x800.jpg" alt="">
          <div class="txt">
            <h2>生態系統概念的萌芽</h2>
            <p>所有形態的生物都會和她們存在的環境及其他生命體互動。在二十世紀此假設引發了「生態系統」的概念，並定義其為在任何情況下的生物與環境間的相互作用。</p>
          </div>
        </div>
      </div>
      <div class="item-i" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div data-aos="flip-left">
          <img src="/images/435-1200x800.jpg" alt="">
          <div class="txt">
            <h2>生態系統的組成</h2>
            <p>生態系統由無生命的和有生命的部分組成，並已一個互相關聯的方式運作。其結構和成分受到眾多相關的環境因素所影響。這些因素的改變可以引起生態系統的轉變。部分較為重要的構成要素有：土壤、大氣層、太陽輻射、水及生物。</p>
          </div>
        </div>
      </div>
      <div class="item-i" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div data-aos="flip-left">
          <img src="/images/447-1200x800.jpg" alt="">
          <div class="txt">
            <h2>物種間的連繫</h2>
            <p>每種生物都與其他形成環境的元素有一個連續的關係。物種在生態系統中與其他物種在食物鏈中互相聯繫及依賴，並在她們及環境之間交換能量與物質。</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.wrap-i{
    width: 100%;
}
.item-i{
    text-align: center;
    transform: translateY(0px);
    transition: .5s;
    margin: auto;
    margin-bottom: 1vh;
    //border: 1px solid #888;
    img{
        width: 100%;
        vertical-align: middle;
    }
    h2{
        border-bottom: 2px solid #888;
        padding-bottom: .3em;
        margin-bottom: .4em;
        font-weight: 900;
        color: #fff;
    }
    p{
        line-height: 1.6;
        font-weight: 300;
        color: #fff;
    }
    &:hover{
        transform: translateY(-50px);
        h2{
            color: #000;
            border-bottom-color: #000;
        }
        p{
            color: #000;
        }
        .txt{
            background-image: linear-gradient(0deg, #FE8076,#FEB85D );
            &::before{
            border-left: 25vh solid #222;
            border-right: 25vh solid #222;
            }
        }
    }
    .txt{
        padding: 2vh;
        border-radius: 0 0 5em;
        background-color: #111;
        &::before{
            content: '';
            position: absolute;
            //三角
            /*border-top: 10vh solid transparent;
            border-left: 25vh solid #000;
            border-right: 25vh solid #000;
            transform: translateY(-100%);*/
        }
    }
}
@media screen and (min-width:600px) {
    .wrap-i{
        display: flex;
    }
    .item-i{
        width: 50vh;
        margin: 1vh;
    }
}
</style>