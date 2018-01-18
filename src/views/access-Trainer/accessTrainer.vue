<template>
	<div class="accessShop">
		<div class="titAll">
			<div class="tit_b">
			<span class="tit tit1">Trainer STORE VISITY CHECKLIST</span>
			<span class="tit tit2">丝芙兰教员访问表</span>
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
			<div class="title">1 WEEK BEFORE VISIT</div>
			<div class="outer_n">
				<div class="block">
					<div class="title1">
					</div>
					<div class="theRadio">
						<div class="fL">
							Confirm visit date
 						<br/>确认拜访日期
						</div>
						<div class="fR">
							<template>
								<!-- `lastvisit` 为 true 或 false -->
								<el-checkbox v-model="lastvisit"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						Remark备注
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="theRadio">
						<div class="fL">
							Review SDM visit form
							<br/>审核SDM访问表单
						</div>
						<div class="fR">
							<template>
								<!-- `communication` 为 true 或 false -->
								<el-checkbox v-model="communication"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						Remark备注
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="theRadio">
						<div class="fL">
							Communicate with SDM
							<br/>与SDM交流
						</div>
						<div class="fR">
							<template>
								<el-checkbox v-model="lastcheckbox"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						Remark备注
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>					
					
				</div>
			</div>
		</div>
		<div class="outer_l">
			<div class="title">VISIT DAY</div>
			<div class="outer_n">
				<div class="block">
					<div class="title1">
					</div>
					<div class="theRadio">
						<div class="fL">
							Product training
 						<br/>产品培训
						</div>
						<div class="fR">
							<template>
								<!-- `lastchecked` 为 true 或 false -->
								<el-checkbox v-model="lastchecked"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						Remark备注
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="theRadio">
						<div class="fL">
							Makeup skill
							<br/>销售技巧
						</div>
						<div class="fR">
							<template>
								<!-- `lastchecked2` 为 true 或 false -->
								<el-checkbox v-model="lastchecked2"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						Remark备注
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="theRadio">
						<div class="fL">
							Sales skill
							<br/>与SDM交流
						</div>
						<div class="fR">
							<template>
								<!-- `lastchecked2` 为 true 或 false -->
								<el-checkbox v-model="lastchecked3"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						Remark备注
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>					
					
				</div>
			</div>
		</div>
		<div class="outer_l">
			<div class="title">BROW SERVICE</div>
			<div class="outer_n">
				<div class="block">
					<div class="moreChose">
						<div class="tit">
							<span>Delimma 柜台困扰</span>
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
							<span>Connect 建立关系</span>
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
							<span>Service 服务顾客</span>
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
					<div class="moreChose">
						<div class="tit">
							<span>Demo 展示产品ABC\蜜蜡修眉</span>
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
					<div class="moreChose">
						<div class="tit">
							<span>Colse 结束销售</span>
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
							<span>Appointment 预约回柜</span>
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
							<span>Sephora BA traininng 丝芙兰店铺培训</span>
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
						<div class="tit">
							<span>Summary of the day </span>
						</div>
						<div class="fillIn">
							<textarea class="textarea" placeholder="请在此填写"></textarea>
						</div>
						<div class="tit">
							<span>Suggestion </span>
						</div>
						<div class="fillIn">
							<textarea class="textarea" placeholder="请在此填写"></textarea>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="outer_l">
			<div class="title">24-48h after visit</div>
			<div class="outer_n">
				<div class="block">
					<div class="title1">
					</div>
					<div class="theRadio">
						<div class="fL">
							PCommunicate achievements with SDM
 						<br/>
						</div>
						<div class="fR">
							<template>
								<!-- `lastchecked4` 为 true 或 false -->
								<el-checkbox v-model="lastchecked4"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						Remark备注
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="theRadio">
						<div class="fL">
							Communidate action plan
							<br/>
						</div>
						<div class="fR">
							<template>
								<!-- `lastchecked5` 为 true 或 false -->
								<el-checkbox v-model="lastchecked5"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						Remark备注
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
				</div>
			</div>
		</div>
		<div class="outer_l">
			<div class="title">2 weeks after visit</div>
			<div class="outer_n">
				<div class="block">
					<div class="title1">
					</div>
					<div class="theRadio">
						<div class="fL">
							Review visit form
 						<br/>
						</div>
						<div class="fR">
							<template>
								<!-- `lastchecked6` 为 true 或 false -->
								<el-checkbox v-model="lastchecked6"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						Remark备注
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="theRadio">
						<div class="fL">
							Call/visit team to discuss progress
							<br/>
						</div>
						<div class="fR">
							<template>
								<!-- `lastchecked7` 为 true 或 false -->
								<el-checkbox v-model="lastchecked7"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						Remark备注
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="theRadio">
						<div class="fL">
							Plan next visit
							<br/>
						</div>
						<div class="fR">
							<template>
								<!-- `lastchecked8` 为 true 或 false -->
								<el-checkbox v-model="lastchecked8"></el-checkbox>
							</template>
						</div>
					</div>
					<span class="tit">
						Remark备注
					</span>
					<div class="fillIn">
						<textarea class="textarea" placeholder="请在此填写"></textarea>
					</div>
					<div class="tit">
							<span>Signature签名: </span>
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

<script src="./accessTrainer.js"></script>
<style scoped lang="scss" src="./accessTrainer.scss"></style>
<style lang="scss" src="./accessTrainerNoscope.scss"></style>