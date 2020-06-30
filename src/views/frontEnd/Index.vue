<template>
  <div>
    <Header />
    <router-view class="viewContent"/>
    <Footer />
    <Cart />
    <alert />
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
import alert from '../../components/AlertMessage.vue';
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import Cart from '../../components/frontEnd/Cart.vue';

export default {
  components: {
    Header,
    Footer,
    alert,
    Cart,
  },
  data() {
    return {};
  },
};
</script>

<style>
.viewContent {
  margin-top: 80px;
  min-height: calc(100vh - 80px - 160px);
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
  .adminBtn {
    display: none !important;
  }
}
</style>
