import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/frontEnd/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../components/frontEnd/Home.vue'),
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('../components/frontEnd/ProductPage.vue'),
      },
      {
        path: 'product/:id',
        name: 'ProductDetails',
        component: () => import('../components/frontEnd/ProductDetails.vue'),
      },
      {
        path: 'shoppingcart',
        name: 'ShoppingCart',
        component: () => import('../components/frontEnd/ShoppingCart.vue'),
      },
      {
        path: 'customer_checkout/:orderId',
        name: 'CustomerCheckout',
        component: () => import('../components/CustomerCheckout.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/backEnd/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/backEnd/Dashboard.vue'),
    children: [
      {
        path: 'adminproduct',
        name: 'AdminProduct',
        meta: { requiresAuth: true },
        component: () => import('../components/backEnd/AdminProduct.vue'),
      },
      {
        path: 'order',
        name: 'Order',
        meta: { requiresAuth: true },
        component: () => import('../components/backEnd/Order.vue'),
      },
      {
        path: 'coupon',
        name: 'Coupon',
        meta: { requiresAuth: true },
        component: () => import('../components/backEnd/Coupon.vue'),
      },
      {
        path: 'customer_order',
        name: 'CustomerOrder',
        component: () => import('../components/backEnd/CustomerOrder.vue'),
      },
      {
        path: 'customer_checkout/:orderId',
        name: 'TextCustomerCheckout',
        component: () => import('../components/CustomerCheckout.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
