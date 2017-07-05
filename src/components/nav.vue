<template>
  <div class="top-nav-bar">        
        <div class="container">
          <div class="row">
            <div class="col-xs-10 nav-left-menu">
              <div>
                <ul>
                  <li>
                    <a v-for="item in navlist">{{ item.nav }}</a>
                  </li>
                </ul>
              </div>
            </div>            
            <div class="col-xs-2 nav-right-more">
              <router-link to="/menumore">
                <span class="glyphicon glyphicon-plus"></span>
              </router-link>            
            </div>
          </div>
        </div>        
      </div>
</template>

<script>
export default {
  data () {
    return {
      navlist: [
        {
          nav: '推荐'
        },
        {
          nav: '热点'
        },
        {
          nav: '视频'
        },
        {
          nav: '社会'
        },
        {
          nav: '娱乐'
        },
        {
          nav: '军事'
        },
        {
          nav: '科技'
        },
        {
          nav: '汽车'
        },
        {
          nav: '体育'
        },
        {
          nav: '财经'
        },
        {
          nav: '国际'
        },
        {
          nav: '时尚'
        }
      ]
    }
  }
}
</script>
