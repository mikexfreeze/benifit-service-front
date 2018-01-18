<template>
	<div class="leave">
		<div class="outer_l">
			<div class="outer_n">
				<div class="leaveHead">
					<div class="title">
						<span class="tit">请假事由</span>
					</div>
					<div class="fillIn">
						<textarea v-model="leaveData.reason" class="mytarea" placeholder="请在此填写"></textarea>
					</div>
				</div>
			</div>
		</div>
		<div class="outer_l">
			<div class="outer_n">
				<div class="f_list">
					<div class="list">
						<span class="fL">开始时间</span>
						<div class="fR date_sel">
							<el-date-picker
                class="starday"
                v-model="leaveData.startDateTime"
                align="right"
                type="datetime"
                placeholder="请选择">
							</el-date-picker>
						</div>
					</div>
					<div class="list">
						<span class="fL">结束时间</span>
						<div class="fR date_sel">
							<el-date-picker
                v-model="leaveData.endDateTime"
                align="right"
                type="datetime" placeholder="请选择">
							</el-date-picker>
						</div>
					</div>
					<div class="list">
						<span class="fL">总小时</span>
						<div class="fR addNum">
							<el-input-number v-model="leaveData.hours" size="medium"></el-input-number>
						</div>
					</div>
					<div class="list">
						<span class="fL">是否通知客户</span>
						<div class="fR inform">
							<el-switch v-model="leaveData.isToNotify">
							</el-switch>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="taskBtn">
			<el-button @click="handleCreateLeave"
                 :loading="$store.state.app.onXHR"
                 :disabled="hadSubmit"
                 class="fL btn">保存</el-button>
		</div>
	</div>
</template>

<script src="./leave.js"></script>
<style scoped lang="scss" src="./leave.scss"></style>
<style lang="scss" src="./leaveNoscope.scss"></style>
