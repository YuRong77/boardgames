<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="../../assets/img/loading.svg" alt="" />
      </template>
    </loading>
    <!--banner-->
    <div class="productbanner container px-0">
      <Slick :options="bannerOptions" ref="slick">
        <div class="img3"></div>
        <div class="img4">
          <h2 class="display-4 text-white text-center pt-5 mt-5">
            <strong>新貨上市</strong>
          </h2>
        </div>
      </Slick>
    </div>
    <!--productlist-->
    <div class="productlist container">
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
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div
              class="col-md-6 col-lg-4 mb-4"
              v-for="item in filterProducts"
              :key="item.id"
            >
              <div class="card border-1 shadow-sm">
                <div
                  style="height: 180px; background-repeat:no-repeat; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
                <div class="card-body">
                  <span class="badge badge-secondary float-right ml-2">{{
                    item.category
                  }}</span>
                  <h5 class="card-title text-dark">
                    {{ item.title }}
                  </h5>
                  <div
                    class="d-flex justify-content-between align-items-baseline"
                  >
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
                    class="btn btn-outline-secondary btn-sm px-3"
                    @click="getProduct(item.id)"
                  >
                    詳細內容
                  </button>
                  <button
                    type="button"
                    class="btn btn-funOrange btn-sm ml-auto text-light"
                    @click="addtoCart(item.id)"
                  >
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="loadingItem === item.id"
                    ></i>
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--分頁條-->
          <div
            class="text-center my-5"
            aria-label="Page navigation example"
            v-if="productCategory == ''"
          >
            <div class="nav d-inline-block">
              <ul class="pagination">
                <li
                  class="page-item"
                  :class="{ disabled: !pagination.has_pre }"
                >
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
                  <a
                    class="page-link "
                    href="#"
                    @click.prevent="getProducts(page)"
                    >{{ page }}</a
                  >
                </li>
                <li
                  class="page-item"
                  :class="{ disabled: !pagination.has_next }"
                >
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
      isLoading: false,
      bannerOptions: {
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        prevArrow:
          "<button class='btn btn-l'><i class='fas fa-chevron-left fa-2x'></i></button>",
        nextArrow:
          "<button class='btn btn-r'><i class='fas fa-chevron-right fa-2x'></i></button>",
      },
      products: [],
      loadingItem: "",
      product: {},
      cart: {},
      productCategory: "",
      filterProducts: [],
      pagination: {},
    };
  },
  watch: {
    productCategory: function() {
      this.filterproducts();
    },
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
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
      let allproducts = [];
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      this.$http.get(url).then((response) => {
        allproducts = response.data.products;
        if (vm.productCategory !== "") {
          vm.filterProducts = allproducts.filter(
            (item) => item.category == vm.productCategory
          );
        } else {
          vm.filterProducts = vm.products;
        }
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      this.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        vm.loadingItem = "";
        vm.getCart();
        $("#productModal").modal("hide");
        vm.$bus.$emit("message:push", "加入成功", "funOrange");
      });
    },
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      this.$http.get(url).then((response) => {
        vm.cart = response.data.data;
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style scoped>
.productbanner .img3 {
  background-image: url(../../assets/img/banner2.png);
  background-position: center center;
  background-size: cover;
  height: 450px;
}
.productbanner .img4 {
  background-image: url(../../assets/img/banner1.png);
  background-position: center center;
  background-size: cover;
  height: 450px;
}
.sticky-list {
  position: sticky;
  top: 90px;
}

@media (max-width: 420px) {
  .productbanner .img3 {
    background-image: url(../../assets/img/phonebanner2.png);
  }
  .productbanner .img4 {
    background-image: url(../../assets/img/phonebanner1.png);
  }
}
</style>
