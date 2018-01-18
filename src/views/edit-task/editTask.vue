<template>
  <div class="taskToday">
    <select-store @select="handleStoreSelected" v-show="showSelectStore"></select-store>
    <div class="outer_l">
      <div class="outer_n">
        <div class="f_list">
          <div class="list">
            <span class="fL">任务</span>
            <div class="fR">
              <div class="fillIn">
                <el-select v-model="selectedTask" placeholder="请选择">
                  <el-option
                    v-for="opt in taskList"
                    :key="opt.name"
                    :label="opt.name"
                    :value="opt.name">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="list">
            <span class="fL">开始时间</span>
            <div class="fR date_sel">
              <!--<el-date-picker-->
                <!--align="right"-->
                <!--class="starday"-->
                <!--v-model="startTime"-->
                <!--type="datetime"-->
                <!--:picker-options="startTimeOpt"-->
                <!--placeholder="请选择">-->
              <!--</el-date-picker>-->
              <input type="datetime-local" class="time-input" v-model="startTime" :max="endTime" style="width: 163px">
            </div>
          </div>
          <div class="list">
            <span class="fL">结束时间</span>
            <div class="fR date_sel">
              <!--<el-date-picker-->
                <!--align="right"-->
                <!--v-model="endTime"-->
                <!--type="datetime"-->
                <!--:picker-options="endTimeOpt"-->
                <!--placeholder="请选择">-->
              <!--</el-date-picker>-->
              <input type="datetime-local" class="time-input" v-model="endTime" :min="startTime" style="width: 163px">
            </div>
          </div>
          <div class="list">
            <span class="fL">门店</span>
            <div class="fR">
              <div class="fillIn">
                <el-button @click="handleSelectStore">{{selectedStore.name}}</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="outer_l">
      <div class="outer_n">
        <div class="remark">
					<span class="tit">
						备注
					</span>
          <div class="fillIn">
            <textarea v-model="memo" class="textarea" placeholder="请在此填写"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="taskBtn">
      <a @click="$router.back()"
         v-show="!this.$route.params.id"
         class="fL btn">返回</a>
      <a @click="handleDeleteTask"
         v-show="this.$route.params.id"
         class="fL btn">删除</a>
      <a @click="handleEditTask"
         :loading="$store.state.app.onXHR"
         v-show="this.$route.params.id"
         class="fR btn">保存</a>
      <a @click="handleCreateTask"
         :loading="$store.state.app.onXHR"
         v-show="!this.$route.params.id"
         class="fR btn">创建</a>

    </div>
  </div>
</template>

<script src="./editTask.js"></script>
<style scoped lang="scss" src="./editTask.scss"></style>
<style lang="scss" src="./editTaskNoscope.scss"></style>
