<template>
	<div class="taskCalendar">
		<div class="calendar-container">
			<calendar @selectTime="handleSelectTime"></calendar>
		</div>
		<div v-for="task in taskList" @click="$router.push({name:'任务详情',params:{id: task.id}})" class="outer_l">
			<div class="outer_n">
			<div class="taskMk">
			<div class="name">
				{{task.item}}
				<router-link
          :to="{name:'编辑任务', params:{id: task.id}}"
          @click.native="stopProp($event)"
          v-if="$store.state.user.level > 0 && (new Date(task.startDateTime)).getTime() > (new Date()).getTime()"
          class="edit fR">编辑</router-link>
			</div>
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
					<span class="z_s gray">{{task.startDateTime | moment("YYYY年MM月DD日 HH:mm")}} - {{task.endDateTime | moment("DD日 HH:mm")}}</span>
					<span class="z_s gray">{{task.storeName}}</span>
					<span class="xqrw z_s">{{task.memo}}</span>
				</div>
			</div>
			</div>
			</div>
		</div>
		<div v-show="taskList.length === 0" class="text-center mt1r"><span>该日期下没有任务</span></div>
	</div>
</template>

<script src="./taskCalendar.js"></script>
<style scoped lang="scss" src="./taskCalendar.scss"></style>
<style lang="scss" src="./taskCalendarNoscope.scss"></style>
