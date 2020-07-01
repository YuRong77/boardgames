<template>
  <div class="bg-light py-4">
    <div class="container-lg bg-white shadow-sm px-0 pb-2">
      <loading :active.sync="isLoading">
        <template slot="default">
          <img src="../../assets/img/loading.svg" alt="" />
        </template>
      </loading>
      <div class="productdetails px-3 ">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white mb-0 p-3">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-funOrange">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link
                :to="{
                  path: '/product',
                  query: { productCategory: '' }
                }"
                class="text-funOrange"
                >商品</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ product.title }}
            </li>
          </ol>
        </nav>
        <div class="row mb-3">
          <div class="col-lg-6 mb-5">
            <div class="rounded bg-white h-100 border p-3">
              <div
                style="height: 200px; background-repeat:no-repeat; background-position: center"
                :style="{ backgroundImage: `url(${product.imageUrl})` }"
                class="border-bottom mb-3"
              ></div>
              <div class="description ">
                <h3 class="text-funDarkOrange h5">【商品規格】</h3>
                <p>{{ product.description }}</p>
              </div>
              <div class="content">
                <h3 class="text-funDarkOrange h5">【商品詳情】</h3>
                <p>{{ product.content }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-5">
            <div class="rounded bg-white border p-3">
              <div class="title border-bottom d-flex justify-content-between mb-3">
                <h3 class="font-weight-bold">{{ product.title }}</h3>
                <p class="badge badge-secondary p-2">{{ product.category }}</p>
              </div>
              <div class="price border-bottom mb-3">
                <div
                  v-if="product.price == product.origin_price"
                  class="h5 text-funOrange font-weight-bold"
                >
                  NT${{ product.origin_price }}
                </div>
                <del v-if="product.price !== product.origin_price" class="h6 text-funOrange">
                  原價NT${{ product.origin_price }}</del
                >
                <div
                  v-if="product.price !== product.origin_price"
                  class="h4 text-funDarkOrange font-weight-bold"
                >
                  特價NT${{ product.price }}
                </div>
                <select name="" class="form-control my-3" v-model="product.num">
                  <option :value="num" v-for="num in 10" :key="num">
                    選購 {{ num }} {{ product.unit }}
                  </option>
                </select>
                <button
                  class="btn btn-funDarkOrange w-100 mb-3"
                  @click="addtoCart(product, product.num)"
                >
                  加到購物車
                </button>
              </div>
              <div class="deliverynote">
                <h3 class="text-funDarkOrange h5">【配送及相關說明】</h3>
                <p>
                  線上購物的消費者，都可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀。
                </p>
                <dl class="row">
                  <dt class="col-sm-3">寄送時間 :</dt>
                  <dd class="col-sm-9">
                    全島24h到貨，遲到提供100元現金積點。全年無休，週末假日照常出貨。
                  </dd>
                  <dt class="col-sm-3">送貨方式 :</dt>
                  <dd class="col-sm-9">
                    透過宅配送達。除網頁另有特別標示外，均為常溫配送。
                    消費者訂購之商品若經配送兩次無法送達，再經本公司以電話與Email均無法聯繫逾三天者，本公司將取消該筆訂單，並且全額退款。
                  </dd>
                  <dt class="col-sm-3">送貨範圍 :</dt>
                  <dd class="col-sm-9">
                    限台灣本島與離島地區註，部分離島地區包括連江馬祖、綠島、蘭嶼、琉球鄉…等貨件，將送至到岸船公司碼頭，需請收貨人自行至碼頭取貨。注意！收件地址請勿為郵政信箱。
                  </dd>
                  <dt class="col-sm-3">售後服務 :</dt>
                  <dd class="col-sm-9">
                    非人為損壞，均享一年保固。
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <!--relatedproducts-->
        <div class="relatedproducts mb-3">
          <h3 class="h4 font-weight-bolder mb-4">你可能會喜歡</h3>
          <swiper class="swiper" :options="gamesOptions" v-if="relatedproducts.length">
            <swiper-slide v-for="item in relatedproducts" :key="item.id">
              <div class="gamescard card shadow-sm m-2" @click="toProduct(item.id)">
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
                    @click="toProduct(item.id)"
                  >
                    馬上看看
                  </button>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  inject: ['reload'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      product: {},
      isLoading: false,
      relatedproducts: [],
      gamesOptions: {
        observer: true,
        observeParents: true,
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
    };
  },
  watch: {
    $route() {
      this.reload(); // 相關產品上一頁重整
    },
  },
  methods: {
    getProduct() {
      const vm = this;
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.$http.get(url).then((response) => {
        vm.product = response.data.product;
        vm.product.num = 1;
        vm.getProducts();
      });
    },
    getProducts() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.$http.get(url).then((response) => {
        vm.relatedproducts = response.data.products.filter(
          (item) => item.category === vm.product.category && item.title !== vm.product.title,
        );
      });
    },
    addtoCart(addItem, qty = 1) {
      this.$bus.$emit('addCart', addItem, qty);
    },
    toProduct(id) {
      this.$router.push(`/product/${id}`);
      this.reload();
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
