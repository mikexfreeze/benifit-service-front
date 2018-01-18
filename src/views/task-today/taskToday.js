import { GetTodayTask } from '@/api/taskApi'

export default {
  data () {
    return {
      todayTaskList: []
    }
  },
  created () {
    this.setUserLocal()
    this.getTodayTask()
  },
  methods: {
    getTodayTask () {
      GetTodayTask()
        .then((response) => {
          this.todayTaskList = response.data;
        })
    }
  }
}
