<script setup>
import $ from 'jquery'
import box34twtp1 from '../../../public/images/box34-tw-tp1.jpg'
import box34twtp2 from '../../../public/images/box34-tw-tp2.jpg'

import box34th1 from '../../../public/images/box34th1.jpg'
import box34th2 from '../../../public/images/box34th2.jpg'
import box34th3 from '../../../public/images/box34th3.jpg'
import box34th4 from '../../../public/images/box34th4.jpg'
import box34th5 from '../../../public/images/box34th5.jpg'
import box34th1_2 from '../../../public/images/2-box34th1.jpg'
import box34th2_2 from '../../../public/images/2-box34th2.jpg'
import box34th3_2 from '../../../public/images/2-box34th3.jpg'
import box34th4_2 from '../../../public/images/2-box34th4.jpg'
import box34th5_2 from '../../../public/images/2-box34th5.jpg'

$(function () {
  $('.liebiaotu li').hover(
    function () {
      $(this).siblings().stop().fadeTo(350, 0.5)
    },
    function () {
      $(this).siblings().stop().fadeTo(350, 1)
    }
  )
  var index3 = 0
  setInterval(function () {
    if (index3 == $('.box-21-tp').length - 1) {
      index3 = 0
      $('.box-21-tp').css('opacity', '0')
      $('.box-21-tp').eq(index3).css('opacity', '1')
    } else {
      index3++
      $('.box-21-tp').css('opacity', '0')
      $('.box-21-tp').eq(index3).css('opacity', '1')
    }
  }, 3000)
  $('.box23-kj-bk').mouseover(function () {
    $('.c').toggleClass('c2')
  })
  $('.box23-kj-bk').click(function () {
    $('.c').toggleClass('c3')
  })
  $('.c').mouseover(function () {
    $('.c').toggleClass('c2')
  })
  function yidong() {
    $('.wufengtu-yd').addClass('wufengtu-yd2')
    setTimeout(function () {
      $('.wufengtu-yd').removeClass('wufengtu-yd2')
    }, 20000)
  }
  yidong()
  setInterval(yidong, 20050) /*不能是20000……计算机、浏览器等有时间延迟，20000动不了的*/
  $('.box1').click(function () {
    $('.bg').toggleClass('bg2')
  })
  /*svg滚动变大函数*/
  $(window).scroll(function () {
    var scrollY = $(this).scrollTop()
    var scroll_bh = 130 + scrollY * 75 + 'px'
    $('.tp-svg').css('background-size', scroll_bh)
  })
  $('.tp-svg').click(function () {
    $('.tp-svg').css('background-size', '15000px')
  })
  /*左图右文模块，左边图片点击切换图片js*/
  var array3_1 = new Array(6)
  var array3_2 = new Array(6)
  var index34_1 = 0
  var index34_2 = 0
  var Content34_1
  var Content34_2

  array3_1[0] = box34twtp1
  array3_1[1] = box34th1
  array3_1[2] = box34th2
  array3_1[3] = box34th3
  array3_1[4] = box34th4
  array3_1[5] = box34th5

  array3_2[0] = box34twtp2
  array3_2[1] = box34th1_2
  array3_2[2] = box34th2_2
  array3_2[3] = box34th3_2
  array3_2[4] = box34th4_2
  array3_2[5] = box34th5_2
  $('.box34-tw-tp-rq')
    .eq(0)
    .click(function () {
      if (index34_1 == 5) {
        index34_1 = 0
        Content34_1 = array3_1[index34_1]
        $(this).find('img').attr('src', Content34_1)
      } else {
        index34_1++
        Content34_1 = array3_1[index34_1]
        $(this).find('img').attr('src', Content34_1)
      }
    })
  $('.box34-tw-tp-rq')
    .eq(1)
    .click(function () {
      if (index34_2 == 5) {
        index34_2 = 0
        Content34_2 = array3_2[index34_2]
        $(this).find('img').attr('src', Content34_2)
      } else {
        index34_2++
        Content34_2 = array3_2[index34_2]
        $(this).find('img').attr('src', Content34_2)
      }
    })
})
</script>
<template>
  <div class="dingbu-wz">
    <img src="/images/MV优选.png" />
  </div>
  <div class="svg-kuangjia">
    <video src="/images/你的名字.mp4" autoplay muted loop></video>
    <div class="tp-svg"></div>
  </div>
  <div class="dis">
    <div class="liebiaotu">
      <ul>
        <li>
          <a href="#"><img src="/images/玫瑰1.jpg" /></a>
        </li>
        <li>
          <a href="#"><img src="/images/玫瑰2.jpg" /></a>
        </li>
        <li>
          <a href="#"><img src="/images/玫瑰3.jpg" /></a>
        </li>
        <li>
          <a href="#"><img src="/images/玫瑰4.jpg" /></a>
        </li>
      </ul>
    </div>
    <div
      class="box4"
      style="margin-top: 50px; margin-left: -200px; height: 412px; opacity: 1; border-radius: 2%"
    >
      <div class="dis">
        <div class="box2wz1">音乐推荐</div>
        <div class="box2wz1-1">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;音乐带着难得的自信和微笑在旋律中绽放，伴着电子琴曲风，每一个音符都像生命在跳跃。
            <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;音乐赋予了我们太多的心灵悸动。曾经的硝烟弥漫，过眼的春光烂漫，欢腾的青春畅想，都被它用干净的声线在清晨唤醒，快乐地行走在灿烂的阳光里。
            <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;音乐可以充当太多真善美的角色，在生活中它的作用也是不可或缺的。它是人类陶冶情操的良方，是文明传播的阶梯。让音乐走进每个人的心灵，去领悟那最美的真谛，感受人间真情的律动！
          </p>
        </div>
        <div class="box21">
          <div class="box-21-tp"><img src="/images/21-tp1.jpg" /></div>
          <div class="box-21-tp"><img src="/images/21-tp2.jpg" /></div>
          <div class="box-21-tp"><img src="/images/21-tp3.jpg" /></div>
          <div class="box-21-tp"><img src="/images/21-tp4.jpg" /></div>
          <div class="box-21-tp"><img src="/images/21-tp5.jpg" /></div>
          <div class="box-21-tp"><img src="/images/21-tp6.jpg" /></div>
        </div>
        <div class="box-21-tp-xia"><img src="/images/小熊.png" /></div>
      </div>
    </div>
  </div>
  <div class="box22-by" style="margin-top: 0px; margin-bottom: 20px">
    <p>音乐如诗，旋律中充满了情感的倾诉，或悲或喜，或静或动，让人无法抗拒</p>
  </div>
  <div class="box22-pinjie">
    <ul>
      <li class="c">
        <div class="box23-tupian"><img src="/images/2-tupian1.jpg" /></div>
      </li>
      <li class="c">
        <div class="box23-tupian"><img src="/images/2-tupian2.jpg" /></div>
      </li>
      <li class="c">
        <div class="box23-tupian"><img src="/images/2-tupian3.jpg" /></div>
      </li>
      <li class="c">
        <div class="box23-tupian"><img src="/images/2-tupian4.jpg" /></div>
      </li>
      <li class="c">
        <div class="box23-tupian"><img src="/images/2-tupian5.jpg" /></div>
      </li>
      <li class="c">
        <div class="box23-tupian"><img src="/images/2-tupian6.jpg" /></div>
      </li>
    </ul>
  </div>
  <div class="box23-kj">
    <div class="box23-kj-wz">
      <p>音乐<br />Vlog</p>
    </div>
    <div class="box23-kj-bk"><img src="/images/边框1.png" /></div>
    <div class="box23-kj-vlog"><img src="/images/vlog.jpg" /></div>
    <div class="dis">
      <div class="box23-kj-wz2">
        <p>
          Vlog BGM：落山人间烟火，在夕阳下的小镇里<br />「山有顶峰,湖有彼岸,<br />&nbsp;在人生漫漫长途中,<br />&nbsp;万物皆有回转,<br />&nbsp;当我们觉得余味苦涩,<br />&nbsp;请你相信,<br />&nbsp;一切皆有回甘。」
        </p>
      </div>
      <div class="box23-kj-wz2">
        <p>
          BGM:钢琴曲轻音乐<br />有环境音,孩子们都嬉笑打闹,<br />听这首歌,感觉世界都安静了,<br />回到小时候生长的小县城要早点睡,<br />思绪被拉得很长很长……
        </p>
      </div>
    </div>
  </div>
  <div
    class="box22-by"
    style="margin-top: -150px; margin-bottom: -28px; width: 82.8%; margin-left: 8.9%"
  >
    <p>音乐是情感的载体，它能够传递最微妙和细腻的情感，让人们产生共鸣和感动。</p>
  </div>
  <div class="box34-tw-kj">
    <div class="box34-tw-nkj">
      <div class="box34-tw-tp-rq"><img src="/images/box34-tw-tp1.jpg" /></div>
      <div class="box34-tw-wz-rq">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;在一个安静的夜晚，一个人独自坐在窗边，静静地听着音乐。音乐的旋律在他的耳边流淌，带着他的思绪穿梭在时间和空间的隧道里。<br />&nbsp;&nbsp;&nbsp;&nbsp;他仿佛看到了生活中的点点滴滴，听到了自己内心深处的声音。音乐是他的伴侣，陪伴他度过了许多孤独的时光，也让他感受到了生命的美好和意义。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;On a quiet night, sitting alone by the window, quietly listening
          to music. The melody of music flowed in his ears, carrying his thoughts through the
          tunnels of time and space.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;He seemed to see the bits and pieces of life, and heard the
          voicer. Music is his companion, accompanying him through lonely times and making him feel
          the meaning of life.
        </p>
      </div>
    </div>
    <div class="box34-tw-nkj">
      <div class="box34-tw-tp-rq"><img src="/images/box34-tw-tp2.jpg" /></div>
      <div class="box34-tw-wz-rq">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;生活和音乐，像是一对相互依存的情侣，彼此交织，相互补足。音乐让生活变得更加丰富多彩，生活也为音乐提供了源源不断的灵感和创作动力。<br />&nbsp;&nbsp;&nbsp;&nbsp;让我们在生活中，用音乐的眼光去看待世界，用音乐的力量去创造美好的未来。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Life and music are like a pair of interdependent couples,
          intertwined and complementary to each other. Music makes life more colorful, and life also
          provides a continuous source of inspiration and creative motivation for music.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Let us view the world with a musical perspective in life, and use
          the power of music to create a better future.
        </p>
      </div>
    </div>
  </div>
  <div>
    <h4 class="box61" style="margin-left: 100px; color: #4073d9">用户推荐</h4>
    <div class="aa" style="margin-top: 8px"></div>
    <div class="box-wufengtu">
      <div class="wufengtu-yd">
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=2007336134"><img src="/images/yh1.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=1467718020"><img src="/images/yh2.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=1973665667"><img src="/images/yh3.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=2057534370"><img src="/images/yh4.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=1864905612"><img src="/images/yh5.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=1482867143"><img src="/images/yh9.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=1984488457"><img src="/images/yh7.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=2007336134"><img src="/images/yh1.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=1467718020"><img src="/images/yh2.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=1973665667"><img src="/images/yh3.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=2057534370"><img src="/images/yh4.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=1864905612"><img src="/images/yh5.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=1482867143"><img src="/images/yh9.jpg" /></a>
        </div>
        <div class="wufengtu-tp">
          <a href="https://music.163.com/#/song?id=1984488457"><img src="/images/yh7.jpg" /></a>
        </div>
      </div>
    </div>
  </div>

  <div class="foot">
    <div style="height: 20px"></div>
    <p>在线音乐屋版权所有</p>
    <p style="margin-top: 10px">Misappropriation without consent is prohibited</p>
    <div class="foot-tp"><img src="/images/音律1.png" /></div>
    <div class="foot-tp2"><img src="/images/音律2.png" /></div>
  </div>
