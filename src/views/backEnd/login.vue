<template>
  <div
    class="container-fluid bg-funGray vh-100 d-flex justify-content-center"
  >
    <div class="login">
      <div class="login_logo mb-3">
        <img src="../../assets/img/logo2.svg" alt="" />
      </div>
      <form class="login_form p-4" @submit.prevent="signin">
        <h3 class="h6 text-secondary mb-3">管理員登入</h3>
        <input
          v-model="user.username"
          type="email"
          id="inputEmail"
          class="form-control mb-3"
          placeholder="輸入電子信箱"
          required
          autofocus
        />
        <input
          v-model="user.password"
          type="password"
          id="inputPassword"
          class="form-control mb-3"
          placeholder="輸入密碼"
          required
        />
        <button class="btn btn-md btn-funOrange btn-block text-light" type="submit">
          確認
        </button>
      </form>
    </div>
    <div class="previous">
      <router-link to="/" class="btn">
      <i class="fas fa-undo-alt bg-funDarkOrange text-white rounded-circle p-2"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signin() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      this.$http.post(url, this.user).then((response) => {
        if (response.data.success) {
          vm.$router.push("/admin/adminproduct");
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 320px;
  text-align: center;
  position:absolute;
  top:25%;
}
.login_form {
  width: 100%;
  height: 230px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}
.previous{
  position:absolute;
  bottom:25%;
}
</style>
