<template>
  <div class="header container-fluid bg-white fixed-top px-0">
    <div class="container d-flex justify-content-between align-items-center  ">
      <router-link to="/home"
        ><img src="../assets/img/logo.svg" alt=""
      /></router-link>
      <button class="showmenu btn d-md-none" @click="showmenu">
        <i class="fas fa-bars fa-2x"></i>
      </button>
      <div class="navmenu d-block">
        <ul class="list-unstyled d-md-flex m-auto">
          <li @click="hidemenu">
            <router-link to="/home" class="menu-link text-secondary px-4"
              >首頁</router-link
            >
          </li>
          <li @click="hidemenu">
            <router-link
              :to="{
                path: '/product',
                query: { productCategory: '' },
              }"
              class="menu-link text-secondary px-4"
              >商品</router-link
            >
          </li>
          <li @click="hidemenu">
            <a href="#" class="text-secondary px-4">關於</a>
          </li>
          <li @click="hidemenu">
            <router-link to="/shoppingcart" class="text-secondary px-4"
              >購物車</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="menubackground d-none" @click="showmenu"></div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  methods: {
    showmenu() {
      $(".navmenu").toggleClass("show");
      $(".menubackground").toggleClass("d-block");
    },
    hidemenu(){
      $(".navmenu").removeClass("show");
      $(".menubackground").removeClass("d-block");
    }
  },
};
</script>

<style>
.header {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index:20;
}

@media (max-width: 767px) {
  .navmenu {
    transform:translateX(-200px);
    position: absolute;
    top: 80px;
    left:0;
    height:100vh;
    width:200px;
    background: white;
    transition: all 0.5s;
    padding:20px 0;
  }
  .navmenu li a{
    display:block;
    width:100%;
    height:60px;
    text-align:center;
  }
  .navmenu.show {
    transform:translateX(0);
  }
  .menubackground{
    width:100%;
    height:100%;
    background:black;
    opacity:0.5;
    position:fixed;
    z-index:-1;
  }
}
</style>