</template>
<style scoped>
/*第3页面*/
.dingbu-wz {
  position: relative;
  height: 120px;
  width: 200px;
  margin: 0 auto;
}

.svg-kuangjia {
  width: 83%;
  height: 500px;
  position: relative;
  border: 3px solid rgb(0, 0, 0);
  margin-left: 8.5%;
}
.svg-kuangjia video {
  width: 100%;
  height: 500px;
  position: absolute;
  object-fit: cover;
}
.tp-svg {
  background: #fff url('/images/遮板.svg');
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 130px;
  background-position: center;
  mix-blend-mode: screen;
  transition: all 0.5s;
}
.liebiaotu {
  /*列表图容器格式*/
  height: 418px;
  width: 300px;
  border: 6px solid rgb(53, 71, 95);
  margin-top: 50px;
}

.liebiaotu > ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  list-style: none;
}
.liebiaotu li {
  height: 208px;
  width: 150px;
}

.box2wz1 {
  /*音乐推荐样式*/
  width: 30%;
  height: 80px;
  line-height: 80px;
  background-color: rgb(64, 115, 217);
  border-radius: 50%;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  font-family: '华文新魏';
  margin-top: -45px;
}

.box2wz1-1 {
  /*音乐推荐下面文字框架*/
  position: absolute;
  margin-left: 15px;
}

