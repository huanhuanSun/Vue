import Home from '../components/Home.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import MessageDetial from '../components/MessageDetail.vue'

export default [
    {
        path:'/home',
        name:'home',
        component:Home,
        children:[
            {
                path:'/home/news',
                component:News
            },
            {
                path:'/home/message',
                component:Message,
                children:[
                    {
                        path:'/home/message/messagedetail/:id',
                        component:MessageDetial
                    }
                ]
            },
            {
                path:'/home',
                redirect: '/home/news'
            }
        ]
    },
    {
        path:'/about',
        name:'about',
        component:About
    },{
        path:'',
        redirect: '/home'
    }
]