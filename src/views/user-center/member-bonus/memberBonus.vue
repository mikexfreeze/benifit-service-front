<template>
    <div class="List">
        <div class="Tab">
            <div :class="{active: bonusPointType === 'P'}" @click="bonusPointType = 'P'">已获得</div>
            <div :class="{active: bonusPointType === 'R'}" @click="bonusPointType = 'R'">已使用</div>
        </div>
        <div class="listCoupon">
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
                    <p v-show="bonusList.length === 0" class="text-center mt10">没有记录</p>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
  import { GetMemberBonus } from '@/api/memberApi'
  import moment from 'moment'

  export default {
    created () {
      this.getMemberBonus({bonusPointType: 'P',})
    },
    data () {
      return {
        bonusList: [],
        bonusPointType: 'P'
      }
    },
    methods: {
      getMemberBonus (arg) {
        GetMemberBonus(arg)
          .then((respons) => {
            this.bonusList = respons.data
          })
      }
    },
    filters: {
      cptExpiryDate: function (value) {
        let date = moment(value).add(1, 'y').format("YYYY/MM/DD")
        return date
      }
    },
    watch: {
      'bonusPointType': function (bonusPointType) {
        this.getMemberBonus({bonusPointType})
      }
    }

  }
</script>
<style scoped lang="scss" src="./cardList.scss"></style>
