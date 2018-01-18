import calendar from '@/components/calendar/calendar.vue'
import { GetTaskList } from '@/api/taskApi'

export default {
  components: {
    calendar,
  },
  data () {
    return {
      taskList: [],
    }
  },
  created () {
    this.setUserLocal()
    let params = {}
    params.dateTime = new Date()
    this.getTaskList(params)
  },
  methods: {
    getTaskList (params) {
      GetTaskList(params)
        .then((response) => {
          this.taskList = response.data
        })
    },
    handleSelectTime (date) {
      this.getTaskList({dateTime: date._d})
    },
  }
}
