<script setup>
import $ from 'jquery'
$(function () {
  var index = 0
  var dsq
  setTimeout(function () {
    dingshiqi()
  }, 7200)

  function dingshiqi() {
    dsq = setInterval(function () {
      if (index == $('.img-top').length - 1) {
        index = 0
        $('.img-top').css('opacity', '0')
        $('.img-top').eq(index).css('opacity', '1')
        $('.d').css('background-color', '#c6c6c6')
        $('.d').eq(index).css('background-color', '#fff')
      } else {
        index++
        $('.img-top').css('opacity', '0')
        $('.img-top').eq(index).css('opacity', '1')
        $('.d').css('background-color', '#c6c6c6')
        $('.d').eq(index).css('background-color', '#fff')
      }
    }, 2500)
  }
  $('.box-left').click(function () {
    clearInterval(dsq)
    if (index == 0) {
      index = $('.img-top').length - 1
      $('.img-top').css('opacity', '0')
      $('.img-top').eq(index).css('opacity', '1')
      $('.d').css('background-color', '#c6c6c6')
      $('.d').eq(index).css('background-color', '#fff')
      dingshiqi()
    } else {
      index--
      $('.img-top').css('opacity', '0')
      $('.img-top').eq(index).css('opacity', '1')
      $('.d').css('background-color', '#c6c6c6')
      $('.d').eq(index).css('background-color', '#fff')
      dingshiqi()
    }
  })
  $('.box-right').click(function () {
    clearInterval(dsq)
    if (index == $('.img-top').length - 1) {
      index = 0
      $('.img-top').css('opacity', '0')
      $('.img-top').eq(index).css('opacity', '1')
      $('.d').css('background-color', '#c6c6c6')
      $('.d').eq(index).css('background-color', '#fff')
      dingshiqi()
    } else {
      index++
      $('.img-top').css('opacity', '0')
      $('.img-top').eq(index).css('opacity', '1')
      $('.d').css('background-color', '#c6c6c6')
      $('.d').eq(index).css('background-color', '#fff')
      dingshiqi()
    }
  })
  $('.d').click(function () {
    var indexx = $(this).index()
    clearInterval(dsq)
    index = indexx
    $('.img-top').css('opacity', '0')
    $('.img-top').eq(index).css('opacity', '1')
    $('.d').css('background-color', '#c6c6c6')
    $('.d').eq(index).css('background-color', '#fff')
    dingshiqi()
  })
  $('.top-box').mouseover(function () {
    $('.box-left').css('opacity', '1')
    $('.box-right').css('opacity', '1')
  })
  $('.top-box').mouseout(function () {
    $('.box-left').css('opacity', '0')
    $('.box-right').css('opacity', '0')
  })
  $('.box1').click(function () {
    $('.bg').toggleClass('bg2')
  })
  var index2 = 0
  setInterval(function () {
    if (index2 == $('.box-2-tp').length - 1) {
      index2 = 0
      $('.box-2-tp').css('opacity', '0')
      $('.box-2-tp').eq(index2).css('opacity', '1')
    } else {
      index2++
      $('.box-2-tp').css('opacity', '0')
      $('.box-2-tp').eq(index2).css('opacity', '1')
    }
  }, 3000)
  var indexxx3 = 0
  setInterval(function () {
    if (indexxx3 == $('.box-3-tp-kjj').length - 1) {
      indexxx3 = 0
      $('.box-3-tp-kjj').css('opacity', '0')
      $('.box-3-tp-kjj').eq(indexxx3).css('opacity', '1')
    } else {
      indexxx3++
      $('.box-3-tp-kjj').css('opacity', '0')
      $('.box-3-tp-kjj').eq(indexxx3).css('opacity', '1')
    }
  }, 3500)
  $('.app').hover(
    function () {
      $(this).siblings().css('opacity', '0.4')
    },
    function () {
      $(this).siblings().css('opacity', '1')
    }
  )
  setTimeout(function () {
    $('.kaichang h2').text('to')
  }, 3000)
  setTimeout(function () {
    $('.kaichang h2').text('Melody Hub')
  }, 4000)
  setTimeout(function () {
    $('.kaichang').css('display', 'none')
  }, 7000)
  $('.cengdie-li-kj')
    .eq(0)
    .click(function () {
      window.location.href = 'https://y.qq.com/n/ryqq/albumDetail/002MRY88057AhY'
    })
  $('.cengdie-li-kj')
    .eq(1)
    .click(function () {
      window.location.href = 'https://y.qq.com/n/ryqq/songDetail/0022R1L82mb8Hp'
    })
  $('.cengdie-li-kj')
    .eq(2)
    .click(function () {
      window.location.href = 'https://y.qq.com/n/ryqq/songDetail/004XCNCu3tl6fg'
    })
  $('.cengdie-li-kj')
    .eq(3)
    .click(function () {
      window.location.href = 'https://y.qq.com/n/ryqq/songDetail/0043EX2e2F6JCA'
    })
  var cengdietudsq
  cengdietuyd()
  function cengdietuyd() {
    setTimeout(function () {
      $('.cengdie-li-kj').addClass('cengdie-li-bh1')
    }, 2000)
    setTimeout(function () {
      $('.cengdie-li-kj').removeClass('cengdie-li-bh1')
    }, 2600)
  }
  cengdietudsq = setInterval(cengdietuyd, 4000)
  $('.cengdie-ul-kj').mouseover(function () {
    clearInterval(cengdietudsq)
  })
  $('.cengdie-ul-kj').mouseout(function () {
    cengdietudsq = setInterval(cengdietuyd, 4000)
  })
  biankuangbh()
  function biankuangbh() {
    $('.box4').addClass('box4-bh1')
    setTimeout(function () {
      $('.box4').removeClass('box4-bh1')
    }, 3100)
  }
  setInterval(biankuangbh, 6200)
})
</script>
<template>
  <div class="kaichang">
    <video src="/images/入场.mp4" autoplay muted loop></video>
    <h2>Welcome</h2>
  </div>
  <div class="top-box">
    <div class="img-top">
      <a href="https://music.163.com/#/song?id=1969603746"><img src="/images/top1.jpg" /></a>
    </div>
    <div class="img-top">
      <a href="https://music.163.com/#/song?id=22740149"><img src="/images/top2.jpg" /></a>
    </div>
    <div class="img-top">
      <a href="https://music.163.com/#/song?id=1983808772"><img src="/images/top3.jpg" /></a>
    </div>
    <div class="img-top">
      <a href="https://music.163.com/#/song?id=1981047255"><img src="/images/top4.jpg" /></a>
    </div>
    <div class="img-top">
      <a href="https://music.163.com/?from=wsdh#/song?id=1961231344"
        ><img src="/images/top5.jpg"
      /></a>
    </div>
    <div class="img-top">
      <a href="https://music.163.com/?from=wsdh#/song?id=1978036723"
        ><img src="/images/top6.jpg"
      /></a>
    </div>
    <div class="box-left">&lt;</div>
    <div class="box-right">&gt;</div>
    <div class="box-yuandian">
      <ul>
        <li class="d"></li>
        <li class="d"></li>
        <li class="d"></li>
        <li class="d"></li>
        <li class="d"></li>
        <li class="d"></li>
      </ul>
    </div>
    <div class="by1"><p>音乐表达的是无法用语言描述，却又不可能对其保持沉默的东西</p></div>
  </div>
  <div class="box2">
    <div class="dis">
      <div class="box3">
        <div class="face front">
          <h2>“曼陀林的低沉音色，给人以无尽的安全感和归属感”</h2>
        </div>
        <div class="face back">
          <h2>“萨克斯的悲凉旋律，无声地诉说着心里的那份故事”</h2>
        </div>
      </div>
      <div class="box4">
        <div class="box5">音乐是比一切智慧、一切哲学更高的启示</div>
        <div class="box6">
          音乐资讯
          <span
            ><a href="http://www.coolhc.cn/"
              >Music
              News&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多&gt;&gt;</a
            ></span
          >
        </div>
        <div class="aa"></div>
        <div class="dis" style="height: 190px; width: 800px; position: absolute">
          <div class="box-2-tp-kj">
            <div class="box-2-tp"><img src="/images/2-tp1.jpg" /></div>
            <div class="box-2-tp"><img src="/images/2-tp2.jpg" /></div>
            <div class="box-2-tp"><img src="/images/2-tp3.jpg" /></div>
            <div class="box-2-tp"><img src="/images/2-tp4.jpg" /></div>
            <div class="box-2-tp"><img src="/images/2-tp5.jpg" /></div>
            <div class="box-2-tp"><img src="/images/2-tp6.jpg" /></div>
            <div class="box-2-tp"><img src="/images/2-tp7.jpg" /></div>
          </div>

          <div class="box-2-wz-kj1">
            <p>
              <a href="https://www.sohu.com/a/736957923_121106832"
                >跨越半个世纪的合奏！“费城之声”响彻苏州！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023年11月</a
              ><br />
              <a href="http://zj.people.com.cn/n2/2023/1012/c186327-40600472.html"
                >让音乐与更多心灵共振&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023年10月</a
              ><br />
              <a href="https://finance.sina.com.cn/jjxw/2023-09-15/doc-imzmurce5411191.shtml"
                >“一带一路”国际音乐季：音乐响起来，故事传出去&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023年09月</a
              ><br />
              <a href="https://www.chinanews.com/m/cul/2023/10-17/10095787.shtml"
                >“温暖又有力量”，歌曲《同路人》如何刷屏？&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023年10月</a
              ><br />
              <a href="http://news.sohu.com/a/740525859_123753"
                >弹吉他的拉祜族父女：唱快乐的歌
                促家乡发展&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023年09月</a
              ><br />
              <a href="http://www.gxnews.com.cn/staticpages/20231023/newgx65364deb-21324221.shtml"
                >全国出圈！广西这支“宝藏”乐队是一群怎样的人？&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023年09月</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="dis" style="margin-top: 0px">
      <div class="box4" style="width: 700px; border: 0px dotted rgb(64, 115, 217)">
        <div class="box6" style="margin-top: 0px; color: #fff"><h1>1</h1></div>
        <div class="box6" style="margin-top: 0px; color: #fff"><h6>四月</h6></div>
        <div class="aa" style="width: 20%; border: 1px solid #fff"></div>
        <div class="box6" style="margin-top: 0px; color: #fff"><h6>二零二四年</h6></div>
        <div class="aa" style="width: 20%; border: 1px solid #fff"></div>
        <div class="box6" style="margin-top: 0px; color: #fff; margin-left: 30px">
          <h5>Music</h5>
        </div>
        <div class="box-3-tp-kjj"><img src="/images/box3-tp-1.jpg" /></div>
        <div class="box-3-tp-kjj"><img src="/images/box3-tp-2.jpg" /></div>
        <div class="box-3-tp-kjj"><img src="/images/box3-tp-3.jpg" /></div>
        <div class="box-3-tp-kjj"><img src="/images/box3-tp-4.jpg" /></div>
        <div class="box-3-tp-kjj"><img src="/images/box3-tp-5.jpg" /></div>
        <div class="box-3-tp-kjj"><img src="/images/box3-tp-6.jpg" /></div>
        <div class="box-3-tp-kjj"><img src="/images/box3-tp-7.jpg" /></div>
        <div class="box-cengdietu-zuibian-wz">
          <p>
            <br />
            有音乐<br />
            生活也可以变成叙事诗<br />
            <br />
            人类渴望音乐<br />
            毕竟英雄在抗争世界时<br />
            都需要一些背景音<br />
            <br />
            拥抱可控的失控时刻<br />
            <br />
            相较于大的世界<br />
            我们也需要小的空间<br />
            让音调 音符 嗓音包裹我 拼合我 粘接我<br />
            收拾破碎的情绪<br />
            然后拼出未来可能的模样
          </p>
        </div>
        <div class="box-3-yinghuasanluo-kj">
          <img src="/images/樱花散落.gif" />
        </div>
      </div>
      <div class="box3">
        <div class="cengdie-rq">
          <ul class="cengdie-ul-kj">
            <li class="cengdie-li-kj">
              <div class="cengdie-tp-rq">
                <img src="/images/层叠图1.jpg" />
              </div>
              <h4>&nbsp;&nbsp;《Love》</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Taylor Swift</p>
              <div class="cengdie-wz-zuiyou"><p>Soon you will get better</p></div>
            </li>
            <li class="cengdie-li-kj">
              <div class="cengdie-tp-rq">
                <img src="/images/层叠图2.jpg" />
              </div>
              <h4>&nbsp;&nbsp;《See You Again》</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Charlie puth</p>
              <div class="cengdie-wz-zuiyou"><p>When I see you again</p></div>
            </li>
            <li class="cengdie-li-kj">
              <div class="cengdie-tp-rq">
                <img src="/images/层叠图3.jpg" />
              </div>
              <h4>&nbsp;&nbsp;《Faded》</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alan Walker</p>
              <div class="cengdie-wz-zuiyou"><p>So lost I am faded</p></div>
            </li>
            <li class="cengdie-li-kj">
              <div class="cengdie-tp-rq">
                <img src="/images/层叠图4.jpg" />
              </div>
              <h4>&nbsp;&nbsp;《Stay》</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Justin Bieber</p>
              <div class="cengdie-wz-zuiyou"><p>Oh ooh-woah ooh-woah</p></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <h4 class="box61">音乐推荐</h4>
      <div class="aa" style="margin-top: -8px">
        <div class="box-3-wz">
          <p>
            <a href="https://tieba.baidu.com/f?kw=%E9%9F%B3%E4%B9%90%E8%AE%BA%E5%9D%9B">了解更多</a>
          </p>
        </div>
      </div>
      <div class="dis">
        <div class="app">
          <a href="https://y.qq.com/n/ryqq/songDetail/003kCCcd0f5sqC"
            ><img src="/images/a2.jpg" alt=""
          /></a>
        </div>
        <div class="app">
          <a href="https://y.qq.com/n/ryqq/songDetail/0025WUPT2O358d"
            ><img src="/images/a3.jpg" alt=""
          /></a>
        </div>
        <div class="app">
          <a href="https://y.qq.com/n/ryqq/songDetail/00354Xkt2gUXIs"
            ><img src="/images/a4.jpg" alt=""
          /></a>
        </div>
        <div class="app">
          <a href="https://y.qq.com/n/ryqq/songDetail/000IJpos1jHmDm"
            ><img src="/images/a5.jpg" alt=""
          /></a>
        </div>
        <div class="app">
          <a href="https://y.qq.com/n/ryqq/songDetail/004W1vra0upP9U"
            ><img src="/images/a6.jpg" alt=""
          /></a>
        </div>
      </div>
      <div style="height: 90px; width: 80%"></div>
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
.kaichang {
  /*开场动画*/
  margin-left: 5%;
  width: 90%;
  height: 500px;
  position: absolute;
  top: 60px;
  z-index: 100;
  overflow: hidden;
}
.kaichang video {
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0px;
  object-fit: cover;
}
.kaichang > h2 {
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0px;
  text-align: center;
  font-size: 200px;
  line-height: 500px;
  color: #000000;
  mix-blend-mode: screen;
  background-color: #fff;
}
.kaichang > h2:hover {
  background-color: #000000;
  color: #ffffff;
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

img {
  width: 100%;
  height: 100%;
}

.top-box {
  /*轮播图容器*/
  width: 100%;
  height: 450px;
  position: relative;
}

.img-top {
  /*顶层图片位置、属性*/
  position: absolute; /*all图片重叠显示*/
  top: 0px;
  left: 5%;
  width: 90%;
  height: 500px;
  opacity: 0;
  transition: ease-in-out 1.5s;
  background-color: #383632;
}
.img-top img {
  width: 100%;
  height: 100%;
}
.img-top:nth-child(1) {
  opacity: 1;
}

.box-left {
  /*轮播图左切换键*/
  position: absolute;
  margin-left: 5%;
  margin-top: 190px;
  font-size: 30px;
  color: #c6c6c6;
  border-radius: 0 4px 4px 0;
  text-align: center;
  line-height: 70px;
  width: 30px;
  height: 70px;
  opacity: 0;
  cursor: pointer;
}

.box-left:hover {
  /*轮播图左切换键鼠标悬停效果*/
  background-color: #727c88;
  color: #ffffff;
  opacity: 1;
}

.box-right {
  /*轮播图右切换键*/
  position: absolute;
  margin-left: 93%;
  margin-top: 190px;
  font-size: 30px;
  color: #c6c6c6;
  border-radius: 4px 0 4px 0;
  text-align: center;
  line-height: 70px;
  width: 30px;
  height: 70px;
  opacity: 0;
  cursor: pointer;
}

.box-right:hover {
  /*轮播图右切换键鼠标悬停效果*/
  background-color: #727c88;
  color: #ffffff;
  opacity: 1;
}

.box-yuandian {
  /*轮播图圆点定位*/
  position: absolute;
  margin-top: 450px;
  margin-left: 80%;
}

.box-yuandian > ul {
  /*轮播图ul清空样式*/
  padding: 0;
  margin: 0;
  list-style: none;
}

.box-yuandian li {
  /*轮播图圆点样式*/
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: #c6c6c6;
  float: left;
  margin-right: 5px;
}

.box-yuandian li:hover {
  /*轮播图圆点鼠标悬停样式*/
  background-color: #ffffff;
  cursor: pointer;
}

.box-yuandian li:nth-child(1) {
  background-color: #fff;
}

.by1 {
  /*轮播图下面标语位置*/
  width: 90%;
  height: 30px;
  background-color: rgb(74, 95, 149);
  position: absolute;
  margin-left: 5%;
  margin-top: 500px;
}

.by1 p {
  color: #ffffff;
  font-family: '华文行楷';
  font-size: 20px;
  text-align: center;
  margin-top: 6px;
  letter-spacing: 7px;
}

.box2 {
  /*第二模块总容器*/
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
}

.dis {
  /*flex流式布局*/
  display: flex;
  justify-content: space-around;
}

.box3 {
  /*第二模块左边图片样式*/
  width: 38%;
  height: 345px;
}
.box3 .face {
  position: absolute;
  width: 35%;
  height: 345px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: 2s ease-in-out;
  transform: perspective(800px) rotateY(0deg);
  margin-left: 0;
  margin-top: 0;
  object-fit: contain;
}
.box3 .face h2 {
  width: 100%;
  height: 345px;
  position: absolute;
  text-align: center;
  line-height: 345px;
  transform-style: preserve-3d;
  transform: perspective(800px) translateZ(50px);
  margin-top: 0px;
  margin-left: 0;
  font-size: 20px;
  backface-visibility: hidden;
  color: #fff;
  opacity: 0.8;
}
.box3 .face.front {
  background-image: url('/images/a1.jpg');
  background-size: cover;
  background-repeat: round;
  transform-style: preserve-3d;
  transform: perspective(800px) rotateY(0deg);
}
.box3 .face.back {
  background-image: url('/images/a1-f.jpg');
  background-size: cover;
  background-repeat: round;
  transform-style: preserve-3d;
  transform: perspective(800px) rotateY(180deg);
}
.box3:hover .face.front {
  transform-style: preserve-3d;
  transform: perspective(800px) rotateY(180deg);
}
.box3:hover .face.back {
  transform-style: preserve-3d;
  transform: perspective(800px) rotateY(360deg);
}
.cengdie-rq {
  /*层叠图容器*/
  width: 540px;
  position: absolute;
  height: 345px;
}
.cengdie-ul-kj {
  /*层叠图ul框架*/
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  transform-style: preserve-3d;
  background-image: url('/images/荷花1.png');
  background-size: cover;
  height: 380px;
}
.cengdie-li-kj {
  /*层叠图li框架*/
  width: 517px;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(255, 254, 233, 0.9));
  height: 80px;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.5);
  transition: ease-in 0.8s;
}
.cengdie-li-bh1 {
  /*自动变换动画*/
  margin-bottom: 30px;
  transition: all 0.6s;
}
.cengdie-li-kj:nth-child(1) {
  transform: translateY(40px) translateZ(-75px);
  opacity: 0.6;
}
.cengdie-li-kj:nth-child(2) {
  opacity: 0.8;
}
.cengdie-li-kj:nth-child(3) {
  transform: translateY(-43px) translateZ(75px);
  opacity: 0.9;
}
.cengdie-li-kj:nth-child(4) {
  transform: translateY(-90px) translateZ(150px);
  opacity: 1;
  margin-bottom: 0px;
}
.cengdie-ul-kj:hover .cengdie-li-kj {
  transform: translateY(0px) translateZ(0px);
  opacity: 1;
}
.cengdie-tp-rq {
  /*层叠图图片容器*/
  width: 60px;
  height: 60px;
  float: left;
}
.cengdie-li-kj > h4 {
  font-family: 'Poppins';
  margin-top: 10px;
  line-height: 1.6em;
}
.cengdie-li-kj > p {
  font-family: 'Blackadder ITC';
  font-size: 18px;
}
.cengdie-wz-zuiyou {
  /*层叠图最右边文字框架*/
  position: relative;
  top: -30px;
  height: 20px;
  width: 200px;
  left: 308px;
}
.cengdie-wz-zuiyou p {
  position: absolute;
  font-size: 13px;
  font-weight: 100;
  font-family: 'Poppins';
  right: 10px;
}
.box4 {
  /*第二模块右边部分样式*/
  width: 58%;
  height: 330px;
  border: 8px solid;
  position: relative;
  opacity: 98%;
  border-image: linear-gradient(45deg, rgb(64, 115, 217), rgb(47, 217, 206));
  border-image-slice: 1;
}
.box4-bh1 {
  border-image: linear-gradient(45deg, rgb(0, 214, 179), rgb(64, 115, 217));
  border-image-slice: 1;
}
.box5 {
  /*文字块*/
  width: 60%;
  height: 80px;
  line-height: 80px;
  background-color: rgb(64, 115, 217);
  border-radius: 14px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  position: absolute;
  top: -40px;
  left: 20%;
  font-family: '华文新魏';
}

