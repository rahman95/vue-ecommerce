<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <router-link to="/" class="navbar-brand">
        <i class="fa fa-rebel" aria-hidden="true"></i> VueShop
      </router-link>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">
              <i class="fa fa-shopping-basket" aria-hidden="true"></i>  My Basket
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">
              <i class="fa fa-cogs" aria-hidden="true"></i> Admin
            </router-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  @import 'assets/styles/app.scss';
</style>
