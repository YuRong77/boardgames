<template>
  <div class="table-light pt-lg-4">
    <div class="container-lg bg-white shadow-sm px-0 pb-2">
      <loading :active.sync="isLoading">
        <template slot="default">
          <img src="../../assets/img/loading.svg" alt="" />
        </template>
      </loading>
      <!--banner-->
      <div class="productbanner">
        <swiper class="swiper" :options="bannerOptions">
          <swiper-slide><div class="bannerimg3"></div></swiper-slide>
          <swiper-slide><div class="bannerimg4"></div></swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!--productlist-->
      <div class="productlist px-3">
        <nav aria-label="breadcrumb d-sm-none d-md-block">
          <ol class="breadcrumb bg-white mb-0">
            <li class="breadcrumb-item text-funOrange">
              <router-link to="/" class="text-funOrange">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              商品
            </li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-md-3">
            <div class="list-group text-center sticky-list mb-4">
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="{ active: productCategory == '' }"
                @click.prevent="productCategory = ''"
              >
                全部商品</a
              >
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="{ active: productCategory == '兒童' }"
                @click.prevent="productCategory = '兒童'"
              >
                兒童遊戲</a
              >
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="{ active: productCategory == '派對' }"
                @click.prevent="productCategory = '派對'"
                >派對遊戲</a
              >
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="{ active: productCategory == '策略' }"
                @click.prevent="productCategory = '策略'"
                >策略遊戲</a
              >
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="{ active: productCategory == '推理' }"
                @click.prevent="productCategory = '推理'"
                >推理遊戲</a
              >
              <!--search-->
              <div class="input-group mt-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-light border">
                    <i class="fas fa-search text-funOrange"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="輸入桌遊名稱"
                  aria-label="Search"
                  v-model.trim="search"
                />
              </div>
            </div>
          </div>
          <!--products-->
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-6 col-lg-4 mb-4" v-for="item in filterProducts" :key="item.id">
                <div class="gamescard card border-1 shadow-sm" @click="getProduct(item.id)">
                  <div
                    style="height: 180px; background-repeat:no-repeat; background-position: center"
                    :style="{ backgroundImage: `url(${item.imageUrl})` }"
                  ></div>
                  <div class="card-body">
                    <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                    <h5 class="card-title text-dark">
                      {{ item.title }}
                    </h5>
                    <div class="d-flex justify-content-between align-items-baseline">
                      <div class="h4 text-funOrange" v-if="item.price == item.origin_price">
                        {{ item.origin_price | currency}} 元
                      </div>
                      <div class="h4 text-funDarkOrange" v-if="item.price !== item.origin_price">
                        {{ item.price | currency}} 元
                      </div>
                      <del class="h6 text-funOrange" v-if="item.price !== item.origin_price"
                        >{{ item.origin_price }} 元</del
                      >
                    </div>
                  </div>
                  <div class="card-footer d-flex">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm px-3"
                      @click.stop="getProduct(item.id)"
                    >
                      詳細內容
                    </button>
                    <button
                      type="button"
                      class="btn btn-funOrange btn-sm ml-auto text-light"
                      @click.stop="addtoCart(item)"
                    >
                      <i class="fas fa-spinner fa-spin" v-if="loadingItem === item.id"></i>
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!--分頁條-->
            <div
              class="text-center mt-4"
              aria-label="Page navigation example"
              v-if="productCategory == '' && search == ''"
            >
              <div class="nav d-inline-block">
                <ul class="pagination">
                  <li class="page-item" :class="{ disabled: !pagination.has_pre }">
                    <a
                      class="page-link"
                      href="#"
                      aria-label="Previous"
                      @click.prevent="getProducts(pagination.current_page - 1)"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li
                    class="page-item"
                    v-for="page in pagination.total_pages"
                    :key="page"
                    :class="{ active: pagination.current_page === page }"
                  >
                    <a class="page-link " href="#" @click.prevent="getProducts(page)">{{ page }}</a>
                  </li>
                  <li class="page-item" :class="{ disabled: !pagination.has_next }">
                    <a
                      class="page-link"
                      href="#"
                      aria-label="Next"
                      @click.prevent="getProducts(pagination.current_page + 1)"
                    >
                      <span aria-hidden="true">&raquo;</span></a
                    >
                  </li>
                </ul>
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
      isLoading: false,
      bannerOptions: {
        autoplay: {
          delay: 6000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      products: [],
      allproducts: [],
      filterProducts: [],
      product: {},
      storageCart: [],
      pagination: {},
      loadingItem: '',
      productCategory: '',
      search: '',
    };
  },
  watch: {
    productCategory() {
      this.filterproducts();
    },
    search() {
      !this.search ? this.filterproducts() : this.filterSearch();
    },
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(url).then((response) => {
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
        vm.filterProducts = vm.products;
        vm.productCategory = vm.$route.query.productCategory;
      });
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    filterproducts() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.$http.get(url).then((response) => {
        vm.allproducts = response.data.products;
        if (vm.productCategory !== '') {
          vm.filterProducts = vm.allproducts.filter((item) => item.category === vm.productCategory);
        } else {
          vm.filterProducts = vm.products;
        }
      });
    },
    filterSearch() {
      const vm = this;
      const searchAry = vm.allproducts.filter((item) => item.title.match(vm.search));
      vm.filterProducts = searchAry;
    },
    addtoCart(addItem, qty = 1) {
      this.$bus.$emit('addCart', addItem, qty);
    },
  },
  created() {
    this.getProducts();
    this.filterproducts();
  },
};
</script>

<style lang="scss">
.swiper-container {
  --swiper-navigation-color: white;
  --swiper-navigation-size: 30px;
}
.productbanner {
  & .bannerimg3 {
    background-image: url(../../assets/img/banner3.png);
    background-position: center center;
    background-size: cover;
    height: 300px;
  }
  & .bannerimg4 {
    background-image: url(../../assets/img/banner4.png);
    background-position: center center;
    background-size: cover;
    height: 300px;
  }
}
.sticky-list {
  position: sticky;
  top: 90px;
}
@media (max-width: 420px) {
  .productbanner {
    & .bannerimg3 {
      background-image: url(../../assets/img/phonebanner3.png);
      height: 400px;
    }
    & .bannerimg4 {
      background-image: url(../../assets/img/phonebanner4.png);
      height: 400px;
    }
  }
}
</style>