.box2wz1-1 p {
  /*音乐推荐下面文字属性*/
  margin-left: -320px;
  width: 500px;
  height: 300px;
  margin-top: 50px;
  font-size: 18px;
  font-family: '幼圆';
  color: #bce7e6;
}

.box21 {
  /*轮播图容器*/
  width: 300px;
  border: 6px solid rgb(53, 71, 95);
  display: inline-block;
  margin-left: 195px;
  height: 400px;
}

.box-21-tp {
  /*轮播图样式*/
  opacity: 0;
  transition: all 1.5s;
  position: absolute;
  margin-left: 0px;
  margin-top: 0px;
  width: 300px;
}
.box-21-tp-xia {
  /*小熊容器*/
  width: 520px;
  position: absolute;
  margin-top: -50px;
  margin-left: -35%;
  opacity: 0.45;
}

.box-21-tp:nth-child(1) {
  opacity: 1;
}

.box22-by {
  /*标语图层*/
  width: 83%;
  height: 30px;
  background-color: rgb(74, 95, 149);
  margin-left: 8.5%;
  border-radius: 3px;
  padding-top: 8px;
}

.box22-by p {
  color: #ffffff;
  font-family: '华文行楷';
  font-size: 18px;
  text-align: center;
  letter-spacing: 7px;
}

