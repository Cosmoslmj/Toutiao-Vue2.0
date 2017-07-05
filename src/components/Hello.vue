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
      <router-view name="nav"></router-view> 
    </div>
    <router-view name="content"></router-view> 
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
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
</style>
