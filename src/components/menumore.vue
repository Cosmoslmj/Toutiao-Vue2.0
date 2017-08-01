<template>
  <div class="more">
    <div class="head-toolbar">
      <div class="container">
        <div class="row">
          <div class="col-xs-1">
            <span class="back-btn">
              <a href=""><img src="http://s2.pstatp.com/image/toutiao_mobile/header_back.png"></a>
            </span> 
          </div>
          <div class="col-xs-6 col-xs-offset-2">
            <span class="title">
              <a href="">频道管理</a>  
            </span> 
          </div> 
        </div>  
      </div>
    </div>
    <div class="channel-control">
      <div class="control-title container"> 
        <p>点击删除以下频道</p> 
      </div>
      <div class="channel-list">
        <ul class="row container">
          <!-- <transition> -->
          <li class="col-xs-3" v-for="(item, index) in clist"><a href="">{{ item.cname }}</a></li>
         <!--  </transition> -->
        </ul>
      </div>     
    </div>
    <div class="channel-control">
      <div class="control-title container"> 
        <p>点击添加以下频道</p> 
      </div>
      <div class="channel-list">
        <ul class="row container">
          <li class="col-xs-3 cmenu" v-for="item in addclist"><a href="">{{ item.addcname }}</a></li>
        </ul>
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'menumore',
  data () {
    return {
      clist: [
        {
          cname: '推荐'
        },
        {
          cname: '热点'
        },
        {
          cname: '社会'
        },
        {
          cname: '娱乐'
        },
        {
          cname: '科技'
        },
        {
          cname: '汽车'
        },
        {
          cname: '体育'
        },
        {
          cname: '财经'
        },
        {
          cname: '军事'
        },
        {
          cname: '国际'
        },
        {
          cname: '时尚'
        },
        {
          cname: '游戏'
        }
      ],
      addclist: [
        {
          addcname: '旅游'
        },
        {
          addcname: '历史'
        },
        {
          addcname: '探索'
        },
        {
          addcname: '美食'
        },
        {
          addcname: '育儿'
        },
        {
          addcname: '养生'
        },
        {
          addcname: '故事'
        },
        {
          addcname: '美文'
        },
        {
          addcname: '幽默'
        },
        {
          addcname: '教育'
        },
        {
          addcname: '没妆'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .head-toolbar {
    width: 100%;
    height: 50px;
    position: relative;
    background-color: #d43d3d;
  }
  .more {
    width: 100%;
    height: 100%;
  }
  .back-btn{
    width: 44px;
    height: 50px;
    line-height: 30px;
    position: absolute;
    cursor: pointer;
    align-items: center;
  }
  span.back-btn a{
    height: 50px;
    width: 50px;
    text-align: left;
    display: block;
    line-height: 50px;
  }
  .back-btn a img{
    width: 50%;
    height: 50%;
  }
  .title {
    height: 50px;
    line-height: 50px;
  }
  .title a {
    color: #fff;
    font-weight: 900;
    font-size: 16px;
  }
  .control-title {
    background-color: #f5f5f5;
    height: 25px;
  }
  .control-title p {  
    font-size: 12px;
    color: #666;
    padding: 5px 0 0 0;
    text-align: left;
    font-weight: 600;
  }
  .channel-list {  
   margin-top: 10px;
  }
  .channel-list ul li {
    display: inline-block;
    height: 40px;
    margin-bottom: 10px;  
  }
  .channel-list ul li a{
    display: block;
    height: 34px;
    line-height: 34px;
    font-size: 16px;
    color: #131313;
    font-weight: 800;
    border: 1px solid #ccc;
    text-decoration: none;
  }
</style>
