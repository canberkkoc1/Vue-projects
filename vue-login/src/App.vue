<template>
  <div class="container d-flex justify-content-around">
    <router-link to="/" class="text-decoration-none border border-danger p-2 text-white bg-primary mt-3 mb-4">Login</router-link>
    <router-link to="/Signup" class="text-decoration-none border border-danger p-2 text-white bg-warning mt-3 mb-4">Sign-Up</router-link>
  </div>
    <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>