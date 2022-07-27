<template>
    <!-- 文字圖卡 : actionCard.scss -->
    <div class="container wrap justify-content-center mt-2">
      <div class="item">
        <img src="/images/296-1200x800.jpg" class="img-thumbnail">
        <div class="txt">
          <h2>概論 : 地球科學</h2>
          <p>地球氣候的最顯著特徵為它廣大的兩極地區、兩個較狹窄的溫帶地區、及廣闊的赤道熱帶和亞熱帶地區。</p>
        </div>
      </div>
      <div class="item">
        <img src="/images/340-1200x800.jpg" class="img-thumbnail">
        <div class="txt">
          <h2>概論 : 地球結構</h2>
          <p>固體地球在地質及生物過程中演化並留下原本情況的痕跡。地殼分為幾個板塊，它們在地質年代間漸漸在表面移動。</p>
        </div>
      </div>
      <div class="item">
        <img src="/images/396-1200x800.jpg" class="img-thumbnail">
        <div class="txt">
          <h2>概論 : 大氣情況</h2>
          <p>地球的大氣情況因為生命體的出現而產生了巨大轉變，並促成了穩定表面環境的生態平衡。</p>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.wrap{
    width: 100%;
}
.item{
    margin: auto;
    margin-bottom: 1vh;
    position: relative;
}
.item img{
    width: 100%;
    vertical-align: middle;
}
.item {
    .txt{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 2vh;
        background-color: rgba($color: #000000, $alpha: 0.6);
        display: flex;
        justify-content: center;
        flex-direction: column;
        opacity: 0;
        transition: opacity .5s;
    }
    &:hover {
        .txt{
            opacity: 1;
        }
        h2{
            &::after{
                width: 100%;
            }
        }
    }
    h2{
        font-size: large;
        color: #ff0;
        &::after{
            content: '';
            display: block;
            width: 0%;
            height: 2px;
            margin: 2vh auto 0;
            background-color: #ff0;
            transition: width .5s .3s;
        }
    }
    p{
        margin: 0;
        color: #fff;
        font-weight: 100;
    }
}
@media screen and (min-width:600px) {
    .wrap{
        display: flex;
    }
    .item{
        width: 50vh;
        margin: 1vh;
    }
}
</style>