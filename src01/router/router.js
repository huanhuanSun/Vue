import Vue from 'vue' 
import VueRouter  from 'vue-router'

// import HelloWord from '../components/HelloWorld.vue'
import Home from '../components/Home.vue'
import User from '../components/User.vue'
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import TestA from '../components/TestA.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/lala',
            redirect:'/'
        },
        {
            path:'/',
            name:'login',            
            component: Login
        },
        {
            path:'/home',
            name:'Home',
            component:Home,
            children:[
                
                {
                    path:'foo',
                    name:'Foo',
                    component:Foo
                },                
            ]
        },
        {
            path:'/user/:id',
            component:User,
            name:'User',
            children:[
                {
                    path:'bar',
                    name:'Bar',
                    component:Bar
                }
            ]
        },
        {
            path:'/test',
            name:'test',
            alias:'lulu',//别名
            components:{
                default:TestA,
                foo:Foo,
                bar:Bar
            }
        },
        {
            path:'/login',
            name:'login', 
            component:Login           
        }
    ]
})

export default router