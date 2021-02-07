<template>
  <div id="app">
    <!-- <router-link >helloword</router-link> |  -->
    <router-link to="/home">home</router-link> |
    <router-link :to="{name:'User', params:{id:'1'}, query:{name:'heihei'}}"> user</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link :to="{name:'test'}"> test</router-link> 
    
    <hr>
   <router-view ></router-view>
   <router-view name="TestA"></router-view>
   <router-view name="foo"></router-view>
   <router-view name="bar"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
</style>
