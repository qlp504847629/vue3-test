import {createRouter ,createWebHashHistory} from 'vue-router'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
      path: '/home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/helloworld',
      component: () => import('../components/HelloWorld.vue')
    },
    {
      path: '/todolist',
      component: () => import('../views/todo-list.vue')
    },
    {
      path: '/todo-list2',
      component: () => import('../views/todo-list2.vue')
    }
  ]
})
