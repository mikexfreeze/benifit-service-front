<template>
	<div class="dailyPaper">
		<div class="content">
			<div class="block">
				<span class="tit">
					当日指标(元)
				</span>
				<div class="fillIn">
					<el-input class="i_input" v-model="report.dayQuota"></el-input>
				</div>
        <span class="tit">
					当日达成(元)
				</span>
        <div class="fillIn">
          <el-input class="i_input" v-model="report.dayCompletion"></el-input>
        </div>
        <span class="tit">
					当日达成率(%)
				</span>
        <div class="fillIn">
          <el-input :disabled="true" class="i_input" v-model="report.dayCompletionRate"></el-input>
        </div>
			</div>
			<div class="block">
				<span class="tit">
					眉(次数)
				</span>
				<div class="fillIn">
					<el-input class="i_input" v-model="report.eyebrowTimes"></el-input>
				</div>
				<span class="tit">
					眉唇(次数)
				</span>
				<div class="fillIn">
					<el-input class="i_input" v-model="report.eyebrowLipsTimes"></el-input>
				</div>
				<span class="tit">
					眉唇颚(次数)
				</span>
				<div class="fillIn">
					<el-input class="i_input" v-model="report.eyebrowLipsJawTimes"></el-input>
				</div>
				<!--<span class="tit">-->
					<!--服务次数总和-->
				<!--</span>-->
				<!--<div class="fillIn">-->
					<!--<el-input class="i_input" v-model="input5"></el-input>-->
				<!--</div>-->
        <span class="tit">
					服务销量(元)
				</span>
        <div class="fillIn">
          <el-input class="i_input" v-model="report.serviceSalesVolume"></el-input>
        </div>
			</div>
			<div class="block">

				<span class="tit">
					眉部系列(元)
				</span>
				<div class="fillIn">
					<el-input class="i_input" v-model="report.eyebrowSeries"></el-input>
				</div>
				<span class="tit">
					反孔系列(元)
				</span>
				<div class="fillIn">
					<el-input class="i_input" v-model="report.poreSeries"></el-input>
				</div>
        <span class="tit">
					蜜粉系列(元)
				</span>
        <div class="fillIn">
          <el-input class="i_input" v-model="report.facePowderSeries"></el-input>
        </div>
        <span class="tit">
					遮瑕系列(元)
				</span>
        <div class="fillIn">
          <el-input class="i_input" v-model="report.concealerSeries"></el-input>
        </div>
        <span class="tit">
					当季新品(元)
				</span>
        <div class="fillIn">
          <el-input class="i_input" v-model="report.seasonNew"></el-input>
        </div>
			</div>
			<div class="btnSubmit">
				<a @click="handleSubmitReport" class="btn">提交</a>
			</div>
		</div>
		<div class="botomTab">
			<a class="active btn">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-fankuiribao"></use>
				</svg>日报
			</a>
			<router-link :to="{name: '日报历史'}" class="btn">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-lishi"></use>
				</svg>历史
			</router-link>
		</div>
	</div>
</template>

<script src="./dailyPaper.js"></script>
<style scoped lang="scss" src="./dailyPaper.scss"></style>
<style lang="scss" src="./dailyPaperNoscope.scss"></style>
