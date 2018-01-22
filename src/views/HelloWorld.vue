<template>
  <div class="hello" style="padding-left: 20px;">
    <div v-for="route in routes">
      <router-link :to="{name:route.name}" class="router-link"><p>{{route.name}}</p></router-link>
    </div>

  </div>
</template>

<script>
  import router from '@/router/router'
  export default {
    name: 'HelloWorld',
    components: {},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        routes: router.options.routes
      }
    },
    created () {
      console.log(router.options.routes)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello{
    padding: 20px;
    .router-link{
      font-size: 1rem;
    }
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
