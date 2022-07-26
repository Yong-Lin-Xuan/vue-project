<template>
    <div class="home">
      <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <div class="shadow-b"></div>
            <img src="../../images/125-1200x800.jpg" class="d-block w-100 banner" alt="...">
            <div class="carousel-caption d-md-block">
              <div class="banner-txt">
                <h1>與大自然共舞</h1>
                <h2>不斷運行演化的宇宙萬物</h2>
                <p>在地球上最初的生物是微生物，而她們維持著地球唯一的生物形態的地位直到十億年前多細胞生物的出現才告終結。</p>
                <button class="btn btn-primary btn-lg ms-auto mb-2 mb-lg-0 me-2" type="button">訂閱</button>
              </div>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="3000">
            <div class="shadow-b"></div>
            <img src="../../images/204-1200x800.jpg" class="d-block w-100 banner" alt="...">
            <div class="carousel-caption d-md-block">
              <h5>兩者的分野</h5>
              <p>植物與動物的分野並不明顯，有部分分類的生命在她們兩者之間。</p>
            </div>
          </div>

          <div class="carousel-item">
            <div class="shadow-b"></div>
            <img src="../../images/208-1200x800.jpg" class="d-block w-100 banner" alt="...">
            <div class="carousel-caption d-md-block">
              <h5>地區區系</h5>
              <p>在眾多植物分類方法中，地區區系依研究目的的不同可以包括在上一個紀元的植物殘餘物形成的化石植物。</p>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>
<script>
  export default{
    name: 'Home',
  }
</script>