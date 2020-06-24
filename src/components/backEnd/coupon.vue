<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>

    <div class="text-center">
      <button
        class="btn btn-funOrange text-light px-4"
        @click="openCouponModal(true)"
      >
        新增酷碰券
      </button>
    </div>
    <div class="table-responsive-xl">
      <table class="couponTable table text-center mt-4">
        <thead class="bg-funGray">
          <tr>
            <th>名稱</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in coupons" :key="key">
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ item.due_date | date }}</td>
            <td>
              <span v-if="item.is_enabled === 1" class="text-success"
                >啟用</span
              >
              <span v-else class="text-muted">未起用</span>
            </td>
            <td>
              <button
                class="btn btn-outline-funOrange btn-sm hov-txt"
                @click="openCouponModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-sm text-funDarkOrange ml-2"
                @click="delModal(item)"
              >
                <i class="far fa-trash-alt btn-sm btn-funDarkOrange "></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--酷碰Modal-->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-funOrange">
            <h5
              class="modal-title text-light"
              v-if="
                isNew
                  ? (modalTitle = '新增酷碰券')
                  : (modalTitle = '編輯酷碰券')
              "
            >
              {{ modalTitle }}
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
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="tempCoupon.title"
                placeholder="請輸入標題"
              />
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input
                type="text"
                class="form-control"
                id="coupon_code"
                v-model="tempCoupon.code"
                placeholder="請輸入優惠碼"
              />
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input
                type="date"
                class="form-control"
                id="due_date"
                v-model="due_date"
              />
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input
                type="number"
                class="form-control"
                id="price"
                v-model="tempCoupon.percent"
                placeholder="請輸入折扣百分比"
              />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled"
                  id="is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-funGray"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-funOrange text-light " @click="updateCoupon">
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--刪除Modal-->
    <div
      class="modal fade"
      id="delCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-funDarkOrange text-white">
            <h5 class="modal-title">
              <span>刪除產品</span>
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
            是否刪除
            <strong class="text-funDarkOrange">{{ tempCoupon.title }}</strong>
            優惠券 (刪除後無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-funDarkOrange" @click="delCoupon">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: {
    config: Object,
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date: 0,
        code: '',
      },
      due_date: new Date(),
      isNew: false,
      modalTitle: '',
      isLoading: false,
    };
  },
  watch: {
    due_date() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    },
  },
  methods: {
    openCouponModal(isNew, item) {
      const vm = this;
      $('#couponModal').modal('show');
      vm.isNew = isNew;
      if (vm.isNew) {
        vm.tempCoupon = {};
      } else {
        vm.tempCoupon = { ...item };
        const dateAndTime = new Date(vm.tempCoupon.due_date * 1000)
          .toISOString()
          .split('T');
        vm.due_date = dateAndTime[0];
      }
    },
    getCoupons() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons`;
      vm.isLoading = true;
      vm.$http.get(url, vm.tempProduct).then((response) => {
        vm.coupons = response.data.coupons;
        vm.isLoading = false;
      });
    },
    updateCoupon() {
      const vm = this;
      if (vm.isNew) {
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
        vm.$http.post(url, { data: vm.tempCoupon }).then(() => {
          $('#couponModal').modal('hide');
          vm.getCoupons();
        });
      } else {
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        vm.due_date = new Date(vm.tempCoupon.due_date * 1000);
        vm.$http.put(url, { data: vm.tempCoupon }).then((response) => {
          console.log(response);
          $('#couponModal').modal('hide');
          vm.getCoupons();
        });
      }
    },
    delModal(item) {
      this.tempCoupon = item;
      $('#delCouponModal').modal('show');
    },
    delCoupon() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      vm.$http.delete(url).then(() => {
        $('#delCouponModal').modal('hide');
        vm.getCoupons();
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>

<style scoped>
.couponTable {
  white-space: nowrap;
}
.couponTable td {
  vertical-align: middle;
}
.hov-txt:hover{
  color:white;
}
</style>
