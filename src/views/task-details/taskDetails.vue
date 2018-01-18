<template>
	<div class="taskToday">
		<div class="taskMk">
			<div class="name">{{task.item}}</div>
			<div class="headCon">
				<div class="fL hCon">
					<span class="tit z_s">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-qiandaoshijian"></use>
						</svg>
					</span>
					<span class="tit z_s">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-qiandaodidian"></use>
						</svg>
					</span>
				</div>
				<div class="fR rwCon">
					<span class="gray z_s">{{task.startDateTime | moment("YYYY年MM月DD日 HH:mm")}} - {{task.endDateTime | moment("DD日 HH:mm")}}</span>
					<span class="gray z_s">{{task.storeName}}</span>
					<span class="xqrw z_s">{{task.memo}}</span>
				</div>
			</div>
		</div>
		<div class="showSign">
			<div class="title">
				<span class="pink">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-mendianqiandao"></use>
					</svg>
				</span>
				<span class="t_zi">门店签到情况</span>
			</div>
			<div v-for="sign in signs" class="showCon">
				<span class="text">签到时间：{{sign.dateTime | moment("YYYY年MM月DD日 HH:mm")}}</span>
				<span class="text">签到地点：{{sign.address}}</span>
			</div>
		</div>
		<div class="showSign">
			<div class="title">
				<span class="pink">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-mendianqiantui"></use>
					</svg>
				</span>
				<span class="t_zi">门店签退情况</span>
			</div>
			<div v-for="signOut in signOuts" class="showCon">
				<span class="text">签退时间：{{signOut.dateTime | moment("YYYY年MM月DD日 HH:mm")}}</span>
				<span class="text">签退地点：{{signOut.address}}</span>
			</div>
		</div>
		<div class="taskBtn">
			<a class="btn">情况反馈详情</a>
		</div>
	</div>
</template>

<script src="./taskDetails.js"></script>
<style scoped lang="scss" src="./taskDetails.scss"></style>
