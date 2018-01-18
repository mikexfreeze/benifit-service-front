<template>
	<div class="signIn">
		<!--<div class="headPic">-->
			<!--<div class="hImg">-->
				<!--&lt;!&ndash;<img class="head" src="../../build/logo.png" />&ndash;&gt;-->
			<!--</div>-->
			<!--<div class="name">-->
				<!--<span class="sp1">张韦柔</span>-->
				<!--<span class="sp2">上海IAPM精品店</span>-->
			<!--</div>-->
			<!--<span class="sinnNum">本月{{isIn ? '签到' : '签退'}}<em class="num">{{signs.length}}</em>次</span>-->

		<!--</div>-->


		<div v-for="sign in signs" class="outer_l">
			<div class="outer_n">
			<div class="signLie">
				<div class="lieDate">
					<h3 class="h3"><span class="s_zi">{{sign.dateTime | moment("DD日")}}</span>/{{sign.dateTime | moment("MM月")}}</h3>
				</div>
				<div class="lieCon">
					<span class="conTime">{{sign.dateTime | moment("HH:mm")}}</span>
					<div class="conAddress">
						<span class="tit s_czi">{{sign.storeName}}</span>
						<span class="s_czi">{{sign.address}}</span>
					</div>
				</div>
			</div>
			</div>
		</div>

    <!--TODO 导航栏改为路由嵌套-->
		<div class="botomTab">
			<router-link :to="{name:'签到',params:{type:isIn ? 'signIn' : 'signOut',taskId: this.$route.params.taskId}}" class="active btn">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-qiandao"></use>
				</svg>{{isIn ? '签到' : '签退'}}
			</router-link>
			<a class="btn">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-lishi"></use>
				</svg>历史
			</a>
		</div>
	</div>
</template>

<script src="./signinHistory.js"></script>
<style scoped lang="scss" src="./signinHistory.scss"></style>
