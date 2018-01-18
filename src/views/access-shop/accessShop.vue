<template>
	<div class="accessShop">
		<div class="titAll">
			<div class="tit_b">
			<span class="tit tit1">Sephora SDE/SDM STORE VISITY CHECKLIST</span>
			<span class="tit tit2">丝芙兰主管访问表</span>
			</div>
		</div>
		<div class="outer_l">
			<div class="outer_n">
				<div class="block">
					<span class="tit">
						STORE店铺
					</span>
					<div class="fillIn">
						<template>
							<el-select class="select" v-model="value1" placeholder="请选择">
								<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</template>
					</div>
					<span class="tit">
						VISIT DATE 拜访日期
					</span>
					<div class="fillIn">
						<template>
							<el-select class="select" v-model="value2" placeholder="请选择">
								<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</template>
					</div>
					<span class="tit">
						LAST VISIT DATE 上次拜访日期
					</span>
					<div class="fillIn">
						<template>
							<el-select class="select" v-model="value3" placeholder="请选择">
								<el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</template>
					</div>
					<span class="tit">
						STORE VISIT OBJECTIVES 拜访目的
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
				</div>
			</div>
		</div>

		<div class="outer_l">
			<div class="title">THING TO DO</div>
			<div class="outer_n">
				<div class="block">
					<div class="title1">
						<span>Sephora Relationship 丝芙兰关系</span>
					</div>
					<div class="theRadio">
						<div class="fL">
							Review Visit Checklist <br/>回顾上次拜访表
						</div>
						<div class="fR">
							<template>
								<!-- `lastvisit` 为 true 或 false -->
								<el-checkbox v-model="lastvisit"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						COMMENTS评价
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="theRadio">
						<div class="fL">
							Communicate with Trainer<br/>与培训师交流
						</div>
						<div class="fR">
							<template>
								<!-- `communication` 为 true 或 false -->
								<el-checkbox v-model="communication"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						COMMENTS评价
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="title1">
						<span>Sephora Relationship 丝芙兰关系</span>
					</div>
					<span class="tit">
						Store manager店长
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<span class="tit">
						Sephora BA training丝芙兰BA培训
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<span class="tit">
						New Product Training 新品培训
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<span class="tit">
						Competitors news 竞品情况
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
				</div>
			</div>
		</div>

		<div class="outer_l">
			<div class="title">THING TO CHECK</div>
			<div class="outer_n">
				<div class="block">
					<div class="title1">
						<span> VM 陈列</span>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>Counter 陈列柜</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio1" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio1" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio1" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio1" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<span class="tit">
						COMMENTS评价
						</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="line"></div>
					<div class="moreChose">
						<div class="tit">
							<span>Brow Bar 眉吧</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio2" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio2" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio2" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio2" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>Animation  活动</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio3" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio3" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio3" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio3" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
				</div>
				
			</div>
			<div class="outer_n">
				<div class="block">
					<div class="title1">
						<span> BE 眉吧</span>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>HC% 雇佣率</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio4" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio4" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio4" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio4" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<span class="tit">
						COMMENTS评价
						</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="line"></div>
					<div class="moreChose">
						<div class="tit">
							<span>Appearance 仪容</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio5" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio5" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio5" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio5" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>New products knowledge 新品知识</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio6" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio6" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio6" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio6" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>Sales skills 销售技巧</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio7" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio7" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio7" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio7" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
				</div>
				
			</div>
				<div class="outer_n">
				<div class="block">
					<div class="title1">
						<span>  Inventory management 库存管理</span>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>Inventory verification 库存盘点</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio8" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio8" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio8" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio8" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<span class="tit">
						COMMENTS评价
						</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="line"></div>
					<div class="moreChose">
						<div class="tit">
							<span>AUnderstanding of  inventory line 最低库存线</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio9" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio9" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio9" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio9" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="outer_l">
			<div class="title">BROW SERVICE 眉部服务</div>
			<div class="outer_n">
				<div class="block">
					<div class="moreChose">
						<div class="tit">
							<span>Delimma 顾客眉部困扰</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio10" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio10" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio10" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio10" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<span class="tit">
						COMMENTS评价
						</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="line"></div>
					<div class="moreChose">
						<div class="tit">
							<span>Connect 建立关系</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio11" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio11" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio11" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio11" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>Service 服务顾客</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio12" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio12" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio12" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio12" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>Demo 展示产品ABC\蜜蜡修眉</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio13" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio13" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio13" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio13" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>Close 结束销售</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio14" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio14" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio14" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio14" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>Consumer survey 客户满意度调查</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio15" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio15" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio15" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio15" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>Appointment 预约回柜</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio16" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio16" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio16" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio16" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
					</div>
					<div class="moreChose">
						<div class="tit">
							<span>Sephora BA traininng 丝芙兰店铺培训</span>
						</div>
						<div class="lieall">
							<template>
								<div class="lie">
									<span class="fL">4、WOW!</span>
									<div class="fR">
										<el-radio v-model="radio17" label="4">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">3、GOT IT!</span>
									<div class="fR">
										<el-radio v-model="radio17" label="3">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">2、ON THE WAY</span>
									<div class="fR">
										<el-radio v-model="radio17" label="2">&nbsp;</el-radio>
									</div>
								</div>
								<div class="lie">
									<span class="fL">1、HELP!</span>
									<div class="fR">
										<el-radio v-model="radio17" label="1">&nbsp;</el-radio>
									</div>
								</div>
							</template>
						</div>
						<div class="tit">
							<span>Summary of the day 拜访总结 </span>
						</div>
						<div class="fillIn">
							<textarea class="textarea" placeholder="请在此填写"></textarea>
						</div>
						<div class="tit">
							<span>Improvement target 提升目标 </span>
						</div>
						<div class="fillIn">
							<textarea class="textarea" placeholder="请在此填写"></textarea>
						</div>
						<div class="tit">
							<span>Signature签名: </span>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="btnSubmit">
			<a class="btn">提交</a>
		</div>

		<div class="botomTab">
			<a class="active btn">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-qiandao"></use>
				</svg>签到
			</a>
			<a class="btn">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-lishi"></use>
				</svg>历史
			</a>
		</div>

	</div>
</template>

<script src="./accessShop.js"></script>
<style scoped lang="scss" src="./accessShop.scss"></style>
<style lang="scss" src="./accessShopNoscope.scss"></style>