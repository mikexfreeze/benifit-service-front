<template>
    <div class="memberInfo">
        <div class="Top"></div>
        <div class="content">
            <img class="register" src="../../assets/img/ios/Register@2x.png" alt="">
            <div class="form">
                <div class="MainInfo">
                    <li><i class="name"></i><span><em class="c-logoColor">*</em>姓名</span><input type="tel"></li>
                    <li><i class="tel"></i><span><em class="c-logoColor">*</em>手机</span><input type="tel"></li>
                    <li><i class="birth"></i><span><em class="c-logoColor">*</em>生日</span><input type="tel"></li>
                    <li><i class="sex"></i><span><em class="c-logoColor">*</em>性别</span><input type="tel"></li>
                    <li><i class="city"></i><span><em class="c-logoColor">*</em>省市区</span><input type="tel"></li>
                    <li><i class="email"></i><span><em style="color:transparent">*</em>邮箱</span><input type="tel"></li>
                     <div class="privacy">
                        <div class="read-cheackbox"><input type="checkbox"><i class="checkbox-icon"></i></div>
                        <p>我接受注册<a href="#">［会员章程］</a>，并承诺我一经阅读并接受注册会员章程、隐私政策和<a href="#">［个人信息收集声明］</a>的详细内容。</p>
                        </div>
                     </div>
            </div>
        </div>   
        <div class="small-bg"></div>
        <div class="snow"></div>
        <div class="foorterBtn">
        <button class="Submit"></button>
         <p>*为必填内容，其余为可选填内容。</p>
        </div>
         
    </div>
</template>
<style scoped lang="scss" src="./memberInfo.scss"></style>