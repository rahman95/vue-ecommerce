import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Cart from '@/components/Cart';

// Admin Components
import Index from '@/components/admin/Index';
import Create from '@/components/admin/Create';
import Products from '@/components/admin/Products';
import Edit from '@/components/admin/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'list',
          name: 'Products',
          component: Products,
        },
        {
          path: 'create',
          name: 'Create',
          component: Create,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    },
  ],
});
