<template>
  <div class="footer container-fluid bg-secondary">
    <div class="container">
      <div class="row p-4">
        <div class="col-md-7">
          <div class="row">
            <div class="col-sm-6 mb-3">
              <ul class="navbar-nav text-white">
                <li>關於Fun桌遊</li>
                <li><a href="#" class="text-white">加入我們</a></li>
                <li><a href="#" class="text-white">相關條款</a></li>
                <li><a href="#" class="text-white">隱私權政策</a></li>
              </ul>
            </div>
            <div class="col-sm-6 mb-3">
              <ul class="navbar-nav text-white">
                <li>聯絡我們</li>
                <li>TEL : 02-2277-6677</li>
                <li>Mail : fungames@gmail.com</li>
                <li>地址 : XX市XX區XX路XXX巷</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-5 d-flex justify-content-sm-end pb-3">
          <div class="flex-column d-flex justify-content-between">
            <ul class="nav text-white justify-content-sm-end">
              <li>
                <a href="#"><i class="fab fa-facebook-square text-white fa-2x mr-3"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram text-white fa-2x mr-3"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-youtube text-white fa-2x mr-3"></i></a>
              </li>
              <li>
                <a href="#"><i class="fas fa-envelope text-white fa-2x"></i></a>
              </li>
            </ul>
            <router-link to="/login" class="text-right d-lg-none pr-2"
              ><i class="fas fa-user-cog text-white"></i
            ></router-link>
            <p class="text-white m-0">
              YuRong &copy;2020 Vue相關作品，無其他用途。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
