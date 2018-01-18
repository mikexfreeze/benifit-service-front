import selectStore from '@/components/select-store/selectStore.vue'
import selectTask from '@/components/select-task/selectTask.vue'
import { CreateTask, EditTask, GetTaskById, DeleteTask } from '@/api/taskApi'
import { GetTaskList } from './api/taskItemApi'
import moment from 'moment'

export default {
  components: {
    selectStore,
    selectTask
  },
  created () {
    this.startTime = this.$route.params.startTime
    if (this.$route.params.id) {
      this.getTaskById(this.$route.params.id)
    }
    GetTaskList()
      .then((response) => {
        this.taskList = response.data
      })
  },
  data () {
    return {
      startTime: '',
      startTimeOpt: {
        disabledDate: this.startTimeRange,
        // step: '00:15',
      },
      endTime: '',
      endTimeOpt: {
        disabledDate: this.endTimeRange
      },
      showSelectStore: false,
      selectedStore: {
        name: '请选择'
      },
      taskList: [{name: '请选择'}],
      selectedTask: '请选择',
      memo: '',
      editData: {},
    }
  },
  methods: {
    endTimeRange (time) {
      return time.getTime() < this.startTime.getTime() - 24 * 3600 * 1000
    },
    startTimeRange (time) {
      if (this.endTime) {
        return time.getTime() > (new Date(this.endTime)).getTime()
      } else {
        return false
      }
    },
    getTaskById (id) {
      GetTaskById(id)
        .then((response) => {
          this.startTime = moment(response.data.startDateTime).format('YYYY-MM-DDTHH:mm')
          // this.endTime = response.data.endDateTime
          this.endTime = moment(response.data.endDateTime).format('YYYY-MM-DDTHH:mm')
          this.selectedTask = response.data.item
          this.selectedStore.name = response.data.storeName
          this.memo = response.data.memo
          this.editData = response.data
        })
    },
    handleStoreSelected (store) {
      this.showSelectStore = false
      this.selectedStore = store
    },
    handleSelectStore () {
      this.showSelectStore = true
    },
    handleCreateTask () {
      let postData = {
        'endDateTime': new Date(this.endTime),
        // 'id': 0,
        'item': this.selectedTask,
        // 'periodId': 'string',
        'startDateTime': new Date(this.startTime),
        'storeId': this.selectedStore.id,
        storeName: this.selectedStore.name,
        memo: this.memo,
      }
      if (postData.item === '请选择') {
        this.$message({
          message: '请选择任务',
          type: 'error'
        })
      } else if (isNaN(postData.startDateTime.getTime())) {
        this.$message({
          message: '请选择开始时间',
          type: 'error'
        })
        return false
      } else if (isNaN(postData.endDateTime.getTime())) {
        this.$message({
          message: '请选择结束时间',
          type: 'error'
        })
        return false
      } else if (postData.storeName === '请选择') {
        this.$message({
          message: '请选择门店',
          type: 'error'
        })
      } else if (postData.endDateTime.getTime() - 1800 * 1000 <= postData.startDateTime.getTime()) {
        this.$message({
          message: '结束时间必须大于开始时间30分钟',
          type: 'error'
        })
      } else {
        CreateTask(postData)
          .then((response) => {
            this.$message({
              message: '创建成功',
              type: 'success'
            })
            this.$router.back()
          })
      }
    },
    handleEditTask () {
      let postData = {
        'endDateTime': new Date(this.endTime),
        // 'id': 0,
        'item': this.selectedTask,
        // 'periodId': 'string',
        'startDateTime': new Date(this.startTime),
        'storeId': this.selectedStore.id,
        storeName: this.selectedStore.name,
        memo: this.memo,
      }
      postData = $.extend(this.editData, postData)
      EditTask(postData)
        .then((response) => {
          this.$message({
            message: '编辑成功',
            type: 'success'
          })
          this.$router.back()
        })
    },
    handleDeleteTask () {
      if (confirm('确定删除')) {
        DeleteTask(this.$route.params.id)
          .then((response) => {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.$router.back()
          })
      }
    }
  }
}
