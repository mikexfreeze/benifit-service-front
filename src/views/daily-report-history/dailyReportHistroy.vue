<template>
  <div>
  	<div class="reportHis">
			<div class="outer_l" v-for="report in reportList">
				<div class="outer_n">
					<div class="top">
						<span class="tit">{{report.dateTime | moment("YYYY年MM月DD日")}}</span>
						<span class="addres">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-qiandaodidian"></use>
							</svg>上海徐家汇太平洋眉吧
						</span>
					</div>
					<div class="content">
						<div class="fL">
							<span class="sp sptit">当日达成 </span>
							<span class="sp spnum">{{report.dayCompletion}}/{{report.dayQuota}}</span>
							<span class="sp spd">{{report.dayCompletionRate}}%</span>
						</div>
						<div class="fL">
							<span class="sp sptit">累计达成 </span>
							<span class="sp spnum">{{report.dayCompletion}}/{{report.dayQuota}}</span>
							<span class="sp spd">{{report.dayCompletionRate}}%</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	
    <!--<ul>
      <li v-for="report in reportList">
        <h4>{{report.dateTime | moment("YYYY年MM月DD日")}}</h4>
        <section>
          <h5>当日达成</h5>
          <span>{{report.dayCompletion}}/{{report.dayQuota}}</span><br>
          <span>{{report.dayCompletionRate}}%</span>
        </section>
        <section>
          <h5>累计达成</h5>
          <span>{{report.dayCompletion}}/{{report.dayQuota}}</span><br>
          <span>{{report.dayCompletionRate}}%</span>
        </section>
      </li>
    </ul>-->
  </div>
</template>

<script src="./dailyReportHistroy.js"></script>
<style scoped lang="scss" src="./dailyReportHistroy.scss"></style>
