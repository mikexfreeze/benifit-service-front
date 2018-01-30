<template>
    <div class="mainContainer" style="position:relative;">
        <div class="mainCenter">
            <div class="head">
                <span class="name">亲爱的&nbsp;&nbsp;<i>{{member.name}}</i></span>
                <span class="edit"><i class=""></i><em><router-link to="/edit-member">修改个人资料</router-link></em></span>
            </div>
            <div class="center">
                <div class="Img"><img v-if="member.headImgUrl" :src="member.headImgUrl"><img v-else src="../../assets/img/mm.jpg" alt=""></div>
                <div class="tag"></div>
                <div class="Card">
                    <img v-show="member.memberType !== 'S' && member.memberType !== 'G'" src="../../assets/img/new/vip.png" alt="">
                    <img v-show="member.memberType === 'S'" src="../../assets/img/new/Silver-card/Silver-card.png" alt="">
                    <img v-show="member.memberType === 'G'" src="../../assets/img/new/Gold-card/Gold-card.png" alt="">
                    <div class="cardTime">
                        <div class="cardNum">
                            <p>会员卡号</p>
                            <p>{{member.memberCode}}</p>
                        </div>
                        <div class="lastTime">
                            <p>会员卡有效期</p>
                            <p>{{member.membershipPeriodEndDate | moment("YYYY.MM.DD")}}</p>
                        </div>
                    </div>
                </div>
                <div class="CardFlex">
                    <div class="PinkCrad">
                      <span  v-show="member.memberType !== 'S' && member.memberType !== 'G'">粉卡</span>
                      <span  v-show="member.memberType === 'S'">银卡</span>
                      <span  v-show="member.memberType === 'G'">金卡</span>
                        <p class="p1">
                            <img src="../../assets/img/new/text1.png" alt="">
                        </p>
                    </div>
                    <div class="PinkCrad">
                        <span>{{member.bonusPointBalance || 0}}</span>
                        <p class="p2">
                            <img src="../../assets/img/new/text2.png" alt="">
                        </p>
                    </div>
                    <!--<div class="PinkCrad">-->
                        <!--<span>800</span>-->
                        <!--<p class="p3">-->
                            <!--<img src="../../assets/img/new/text3.png" alt="">-->
                        <!--</p>-->
                    <!--</div>-->
                </div>
                <router-view></router-view>

            </div>
        </div>
        <div class="car" v-show="$route.path === '/user-center/list'"></div>
        <div class="footer" v-show="$route.path === '/user-center/nav'"></div>
    </div>
</template>
<script src="./userCenter.js"></script>
<style scoped lang="scss" src="./userCenter.scss"></style>
