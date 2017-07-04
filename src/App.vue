<template>
  <div id="app">
    <!-- 头部开始 -->
    <div class="header">
      <div class="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-xs-2 bar-l">
              <a href=""><img src="https://s3b.pstatp.com/growth/mobile_list/image/feed_ic_message_normal@3x_f2ea949f120fda7532de30660fd47455.png"></a>
            </div>
            <div class="col-xs-8 bar-m">
              <a href="">
                <img src="https://s3.pstatp.com/growth/mobile_list/image/wap_logo@3x_581de69e38eae19e1cc57449a97be10f.png">
                <img class="refresh" src="https://s3a.pstatp.com/growth/mobile_list/image/titlebar_refresh_small@3x_96fb31e43870246a450c5812493204bd.png">
              </a>
            </div>
            <div class="col-xs-2 bar-r">
              <a href="">
                <img src="https://s3.pstatp.com/growth/mobile_list/image/feed_ic_search_normal@3x_0f198e566fac66cbb016bc72f15d4f39.png">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="top-nav-bar">        
        <div class="container">
          <div class="row">
            <div class="col-xs-11 nav-left-menu">
              <div>
                <ul>
                  <li>
                    <a v-for="item in navlist">{{ item.nav }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xs-1 nav-right-more">
              <span class="glyphicon glyphicon-plus"></span>
            </div>
          </div>
        </div>        
      </div>
    </div>
    <!-- 头部结束 -->
    <!-- 内容开始 -->  
    <div class="container clearfix content">
      <section v-for="item in contlist">
        <a href="javascript:;">
          <div class="row">
            <div class="col-xs-8">
              <h3 class="list-detail">
                  {{ item.detail }}
              </h3>
              <div class="list-info">
                <span class="hot-label">{{ item.info[0] }}</span>
                <span class="net">{{ item.info[1] }}</span>
                <span class="comment">{{ item.info[2] }}</span>
              </div>         
            </div>
            <div class="col-xs-4 list-img">
              <img :src="item.src">
            </div>
          </div>
        </a>
      </section>
      <section v-for="itemtwo in contlisttwo">
        <a href="javascript:;">
          <div class="containter"> 
            <div class="row">
              <div class="col-xs-12">
                <h3 class="list-detail">
                  {{ itemtwo.detail }}
                </h3>
              </div>
            </div>
            <div class="list2-img">
              <div class="row">
                <ul>
                  <li class="col-xs-4">
                      <img :src="itemtwo.src[0]">
                  </li>
                  <li class="col-xs-4">
                      <img :src="itemtwo.src[1]">
                  </li>
                  <li class="col-xs-4">
                      <img :src="itemtwo.src[2]">
                  </li>            
                </ul>
              </div>              
            </div>
            <div class="list2-info">
              <div class="row"> 
                <div class="col-xs-12">
                  <span class="net">{{ itemtwo.info[0] }}</span>
                  <span class="comment">{{ itemtwo.info[1] }}</span>
                  <span class="time">{{ itemtwo.info[2] }}</span>
                </div>
              </div> 
            </div>                     
          </div>
        </a>
      </section>
    </div>
  </div>
    <!-- 内容结束 -->
    <!--  <img src="./assets/logo.png"> -->

</template>

<script>
export default {
  name: 'app',
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
      ],
      contlist: [
        {
          detail: '力量小哥亲手甩抻拔糖，细如发丝可穿针做线',
          info: ['热', '美术视觉', '评论 20'],
          src: 'http://p3.pstatp.com/video1609/2c2d0002906b54a34cb5'
        },
        {
          detail: '这小品没上春晚亿万人惋惜，别说你还没看过',
          info: ['热', '追梦人', '评论 2000'],
          src: 'https://p3.pstatp.com/list/2b800004701ae661383d'
        },
        {
          detail: '揭秘章莹颖案嫌犯，邻居认为他“令人毛骨悚然”',
          info: ['热', '新京报', '评论 2000万'],
          src: 'https://p3.pstatp.com/list/2c2600038548d0e6729f'
        }
      ],
      contlisttwo: [
        {
          detail: '董明珠造车：5分钟充满电能跑200公里,寿命可达30年！',
          src: ['https://p3.pstatp.com/list/2c3300046d246375f763', 'https://p3.pstatp.com/list/2c340000a390cf8c5836', 'https://p3.pstatp.com/list/2c2800037676e43be0b1'],
          info: ['汽车门槛', '评论 20万', '1小时之前']
        },
        {
          detail: '李晓霞复出征战全运会，国乒有话说！',
          src: ['https://p3.pstatp.com/list/2c2900030bb49807b639', 'https://p3.pstatp.com/list/2c3200047a56650897ea', 'https://p3.pstatp.com/list/2c310002b9f60b25a549'],
          info: ['科汇院', '评论 76万', '3小时之前']
        },
        {
          detail: '此岛曾是中国最大的岛屿，比台湾大两倍，却被一无耻小人拱手相让',
          src: ['https://p3.pstatp.com/list/1f8e0005490c35f063c6', 'https://p3.pstatp.com/list/1f850005430b5744476a', 'https://p3.pstatp.com/list/2c2900023639feefadff'],
          info: ['苹果说历史', '评论 20万', '5小时之前']
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
.clearfix:after{
  content:".";
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
}
.clearfix{zoom:1;};
.header {
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  overflow: hidden;
  background-color: #F5F5F5;
}
.top-bar {
/*  height: 50px;*/
  background-color: #D43D3D;
}
.top-nav-bar {
  border-bottom: 2px solid #f1f1f1;
}
.bar-l a, .bar-r a{
  display: block;
  width: 45px;
  height: 50px;
  line-height: 50px;
}
.bar-l a img {
  margin-left: -14px;
}
.bar-l a img, .bar-r a img{
  width: 28px;
  height: 28px;
}
.bar-m a {
  width: 96px;
  height: 50px;
  line-height: 50px;
}
.bar-m a img {
  height: 20px;
}
.bar-m a img.refresh {
height: 16px;
}
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
}
.nav-right-more .glyphicon {
  font-size: 18px;
  right: 5px;
  top:5px;
  color: #f85959;
}
/*内容开始*/
.content {
  margin-top: 90px;
}
section {
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px; 
  border-bottom: 1px solid #F5F5F5;
}
.list-detail {
  font-size: 18px;
  text-align: left;
  color: #131313;
  margin-top: 0;
  line-height: 1.2em;
}
.list-info {
  font-size: 9px;
  -webkit-transform: scale(0.75);
  -o-transform: scale(1);
  color: #999;
  text-align: left;
  position: absolute;
  padding: 5px;
  padding-left: 0;
  left: 0;
}
.list-info span {
  margin-right: 6px; 
}
.list-info .hot-label {
  width: 16px;
  height: 16px;
  line-height: 16px;
  color:#f85959;
  display: inline-block;
  text-align: center;
  border: 1px solid #fff;
  border-color: rgba(248,89,89,.5);
}
.list-img img{
  width: 125px;
  margin-left: -30px; 
  height: 80px;
}
.list2-img .col-xs-4 {
  padding-left: 0px;
   padding-right: 0px;
}
.list2-img ul li {
  list-style: none;
  display: inline-block;
}
.list2-img ul li img {
  margin-left: 5px;
  padding-bottom: 5px;
  width: 110px;
}
.list2-info {
  text-align: left;
  font-size: 9px;
  -webkit-transform: scale(0.75);
  -o-transform: scale(1);
  color: #999;
  position: absolute;
  left: -15px;
  padding-bottom: 5px;
}
/*内容结束*/
</style>
