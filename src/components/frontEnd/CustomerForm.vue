<template>
  <div class="bg-light py-4">
    <div class="container-lg  px-0 pb-2">
      <loading :active.sync="isLoading">
        <template slot="default">
          <img src="../../assets/img/loading.svg" alt="" />
        </template>
      </loading>
      <div class="row justify-content-center mx-0">
        <div class="col-lg-5 mb-3">
          <div class="rounded bg-white shadow-sm h-100 p-4">
            <h3 class="text-center font-weight-bold mb-5">購物清單</h3>
            <table
              class="table table-borderless"
              :class="{ 'd-none': cart.carts && cart.carts.length == 0 }"
            >
              <thead class="table-funGray">
                <th>品名</th>
                <th>數量</th>
                <th class="text-right">單價</th>
              </thead>
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                  <td class="align-middle">
                    {{ item.product.title }}

                    <div class="text-success" v-if="item.coupon && coupon_mseeage.success">
                      已套用優惠券
                    </div>
                  </td>
                  <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                  <td class="align-middle text-right">
                    {{ item.final_total | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot class="border-top">
                <tr>
                  <td colspan="2" class="text-right">總計</td>
                  <td class="text-right">{{ cart.total | currency }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total && coupon_mseeage.success">
                  <td colspan="2" class="text-right text-success">折扣價</td>
                  <td class="text-right text-success">
                    {{ cart.final_total | currency }}
                  </td>
                </tr>
              </tfoot>
            </table>
            <div class="text-success" :class="{ 'text-danger': !coupon_mseeage.success }">
              {{ coupon_mseeage.msg }}
            </div>
            <div
              class="input-group input-group-sm  mb-3"
              :class="{ 'd-none': cart.carts && cart.carts.length == 0 }"
            >
              <input
                type="text"
                class="form-control"
                v-model="coupon_code"
                placeholder="請輸入優惠碼"
              />
              <div class="input-group-append">
                <button class="btn btn-funOrange text-light" type="button" @click="addCouponCode">
                  套用優惠碼
                </button>
              </div>
            </div>
          </div>
        </div>
        <!--CustomerForm-->
        <div class="col-lg-7 mb-3">
          <div class="rounded bg-white shadow-sm p-4">
            <h3 class="text-center font-weight-bold mb-5">客戶資訊</h3>
            <form @submit.prevent="createOrder">
              <div class="form-group">
                <ValidationProvider rules="required|email" v-slot="{ errors }">
                  <label for="useremail">Email<span class="text-funDarkOrange"> *</span></label>
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
                  <span class="text-funDarkOrange">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>

              <div class="form-group">
                <label for="username">收件人姓名<span class="text-funDarkOrange"> *</span></label>
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="username"
                    :class="{ 'is-invalid': errors[0] }"
                    v-model="form.user.name"
                    placeholder="請輸入姓名"
                    required
                  />
                  <span class="text-funDarkOrange">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>

              <div class="form-group">
                <label for="usertel">收件人電話<span class="text-funDarkOrange"> *</span></label>
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
                  <span class="text-funDarkOrange">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>

              <div class="form-group">
                <label for="useraddress"
                  >收件人地址<span class="text-funDarkOrange"> *</span></label
                >
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
                  <span class="text-funDarkOrange">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>

              <div class="form-group">
                <label for="comment">備註</label>
                <textarea
                  name=""
                  id="comment"
                  class="form-control"
                  cols="30"
                  rows="4"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="text-right">
                <button class="btn btn-funOrange text-light">送出訂單</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!--訂單form-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: {},
      coupon_code: '',
      coupon_mseeage: {
        msg: '',
        success: true,
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      vm.$http.get(url).then((response) => {
        vm.cart = response.data.data;
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      vm.$http.post(url, { data: coupon }).then((response) => {
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
      vm.isLoading = true;
      const order = vm.form;
      vm.$http.post(url, { data: order }).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/customer_checkout/${response.data.orderId}`);
        }
        vm.isLoading = false;
      });
    },
    delCart(goNext) {
      const vm = this;
      vm.isLoading = true;
      vm.$http
        .all(
          vm.cart.carts.map((item) => {
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${item.id}`;
            return vm.$http.delete(url);
          }),
        )
        .then(() => {
          vm.isLoading = false;
          goNext();
        });
    },
  },
  beforeRouteLeave(to, from, next) {
    this.delCart(next);
  },
  created() {
    this.getCart();
  },
};
</script>

<style>
textarea {
  resize: none;
}
</style>
