<template>
  <div class="table-light py-4">
    <div class="container-lg bg-white shadow-sm px-0 pb-5">
      <loading :active.sync="isLoading">
        <template slot="default">
          <img src="../../assets/img/loading.svg" alt="" />
        </template>
      </loading>
      <!--banner-->
      <div class="banner px-0 mb-4">
        <swiper class="swiper" :options="bannerOptions">
          <swiper-slide><div class="bannerimg1" @click="goShop"></div></swiper-slide>
          <swiper-slide><div class="bannerimg2" @click="goShop"></div></swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!--category-->
      <div class="category px-3 mb-4">
        <h3 class="h4 font-weight-bolder mb-4">遊戲分類</h3>
        <div class="row px-3 mx-0">
          <div class="col-sm-6 col-md-3">
            <router-link
              :to="{
                path: '/product',
                query: { productCategory: '兒童' }
              }"
              href="#"
              class="category-items d-flex align-items-center justify-content-center
            btn border rounded py-2 mb-2"
            >
              <img src="../../assets/img/child.png" alt="" />
              <h4 class="h5 m-0 ml-1">兒童遊戲</h4>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-3">
            <router-link
              :to="{
                path: '/product',
                query: { productCategory: '派對' }
              }"
              href="#"
              class="category-items d-flex align-items-center justify-content-center
            btn border rounded py-2 mb-2"
            >
              <img src="../../assets/img/party.png" alt="" />
              <h4 class="h5 m-0 ml-1">派對遊戲</h4>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-3">
            <router-link
              :to="{
                path: '/product',
                query: { productCategory: '策略' }
              }"
              href="#"
              class="category-items d-flex align-items-center justify-content-center
            btn border rounded py-2 mb-2"
            >
              <img src="../../assets/img/sword.png" alt="" />
              <h4 class="h5 m-0 ml-1">策略遊戲</h4>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-3">
            <router-link
              :to="{
                path: '/product',
                query: { productCategory: '推理' }
              }"
              href="#"
              class="category-items d-flex align-items-center justify-content-center
            btn border rounded py-2 mb-2"
            >
              <img src="../../assets/img/mind.png" alt="" />
              <h4 class="h5 m-0 ml-2">推理遊戲</h4>
            </router-link>
          </div>
        </div>
      </div>
      <!--topgames-->
      <div class="topgames px-3 mb-4">
        <h3 class="h4 font-weight-bolder mb-4">熱門遊戲</h3>
        <swiper class="swiper" :options="gamesOptions" v-if="topProducts.length">
          <swiper-slide v-for="item in topProducts" :key="item.id">
            <div class="gamescard card shadow-sm m-2" @click="getProduct(item.id)">
              <div
                style="height: 180px; background-repeat:no-repeat; background-position: center"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
              <div class="card-body">
                <h5 class="card-title">
                  {{ item.title }}
                </h5>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="h4 text-funOrange" v-if="item.price == item.origin_price">
                    ${{ item.origin_price }} 元
                  </div>
                  <div class="h4 text-funDarkOrange" v-if="item.price !== item.origin_price">
                    ${{ item.price }} 元
                  </div>
                  <del class="h6 text-funOrange" v-if="item.price !== item.origin_price"
                    >{{ item.origin_price }} 元</del
                  >
                </div>
              </div>
              <div class="card-footer d-flex">
                <button
                  type="button"
                  :data-id="item.id"
                  class="btn btn-funOrange w-100 btn-sm text-light "
                  @click="getProduct(item.id)"
                >
                  馬上看看
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!--coupon-->
      <div class="coupon bg-light d-flex justify-content-center align-items-center px-3 mb-4">
        <img src="../../assets/img/party2.png" alt="" />
        <div class="coupon-text">
          <h4 class="text-secondary">歡慶開幕</h4>
          <p class="text-secondary">
            全館商品結帳時，輸入<span class="text-funOrange"> fungame77 </span>即可享有7折優惠!!
          </p>
        </div>
      </div>
      <!--newgames-->
      <div class="newgames px-3 mb-4">
        <h3 class="h4 font-weight-bolder mb-4">最新商品</h3>
        <swiper class="swiper" :options="gamesOptions" v-if="newProducts.length">
          <swiper-slide v-for="item in newProducts" :key="item.id">
            <div class="gamescard card shadow-sm m-2" @click="getProduct(item.id)">
              <div
                style="height: 180px; background-repeat:no-repeat; background-position: center"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
              <div class="card-body">
                <h5 class="card-title">
                  {{ item.title }}
                </h5>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="h4 text-funOrange" v-if="item.price == item.origin_price">
                    ${{ item.origin_price }} 元
                  </div>
                  <div class="h4 text-funDarkOrange" v-if="item.price !== item.origin_price">
                    ${{ item.price }} 元
                  </div>
                  <del class="h6 text-funOrange" v-if="item.price !== item.origin_price"
                    >{{ item.origin_price }} 元</del
                  >
                </div>
              </div>
              <div class="card-footer d-flex">
                <button
                  type="button"
                  :data-id="item.id"
                  class="btn btn-funOrange w-100 btn-sm text-light "
                  @click="getProduct(item.id)"
                >
                  馬上看看
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!--article-->
      <div class="article px-3">
        <h3 class="h4 font-weight-bolder mb-4">相關文章</h3>
        <div class="row justify-content-around mx-0">
          <div class="col-md-6 mb-2">
            <div class="border h-100">
              <div class="article-img"></div>
              <div class="article-text p-3">
                <h4 class="h5">
                  新手一定要知道!《狼人殺》快速上手的五個實用小技巧!!
                </h4>
                <a href="#">繼續閱讀...</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="border">
              <div class="article2-img"></div>
              <div class="article-text p-3">
                <h4 class="h5">
                 《璀璨寶石》最詳細的規則說明，讓你一次 搞懂遊戲機制。
                </h4>
                <a href="#">繼續閱讀...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      bannerOptions: {
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      gamesOptions: {
        observer: true,
        observeParents: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 3500,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          430: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
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
      vm.isLoading = true;
      vm.$http.get(url).then((response) => {
        vm.topProducts = response.data.products.filter((product) => product.category === '策略');
        vm.newProducts = response.data.products.filter((product) => product.category === '派對');
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    goShop() {
      this.$router.push({ path: '/product', query: { productCategory: '' } });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
.banner:hover {
  cursor: pointer;
}
.swiper-container {
  --swiper-navigation-color: white;
  --swiper-navigation-size: 30px;
}
.banner {
   & .bannerimg1 {
     background-image: url(../../assets/img/banner1.png);
     background-position: center center;
     background-size: cover;
     height: 450px;
   }
   & .bannerimg2 {
     background-image: url(../../assets/img/banner2.png);
     background-position: center center;
     background-size: cover;
     height: 450px;
   }
}
.category a:hover {
  background: #f8f8f8;
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
@media (max-width: 768px) {
  .category h4 {
    font-size: 16px;
  }
}
@media (max-width: 420px) {
  .banner {
    & .bannerimg1 {
      background-image: url(../../assets/img/phonebanner1.png);
    }
    & .bannerimg2 {
      background-image: url(../../assets/img/phonebanner2.png);
    }
  }
}
</style>
