<template>
    <div>
        动态路由
        user content.......
        user- {{$route.params.id}}

        <!-- <router-link to="/user/bar">to bar</router-link> -->

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$route)
        },
        watch: {
            $route(to,param){
                console.log(param)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>