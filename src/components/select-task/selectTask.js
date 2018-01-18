import { GetTaskList } from './api/taskItemApi'

export default {
  created () {
    this.getTaskList()
  },
  data () {
    return {
      taskList: []
    }
  },
  methods: {
    getTaskList () {
      GetTaskList()
        .then((response) => {
          this.taskList = response.data
        })
    },
    handleSelectTask (task) {
      console.log(task)
      this.$emit('select', task)
    }
  }
}
