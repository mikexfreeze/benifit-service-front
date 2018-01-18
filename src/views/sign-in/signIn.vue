<template>
	<div class="signIn">
		<div class="address">
			<div class="selAddr">
				<span class="s_addr">{{myLocation.address}}</span>
				<!--<a class="stores">选择门店</a>-->
        <baidu-map @ready="mapReady" center="北京" class="map" ak="w9PI0vKODszjVnCMo6k6q3cKXO1e54uC"></baidu-map>
				<div class="remark">
					<textarea class="textarea" v-model="memo" placeholder="请在此填写备注"></textarea>
				</div>
			</div>

		</div>
		<div class="signTime">
			<div @click="handleSign" class="sinTime">
				<span class="sp1">{{isIn ? '签到' : '签退'}}</span>
				<span class="sp2">{{clock}}</span>
			</div>
			<p class="sinNum">今日你已{{isIn ? '签到' : '签退'}}<em>{{todaySignNum}}</em>次</p>
		</div>
		<div class="botomTab">
			<a class="active btn">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-qiandao"></use>
				</svg>{{isIn ? '签到' : '签退'}}
			</a>
			<router-link :to="{name:'签到历史',params:{type:isIn ? 'signIn' : 'signOut',taskId: this.$route.params.taskId}}" class="btn">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-lishi"></use>
				</svg>历史
			</router-link>
		</div>
	</div>

</template>

<script src="./signIn.js"></script>
<style scoped lang="scss" src="./signIn.scss"></style>
