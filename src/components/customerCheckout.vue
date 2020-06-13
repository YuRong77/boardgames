<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="../assets/img/loading.svg" alt="" />
      </template>
    </loading>
    <div class="my-5 row justify-content-center mx-0">
      <div class="col-lg-6">
        <h3 class="text-center font-weight-bold  mb-4" v-if="!order.is_paid">
          訂單確認
        </h3>
        <form @submit.prevent="payOrder">
          <table class="table table-borderless mb-5" v-if="!order.is_paid">
            <thead class="bg-funGray">
              <th>品名</th>
              <th>數量</th>
              <th class="text-right">單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
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
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ order.total | currency }}</td>
              </tr>
            </tfoot>
          </table>
          <!--paysuccess-->
          <div
            class="paysuccess d-flex justify-content-center align-items-center py-4 my-5"
            v-if="order.is_paid"
          >
            <i class="far fa-check-circle fa-5x text-funOrange"></i>
            <h3 class="font-weight-bold ml-3">成功購買</h3>
          </div>

          <table class="table table-striped mb-5">
            <tbody>
              <tr>
                <th width="40%">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid" class="text-funDarkOrange"
                    >尚未付款</span
                  >
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right" v-if="order.is_paid === false">
            <router-link to="/home" class="btn btn-outline-secondary mr-4 px-4"
              >取消</router-link
            >
            <button class="btn btn-funOrange text-light">確認付款去</button>
          </div>
          <div class="text-center mb-5" v-if="order.is_paid === true">
            <router-link to="/home" class="btn btn-funOrange text-white px-4"
              >回首頁</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: "",
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.order = response.data.order;
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      this.isLoading = true;
      this.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.getOrder();
        }
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
