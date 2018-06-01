<template>
  <div class="">


  </div>
</template>

<script>
  export default {
    directives: {

    },
    components: {

    },
    data() {
      let that = this
      return {

      }
    },
     beforeRouteEnter(to, from, next) {
      let href = document.querySelector('#href').value
      next(vm=>{
        vm.href = href
      })
    },
    computed: {

    },
    mounted() {

    },
    destroyed() {

    },
    created() {
      let self = this;

    },
    methods: {

    }
  }
</script>

<style lang="less">

</style>
