<template>
  <div>
    <Header />
    <alert />
    <div class="box w-100"></div>
    <router-view />
    <Footer />
    <div class="shoppingCart bg-light shadow-sm border p-3 animate__animated animate__rubberBand ">
      <h3 class="h5 d-inline-block">購物清單</h3>
      <div
        class="nocart text-center mt-5 mb-5"
        v-if="cart.carts && cart.carts.length == 0"
      >
        <h3 class="bg-funGray rounded h5 p-5">購物車是空的...</h3>
      </div>
      <table
        class="table table-borderless border-top border-bottom overflow-auto small"
        v-if="cart.carts && cart.carts.length !== 0"
      >
        <tbody>
          <tr v-for="item in cart.carts" :key="item.id">
            <td class="align-middle">
              <button
                type="button"
                class="btn btn-outline-funDarkOrange btn-sm"
                @click="removeCartItem(item.id)"
              >
                <i class="far fa-trash-alt" v-if="item.id !== loadingItem"></i>
                <i
                  class="fas fa-spinner fa-pulse"
                  v-if="item.id == loadingItem"
                ></i>
              </button>
            </td>
            <td class="align-middle">
              {{ item.product.title }}
            </td>
            <td class="align-middle">{{ item.qty }}</td>
            <td class="align-middle text-right">
              {{ item.final_total | currency }}
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-right">
        <span class="mr-5">總計:</span>{{ cart.total | currency }}
      </p>
      <button
        to="/shoppingcart"
        class="btn btn-funOrange w-100 text-light m-auto"
        @click="checkout"
      >
        結帳去
      </button>
    </div>
    <button
      class="shoppingCartBtn btn bg-white d-flex justify-content-center
      align-items-center border-funOrange"
      @click="show"
    >
      <div class="d-flex flex-column">
        <i class="fab fa-shopify fa-2x text-funOrange mr-1"></i>
        <p class="text-secondary m-0">購物車</p>
      </div>
      <span
        class="cartnum bg-funDarkOrange text-white rounded-circle"
        v-if="cart.carts && cart.carts.length !== 0"
        >{{ cart.carts && cart.carts.length }}</span
      >
    </button>
    <router-link
      to="/login"
      class="adminBtn btn bg-funGray d-flex justify-content-center align-items-center"
      title="管理員"
    >
      <i class="fas fa-user-cog fa-lg text-secondary ml-1"></i>
    </router-link>
  </div>
</template>

<script>
import $ from 'jquery';
import alert from '../../components/alertMessage.vue';
import Header from '../../components/header.vue';
import Footer from '../../components/footer.vue';

export default {
  components: {
    Header,
    Footer,
    alert,
  },
  data() {
    return {
      cart: {},
      loadingItem: '',
    };
  },
  watch: {
    cart() {
      this.getCart();
    },
  },
  methods: {
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.$http.get(url).then((response) => {
        vm.cart = response.data.data;
      });
    },
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.loadingItem = id;
      vm.$http.delete(url).then(() => {
        vm.loadingItem = '';
      });
    },
    show() {
      $('.shoppingCart').toggleClass('show');
    },
    checkout() {
      $('.shoppingCart').toggleClass('show');
      this.$router.push('/shoppingcart');
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style>
.box {
  height: 80px;
}
.shoppingCartBtn {
  position: fixed;
  right: 50px;
  bottom: 40px;
  width: 80px;
  height: 80px;
  border: 2px solid;
  border-radius: 50%;
  transition: all 0.5s;
}
.shoppingCartBtn:hover {
  background: #ee8133 !important;
}
.shoppingCartBtn:hover.shoppingCartBtn i,
.shoppingCartBtn:hover.shoppingCartBtn p {
  color: white !important;
}
.shoppingCart {
  position: fixed;
  right: 50px;
  bottom: 140px;
  background: pink;
  width: 300px;
  height: 360px;
  display: none;
  z-index: 101;
}
.animate__animated.animate__rubberBand {
  --animate-duration: .7s;
}
.shoppingCart table {
  display: block;
  width: 100%;
  height: 200px;
}
.shoppingCart.show {
  display: block;
}
.cartnum {
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
}
.adminBtn {
  position: fixed;
  right: 20px;
  top: 100px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
@media (max-width: 768px) {
  .shoppingCartBtn {
    display: none !important;
  }
  .adminBtn {
    display: none !important;
  }
}
</style>
