<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        msg: 'Welcome to the Admin Page'
      }
    }
  }
</script>
