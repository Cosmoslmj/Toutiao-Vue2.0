<template>
  <div id="app">
    <router-view></router-view> 
  </div>

</template>

<script>
export default {
  name: 'app',
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
/*  width: 125px;*/
  margin-left: -30px; 
  height: 80px;
  overflow: hidden;
}
.list2-img {
  display: flex;
}
.list2-img div img{
  flex: 1;
  width: 95%;
  margin-bottom: 5px;
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
