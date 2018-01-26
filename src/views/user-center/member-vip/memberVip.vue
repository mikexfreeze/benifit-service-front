<template>
    <div class="Member">
        <div class="TopTEXT"></div>
        <div class="Tab">
            <router-link v-for="item in items"
                         :class="{active:$route.name === item.name}"
                         class="tab-link"
                         :key = "item.name"
                         :to="{name: item.name}">{{item.message}}</router-link>
        </div>
        <router-view></router-view>
        <div class="explanation"><p>*上述所有会员积分及会员权益仅在贝玲妃上海来福士/北京三里屯/
            广州正佳/深圳海岸城/深圳万象城精品店适用</p></div>
    </div>
</template>
<script>
  export default {
    created () {
      // console.log(this.$route)
    },
    data () {
      return {
        items: [
          {message: '粉卡会员', name: 'pink'},
          {message: '银卡会员', name: 'silver'},
          {message: '金卡会员', name: 'gold'},
        ]
      }
    },
    methods: {
      
    },
  }
</script>
<style scoped lang="scss" src="./memberVip.scss"></style>
