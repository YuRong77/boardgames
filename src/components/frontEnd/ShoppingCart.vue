<template>
  <div class="bg-light py-4">
    <div class="container-lg bg-white shadow-sm p-5">
      <loading :active.sync="isLoading">
        <template slot="default">
          <img src="../../assets/img/loading.svg" alt="" />
        </template>
      </loading>
      <div class="row justify-content-center pb-3 mx-0">
        <div class="col-lg-10">
          <h3 class="text-center font-weight-bold mb-4">購物車</h3>
          <table
            class="cartTable table table-borderless"
            :class="{ 'd-none': storageCart.length == 0 }"
          >
            <thead class="bg-funGray">
              <th></th>
              <th>品名</th>
              <th>數量</th>
              <th class="text-right">價格</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in storageCart" :key="item.product.id">
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-outline-funDarkOrange btn-sm"
                    @click="removeCartItem(index)"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
                <td class="align-middle">
                  {{ item.product.title }}
                </td>
                <td class="tableQty align-middle" width="150px">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-funOrange"
                        :disabled="item.qty <= 1"
                        type="btton"
                        @click="item.qty--"
                      >
                        <i class="fas fa-minus text-white"></i>
                      </button>
                    </div>
                    <input type="number" class="form-control" min="0" v-model.number="item.qty" />
                    <div class="input-group-append">
                      <button class="btn btn-funOrange" type="button" @click="item.qty++">
                        <i class="fas fa-plus text-white"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="align-middle text-right">
                  {{ (item.product.price * item.qty) | currency }}
                </td>
              </tr>
            </tbody>
            <tfoot class="border-top">
              <tr>
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">{{ totalCart | currency }}</td>
              </tr>
            </tfoot>
          </table>
          <div class="text-center" :class="{ 'd-none': storageCart.length == 0 }">
            <button class="btn btn-funOrange text-white m-5" @click="postCart">前往結帳</button>
          </div>
        </div>
      </div>
      <!--空購物車-->
      <div
        class="bg-funGray text-center rounded py-5"
        :class="{ 'd-none': storageCart.length !== 0 }"
      >
        <h4 class="mb-5">哎呀，購物車是空的</h4>
        <router-link
          :to="{
            path: '/product',
            query: { productCategory: '' }
          }"
          class="btn btn-funOrange text-white px-4"
          >馬上逛逛</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storageCart: [],
      isLoading: false,
    };
  },
  computed: {
    totalCart() {
      sessionStorage.setItem('cart', JSON.stringify(this.storageCart));
      this.$bus.$emit('changeCart');
      return this.storageCart.reduce((total, item) => total + item.product.price * item.qty, 0);
    },
  },
  methods: {
    getCart() {
      this.storageCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    },
    removeCartItem(num) {
      this.storageCart.splice(num, 1);
      sessionStorage.setItem('cart', JSON.stringify(this.storageCart));
      this.$bus.$emit('changeCart');
    },
    postCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      vm.$http
        .all(
          vm.storageCart.map((item) => {
            const cartItem = {
              product_id: item.product.id,
              qty: item.qty,
            };
            return vm.$http.post(url, { data: cartItem });
          }),
        )
        .then(() => {
          vm.isLoading = false;
          vm.$router.push('/customer_form');
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
@media (max-width: 450px) {
  .cartTable {
    & thead {
      display: none;
    }
    & tr {
      border-bottom: 1px solid whitesmoke;
    }
    & td {
      display: inline-block;
    }
  }
  .tableQty {
    width: 100%;
  }
}
</style>
