<template>
    <div>
        嵌套路由
        home
        <router-link to="/home/foo">to foo</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>