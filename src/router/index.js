import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import menumore from '@/components/menumore'
import detail from '@/components/detail'
import content from '@/components/content'
import nav from '@/components/nav'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: hello,
      children: [
        {
          path: '/',
          name: 'Hello',
          components: {
            default: hello,
            nav: nav,
            content: content
          }
        }
      ]
    },
    {
      path: '/menumore',
      name: 'more',
      component: menumore
    },
    {
      path: '/detail',
      component: detail
    }
  ]
})
