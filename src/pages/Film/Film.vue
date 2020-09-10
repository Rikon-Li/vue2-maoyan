<template>
  <div id="film" class="page">
    <div class="navHeader">猫眼电影</div>
    <div class="topbar">
      <div class="switchHot">
        <router-link to="/film/now-hot">正在热映</router-link>
        <router-link to="/film/comming-hot">即将上映</router-link>
      </div>

      <router-view/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#film .topbar {
  position: absolute;
  width: 100%;
  top: 104px;
  left: 0;
  height: 88px;
  border-bottom: 2px solid #E6E6E6;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
#film .switchHot{
  /* align-self: center; */
  position: absolute;
  bottom: -2px;
  display: flex;
  width: 416px;
  height: 100%;
  justify-content: space-around;
}
#film .switchHot a{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  font-size: 30px;
  color: #F03D37;
  box-sizing: border-box;
  border-bottom: 4px solid transparent;
  text-decoration: none;
}
#film .switchHot .router-link-active{
  border-bottom: 4px solid #F03D37;

}

.hotItem{
  position: absolute;
  top: 88px;
}
</style>