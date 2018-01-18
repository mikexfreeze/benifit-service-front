import { GetStoreList } from './api/storeApi'

export default {
  created () {
    this.getStoreList()
  },
  data () {
    return {
      storeList: [],
      params: {
        name: ''
      },
    }
  },
  methods: {
    getStoreList (reqParams) {
      GetStoreList(reqParams)
        .then((response) => {
          this.storeList = response.data
        })
    },
    handleSelectStore (store) {
      console.log(store)
      this.$emit('select', store)
    },
  }
}
