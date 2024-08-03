<script setup>
import BackTop from '@/components/BackTop.vue'
</script>
<template>
  <div class="bg">
    <div class="head">
      <div class="logo">
        <div class="box-img">
          <a name="db"><img src="/images/logo.png" alt="" /></a>
        </div>
      </div>
      <div class="box">
        <div>
          <router-link to="/music/homepage">首页</router-link>
        </div>
        <div><router-link to="/music/specialtopic">专题</router-link></div>
        <div><router-link to="/music/musicrecommendations">音乐推荐</router-link></div>
        <div><router-link to="/music/musiccommunity">音乐社区</router-link></div>
        <div><router-link to="/music/aboutus">关于我们</router-link></div>
        <div><router-link to="/user/personalcenter">个人中心</router-link></div>
      </div>
      <div class="box1">切换背景</div>
    </div>
    <!-- //* //ASD 路由出口 -->
    <router-view></router-view>
    <!-- //* //ASD 返回顶部组件 -->
    <BackTop></BackTop>
  </div>
</template>
<style scoped>
.head {
  /*顶栏（首页、专题……*/
  display: flex;
  justify-content: space-around;
  background-color: rgba(74, 95, 149, 0.9);
  color: #fff;
  position: relative;
}
.logo {
  /*logo容器*/
  width: 15%;
  height: 60px;
  display: flex;
  justify-content: right;
  align-items: center;
}

.box {
  /*首页、专题……的容器*/
  width: 78%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
  font-weight: bold;
}

.box1 {
  /*顶栏"切换背景"样式*/
  margin-top: 5px;
  margin-right: 2%;
  width: 5%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #55aaff;
  border: 8px solid rgb(64, 115, 217);
  border-radius: 10%;
  cursor: pointer;
}

.box1:hover {
  /*顶栏"切换背景"鼠标悬停样式*/
  color: #fff;
  border-color: #fff;
}

.box-img {
  /*logo样式*/
  height: 85px;
  width: 170px;

  margin-top: 20px;
  margin-left: 10px;
}
* {
  /*全局*/
  padding: 0px;
  margin: 0px;
  border: 0px;
}

a {
  /*链接的文本装饰效果去除（eg：下划线）并将文本颜色设置为白色*/
  text-decoration: none;
  color: #fff;
}

.head {
  /*顶栏（首页、专题……*/
  display: flex;
  justify-content: space-around;
  background-color: rgba(74, 95, 149, 0.9);
  color: #fff;
  position: relative;
}
.dis1 {
  /*流式1*/
  display: flex;
  justify-content: space-between;
}
/*第1页面*/
.bg {
  /*背景图片*/
  background-image: url('/images/beijing8.jpg');
  transition: all 1s;
  background-attachment: fixed;
}

.bg2 {
  /*更换的背景图片*/
  background-image: url('/images/beijing9.jpg');
}
img {
  width: 100%;
  height: 100%;
}
a.router-link-active {
  color: #009aff;
}
</style>
