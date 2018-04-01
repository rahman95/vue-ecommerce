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
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> My Basket
            </router-link>
          </li>
          <b-nav-item-dropdown text="Admin" right>
            <router-link to="/admin/create" role="menuitem" target="_self" class="dropdown-item">
              <i class="fa fa-plus" aria-hidden="true"></i> Add
            </router-link>
            <router-link to="/admin/list" role="menuitem" target="_self" class="dropdown-item">
              <i class="fa fa-list" aria-hidden="true"></i> List
            </router-link>
          </b-nav-item-dropdown>
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
