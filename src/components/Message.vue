<template>
    <div>
        <h2>message</h2>
        <ul>
            <li v-for="message in messageList" :key="message.id">
                 
                <router-link :to="`/home/message/messagedetail/${message.id}`">{{message.title}}</router-link>
                <button @click="pushShow(message.id)">push方式查看详情</button> &nbsp;&nbsp;
                <button @click="replaceShow(message.id)">replace方式查看详情</button>
            </li>
        </ul>

        <button @click="$router.back()">返回</button>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                messageList:[]
            }
        },
        mounted(){
            //模拟异步数据
            setTimeout(()=>{
                const message = [
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
                ]
                this.messageList = message;
            },1000)
        },
        methods:{
            pushShow(id){
                this.$router.push(`/home/message/messagedetail/${id}`)
            },
            replaceShow(id){
                this.$router.replace(`/home/message/messagedetail/${id}`)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>