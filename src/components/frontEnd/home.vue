<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="../../assets/img/loading.svg" alt="" />
      </template>
    </loading>
    <!--banner-->
    <div class="banner container px-0 mb-4">
      <Slick :options="bannerOptions" ref="slick">
        <div class="bannerimg1">
          <h2 class="display-4 text-white text-center pt-5 mt-5">
            <strong>新貨上市</strong>
          </h2>
        </div>
        <div class="bannerimg2"></div>
      </Slick>
    </div>
    <!--category-->
    <div class="category container px-0 mb-5">
      <h3 class="h4 font-weight-bolder mb-4 px-2">遊戲分類</h3>
      <div class="row px-3 mx-0">
        <div class="col-sm-6 col-md-3">
          <router-link
            :to="{
              path: '/product',
              query: { productCategory: '兒童' },
            }"
            href="#"
            class="category-items d-flex align-items-center justify-content-center btn border rounded py-2 mb-2"
          >
            <img src="../../assets/img/child.png" alt="" />
            <h4 class="h5 m-0 ml-1">兒童遊戲</h4>
          </router-link>
        </div>
        <div class="col-sm-6 col-md-3">
          <router-link
            :to="{
              path: '/product',
              query: { productCategory: '派對' },
            }"
            href="#"
            class="category-items d-flex align-items-center justify-content-center btn border rounded py-2 mb-2"
          >
            <img src="../../assets/img/party.png" alt="" />
            <h4 class="h5 m-0 ml-1">派對遊戲</h4>
          </router-link>
        </div>
        <div class="col-sm-6 col-md-3">
          <router-link
            :to="{
              path: '/product',
              query: { productCategory: '策略' },
            }"
            href="#"
            class="category-items d-flex align-items-center justify-content-center btn border rounded py-2 mb-2"
          >
            <img src="../../assets/img/sword.png" alt="" />
            <h4 class="h5 m-0 ml-1">策略遊戲</h4>
          </router-link>
        </div>
        <div class="col-sm-6 col-md-3">
          <router-link
            :to="{
              path: '/product',
              query: { productCategory: '推理' },
            }"
            href="#"
            class="category-items d-flex align-items-center justify-content-center btn border rounded py-2 mb-2"
          >
            <img src="../../assets/img/mind.png" alt="" />
            <h4 class="h5 m-0 ml-2">推理遊戲</h4>
          </router-link>
        </div>
      </div>
    </div>
    <!--topgames-->
    <div class="topgames container px-0 mb-5">
      <h3 class="h4 font-weight-bolder mb-4 px-2">熱門遊戲</h3>
      <Slick :options="topgamesOptions" v-if="topProducts.length">
        <div v-for="item in topProducts" :key="item.id">
          <div class="card shadow-sm m-2">
            <div
              style="height: 180px; background-repeat:no-repeat; background-position: center"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
            <div class="card-body">
              <h5 class="card-title">
                {{ item.title }}
              </h5>
              <div class="d-flex justify-content-between align-items-baseline">
                <div
                  class="h4 text-funOrange"
                  v-if="item.price == item.origin_price"
                >
                  ${{ item.origin_price }} 元
                </div>
                <del
                  class="h6 text-funOrange"
                  v-if="item.price !== item.origin_price"
                  >{{ item.origin_price }} 元</del
                >
                <div
                  class="h4 text-funDarkOrange"
                  v-if="item.price !== item.origin_price"
                >
                  ${{ item.price }} 元
                </div>
              </div>
            </div>
            <div class="card-footer d-flex">
              <button
                type="button"
                class="btn btn-funOrange w-100 btn-sm text-light"
                @click="getProduct(item.id)"
              >
                馬上看看
              </button>
            </div>
          </div>
        </div>
      </Slick>
    </div>
    <!--coupon-->
    <div
      class="coupon container table-funGray d-flex justify-content-center align-items-center mb-4"
    >
      <img src="../../assets/img/party2.png" alt="" />
      <div class="coupon-text">
        <h4 class="text-secondary">歡慶開幕</h4>
        <p class="text-secondary">
          全館商品結帳時，輸入<span class="text-funOrange"> fungame77 </span
          >即可享有7折優惠!!
        </p>
      </div>
    </div>
    <!--newgames-->
    <div class="newgames container px-0 mb-5">
      <h3 class="h4 font-weight-bolder mb-4 px-2">最新商品</h3>
      <Slick :options="newgamesOptions" v-if="newProducts.length">
        <div v-for="item in newProducts" :key="item.id">
          <div class="card shadow-sm m-2">
            <div
              style="height: 180px; background-repeat:no-repeat; background-position: center"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
            <div class="card-body">
              <h5 class="card-title">
                {{ item.title }}
              </h5>
              <div class="d-flex justify-content-between align-items-baseline">
                <div
                  class="h4 text-funOrange"
                  v-if="item.price == item.origin_price"
                >
                  ${{ item.origin_price }} 元
                </div>
                <del
                  class="h6 text-funOrange"
                  v-if="item.price !== item.origin_price"
                  >{{ item.origin_price }} 元</del
                >
                <div
                  class="h4 text-funDarkOrange"
                  v-if="item.price !== item.origin_price"
                >
                  ${{ item.price }} 元
                </div>
              </div>
            </div>
            <div class="card-footer d-flex">
              <button
                type="button"
                class="btn btn-funOrange w-100 btn-sm text-light "
                @click="getProduct(item.id)"
              >
                馬上看看
              </button>
            </div>
          </div>
        </div>
      </Slick>
    </div>
    <!--article-->
    <div class="article container px-0 mb-5">
      <h3 class="h4 font-weight-bolder mb-4 px-2">相關文章</h3>
      <div class="row justify-content-around mx-0">
        <div class="col-md-5 border shadow  px-0">
          <div class="article-img"></div>
          <div class="article-text p-3">
            <h4 class="h5">
              新手一定要知道!《狼人殺》快速上手的五個 小技巧!!
            </h4>
            <a href="#">繼續閱讀...</a>
          </div>
        </div>
        <div class="col-md-5 border shadow px-0">
          <div class="article2-img"></div>
          <div class="article-text p-3">
            <h4 class="h5">
              璀璨寶石》最詳細的規則說明，讓你一次 搞懂遊戲機制。
            </h4>
            <a href="#">繼續閱讀...</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Slick from "vue-slick";

