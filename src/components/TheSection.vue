<template>
  <section class="mb-5" style="background-color: white">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4 gs_reveal" v-for="post in posts">
          <div class="card">
            <img :src="post.img" class="card-img-top" alt="..." />
            <div class="card-body bg-dark" style="height: 10em">
              <h5 class="card-title text-white">{{ post.title }}</h5>
              <p class="card-text text-white">{{ post.body }}</p>
            </div>
            <ul class="list-group list-group-flush" v-for="item in post.list">
              <li class="list-group-item">{{ item }}</li>
            </ul>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              了解更多
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "自然與科技",
          body: "不難想像，經歷了長達幾個世紀的對抗後，自然與科技之間的這場決鬥即將在21世紀打出關鍵一拳。",
          list: ["高速雲計算服務", "記錄野生動物行為的新型設備", "精確氣候變化數據"],
          img: "/images/504-1200x800.jpg",
        },
        {
          id: 2,
          title: "自然靈感",
          body: "以仿生學為例在這一領域，自然的設計元素和流程會成為新材料、新設備和新工具的模板。",
          list: [
            "蜘蛛網的結構設計的新生兒外用繃帶",
            "效仿病毒開發的一種自我裝配的納米粒子",
            "超高效反射式彩色電子閱讀器屏幕",
          ],
          img: "/images/583-1200x800.jpg",
        },
        {
          id: 3,
          title: "綠色城市",
          body: "自然不僅僅是可愛的小狗和壯觀的瀑布，科技還可以幫助人們應對它殘酷的一面。",
          list: [
            "科技與自然融合的典範",
            "房頂和牆上栽種各種作物",
            "利用多餘的空間栽培藻類生物燃料",
            "通過嫁接生物發光基因,把樹木變身為路燈",
          ],
          img: "/images/206-1200x800.jpg",
        },
      ],
    };
  },
};
</script>
