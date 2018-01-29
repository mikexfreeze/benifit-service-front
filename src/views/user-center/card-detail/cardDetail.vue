<template>
    <div class="card-detail-con">
        <div class="listCoupon mb">
            <div class="Coupon"></div>
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
            <div class="small-bg"></div>
            <a href="/coupon-tab" class="LookMore"></a>
        </div>
        <div class="listCoupon">
            <div class="Coupon Jdetail">
            </div>
            <div class="ListInfo">
                <div class="ListInfoHead">
                    <span class="w25">获取日期</span>
                    <span class="w18">积分</span>
                    <span class="w25">有效期至</span>
                    <span class="w25">获取途径</span>
                </div>
                <ul class="orderMainInfo">
                    <li v-for="bonus in bonusList">
                        <span class="w25">{{bonus.transactionDate | moment("YYYY/MM/DD")}}</span>
                        <span class="w18">{{bonus.bonusPoint}}</span>
                        <span class="w25">{{bonus.transactionDate | cptExpiryDate }}</span>
                        <span class="w25">{{bonus.bonusPointReason}}</span>
                    </li>
                </ul>
            </div>
            <router-link :to="{name:'会员积分'}" class="LookDetail"></router-link>
            <div class="snow"></div>
        </div>
         <div class="car"></div>
    </div>
</template>

<script src="./cardDetail.js"></script>
<style scoped lang="scss" src="./cardDetail.scss"></style>
