<template>
	<!--TODO 最外层class-->
	<div>
		<div v-show="todayTaskList.lenght === 0" class="text-center">
			<p>尚无今日任务</p>
		</div>
		<div v-for="task in todayTaskList" class="taskToday">
			<div class="outer_l">
				<div class="outer_n">
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
							<div class="fL rwCon">
								<span class="gray z_s">{{task.startDateTime | moment("YYYY年MM月DD日 HH:mm")}} - {{task.endDateTime | moment("DD日 HH:mm")}}</span>
								<span class="gray z_s">{{task.storeName}}</span>
								<span class="xqrw z_s">{{task.memo}}</span>
							</div>
						</div>
					</div>
					<div class="taskXm">
						<div class="tasklie">
							<router-link :to="{name:'签到',params:{type:'signIn',taskId:task.id}}">
							<div class="bq">
								<svg class="icon" aria-hidden="true">
									<use xlink:href="#icon-mendianqiandao"></use>
								</svg>
							</div>
							<!--TODO 跳转链接覆盖整个图标-->
							<div class="tast_z">门店签到</div>
							</router-link>
						</div>
						<div class="tasklie">
							<router-link :to="{name:'签到',params:{type:'signOut',taskId:task.id}}">

								<div class="bq">
									<svg class="icon" aria-hidden="true">
										<use xlink:href="#icon-mendianqiantui"></use>
									</svg>
								</div>
								<span class="tast_z">门店签退</span>
							</router-link>
						</div>
						<div class="tasklie">
							<router-link v-if="$store.state.user.level === 0" :to="{name:'日报填写',params:{taskId:task.id}}">
								<div class="bq">
									<svg class="icon" aria-hidden="true">
										<use xlink:href="#icon-fankuiribao"></use>
									</svg>
								</div>
								<span class="tast_z">反馈/日报</span>
							</router-link>
              <router-link v-if="$store.state.user.level === 1" :to="{name:'访问表trainer',params:{taskId:task.id}}">
                <div class="bq">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fankuiribao"></use>
                  </svg>
                </div>
                <span class="tast_z">反馈/日报</span>
              </router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script src="./taskToday.js"></script>
<style scoped lang="scss" src="./taskToday.scss"></style>
