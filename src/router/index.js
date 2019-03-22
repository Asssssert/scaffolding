import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Aside from '@/components/common/Aside'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Main from '@/components/common/Main'
import Test from '@/components/page/Test'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/index/'},
    {
      path: 'home', name: 'home', component: Home, children: [
        {
          path: '/index',
          name: 'index',
          components: {
            header: Header,
            aside: Aside,
            footer: Footer,
            main: Main,
          },
          children: [
            {path:"test",name:'Test',component: Test}
          ]
        }
      ]
    },

  ]
})
