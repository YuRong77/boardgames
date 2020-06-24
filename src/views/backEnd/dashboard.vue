<template>
  <div class="dashboard container-fluid px-0">
    <alert />
    <div class="navbar bg-funDark fixed-top">
      <h2 class="h4 text-light m-0">Fun桌遊後台管理系統</h2>
      <button class="showmenudb btn d-lg-none" @click="showsidebar">
        <i class="fas fa-bars text-light fa-2x"></i>
      </button>
      <a
        href="#"
        class="h5 text-light d-none d-lg-block m-0"
        @click.prevent="signout"
        >登出 <i class="fas fa-sign-out-alt"></i
      ></a>
    </div>
    <div class="content d-flex">
      <div class="sidebar bg-funOrange">
        <ul class="nav flex-column text-center">
          <li class="my-4">
            <img src="../../assets/img/logo2.svg" alt="" />
          </li>
          <li class="nav-item bg-funLighOrange border-bottom border-funOrange"
          @click="hidesidebar">
            <router-link class="nav-link text-funOrange" to="/admin/adminproduct"
              ><i class="far fa-list-alt fa-3x d-block py-2"></i
              >產品列表</router-link
            >
          </li>
          <li class="nav-item bg-funLighOrange border-bottom border-funOrange"
          @click="hidesidebar">
            <router-link class="nav-link text-funOrange" to="/admin/order"
              ><i class="fas fa-money-check-alt fa-3x d-block py-2"></i
              >訂單資訊</router-link
            >
          </li>
          <li class="nav-item bg-funLighOrange border-bottom border-funOrange"
          @click="hidesidebar">
            <router-link class="nav-link text-funOrange" to="/admin/coupon"
              ><i class="fas fa-money-bill-wave fa-3x d-block py-2"></i
              >優惠活動</router-link
            >
          </li>
          <li class="nav-item bg-funLighOrange border-bottom border-funOrange"
          @click="hidesidebar">
            <router-link class="nav-link text-funOrange" to="/admin/customer_order"
              ><i class="fas fa-clipboard-list fa-3x d-block py-2"></i
              >模擬訂單</router-link
            >
          </li>
          <li
            class="nav-item bg-funLighOrange border-bottom border-funOrange"
            @click.prevent="signout"
          >
            <a class="nav-link btn text-funOrange" to="/"
              ><i class="fas fa-sign-out-alt fa-3x d-block py-2"></i>登出返回</a
            >
          </li>
        </ul>
      </div>
      <div class="sidebarbackground d-none" @click="hidesidebar"></div>
      <div class="productlist w-100">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import alert from '../../components/alertMessage.vue';

export default {
  components: {
    alert,
  },
  methods: {
    signout() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/logout`;
      vm.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.$router.push('/');
        }
      });
    },
    showsidebar() {
      $('.sidebar').toggleClass('show');
      $('.sidebarbackground').toggleClass('d-block');
    },
    hidesidebar() {
      $('.sidebar').removeClass('show');
      $('.sidebarbackground').removeClass('d-block');
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 60px;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
}
.content {
  margin-top: 60px;
  max-width: 100%;
}
.sidebar {
  width: 150px;
  height: 100vh;
  position: fixed;
  transition: all 0.5s;
  z-index:20;
}
.productlist {
  margin-left: 150px;
  padding: 2% 4% 3% 4%;
}
@media (max-width: 991px) {
  .sidebar {
    transform: translateX(-150px);
  }
  .sidebar.show {
    transform: translateX(0);
  }
  .productlist {
    margin-left: 0;
  }
  .sidebarbackground {
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    position: fixed;
    z-index: 1;
  }
}
</style>
