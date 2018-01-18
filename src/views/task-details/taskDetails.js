import { GetTaskById } from '@/api/taskApi'
import { GetSigns, GetSignOuts } from '@/api/signApi'

export default {
  data () {
    return {
      task: {},
      signs: [],
      signOuts: [],
    }
  },
  created () {
    this.getTask()
    this.getSigns()
    this.getSignOuts()
  },
  methods: {
    getTask () {
      GetTaskById(this.$route.params.id)
        .then((response) => {
          this.task = response.data
        })
    },
    getSigns () {
      GetSigns({taskId: this.$route.params.id})
        .then((response) => {
          this.signs = response.data
        })
    },
    getSignOuts () {
      GetSignOuts({taskId: this.$route.params.id})
        .then((response) => {
          this.signOuts = response.data
        })
    },
  }
}
