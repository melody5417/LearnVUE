import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/index' // @ is src path
import DetailPage from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld', // 不区分大小写
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
      ]
    }
  ]
})
