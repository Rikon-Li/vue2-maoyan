<template>
  <div id="app">
    <router-view/>

    <div class="nav">
      <router-link to="/film" class="film"><span class="iconfont icon-dianying"></span>电影</router-link>
      <router-link to="/cinema" class="cinema"><span class="iconfont icon-yingyuan"></span>影院</router-link>
      <router-link to="/login" class="login"><span class="iconfont icon-wode"></span>我的</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{margin: 0;padding: 0}
.nav{
  width: 100%;
  height: 98px;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  border-top: 2px solid #D8D8D8;
}
.nav a{
  flex:1;
  text-decoration: none;
  color: #696969;
  display:flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.nav .router-link-active{
  color: #F03D37;
}
.nav .iconfont{
  font-size:52px;
}
.page{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 98px;
}
.navHeader{
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 36px;
  font-weight: 300;
  top: 0;
  left: 0;
  height: 104px;
  background-color: #F03D37;
}
</style>