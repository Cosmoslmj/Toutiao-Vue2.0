<template>
  <div class="top-nav-bar">        
    <div class="container">
      <div class="row">
        <div class="col-xs-10 nav-left-menu">
          <div>
            <ul>
              <li>
                <a v-for="(item, index) in navlist" to='/' @click="changeitem">{{ item.nav }}
                </a>
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
import { Indicator } from 'mint-ui'
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
  },
  methods: {
    changeitem () {
      Indicator.open(() => {
        this.text = ''
        this.spinnerType = 'triple-bounce'
      })
      setTimeout(() => {
        Indicator.close()
        console.log('4')
        this.$router.push({path: '/'})
      }, 500)
    }
  }
}
</script>

<style scoped>
  .nav-left-menu {
  white-space:nowrap;
  overflow-x: scroll;
  /*width:2000px;*/
}
.nav-left-menu::-webkit-scrollbar {
  display:none;
}
.nav-left-menu ul {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 0;
}
.nav-left-menu ul li {
  list-style: none;
  display: inline-block;
  font-size: 18px;
}
.nav-left-menu ul li a {
  color: #505050;
  text-decoration: none;
  margin-right: 25px;
}
.nav-left-menu ul li a:hover {
  color: #D43D3D;
}
.nav-right-more {
  width: 20px;
  height: 30px;
  box-shadow: -2px 0px 1px #ccc;
  border-left: 1px solid #ccc;
  margin-top: 5px;
  right: 8px;
  margin-left: 20px;
  overflow: hidden;
}
.nav-right-more .glyphicon {
  font-size: 18px;
  right: 5px;
  top:5px;
  color: #f85959;
}
</style>
