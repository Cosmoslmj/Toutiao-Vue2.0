<template>
    <div class="container clearfix content">
      <section v-for="item in contlist" @click="gotopage">
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
      <section v-for="itemtwo in contlisttwo" @click="gotopage">
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
                <div>
                  <img :src="itemtwo.src[0]">
                </div>
                <div>
                  <img :src="itemtwo.src[1]">
                </div>
                <div>
                  <img :src="itemtwo.src[2]">
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
      <section v-for="itemthree in contlistthree" @click="gotopage">
        <a href="javascript:;">
          <div class="containter"> 
            <div class="row">
              <div class="col-xs-12">
                <h3 class="list-detail">
                  {{ itemthree.detail }}
                </h3>
              </div>
            </div>
            <div class="list3-img">
                <div>
                  <img :src="itemthree.src">
                </div>
                <!-- <div>
                  <img :src="itemtwo.src[1]">
                </div>
                <div>
                  <img :src="itemtwo.src[2]">
                </div>  -->         
            </div>
            <div class="list2-info">
              <div class="row"> 
                <div class="col-xs-12">
                  <span class="net">{{ itemthree.info[0] }}</span>
                  <span class="comment">{{ itemthree.info[1] }}</span>
                  <span class="time">{{ itemthree.info[2] }}</span>
                </div>
              </div> 
            </div>                     
          </div>
        </a>
      </section>
    </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      contlist: [
        {
          detail: '力量小哥亲手甩抻拔糖，细如发丝可穿针做线',
          info: ['热', '美术视觉', '评论 20'],
          src: 'https://p3.pstatp.com/list/2b800004701ae661383d'
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
      ],
      contlistthree: [
        {
          detail: '董明珠造车：5分钟充满电能跑200公里,寿命可达30年！',
          src: 'https://p3.pstatp.com/list/2c3300046d246375f763',
          info: ['汽车门槛', '评论 20万', '1小时之前']
        },
        {
          detail: '李晓霞复出征战全运会，国乒有话说！',
          src: 'https://p3.pstatp.com/list/2c2900030bb49807b639',
          info: ['科汇院', '评论 76万', '3小时之前']
        },
        {
          detail: '此岛曾是中国最大的岛屿，比台湾大两倍，却被一无耻小人拱手相让',
          src: 'https://p3.pstatp.com/list/1f8e0005490c35f063c6',
          info: ['苹果说历史', '评论 20万', '5小时之前']
        }
      ]
    }
  },
  methods: {
    gotopage () {
      this.$router.push({path: '/detail/one'})
    }
  }
}
</script>

<style scoped>
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
.list3-img img{
  width: 100%;
  margin-bottom: 5px;
}
/*内容结束*/
</style>
