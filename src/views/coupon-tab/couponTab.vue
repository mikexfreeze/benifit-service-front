<template>
    <div class="TabContent">
        <div class="Tab">
            <div class="tabs" :class="[Status ==1 ? 'active' : '']" @click="Unused()">未使用</div>
            <div class="tabs" :class="[Status ==2 ? 'active' : '']" @click="unaccalimed()">未领取</div>
            <div class="tabs" :class="[Status ==3 ? 'active' : '']" @click="used()">已使用</div>
            <div class="tabs" :class="[Status ==4 ? 'active' : '']" @click="expired()">已过期</div>  
        </div>
        <div class="content">
            <div class="listCoupon">
                <div class="ticketList">
                    <img src="~@/assets/img/new/couponbg.png" alt="">
                        <div class="txt">
                            <div class="TopTxt">
                                <h3>Benefit 服务券</h3>
                                <p class="Time">2017/11/01-2017/11/30</p>
                                <p class="store">*仅限XXXX门店使用</p>
                            </div>
                            <a class="btn" href="#"></a>
                        </div>
                </div>
              <div class="ticketList">
                    <img src="~@/assets/img/new/couponbg.png" alt="">
                    <div class="txt">
                        <div class="TopTxt">
                            <h3>Benefit 服务券</h3>
                            <p class="Time">2017/11/01-2017/11/30</p>
                            <p class="store">*仅限XXXX门店使用</p>
                        </div>
                        <a class="btn" href="#"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="snow"></div>
        <div class="small-bg"></div>
        <div class="footer"></div>
    </div>
</template>
<script>
  export default {
    created () {},
    data(){
       return {
           Status:1
       }
    },
    methods:{
        Unused(){
            this.Status=1;
        },
        unaccalimed(){
             this.Status=2;
        },
        used(){
            this.Status=3;
        },
        expired(){
            this.Status=4;
        }
    }
  }
</script>
<style scoped lang="scss" src="./couponTab.scss"></style>