.box22-pinjie {
  /*拼接图容器*/
  position: relative;
  height: 150px;
  width: 10%;
  margin-left: 26%;
  padding-top: 20px;
  z-index: 10;
}

.box22-pinjie ul {
  /*拼接图ul样式*/
  padding: 0;
  list-style: none;
  display: flex;
}
.box23-tupian {
  /*拼接图图片*/
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: #383632;
  transition: all 1.5s;
  margin-left: -40px;
  margin-top: -6px;
}

.c {
  /*拼接图li 的class*/
}

.c2 {
  /*拼接图toggleClass样式1*/
  transition: all 1.5s;
  margin-right: 150px;
}

.c3 {
  /*拼接图toggleClass样式2*/
  transition: all 1.5s;
  transform: rotate(360deg);
}

.box23-kj {
  /*拼接图右边的容器*/
  position: relative;
  top: -170px;
  height: 170px;
  width: 820px;
  left: 530px;
  border: 6px solid rgb(64, 115, 217);
}

.box23-kj p:hover {
  color: #55aaff;
}

.box23-kj-wz {
  /*音乐Vlog容器*/
  position: absolute;
  top: 30px;
  width: 150px;
  border: 6px solid rgb(64, 115, 217);
  left: -380px;
}
.box23-kj-bk {
  /*小狗边框位置*/
  position: absolute;
  width: 253px;
  height: 212px;
  top: -17px;
  left: -215px;
  z-index: 11;
}
.box23-kj-wz2:nth-child(2) p {
  position: absolute;
  left: -100px;
  top: 40px;
}
.box23-kj-vlog {
  /*vlog图片*/
  position: absolute;
  width: 200px;
  height: 170px;
  margin-left: 620px;
  margin-top: 0px;
  z-index: 11;
}
.box23-kj-vlog:hover {
  /*vlog图片鼠标悬停效果*/
  transform: scale(1.2);
  transition: ease-in-out 0.5s;
  box-shadow: 3px 3px 2px 4px #000000;
}
.box23-kj-wz p {
  line-height: 40px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  font-family: '华文新魏';
}

