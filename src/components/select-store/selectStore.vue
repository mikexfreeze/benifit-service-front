<template>
	<div class="storeList">
	  <div class="select-layout">

	  		<div class="search">
					<div class="t_search">
						<input class="i_search" v-model="params.name" @change="getStoreList(params)" placeholder="输入搜索内容" />
						<span class="look" @click="getStoreList(params)">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-shiliangzhinengduixiang"></use>
							</svg>
						</span>
					</div>
				</div>
				<div class="outer_l">
					<div class="list">
						<template v-for="store in storeList">
			        <span class="lie" @click="handleSelectStore(store)">{{store.name}}</span>
			      </template>
					</div>
				</div>
	  </div>
  </div>
</template>

<script src="./selectStore.js"></script>
<style scoped lang="scss" src="./selectStore.scss"></style>
