<template>

  <div class="main" id="">
    <view-box id="">
      <router-view class="router-view"></router-view>
      <!--<BeforeLast></BeforeLast>-->
    </view-box>
    <!--<Appointment></Appointment>-->

  </div>

</template>

<script>

  export default {
    name: 'app',
    directives: {

    },
    components: {

    },
    data(){
      return {

      }
    },
    computed: {

    },
    created(){

    },
    mounted(){

    },
    methods: {

    }
  }
</script>

<style lang="less">
  @import './assets/css/reset.css';
  @import './assets/css/base.less';
  @import './assets/css/flex.less';



</style>
