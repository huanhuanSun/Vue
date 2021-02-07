<template>
  <div id="app">
    <nav>
      <router-link to="/home" >home</router-link>
      <router-link to="/about" >about</router-link>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
   
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
.router-link-active{
  color: red;
}
nav{
  width: 50px;
  padding: 10px 0;
  display:flex;
  flex-direction: column;
  float: left;
}
nav a{
  padding: 5px 0;
  text-decoration: none;
  border:1px solid #ddd;
  width: 100px;
  text-align: center;
}
.content{
  float: left;
  margin: 0 100px;
}
</style>
