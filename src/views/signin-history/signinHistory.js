import { GetSigns, GetSignOuts } from '@/api/signApi'

export default {
  data () {
    return {
      signs: [],
      isIn: this.$route.params.type === 'signIn',
    }
  },
  created () {
    this.getSigns()
  },
  methods: {
    getSigns () {
      if (this.$route.params.type === 'signIn') {
        GetSigns()
          .then((response) => {
            this.signs = response.data
          })
      } else {
        GetSignOuts()
          .then((response) => {
            this.signs = response.data
          })
      }

    }
  }
}