.box23-kj-wz2 {
  position: relative;
  height: 170px;
  width: 400px;
  padding: 10px;
  box-sizing: border-box;
}

.box23-kj-wz2 p {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #fff;
  font-family: '仿宋';
}
.box34-tw-kj {
  /*左图右文框架*/
  display: flex;
  justify-content: space-between;
  width: 82%;
  height: 400px;
  margin-left: 9%;
  margin-top: 25px;
  border: 6px solid rgb(64, 115, 217);
  border-radius: 5px;
  background-image: url('/images/box34背景图.jpg');
  background-size: cover;
  background-repeat: round;
}
.box34-tw-nkj {
  width: 49%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.box34-tw-tp-rq {
  border-right: 1px solid #fff;
  width: 50%;
  height: 100%;
}
.box34-tw-tp-rq img {
  transition: all 0.5s;
}
.box34-tw-tp-rq:hover {
  cursor: pointer;
}
.box34-tw-wz-rq {
  width: 45%;
  height: 100%;
}
.box34-tw-wz-rq p {
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: #fff;
  font-family: '仿宋';
  padding-top: 13px;
  line-height: 1.2em;
  padding-left: 13px;
  padding-right: 13px;
}
.box34-tw-wz-rq p:hover {
  cursor: pointer;
  color: #55ffff;
}
.box-wufengtu {
  /*无缝滚动图框架*/
  height: 240px;
  width: 1320px;
  position: relative;
  margin-left: 90px;
  border: 6px solid rgb(0, 0, 0);
  overflow: hidden;
}

.wufengtu-yd {
  /*无缝滚动图容器*/
  display: flex;
  width: 2660px;
}

.wufengtu-tp {
  /*无缝滚动图的图片样式*/
  padding-right: 10px;
  width: 180px;
  height: 240px;
}

.wufengtu-yd2 {
  /*滚动指令*/
  margin-left: -1330px;
  transition: all 20s;
  transition-timing-function: linear; /*匀速滚动*/
}
.foot {
  /*底栏样式*/
  width: 100%;
  height: 100px;
  text-align: center;
  background-color: rgb(62, 78, 101);
  margin-top: 0px;
  color: #fff;
  font-size: 18px;
}

.foot-tp {
  /*底栏左边音律样式*/
  height: 100px;
  width: 500px;
  margin-top: -88px;
}

.foot-tp2 {
  /*底栏右边音律样式*/
  height: 100px;
  width: 500px;
  display: inline-block;
  margin-top: -94px;
  float: right;
}
.bg2 {
  /*更换的背景图片*/
  background-image: url('/images/beijing9.jpg');
}
</style>
