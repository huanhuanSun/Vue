<template>
    <div>
        <h2>messageDetail</h2>
        <ul>
            <li>id:{{detial.id}}</li>
            <li>title: {{detial.title}}</li>
            <li>content: {{detial.content}}</li>
        </ul>
    </div>
</template>

<script>
    const allDetails = [
        {
            id:1,
            title:'message001',
            content:'message-content001'
        },
        {
            id:2,
            title:'message002',
            content:'message-content002'
        },
        {
            id:3,
            title:'message003',
            content:'message-content003'
        }
    ];
    export default {
        data(){
            return {
                detial:{}
            }
        },
        mounted(){
            setTimeout(()=>{
                console.log(this.$route.params.id)
                this.detailInfo(this.$route.params.id)
            },1000)
        },
        methods: {
            detailInfo(id){
                this.detial = allDetails.find(item=>item.id === id*1)
                
            }
        },
        watch:{
            $route(val){
                console.log(val.params.id)
                this.detailInfo(val.params.id)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>