<template>
  <div id="app">
    <div class="main">
      <sideMenu class="main"></sideMenu>
      <myHeader></myHeader>
      <router-view/>
    </div>

  </div>
</template>

<script>
  import sideMenu from './components/sideMenu'
  import myHeader from './components/header'
export default {
  name: 'App',

    components:{
        sideMenu,
        myHeader
    }
}
</script>

<style lang="less">
  @import './assets/css/reset.css';
  @import "./assets/css/base";
  #app{
    height: 100%;
  }
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
    .side-menu {
      width: 256px;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 21;
      transition: width .3s;
      background: #303452
    }
    .header-warp{
      padding-left: 256px;
      .main-header{
        background: #383c41;
        height: 78px;
        line-height: 78px;
      }
    }
    .main-content{
      position: absolute;
      top: 78px;
      left: 256px;
      right: 0;
      bottom: 0;
      overflow: auto;
      z-index: 1;
      transition: left .3s;
      background: #ebeef1;
      .ms-body{
        background: #ffffff;
        margin: 24px;
        border: 1px solid #cdd0dd;
        border-radius: 6px;
        min-height: 200px;
      }
    }
  }

</style>
