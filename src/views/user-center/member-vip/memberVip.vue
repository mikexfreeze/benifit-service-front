<template>
  <div class="Member">
      <div class="TopTEXT"></div>
      <div class="Tab">
            <div :class="{active:''}" v-for="item in items" @click="TabContent">{{item.message}}</div>   
        </div>
        <div v-if="ok" class="content">
         <p class="Ptext">粉卡会员12个月内消费金额累计达到1200元，
              即可升级为银卡会员，等级有效期为一年，
              累计消费1500元可延长会籍一年</p>
          <div class="content-part1">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
           <div class="content-part2 mt5">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
           <div class="content-part3 mt5">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
            <div class="content-part4 mt5">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
          <div class="snow"></div>
          <div class="Car"></div>
        </div>
         <div v-else-if="ok" class="content2">
           <p class="Ptext">粉卡会员12个月内消费金额累计达到1200元，
              即可升级为银卡会员，等级有效期为一年，
              累计消费1500元可延长会籍一年</p>
          <div class="content-part1">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
           <div class="content-part2 mt5">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
           <div class="content-part3 mt5">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
            <div class="content-part4 mt5">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
          <div class="snow"></div>
          <div class="Car"></div>
        </div>
         <div v-else class="content3">
           <p class="Ptext">粉卡会员12个月内消费金额累计达到1200元，
              即可升级为银卡会员，等级有效期为一年，
              累计消费1500元可延长会籍一年</p>
          <div class="content-part1">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
           <div class="content-part2 mt5">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
           <div class="content-part3 mt5">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
            <div class="content-part4 mt5">
            <div class="leftPic"></div>
            <div class="rightPic"></div>
          </div>
          <div class="snow"></div>
        <div class="Car"></div>
        </div>
        <div class="explanation"><p>*上述所有会员积分及会员权益仅在贝玲妃上海来福士/北京三里屯/
广州正佳/深圳海岸城/深圳万象城精品店适用</p></div>
  </div>
</template>
<script>
    export default{
      data(){
         return {
           ok:true,
           items: [
            { message: '粉卡会员' },
            { message: '银卡会员' },
            { message: '金卡会员' },
          ]
         }
      },
      methods: {
        TabContent() {
          console.log(1)
        }
      },
    }
</script>
<style scoped lang="scss" src="./memberVip.scss"></style>