.box6 {
  /*音乐资讯的样式*/
  margin-top: 60px;
  margin-left: 30px;
  font-size: 21px;
  font-weight: bold;
  color: rgb(64, 115, 217);
}

.box6 span {
  /*更多>>的样式*/
  margin-left: 200px;
  color: rgb(64, 115, 217);
  font-size: 18px;
}

.box4 p {
  /*第二模块整段文字样式*/
  margin: 10px;
  font-size: 16px;
  line-height: 1.5rem; /*行高为当前元素字体大小的 1.5 倍*/
  color: #fff;
  margin-left: 250px;
}
.aa {
  /*第二模块右边横杠样式*/
  margin: 10px;
  border-bottom: 3px solid rgb(64, 115, 217);
}
.box-2-tp-kj {
  position: relative;
  height: 190px;
  width: 25%;
}
.box-2-wz-kj1 {
  position: relative;
  height: 190px;
  width: 70%;
}
.box-2-wz-kj1 p {
  position: absolute;
  height: 190px;
  width: 100%;
  left: -246px;
  line-height: 29px;
  text-align: left;
}
.box-2-tp {
  /*第二模块轮播图位置*/
  width: 100%;
  height: 190px;
  opacity: 0;
  position: absolute;
  transition: all 1.5s;
}

