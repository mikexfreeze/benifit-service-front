<template>
  <div id="demo"> </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'demo',
    created () {

    },
    mounted () {
      let docWidth = 750
      let doc = window.document,
        docEl = doc.documentElement,
        comEl = doc.getElementById('demo'),
        clientWidth = docEl.getBoundingClientRect().width;
      console.log(comEl)
      comEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px';
    }
  }
</script>