export default {
  components: {
    Slick,
  },
  data() {
    return {
      bannerOptions: {
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        prevArrow:
          "<button class='btn-l btn'><i class='fas fa-chevron-left fa-2x'></i></button>",
        nextArrow:
          "<button class='btn-r btn'><i class='fas fa-chevron-right fa-2x'></i></button>",
      },
      topgamesOptions: {
        slidesToShow: 4,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow:
          "<button class='btn-topl btn btn-funGray'><i class='fas fa-chevron-left fa-lg'></i></button>",
        nextArrow:
          "<button class='btn-topr btn btn-funGray'><i class='fas fa-chevron-right fa-lg'></i></button>",
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              arrows: false,
            },
          },
          {
            breakpoint: 430,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            },
          },
        ],
      },
      newgamesOptions: {
        slidesToShow: 4,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow:
          "<button class='btn-topl btn btn-funGray'><i class='fas fa-chevron-left fa-lg'></i></button>",
        nextArrow:
          "<button class='btn-topr btn btn-funGray'><i class='fas fa-chevron-right fa-lg'></i></button>",
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              arrows: false,
            },
          },
          {
            breakpoint: 430,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            },
          },
        ],
      },
      topProducts: [],
      newProducts: [],
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.topProducts = response.data.products.filter(
          (product) => product.category == "策略"
        );
        vm.newProducts = response.data.products.filter(
          (product) => product.category == "派對"
        );
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style>
.banner .bannerimg1 {
  background-image: url(../../assets/img/banner1.png);
  background-position: center center;
  background-size: cover;
  height: 450px;
}
.banner .bannerimg2 {
  background-image: url(../../assets/img/banner2.png);
  background-position: center center;
  background-size: cover;
  height: 450px;
}
.category a:hover{
  background: #F8F8F8;
}
.btn-topr {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -10px;
  color: white;
}
.btn-topl {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -10px;
  color: white;
  z-index: 10;
}
.article-img {
  background-image: url(../../assets/img/article1.png);
  background-position: center center;
  background-size: cover;
  height: 200px;
}
.article2-img {
  background-image: url(../../assets/img/article2.png);
  background-position: center center;
  background-size: cover;
  height: 200px;
}
.slick-slide {
  outline: none;
}
@media (max-width: 768px) {
  .category h4 {
    font-size: 16px;
  }
}
@media (max-width: 420px) {
  .banner .bannerimg1 {
    background-image: url(../../assets/img/phonebanner1.png);
  }
  .banner .bannerimg2 {
    background-image: url(../../assets/img/phonebanner2.png);
  }
}
</style>
