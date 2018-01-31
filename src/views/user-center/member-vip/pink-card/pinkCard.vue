<template>
    <div class="content">
        <p class="Ptext"></p>
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
</template>

<script>
  export default {
    name: 'pink-card'
  }
</script>

<style scoped lang="scss">
    .content{
        width: 90%;
        margin: 0 auto;
        margin-top: 0.1rem;
        position: relative;
    .Ptext{
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }
    .content-part1{
        display: flex;
        justify-content: space-between;
        align-items: center;
    .leftPic{
        width: 3.38rem;
        height: 2.93rem;
        background: url(~@/assets/img/new/ios/part1@2x.png) no-repeat;
        background-size: 100% 100%;
    }
    .rightPic{
        width: 3.54rem;
        height: 3.34rem;
        background: url(~@/assets/img/new/ios/pic1@2x.png) no-repeat;
        background-size: 100% 100%;
    }
    }
    .content-part2{
        display: flex;
        justify-content: space-between;
        align-items: center;
    .leftPic{
        width: 3.54rem;
        height: 3.34rem;
        background: url(~@/assets/img/new/ios/pic2@2x.png) no-repeat;
        background-size: 100% 100%;
    }
    .rightPic{
        width: 3.73rem;
        height: 2.59rem;
        background: url(~@/assets/img/new/ios/part2@2x.png) no-repeat;
        background-size: 100% 100%;
    }
    }
    .content-part3{
        display: flex;
        justify-content: space-between;
        align-items: center;
    .leftPic{
        width: 3.4rem;
        height: 3.76rem;
        background: url(~@/assets/img/new/ios/part3@2x.png) no-repeat;
        background-size: 100% 100%;
    }
    .rightPic{
        width: 3.54rem;
        height: 3.34rem;
        background: url(~@/assets/img/new/ios/pic3@2x.png) no-repeat;
        background-size: 100% 100%;
    }
    }
    .content-part4{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    .leftPic{
        width: 3.42rem;
        height: 3.32rem;
        background: url(~@/assets/img/new/ios/pic4@2x.png) no-repeat;
        background-size: 100% 100%;
    }
    .rightPic{
        width: 3.42rem;
        height: 3.32rem;
        background: url(~@/assets/img/new/ios/part4@2x.png) no-repeat;
        background-size: 100% 100%;
    }
    }
    .snow{
        width: 1.49rem;
        height: 0.87rem;
        background: url(~@/assets/img/new/snow@2x.png) no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: -0.9rem;
    }
    .Car{
        width: 4.25rem;
        height: 2.5rem;
        background: url(~@/assets/img/new/car.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        right: -0.35rem;
        bottom: 0rem;
    }
    }
</style>
