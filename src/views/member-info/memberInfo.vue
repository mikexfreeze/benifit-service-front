<template>
    <div class="memberInfo">
        <div class="Top"></div>
        <div class="content">
            <img class="register" src="../../assets/img/ios/Register@2x.png" alt="">
            <div class="form">
                <div class="MainInfo">
                    <li><i class="name"></i><span><em class="c-logoColor">*</em>姓名</span><input v-model="temp.name" type="tel"></li>
                    <li><i class="tel"></i><span><em class="c-logoColor">*</em>手机</span><input  v-model="temp.mobile"  type="tel"></li>
                    <li><i class="birth"></i><span><em class="c-logoColor">*</em>生日</span><input   v-model="temp.birth"  type="date"></li>
                    <li><i class="sex"></i><span><em class="c-logoColor">*</em>性别</span><el-radio v-model="temp.title" label="MS">女士</el-radio><el-radio v-model="temp.title" label="MR">先生</el-radio></li>
                    <li><i class="city"></i><span><em class="c-logoColor">*</em>省市区</span>
                      <el-select v-model="temp.provinceId" @change="provinceChange" placeholder="请选择省">
                        <el-option
                          v-for="item in provinceList"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                        </el-option>
                      </el-select>
                      <el-select v-model="temp.cityId" @change="cityChange" placeholder="请选择市">
                        <el-option
                          v-for="item in cityList"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                        </el-option>
                      </el-select>
                      <el-select v-model="temp.districtId" placeholder="请选择区">
                        <el-option
                          v-for="item in districtList"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                        </el-option>
                      </el-select></li>
                    <li><i class="email"></i><span><em style="color:transparent">*</em>邮箱</span><input v-model="temp.email" type="tel"></li>
                     <div class="privacy">
                        <div class="read-cheackbox"><input type="checkbox"  v-model="isChecked"><i class="checkbox-icon"></i></div>
                        <p>我接受注册<a href="#">［会员章程］</a>，并承诺我一经阅读并接受注册会员章程、隐私政策和<a href="#">［个人信息收集声明］</a>的详细内容。</p>
                        </div>
                     </div>
            </div>
        </div>
        <div class="small-bg"></div>
        <div class="snow"></div>
        <div class="foorterBtn">
        <el-button  @click="handleSave" class="Submit"></el-button>
         <p>*为必填内容，其余为可选填内容。</p>
        </div>

    </div>
</template>
<script>
  import { RegisterMember,FindAllProvinces,FindCityByProvinceId,FindAreasByCityId } from '@/api/memberApi'
  import moment from 'moment'

  export default {
    created () {
        this.setOpenIdLocal();
      this.findAllProvinces();
    },
    data () {
      return {
        isChecked:false,
        temp: tempInit(),
        provinceList:[],
        cityList:[],
        districtList:[]
      }
    },
    methods: {
      findAllProvinces(){
          FindAllProvinces(this.temp)
            .then((respons) => {
              if(respons.data){
                this.provinceList=respons.data
              }
            })
        },
      getCityList(provinceId){
        FindCityByProvinceId(provinceId)
          .then((respons) => {
            if(respons.data){
              this.cityList=respons.data
            }
          })
      },
      getAreasList(cityId){
        FindAreasByCityId(cityId)
          .then((respons) => {
            if(respons.data){
              this.districtList=respons.data
            }
          })
      },
      provinceChange(){
        this.cityList=[];
        this.districtList=[];
        if(this.temp.provinceId!="") {
          this.getCityList(this.temp.provinceId);
        }
//        if(this.isShow==false){
//          this.temp.cityId='';
//        }else {
//          this.isShow=false
//        }
      },
      cityChange(){
        this.districtList=[];
        if(this.temp.cityId!="") {
          this.getAreasList(this.temp.cityId);
        }
//        if(this.isShow==false){
//          this.temp.city='';
//        }else {
//          this.isShow=false
//        }
      },
      handleSave() {
        if (this.temp.name === '') {
          this.$message({
            message: '请填写用户姓名',
            type: 'error'
          })
          return false;
        }
        if (this.temp.mobile === '') {
          this.$message({
            message: '请填写手机号码',
            type: 'error'
          })
          return false;
        }else {
          var reg = /^[1][358]\d{9}$/;  //验证手机号码 13,15,18开头的是一位电话号
          if (!reg.test(this.temp.mobile)) {
            this.$message({
              message: '请输入正确的手机号码',
              type: 'error'
            })
            return false;
          }
        }
        if (this.temp.birthDay === '') {
          this.$message({
            message: '请填写生日',
            type: 'error'
          })
          return false;
        }else {
          var birth=new Date(this.temp.birth)
          if(null !=birth){
              this.temp.birthYear=birth.getFullYear();
              this.temp.birthMonth=birth.getMonth()+1;
              this.temp.birthDay=birth.getDate();
          }else {
            this.$message({
              message: '请输入正确的生日',
              type: 'error'
            })
            return false;
          }
        }
        if (this.temp.provinceId === '') {
          this.$message({
            message: '请选择省',
            type: 'error'
          })
          return false;
        }
        if (this.temp.cityId === '') {
          this.$message({
            message: '请选择市',
            type: 'error'
          })
          return false;
        }
        if (this.temp.districtId === '') {
          this.$message({
            message: '请选择区',
            type: 'error'
          })
          return false;
        }
        if (this.temp.title === '') {
          this.$message({
            message: '请选择性别',
            type: 'error'
          })
          return false;
        }
        if (this.temp.email !== '') {

          const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/i;
          if (!reg.test(this.temp.email)) {
            this.$message({
              message: '请输入正确的邮箱号',
              type: 'error'
            })
            return false;
          }
        }
        if (this.isChecked) {
          for (let i in this.provinceList) {
              if(this.provinceList[i].id===this.temp.provinceId){
                  this.temp.province=this.provinceList[i].name;
              }
          }
          for (let i in this.cityList) {
            if(this.cityList[i].id===this.temp.cityId){
              this.temp.city=this.cityList[i].name;
            }
          }
          for (let i in this.districtList) {
            if(this.districtList[i].id===this.temp.districtId){
              this.temp.district=this.districtList[i].name;
            }
          }
          RegisterMember(this.temp)
            .then((respons) => {
              if(respons.data){
                this.$message({
                  message: '创建成功',
                  type: 'success'
                })
              }
            })
        }
      }
    },
    watch: {
      'handleSave': function () {
        this.handleSave()
      },
      'provinceChange': function () {
        this.provinceChange()
      },
      'cityChange': function () {
        this.cityChange()
      }
    }

  }


  function tempInit() {
    return {
      address: "",
      birthDay: 12,
      birthMonth: 2,
      birthYear: 1912,
      city: "",
      district: "",
      provinceId:'',
      cityId:'',
      districtId:'',
      email: "",
      mobile: "",
      name: "",
      province: "",
      title: "",
      zipcode: "",
      birth:""
    }
  }

</script>
<style scoped lang="scss" src="./memberInfo.scss"></style>
