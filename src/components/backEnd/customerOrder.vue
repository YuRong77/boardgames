<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div
        class="col-md-6 col-lg-4 col-xl-3 mb-4"
        v-for="item in products"
        :key="item.id"
      >
        <div class="card border-1 shadow-sm">
          <div
            style="height: 150px; background-repeat:no-repeat; background-position: center"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{
              item.category
            }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
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
                >原價 {{ item.origin_price }} 元</del
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
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="loadingItem === item.id"
              ></i>
              查看更多
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
    <!--查看更多Modal-->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-funOrange">
            <h5 class="modal-title text-light">
              {{ product.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="text-center">
              <img
                :src="product.imageUrl"
                class="img-fluid text-center"
                alt=""
              />
            </div>
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">
                {{ product.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4 text-funOrange" v-if="product.price == product.origin_price">
                {{ product.origin_price }} 元
              </div>
              <del class="h6 text-funOrange" v-if="product.price !== product.origin_price"
                >原價 {{ product.origin_price }} 元</del
              >
              <div class="h4 text-funDarkOrange" v-if="product.price !== product.origin_price">
                特價 {{ product.price }} 元
              </div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-funOrange text-light"
              @click="addtoCart(product.id, product.num)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="product.id === loadingItem"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--訂單table-->
    <div class="row justify-content-center mt-5">
      <div class="col-md-9">
        <table class="table">
          <thead class="bg-funGray">
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-funDarkOrange btn-sm"
                  @click="removeCartItem(item.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}

                <div
                  class="text-success"
                  v-if="item.coupon && coupon_mseeage.success"
                >
                  已套用優惠券
                </div>
              </td>
              <td class="align-middle">
                {{ item.qty }}/{{ item.product.unit }}
              </td>
              <td class="align-middle text-right">
                {{ item.final_total | currency }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ cart.total | currency }}</td>
            </tr>
            <tr
              v-if="cart.final_total !== cart.total && coupon_mseeage.success"
            >
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">
                {{ cart.final_total | currency }}
              </td>
            </tr>
          </tfoot>
        </table>
        <div
          class="text-success"
          :class="{ 'text-danger': !coupon_mseeage.success }"
        >
          {{ coupon_mseeage.msg }}
        </div>
        <div class="input-group input-group-sm mb-3">
          <input
            type="text"
            class="form-control"
            v-model="coupon_code"
            placeholder="請輸入優惠碼"
          />
          <div class="input-group-append">
            <button
              class="btn btn-funOrange text-light"
              type="button"
              @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--訂單form-->
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="createOrder">
        <div class="form-group">
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <label for="useremail">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="useremail"
              :class="{ 'is-invalid': errors[0] }"
              v-model="form.user.email"
              placeholder="請輸入 Email"
              required
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="form-group">
          <label for="username">收件人姓名</label>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input
              type="text"
              class="form-control"
              name="name"
              id="username"
              :class="{ 'is-invalid': errors[0] }"
              v-model="form.user.name"
              placeholder="輸入姓名"
              required
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input
              type="tel"
              class="form-control"
              id="usertel"
              :class="{ 'is-invalid': errors[0] }"
              v-model="form.user.tel"
              placeholder="請輸入電話"
              required
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input
              type="text"
              class="form-control"
              name="address"
              id="useraddress"
              :class="{ 'is-invalid': errors[0] }"
              v-model="form.user.address"
              placeholder="請輸入地址"
              required
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="form-group">
          <label for="comment">留言</label>
          <textarea
            name=""
            id="comment"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-funOrange text-light">送出訂單</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      products: [],
      product: {},
      loadingItem: "",
      isLoading: false,
      cart: {},
      coupon_code: "",
      coupon_mseeage: {
        msg: "",
        success: true,
      },
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.products = response.data.products;
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      this.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        $("#productModal").modal("show");
        vm.loadingItem = "";
        vm.product.num = 1;
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
      });
    },
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.cart = response.data.data;
        vm.isLoading = false;
      });
    },
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        vm.isLoading = false;
        vm.getCart();
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        response.data.success
          ? (vm.coupon_mseeage.success = true)
          : (vm.coupon_mseeage.success = false);
        vm.coupon_mseeage.msg = response.data.message;
        vm.isLoading = false;
        vm.getCart();
      });
    },
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      this.isLoading = true;
      const order = vm.form;
      this.$http.post(url, { data: order }).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/customer_checkout/${response.data.orderId}`);
        }
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
