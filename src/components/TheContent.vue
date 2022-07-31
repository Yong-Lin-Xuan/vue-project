<template>
  <div class="container">
    <div class="features">
      <div
        :class="
          'feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone' +
          [post.id % 2 == 0 ? '' : ' reverse']
        "
        v-for="(post, index) in posts"
        :key="index"
        :data-index="index"
      >
        <div
          :class="
            'featured-image-container ipsGrid_span5 gs_reveal' +
            [post.id % 2 == 0 ? ' gs_reveal_fromLeft' : ' gs_reveal_fromRight']
          "
        >
          <div class="card">
            <img :src="post.img" alt="" />
          </div>
        </div>
        <div :class="'ipsGrid_span7' + [post.id % 2 == 0 ? ' ipsType_left' : ' ipsType_right']">
          <h2 class="heading_large gs_reveal">{{ post.title }}</h2>
          <p class="gs_reveal text-white">{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
console.log();
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "人類影響自然的規模",
          body: "雖然現在人類在全球生物質能只佔0.5%，人類對自然的影響卻相對來說要大得多。因為人為影響規模之大，除非在極端情況下，自然與人工環境的界線均變得含糊。",
          img: "/images/521-1200x800.jpg",
        },
        {
          id: 2,
          title: "人類影響自然的各種活動",
          body: "人類利用自然作休閒和經濟活動。取得天然資源作工業用途，是世界經濟系統的一個主要部分。部分活動會被作為生計及休閒目的，例如打獵和捕魚等。農業在前9千年開始發展。",
          img: "/images/523-1200x800.jpg",
        },
        {
          id: 3,
          title: "物種間的連繫",
          body: "每種生物都與其他形成環境的元素有一個連續的關係。物種在生態系統中與其他物種在食物鏈中互相聯繫及依賴，並在她們及環境之間交換能量與物質。",
          img: "/images/447-1200x800.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
/* Styles from the GreenSock website */
body {
  font-weight: 300;
}
.ipsType_right {
  text-align: right;
}
.ipsType_center {
  text-align: center;
}
.ipsSpacer_bottom_double {
  margin-bottom: 30px;
}
.ipsGrid {
  display: inline-block;
  display: flex;
  flex-wrap: wrap;
}
.reverse {
  flex-direction: row-reverse;
}
.ipsGrid::before,
.ipsGrid::after {
  display: table;
  content: "";
  line-height: 0;
}
.ipsGrid > [class*="ipsGrid_span"] {
  display: block;
  width: 100%;
  min-height: 30px;
  box-sizing: border-box;
}
.ipsGrid > .ipsGrid_span5 {
  width: 40.42553191489362%;
  z-index: 1;
}
.ipsGrid > .ipsGrid_span7 {
  width: 57.44680851063829%;
  padding: 2%;
  z-index: 1;
}
.ipsGrid > [class*="ipsGrid_span"] {
  float: left;
}
.ipsGrid > [class*="ipsGrid_span"]:first-child {
  margin-left: 0;
}
.feature {
  display: flex;
  align-items: center;
}
.card {
  margin-bottom: 30px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 1px 1px 5px 1px #cccccc;
  /*   transition: 0.3s; */
}
.featured-image-container .card {
  padding: 10px;
}
h2.heading_large {
  background-color: rgba($color: #cccccc, $alpha: 0.5);
  padding: 2%;
  border-radius: 8px;
  font-size: 1.8em;
}
img {
  max-width: 100%;
}

.header-section {
  margin: 200px auto;
}
.action {
  &:hover {
    background-image: linear-gradient(0deg, #fe8076, #feb85d);
    color: #fff;
  }
}
</style>
