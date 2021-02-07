<template>
    <div>
        <h2>Home</h2>
        <div>
            <router-link to="/home/news">news</router-link> |
            <router-link to="/home/message">message</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
       name:'Home'
    }
</script>

<style lang="scss" scoped>

</style>