import Vue from 'vue'
import Router from 'vue-router'
import User from '@/views/User/User'
import UserList from '../views/User/UserList'
import AddUser from '../views/User/AddUser'

import My from '../views/My/My'

import MyOrder from '../views/Order/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/User',
      component: User,
      // 有子路由时 父路由就不要写name属性了
      children: [
        {
          path: '/',
          redirect: 'UserList'
        },
        {
          path: 'UserList',
          component: UserList,
          name: 'UserList'
        },
        {
          path: 'AddUser',
          component: AddUser,
          name: 'AddUser'
        }
      ]
    },
    {
      path: '/MySetting',
      component: My
    },
    {
      path: '/MyOrder',
      component: MyOrder
    }
  ]
})
