<template>
  <div class="product">
    <loading :active.sync="isLoading"></loading>
    <div class="text-center">
      <button
        class="btn btn-funOrange px-4 text-light"
        @click="openModal(true)"
      >
        建立新產品
      </button>
    </div>
    <div class="table-responsive-xl mb-3">
      <table class="productTable table text-center mt-4">
        <thead class="bg-funGray">
          <tr>
            <th>產品圖示</th>
            <th>產品名稱</th>
            <th>分類</th>
            <th class="text-right">原價</th>
            <th class="text-right">售價</th>
            <th>是否啟用</th>
            <th>編輯產品</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in product" :key="item">
            <td>
              <div
                class="productImg mx-auto"
                style="width:150px"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
            </td>
            <td>{{ item.title }}</td>
            <td>{{ item.category }}</td>
            <td class="text-right">{{ item.origin_price | currency }}</td>
            <td class="text-right">{{ item.price | currency }}</td>
            <td>
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <button
                class="btn btn-outline-funOrange btn-sm hov-txt"
                @click="openModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn text-funDarkOrange btn-sm ml-2"
                @click="delModal(item)"
              >
                <i class="far fa-trash-alt btn-sm btn-funDarkOrange"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--分頁條-->
    <div class="text-center" aria-label="Page navigation example">
      <div class="nav d-inline-block">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: !pagination.has_pre }">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              @click.prevent="getproduct(pagination.current_page - 1)"
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
            <a class="page-link " href="#" @click.prevent="getproduct(page)">{{
              page
            }}</a>
          </li>
          <li class="page-item" :class="{ disabled: !pagination.has_next }">
            <a
              class="page-link"
              href="#"
              aria-label="Next"
              @click.prevent="getproduct(pagination.current_page + 1)"
            >
              <span aria-hidden="true">&raquo;</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <!--新增、編輯產品Modal-->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-funOrange text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span
                v-if="
                  isNew ? (modalTitle = '新增產品') : (modalTitle = '編輯產品')
                "
                >{{ modalTitle }}</span
              >
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
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="smLoading"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&        s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  :src="tempProduct.imageUrl"
                  alt=""
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="tempProduct.title"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      v-model="tempProduct.category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      v-model="tempProduct.unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      v-model="tempProduct.price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempProduct.description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    v-model="tempProduct.content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-funOrange text-light"
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--刪除產品Modal-->
    <div
      class="modal fade"
      id="delProductModal"
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
            <strong class="text-funDarkOrange">{{ tempProduct.title }}</strong>
            商品 (刪除後無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-funDarkOrange"
              @click="delProduct"
            >
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
  data() {
    return {
      product: [],
      pagination: {},
      tempProduct: {},
      modalTitle: '',
      isNew: false,
      isLoading: false,
      smLoading: false,
    };
  },
  methods: {
    getproduct(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(url).then((response) => {
        vm.isLoading = false;
        vm.product = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      $('#productModal').modal('show');
    },
    updateProduct() {
      const vm = this;
      let url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      let httpMethod = 'post';
      if (!vm.isNew) {
        url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = 'put';
      }
      vm.$http[httpMethod](url, { data: vm.tempProduct }).then((response) => {
        if (response.data.success) {
          $('#productModal').modal('hide');
          vm.getproduct();
        } else {
          $('#productModal').modal('hide');
          vm.getProduct();
        }
      });
    },
    delModal(item) {
      this.tempProduct = item;
      $('#delProductModal').modal('show');
    },
    delProduct() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      vm.$http.delete(url).then(() => {
        $('#delProductModal').modal('hide');
        vm.getproduct();
      });
    },
    uploadFile() {
      const vm = this;
      const file = vm.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      vm.smLoading = true;
      vm.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          vm.smLoading = false;
          if (response.data.success) {
            vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl);
            vm.$bus.$emit('message:push', '上傳成功', 'success');
          } else {
            vm.$bus.$emit('message:push', response.data.message, 'danger');
          }
        });
    },
  },
  created() {
    this.getproduct();
  },
};
</script>

<style scoped>
.productImg {
  height: 150px;
  background-repeat: no-repeat;
  background-position: center;
}
.productTable {
  white-space: nowrap;
}
.productTable td {
  vertical-align: middle;
}
.hov-txt:hover {
  color: white;
}
</style>
