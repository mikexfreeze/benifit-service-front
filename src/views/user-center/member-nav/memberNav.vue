<template>
    <div class="MenberIcon">
        <li><router-link to="list" class="icon icon1"></router-link></li>
        <li><a href="#" class="icon icon2"></a></li>
        <li><router-link to="/member" class="icon icon3"></router-link></li>
    </div>
</template>

<script>
  export default {
    name: 'member-nav'
  }
</script>

<style scoped lang="scss">
    .MenberIcon{
        display: flex;
        justify-content: space-evenly;
        margin-top: 0.39rem;
        li{
            flex: 1;
            text-decoration: none;
            list-style: none;
            a{
                display: inline-block;
                margin-left: 23px;
            }
            .icon1{
                width: 1.7rem;
                height: 1.76rem;
                background: url(~@/assets/img/new/member-detail.png) no-repeat;
                background-size: contain;
            }
            .icon2{
                width: 1.7rem;
                height: 1.76rem;
                background: url(~@/assets/img/new/cardcenter.png) no-repeat;
                background-size: contain;
            }
            .icon3{
                width: 1.7rem;
                height: 1.76rem;
                background: url(~@/assets/img/new/member.png) no-repeat;
                background-size: contain;
            }
            p{
                color: #000;
                font-size: 0.24rem;
                padding:0;
                margin:0;
                text-align: center;
                margin-top:0.37rem;
            }

        }
        li:last-child{
            margin-right: 0;
        }

    }
</style>