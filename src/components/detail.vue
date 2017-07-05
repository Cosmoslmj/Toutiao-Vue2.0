<template>
  <div class="container">
    <div class="article-header" v-for="item in articlelist">
      <h1 class="article-title">{{ item.atitle }}</h1>
      <div class="article-author">
        <a href="">
          <div class="artcle-avatar">
             <img :src="item.asrc">
          </div>
        </a>     
        <div class="author-info">
           <p class="author-name">
              <a href="">
                <span class="media-name">{{ item.aname }}</span>
                <img src="//s3b.pstatp.com/growth/mobile_detail/image/toutiaohao_tag_bc28ef080879ea46945f90a280f66c28.svg">
              </a>
           </p>
           <a href="" class="author-publish">
             <span class="publish-type">{{ item.ptype }}</span>
             <span class="publish-time">{{ item.ptime }}</span>
           </a> 
        </div>
        <a href="" class="attention">关注</a>
      </div>
    </div>
    <div class="article-content clearfix" v-for="item in paragraph">
      <div>
        <p class="big-img">
          <img :src="item.gsrc[0]">
        </p>
        <p class="img-title">{{ item.gtitle }}</p>
        <div class="article-content-paragraph">
          <p>{{ item.gparagraph[0] }}</p>
          <p>{{ item.gparagraph[1] }}</p>
          <p>{{ item.gparagraph[2] }}</p>
          <p class="big-img">
            <img :src="item.gsrc[1]">
          </p>
          <p class="img-caption">{{ item.gcaption[0] }}</p>
          <p>{{ item.gparagraph[3] }}</p>
          <p>{{ item.gparagraph[4] }}</p>
          <p class="big-img">
            <img :src="item.gsrc[2]">
          </p>
          <p class="img-caption">{{ item.gcaption[1] }}</p>
          <p>{{ item.gparagraph[5] }}</p>
          <p>{{ item.gparagraph[6] }}</p>
          <p>{{ item.gparagraph[7] }}</p>
        </div>
      </div>
    </div>
    <div class="icon-hongbao">
      <a href="">
        <img src="//s3a.pstatp.com/growth/mobile_detail/image/bonus_icon@3x_f4035aa1c7322822ac0f4f5c2648bf84.png">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articlelist: [
        {
          atitle: '辽宁舰多花了几十亿就是这小国使坏，现在该国也要造航母，却来求中国',
          asrc: 'https://p3.pstatp.com/thumb/8953/4471961306',
          aname: '小飞猪观察',
          ptype: '原创',
          ptime: '07-04 11:34'
        }
      ],
      paragraph: [
        {
          gsrc: ['https://p3.pstatp.com/large/2c3d00022796e92a7397', 'https://p3.pstatp.com/large/2c35000221dd4b8ce7e6', 'https://p3.pstatp.com/large/2c300001ef2f90198b86'],
          gtitle: '土耳其国产航母可能将在现有两栖攻击舰设计方案基础上，强化航空能力搭载F-35B',
          gparagraph: ['据俄罗斯卫星网7月3日报道，土耳其总统埃尔多安在伊斯坦布尔造船厂第4艘护卫舰下水仪式上发表讲话表示，安卡拉打算以自己的力量建造航空母舰，我们决心已下并且无疑会取得成功。', '土耳其总统自信满满的表态，建造自己的航母对于我们已经再也不是遥远的梦想，有了航母可以使土耳其的造船领域进入领先国家之列，六年内土耳其可以消除对国外进口的依赖性。', '航母是一个大国的标志，是成为一支蓝水海军必不可少的硬性指标。为何连如今土耳其这样一个小国都称要建造自己的航母，哪里来的信心。说到土耳其大家一定就会想到红旗9导弹事件，土耳其出尔反尔撤销与中国签署几十亿美元的“红旗-9防空导弹合约”， 期间可谓是一波三折。', '但值得一提的是，土耳其干了件对于中国是非常可恨的事情，早年中国引进瓦良格（如今整改后的辽宁舰）过土耳其海峡遭横加阻拦无法通过，搞得差点中国引进瓦良格计划泡汤。详情是：香港一家公司向乌克兰购买了瓦良格，对这艘前苏联时代的航母而言，来华路上遇见了太多考验，当瓦良格欲进入博斯普鲁斯海峡时，遭到了土耳其政府的拦阻，并被命令退回黑海，让中国引进的瓦良格在黑海上徘徊了500多天，最后还勒索了中国10亿美元（相当于70亿人民币左右）的买路钱，才能通过，直到2002年3月，锈迹斑斑的瓦良格号才割破浓雾抵达大连港。', '然而7月3日，土耳其总统宣称要建造航母。按照，土耳其国防工业副部长穆拉德•巴亚尔所说，土耳其为打造航母舰队，必须拥有新型驱逐舰至少2艘、1艘反潜战舰、1艘潜艇、1艘反水面战战舰、4艘导弹快艇、1架常规直升机与40架能从航母上起降落的战机，还有一艘可为航母加油的油轮。', '虽说土耳其拆解过一艘2014年从英国海军退役的卓越号航母，土耳其的拆船厂对英国海军来说可谓“大名鼎鼎”，也许从中获得不少卓越号航母技术，但还是远远不够。有一点就能证实，前不久，据国外媒体报道，土耳其称对对中国新一代两栖攻击舰产生“浓厚”的兴趣，已经向中方表示希望能够转移相关设计图纸和技术，连建造舰船的技术都不足情况，何谈能够建造一艘航母。', '随着中国航母编队已装配很多先进技术，土耳其为获得中国新一代两栖攻击舰的设计图纸和技术，为其打造航母舰队花了不少心事，知道中国在海外购买了不少港口，竟打起这个主意，讨中国所好，表示土耳其愿意给中国新港口，换取中国转移相关的新一代两栖攻击舰设计图纸和技术。', '对于土耳其曾横加阻拦勒索瓦良格买路费，又对红旗9撕毁合约言而无信，中国对于这样国家要警惕。总之而言，土耳其要想自己建造的航母，路还有很远的一段距离。'],
          gcaption: ['资料图: 辽宁舰', '土耳其总统埃尔多安查看TCG两栖攻击舰模型']
        }
      ]
    }
  }
}
</script>
<style>
.article-title {
    font-size: 24px;
    line-height: 2.5rem;
    font-weight: 700;
    color: #222;
    text-align: left;
}
.article-author {
    margin-top: 12px;
}
.artcle-avatar {
    height: 34px;
    width: 34px;
    position: relative;
    float: left; 
}
.artcle-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
}
.author-info {
    float: left;   
    padding-left: 8px;
}
.media-name {
    font-size: 14px;
    color:#222121;
}
.author-name {
     margin-bottom: 0px;
}
.author-name img {
    padding-left: 5px;
    height: 16px;
}
.publish-type {
    border: 1px solid #999;
    border-radius: 4px;
    font-size: 10px;
    -webkit-transform: scale(0.83);
    padding: 0 5px;
    color: #505050;
    margin-left: -5px;
}
.publish-time {
    font-size: 12px;
    line-height: 12px;
    display: inline-block;
    vertical-align: middle;
    color: #999;
    margin-left: 2px;
}
.attention {
    float: right;
    display: block;
    width: 72px;
    height: 30px;
    line-height: 30px;
    background-color: #2a90d7;   
    text-align: center;
    color: rgba(255,255,255,.96);
   /* -webkit-box-sizing: border-box;
    box-sizing: border-box;*/
    font-size: 14px;
    border-radius: 6px;
}
/*.article-content {
    position: relative;
    margin-top: 50px;
}*/
.big-img img {
    width: 100%;
    margin-top: 20px;
}
.img-title {
    font-size: 12px;
    color: #777;
    line-height: 16px;
    margin-top: 8px;
    margin-bottom: 15px;
}
.article-content-paragraph p {
    color: #333;
    text-align: left;
    margin-top: 24px;
    font-size: 18px;
    line-height: 2.5rem;
}
.article-content-paragraph p.img-caption {
    color: #777;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    margin-top: 8px;
}
.icon-hongbao {
    position: fixed;
    bottom: 40px;
    right: 20px;
}
.icon-hongbao img {
    width: 80px;
    height: 100px;
}
</style>
