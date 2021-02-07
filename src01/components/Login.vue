<template>
    <div>

        我是登录页
        <button @click="login">login </button>

    </div>
</template>

<script>
    export default {

        methods: {
            login(){
                // console.log(this.$router)
                // this.$router.replace({name:'Home'})
                this.$router.replace({path:'/home'})
            }
        },
        
    }
</script>

<style lang="sass" scoped>

</style>