.box-2-tp:nth-child(1) {
  opacity: 1;
}

.box-3-tp-kjj {
  /*第二模块下轮播图2位置*/
  width: 30%;
  height: 180px;
  position: absolute;
  transition: ease-in-out 1.5s;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0px 0px 20px 3px #000000;
  margin-top: 10px;
  clip-path: polygon(50% 0%, 0% 40%, 20% 100%, 80% 100%, 100% 40%);
}
.box-3-tp-kjj img {
}
.box-3-tp-kjj:hover {
  cursor: pointer;
}
.box-3-tp-kjj:nth-child(7) {
  opacity: 1;
}
.box-cengdietu-zuibian-wz {
  /*层叠图左边文字框架*/
  position: absolute;
  top: 18px;
}
.box-cengdietu-zuibian-wz p {
  font-size: 15px;
  font-family: '宋体';
  font-weight: bold;
}

.box-cengdietu-zuibian-wz p:hover {
  cursor: pointer;
  color: #00ffff;
}
.box-3-yinghuasanluo-kj {
  /*樱花散落gif框架*/
  position: absolute;
  top: 5px;
  width: 400px;
  left: 380px;
}
.box61 {
  /*第三模块音乐推荐文字样式*/
  margin-top: 35px;
  margin-left: 30px;
  font-size: 18px;
  font-weight: bold;
  color: rgb(64, 115, 217);
}

.box-3-wz {
  /*底栏“了解更多”容器*/
  position: relative;
}

.box-3-wz p {
  /*底栏“了解更多”样式*/
  font-size: 15px;
  text-align: right;
  color: #fff;
  margin-bottom: 3px;
}

.app {
  /*第三模块低下五张图片链接样式*/
  width: 15%;
  height: 230px;
  margin-top: 20px;
  transition: all 0.5s;
  transform-origin: center;
  z-index: 100;
}
.app img {
  transform: perspective(800px) rotateY(20deg);
  opacity: 1;
  transition: all 0.5s;
  -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #000000);
}

.app img:hover {
  transform: perspective(800px) rotateY(0deg);
  opacity: 1;
  transition: all 0.5s;
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
</style>
