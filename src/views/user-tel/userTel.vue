<template>
    <div class="bg">
    <div class="snow"></div>
        <div class="Top"></div>
        <div class="Main">
            <div class="MainInfo">
                <li><i class="tel"></i><span>电话</span><input v-model="temp.mobile" type="tel"></li>
                <li><i class="pass"></i><span>验证码</span><input v-model="temp.code" type="tel"><button></button></li>
            </div>
        </div>
        <div class="bgArrow"></div>
        <div class="mmCar"></div>
        <button class="Submit" @click="checkMember"></button>
    </div>
</template>
<script>

  import { CheckMember } from '@/api/memberApi'
  import moment from 'moment'

  export default {
    created () {
      this.setOpenIdLocal()
    },
    data () {
      return {
        temp: {
          mobile: "",
          code: ""
        }
      }
    },
    methods: {
      checkMember (arg) {

        if (this.temp.mobile === '') {
          this.$message({
            message: '请填写手机号码',
            type: 'error'
          })
          return false
        } else {
          var reg = /^[1][358]\d{9}$/  //验证手机号码 13,15,18开头的是一位电话号
          if (!reg.test(this.temp.mobile)) {
            this.$message({
              message: '请输入正确的手机号码',
              type: 'error'
            })
            return false
          }
        }

        if (this.temp.code === '') {
          this.$message({
            message: '请填写验证码',
            type: 'error'
          })
          return false
        }
        CheckMember(this.temp)
          .then((response) => {
            if (response.data) {
              this.$router.push({path: '/user-center/' + localStorage.getItem('openId') + '/nav'})
            } else {
              this.$router.push({path: '/member-info'})
            }
          })
      }
    },
    watch: {
      'checkMember': function () {
        this.checkMember()
      }
    }

  }
</script>
<style scoped lang="scss" src="./userTel.scss"></style>
