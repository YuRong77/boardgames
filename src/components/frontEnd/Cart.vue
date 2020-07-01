<template>
  <div class="cart" v-if="!disabledCart">
    <div class="shoppingCart bg-white shadow-sm border p-3 animate__animated animate__rubberBand ">
      <h3 class="h5 d-inline-block">購物清單</h3>
      <div class="nocart text-center mt-5 mb-5" v-if="storageCart.length == 0">
        <h3 class="bg-funGray rounded h5 p-5">購物車是空的...</h3>
      </div>
      <table
        class="table table-borderless border-top border-bottom overflow-auto small"
        v-if="storageCart.length !== 0"
      >
        <tbody>
          <tr v-for="(item, index) in storageCart" :key="item.product.id">
            <td class="align-middle p-0 pr-3">
              <button
                type="button"
                class="btn btn-outline-funDarkOrange btn-sm"
                @click="removeCartItem(index)"
              >
                <i class="far fa-trash-alt" v-if="item.product.id !== loadingItem"></i>
                <i class="fas fa-spinner fa-pulse" v-if="item.product.id == loadingItem"></i>
              </button>
            </td>
            <td class="align-middle" width="150px">
              <p class="m-0">{{ item.product.title }}</p>
              <small>{{ item.qty }} / {{ item.product.unit }}</small>
            </td>
            <td class="align-middle text-right px-0">
              {{ (item.product.price * item.qty) | currency }}
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-right"><span class="mr-5">總計:</span>{{ totalCart | currency }}</p>
      <button
        class="btn btn-funOrange w-100 text-light m-auto"
        @click="checkout"
        v-if="storageCart.length !== 0"
      >
        結帳去
      </button>
      <button
        class="btn btn-funOrange w-100 text-light m-auto"
        @click="goShop"
        v-if="storageCart.length == 0"
      >
        到商城逛逛
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
        v-if="storageCart.length !== 0"
        >{{ storageCart.length }}</span
      >
    </button>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      loadingItem: '',
      storageCart: [],
    };
  },
  computed: {
    totalCart() {
      return this.storageCart.reduce((total, item) => total + item.product.price * item.qty, 0);
    },
    disabledCart() {
      return this.$route.path === '/shoppingcart' || this.$route.path === '/customer_form';
    },
  },
  methods: {
    getCart() {
      this.storageCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    },
    addtoCart(addItem, qty = 1) {
      const cartItem = {
        product: addItem,
        qty,
      };
      const sameItem = this.storageCart.findIndex((item) => item.product.id === addItem.id);
      sameItem === -1 ? this.storageCart.push(cartItem) : (this.storageCart[sameItem].qty += qty);

      sessionStorage.setItem('cart', JSON.stringify(this.storageCart));
      this.$bus.$emit('message:push', '加入成功', 'funOrange');
    },
    removeCartItem(num) {
      this.storageCart.splice(num, 1);
      sessionStorage.setItem('cart', JSON.stringify(this.storageCart));
    },
    cartChange() {
      const vm = this;
      vm.$bus.$on('addCart', (product, qty = 1) => {
        vm.addtoCart(product, qty);
      });
      vm.$bus.$on('changeCart', () => {
        vm.getCart();
      });
    },
    show() {
      $('.shoppingCart').toggleClass('show');
    },
    checkout() {
      $('.shoppingCart').toggleClass('show');
      this.$router.push('/shoppingcart');
    },
    goShop() {
      $('.shoppingCart').toggleClass('show');
      this.$router.push({ path: '/product', query: { productCategory: '' } });
    },
  },
  created() {
    this.cartChange();
    this.getCart();
  },
};
</script>

<style lang="scss">
.shoppingCartBtn {
  position: fixed;
  right: 50px;
  bottom: 40px;
  width: 80px;
  height: 80px;
  border: 2px solid;
  border-radius: 50%;
  transition: all 0.5s;
  &:hover {
    background: #ee8133 !important;
    &.shoppingCartBtn i,
    &.shoppingCartBtn p {
      color: white !important;
    }
  }
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
  &.show {
    display: block;
  }
  & table {
    display: block;
    width: 100%;
    height: 200px;
  }
}
.animate__animated.animate__rubberBand {
  --animate-duration: 0.7s;
}
.cartnum {
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
}
@media (max-width: 768px) {
  .cart {
    display: none !important;
  }
}
</style>
