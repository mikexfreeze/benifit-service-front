<template>
	<div class="signIn">
		<div class="signRead">
			<div class="readSj">
				<span class="tit s_p">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-qiandaoshijian"></use>
					</svg>
					签到时间：
				</span>
				<span class="s_p">08：00</span>
			</div>
			<div class="readSj">
				<span class="tit s_p">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-qiandaodidian"></use>
					</svg>
					签到地点：
				</span>
				<span class="s_p">上海市淮海中路999号上海环贸广场地下一层117&118</span>
			</div>
		</div>
		<div class="signBz">
			<textarea class="textarea" placeholder="请在此填写签到备注"></textarea>
		</div>
		<div class="submit">
			<a class="btn">提交</a>
		</div>
	</div>
</template>

<script src="./signinremark.js"></script>
<style scoped lang="scss" src="./signinremark.scss"></style>