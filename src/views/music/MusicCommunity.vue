<script setup>
import $ from 'jquery'
$(function () {
  function yidong2() {
    $('.wft-rq41').addClass('wft-rq41-yd2')
    setTimeout(function () {
      $('.wft-rq41').removeClass('wft-rq41-yd2')
    }, 15000)
  }
  yidong2()
  setInterval(yidong2, 15050)
  $('.box1').click(function () {
    $('.bg').toggleClass('bg2')
  })
  $('.d4').hover(
    function () {
      $(this).addClass('box42-tp1-yishang')
      $(this).siblings().addClass('box42-tp1-qita')
    },
    function () {
      $(this).removeClass('box42-tp1-yishang')
      $(this).siblings().removeClass('box42-tp1-qita')
    }
  )
  var index4 = 0
  setInterval(function () {
    if (index4 == $('.box43-zhenghang-2-lbt').length - 1) {
      index4 = 0
      $('.box43-zhenghang-2-lbt').css('opacity', '0')
      $('.box43-zhenghang-2-lbt').eq(index4).css('opacity', '1')
    } else {
      index4++
      $('.box43-zhenghang-2-lbt').css('opacity', '0')
      $('.box43-zhenghang-2-lbt').eq(index4).css('opacity', '1')
    }
  }, 3000)
  $('.box43-zhenghang-2-dingge-tp').mouseover(function () {
    $('.box43-zhenghang-2-dingge-tp img').prop('src', '/images/宇航员2.png')
  })
  $('.box43-zhenghang-2-dingge-tp').click(function () {
    $('.box43-zhenghang-2-dingge-tp img').prop('src', '/images/宇航员3.png')
  })
  $('.box43-zhenghang-2-dingge-tp').mouseout(function () {
    $('.box43-zhenghang-2-dingge-tp img').prop('src', '/images/宇航员1.png')
  })
  var count = 1
  var Content = ''
  var myArray = new Array(6)
  myArray[0] =
    '听过《梁祝》，声声滴泪的唱词，婉转悠扬的曲调，似乎要把上天感动，要让大地震颤。听过的人都会禁不住神往那番化蝶飞舞的美景，心系那份楼台哀怨的悲情。“十年生死两茫茫，不思量，自难忘。”每听一次，就会想起这几句词，思绪便随着这隔世之恋感动回旋，余音绕梁。'
  myArray[1] =
    '音乐是时间的艺术，它瞬息万变，如梦如幻。在音乐的河流中，我们可以感受到激昂热烈的波涛，也可以感受到平静如水的涟漪。无论是悲壮激昂的交响乐，还是温情脉脉的独唱，都可以通过音乐的力量，让人在瞬间感受到不同的人生。'
  myArray[2] =
    '音乐如同一道绚烂的彩虹，横跨时空，连接人与人之间的心灵。它的旋律如同潺潺流水，让人感受到生活的美好与温馨。在音乐的熏陶下，人们不再感到孤独与疲惫，取而代之的是无穷的动力与激情。'
  myArray[3] =
    '音乐是生命中的一抹亮色，它让我们在平凡的生活中找到乐趣和美好。无论是欢快的舞曲、悠扬的小提琴曲，还是激情四溢的摇滚乐，它们都能为我们的生活增添色彩和活力。让我们在音乐的世界里找到自己的节拍，享受着生活的每一个瞬间。'
  myArray[4] =
    '在忧郁的时刻，音乐如同一剂良药，为我们的心灵带来无比的慰藉。它的旋律如同母亲的摇篮曲，安抚着我们的疲惫与不安。那些忧虑和烦恼，在音乐的怀抱中，逐渐消散，只留下心灵的宁静与舒缓。'
  myArray[5] =
    '音乐是一种最接近生命的精神表达，它能够直接触动人的内心，唤醒我们最深层的情感。在音乐的世界里，每一个音符都充满了生命力，它们像细胞一样，组成了一首首动人心弦的乐章。'
  $('.box43-zhenghang-1-anniu-rq').click(function () {
    $('.box43-zhenghang-2-dingge-tp img').prop('src', '/images/宇航员2.png')
    setTimeout(function () {
      $('.box43-zhenghang-2-dingge-tp img').prop('src', '/images/宇航员3.png')
    }, 250)
    setTimeout(function () {
      $('.box43-zhenghang-2-dingge-tp img').prop('src', '/images/宇航员1.png')
      if (count < 6) {
        Content = myArray[count]
        $('.box43-zhenghang-1-wz-rq').find('p').text(Content)
        count++
      } else {
        count = 0
        Content = myArray[count]
        $('.box43-zhenghang-1-wz-rq').find('p').text(Content)
        count++
      }
    }, 500)
  })
  function guangyun() {
    $('.box44-guangyun-kj').fadeIn(1000)
    setTimeout(function () {
      $('.box44-guangyun-kj').fadeOut(1000)
    }, 2000)
  }
  guangyun()
  setInterval(guangyun, 4500)
  $('.lifangtizhanshi-anniu-kj').click(function () {
    $('.box44-zhezhao-kj').show()
    $('.lifangtizhanshi-kj').show()
  })
  $('.box44-zhezhao-kj').click(function () {
    $('.box44-zhezhao-kj').hide()
    $('.lifangtizhanshi-kj').hide()
  })
  $('.lifangtizhanshi-kj').click(function () {
    $('.box44-zhezhao-kj').hide()
    $('.lifangtizhanshi-kj').hide()
  })
  $('.box44-shanzi-kj2').click(function () {
    $('.box44-zhezhao-kj').show()
    $('.box44-shanzi-dianjiyulan-kj').show()
  })
  $('.box44-zhezhao-kj').click(function () {
    $('.box44-zhezhao-kj').hide()
    $('.box44-shanzi-dianjiyulan-kj').hide()
  })
  $('.box44-shanzi-dianjiyulan-kj').click(function () {
    $('.box44-zhezhao-kj').hide()
    $('.box44-shanzi-dianjiyulan-kj').hide()
  })
})
</script>
<template>
  <div class="box-wft-kj40">
    <div class="wft-rq41">
      <ul>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=1956911869"
            ><img src="/images/音乐社区wft1.jpg"
          /></a>
        </li>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=1383023894"
            ><img src="/images/音乐社区wft2.jpg"
          /></a>
        </li>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=26562741"
            ><img src="/images/音乐社区wft3.jpg"
          /></a>
        </li>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=1807799505"
            ><img src="/images/音乐社区wft4.jpg"
          /></a>
        </li>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=1952285469"
            ><img src="/images/音乐社区wft5.jpg"
          /></a>
        </li>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=1407358755"
            ><img src="/images/音乐社区wft6.jpg"
          /></a>
        </li>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=1956911869"
            ><img src="/images/音乐社区wft1.jpg"
          /></a>
        </li>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=1383023894"
            ><img src="/images/音乐社区wft2.jpg"
          /></a>
        </li>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=26562741"
            ><img src="/images/音乐社区wft3.jpg"
          /></a>
        </li>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=1807799505"
            ><img src="/images/音乐社区wft4.jpg"
          /></a>
        </li>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=1952285469"
            ><img src="/images/音乐社区wft5.jpg"
          /></a>
        </li>
        <li class="wft-tp40">
          <a href="https://music.163.com/?from=wsdh#/song?id=1407358755"
            ><img src="/images/音乐社区wft6.jpg"
          /></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="box22-by" style="width: 100%; margin-left: 0px; letter-spacing: 10px">
    <p>音符欢快地洒落在心窝里，宛如一些活泼轻盈的精灵，在为心灵进行一次洗礼</p>
  </div>
  <div class="box42-tp1-kj" style="margin-top: 20px">
    <ul class="box42-tp1-rq">
      <li class="d4">
        <a href="https://music.163.com/#/song?id=2009999779&market=baiduqk"
          ><img src="/images/box42-tp1-img1.jpg"
        /></a>
      </li>
      <li class="d4">
        <a href="https://y.qq.com/n/ryqq/albumDetail/002bcN6D2nbVt1"
          ><img src="/images/box42-tp1-img2.jpg"
        /></a>
      </li>
      <li class="d4">
        <a href="https://y.qq.com/n/ryqq/songDetail/002WZNTR3QTdFY"
          ><img src="/images/box42-tp1-img3.jpg"
        /></a>
      </li>
      <li class="d4">
        <a href="https://y.qq.com/n/ryqq/albumDetail/004NELRr4P6CYa"
          ><img src="/images/box42-tp1-img4.jpg"
        /></a>
      </li>
      <li class="d4">
        <a href="https://y.qq.com/n/ryqq/songDetail/002mxaOT1PKiAu"
          ><img src="/images/box42-tp1-img5.jpg"
        /></a>
      </li>
    </ul>
  </div>
  <div class="box42-shijv-kj">
    <p>音乐诗句</p>
    <div class="box42-shijv-rq">
      <p>吴丝蜀桐张高秋，空山凝云颓不流&nbsp;————&nbsp;唐·李贺</p>
      <p>谁家玉笛暗飞声，散入春风满洛城&nbsp;————&nbsp;唐·李白</p>
      <p>为我引杯添酒饮，与君把箸击盘歌&nbsp;————&nbsp;唐·白居易</p>
      <p>大弦嘈嘈如急雨，小弦切切如私语&nbsp;————&nbsp;唐·白居易</p>
      <p>谁家玉笛暗飞声，散入春风满洛城&nbsp;————&nbsp;唐·李白</p>
      <p>一声已动物皆静，四座无言星欲稀&nbsp;————&nbsp;唐·李颀</p>
    </div>
  </div>
  <div class="box43-zhenghang-kj">
    <div class="box43-zhenghang-1-kj">
      <p>用户留言</p>
      <div class="box43-zhenghang-1-anniu-rq">
        <img src="/images/按钮蓝猫1.png" />
      </div>
      <div class="box43-zhenghang-1-wz-rq">
        <p>
          听过《梁祝》，声声滴泪的唱词，婉转悠扬的曲调，似乎要把上天感动，要让大地震颤。听过的人都会禁不住神往那番化蝶飞舞的美景，心系那份楼台哀怨的悲情。“十年生死两茫茫，不思量，自难忘。”每听一次，就会想起这几句词，思绪便随着这隔世之恋感动回旋，余音绕梁。
        </p>
      </div>
    </div>
    <div class="box43-zhenghang-2-kj">
      <div class="box43-zhenghang-2-bk">
        <img src="/images/屏幕框架6.png" />
        <div class="box43-zhenghang-2-lbt-rq">
          <div class="box43-zhenghang-2-lbt"><img src="/images/box43-zhenghang-2-lbt1.jpg" /></div>
          <div class="box43-zhenghang-2-lbt"><img src="/images/box43-zhenghang-2-lbt2.jpg" /></div>
          <div class="box43-zhenghang-2-lbt"><img src="/images/box43-zhenghang-2-lbt3.jpg" /></div>
          <div class="box43-zhenghang-2-lbt"><img src="/images/box43-zhenghang-2-lbt4.jpg" /></div>
          <div class="box43-zhenghang-2-lbt"><img src="/images/box43-zhenghang-2-lbt5.jpg" /></div>
          <div class="box43-zhenghang-2-lbt"><img src="/images/box43-zhenghang-2-lbt6.jpg" /></div>
          <div class="box43-zhenghang-2-lbt"><img src="/images/box43-zhenghang-2-lbt7.jpg" /></div>
          <div class="box43-zhenghang-2-lbt"><img src="/images/box43-zhenghang-2-lbt8.jpg" /></div>
        </div>
        <div class="box43-zhenghang-2-dingge-rq">
          <div class="box43-zhenghang-2-dingge-tp"><img src="/images/宇航员1.png" /></div>
        </div>
      </div>
    </div>
    <div class="box43-zhenghang-3-kj">
      <div class="box43-zhenghang-3-yingwen">
        <p>
          Wait until the sky is clear,<br />and you will not bear the flowering period;When<br />everything
          can be expected,<br />may you meet a better self.
        </p>
      </div>
      <div class="box43-zhenghang-3-zhongwen">
        <p>等到晴空万里，为你不负花期；<br />等到万事可期，愿你遇见更好的自<br />己。</p>
      </div>
    </div>
  </div>
  <div class="dis1" style="width: 92%; height: 300px; margin-left: 5%; margin-top: 20px">
    <div class="box44-zhenghang-1-kj">
      <div class="box44-zhenghang-1-rq">
        <video src="/images/空镜1.mp4" muted loop autoplay></video>
      </div>
      <div class="box44-tucamengban"></div>
    </div>
    <div class="box44-zhenghang-2-kj">
      <div class="box44-zhenghang-2-rq">
        <div class="box44-yinyueshalong-tb-rq">
          <img src="/images/音乐沙龙.png" />
        </div>
        <div class="box44-guangdeng-kj">
          <img src="/images/光灯.png" />
        </div>
        <div class="box44-guangyun-kj">
          <img src="/images/光晕1.png" />
        </div>
        <div class="box44-shalong-wz">
          <p>
            在那个醉人的黄昏，音符在空气中跳跃，如水晶般纯净而灵动。欢迎来到音乐沙龙，一个神奇的地方，让灵魂与旋律交织成华美的舞蹈。
          </p>
        </div>
        <div class="box44-shalong-wz2">
          <p>
            当指尖轻触黑白键，整个空间仿佛沉浸在一片宁静之中，听众们的心弦被细腻的旋律拨动，情感在音符间舞动。小提琴的悠扬声音如泉水般清澈，吉他的弹奏带来一丝迷人的浪漫，而美妙的人声则如天籁之音，穿越时空，触动灵魂的深处。
          </p>
        </div>
        <div class="box44-shalong-wz3">
          <p>
            音乐沙龙是一个聚集了各种音乐形式和风格的宝库，从古典到爵士，从民谣到流行，每一个音符都有其独特的故事和情感。这里没有界限，只有音乐的自由流动，让每一个灵魂都能找到属于自己的共鸣和安宁。
          </p>
          <p>
            让我们在音乐的翅膀下起舞吧！在这个音乐沙龙的世界里，让我们相聚，共享音乐的魅力，让心灵在旋律中翱翔，感受生命的美好与奇迹。
          </p>
        </div>
        <div class="lifangtizhanshi-anniu-kj">
          <img src="/images/立方体展示按钮.png" />
        </div>
      </div>
    </div>
    <div class="box44-zhenghang-3-kj">
      <div class="box44-zhenghang-3-rq">
        <div class="box44-shanzi-kj">
          <img src="/images/扇子.png" />
        </div>
        <div class="box44-shalong-shipin-kj">
          <video src="/images/音乐沙龙变换视频.mp4" autoplay muted loop></video>
        </div>
        <div class="box44-shanzi-kj2">
          <img src="/images/扇子.png" />
        </div>
        <div class="box44-meihua-kj">
          <img src="/images/梅花.png" />
        </div>
      </div>
    </div>
  </div>
  <div class="box44-hengtiao-kj">
    <img src="/images/梅花4.png" />
  </div>
  <h4 class="box61" style="margin-left: 100px; margin-top: -30px">专辑推荐</h4>
  <div class="aa" style="position: relative; width: 90%; margin-left: 5%"></div>
  <div class="box-24-baiyechuang-flex-kj">
    <div class="box-24-baiyechuang-tp-kj">
      <a href="https://music.163.com/#/song?id=2083403330"
        ><img src="/images/box-24-baiyechuang1.jpg"
      /></a>
    </div>
    <div class="box-24-baiyechuang-tp-kj">
      <a href="https://music.163.com/#/song?id=2050717002"
        ><img src="/images/box-24-baiyechuang2.jpg"
      /></a>
    </div>
    <div class="box-24-baiyechuang-tp-kj">
      <a href="https://music.163.com/#/song?id=2022643305"
        ><img src="/images/box-24-baiyechuang3.jpg"
      /></a>
    </div>
    <div class="box-24-baiyechuang-tp-kj">
      <a href="https://music.163.com/#/song?id=2003021029"
        ><img src="/images/box-24-baiyechuang4.jpg"
      /></a>
    </div>
    <div class="box-24-baiyechuang-tp-kj">
      <a href="https://music.163.com/#/song?id=1958705729"
        ><img src="/images/box-24-baiyechuang5.jpg"
      /></a>
    </div>
    <div class="box-24-baiyechuang-tp-kj">
      <a href="https://music.163.com/#/song?id=2073124208"
        ><img src="/images/box-24-baiyechuang6.jpg"
      /></a>
    </div>
  </div>
  <div class="box44-zhezhao-kj"></div>
  <div class="lifangtizhanshi-kj">
    <div class="lifangti1"></div>
    <div class="lifangti2"></div>
    <div class="lifangti3"></div>
    <div class="lifangti4"></div>
    <div class="lifangti5"></div>
    <div class="lifangti6"></div>
  </div>
  <div class="box44-shanzi-dianjiyulan-kj">
    <div class="box44-shanzi-kj--x">
      <img src="/images/扇子.png" />
    </div>
    <div class="box44-shalong-shipin-kj--x">
      <video src="/images/音乐沙龙变换视频.mp4" autoplay muted loop></video>
    </div>
    <div class="box44-shanzi-kj2--x">
      <img src="/images/扇子.png" />
    </div>
    <div class="box44-meihua-kj--x">
      <img src="/images/梅花.png" />
    </div>
  </div>

  <div class="foot" style="margin-top: 55px">
    <div style="height: 20px"></div>
    <p>在线音乐屋版权所有</p>
    <p style="margin-top: 10px">Misappropriation without consent is prohibited</p>
    <div class="foot-tp"><img src="/images/音律1.png" /></div>
    <div class="foot-tp2"><img src="/images/音律2.png" /></div>
  </div>
</template>
<style scoped>
/*第4页面*/
.box-wft-kj40 {
  /*无缝图框架*/
  position: relative;
  height: 300px;
  width: 1515px;
  border: 6px solid #000000;
  overflow: hidden;
}
.wft-rq41 {
  /*无缝图容器*/
  height: 300px;
  width: 3040px;
  position: absolute;
}

.wft-rq41-yd2 {
  /*移动2*/
  margin-left: -1515px;
  transition: all 15s;
  transition-timing-function: linear;
}
.wft-rq41 ul {
  padding: 0px;
  list-style: none;
  display: flex;
}
.wft-tp40 {
  /*无缝图图片*/
  height: 300px;
  width: 300px;
  padding-right: 5px;
}

.box42-tp1-kj {
  /*第二模块图片左"百叶窗"*/
  margin-left: 5%;
  height: 320px;
  width: 703px;
  border: 2px solid black;
  border-radius: 5px;
}
.box42-tp1-rq {
  /*ul样式*/
  width: 705px;
  height: 320px;
  list-style: none;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  border-radius: 5px;
}
.d4 {
  /*li样式*/
  width: 140px;
  float: left;
  border-left: 1px solid white;
  transition: all 1s;
}
.d4 img {
  /*图片样式*/
  height: 320px;
  width: 427px;
}
.box42-tp1-qita {
  /*除了鼠标悬停外的li样式（addClass）*/
  width: 68.5px;
}
.box42-tp1-yishang {
  /*鼠标悬停的li样式（addClass）*/
  width: 427px;
}
.box42-shijv-kj {
  /*第一模块右边容器样式*/
  height: 300px;
  width: 40%;
  margin-left: 60px;
  position: absolute;
  margin-left: 55%;
  margin-top: -320px;
  background-image: url('/images/第四页面xbj1.jpg');
  background-size: cover;
  border-radius: 7px;
  padding: 10px;
}
.box42-shijv-kj p {
  /*音乐诗句样式*/
  font-size: 28px;
  font-weight: bold;
  text-align: left;
  color: #fff;
  font-family: '华文新魏';
}
.box42-shijv-kj p:hover {
  cursor: pointer;
  color: #55ffff;
}
.box42-shijv-rq {
  /*诗句容器样式*/
  margin-top: 30px;
  margin-left: 70px;
}
.box42-shijv-rq p {
  /*诗句字体样式*/
  font-size: 17px;
  font-weight: bold;
  text-align: left;
  color: #fff;
  font-family: '仿宋';
  line-height: 1.5em;
  margin-left: 30px;
}
.box43-zhenghang-kj {
  /*第二模块整行样式*/
  display: flex;
  justify-content: space-between;
  height: 300px;
  width: 91%;
  margin-left: 5%;
  margin-top: 20px;
  border: 6px dotted #000000;
  background-image: url('/images/月亮和提琴女孩.jpg');
  background-size: cover;
  background-repeat: round;
}
.box43-zhenghang-1-kj {
  width: 28%;
  height: 280px;
  border-radius: 7px;
}
.box43-zhenghang-1-kj > p {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  font-family: '华文新魏';
  margin-top: 10px;
}
.box43-zhenghang-1-wz-rq {
  padding: 15px;
  margin-left: 70px;
}
.box43-zhenghang-1-wz-rq p {
  font-size: 17px;
  font-weight: bold;
  text-align: left;
  color: #ffffff;
  font-family: '宋体';
  line-height: 1.5em;
  margin-left: 30px;
  cursor: pointer;
}
.box43-zhenghang-1-wz-rq p:hover {
  color: #55ffff;
}
.box43-zhenghang-1-anniu-rq {
  width: 60px;
  height: 30px;
  margin-top: -30px;
  margin-left: 390px;
  opacity: 0.8;
  position: absolute;
}
.box43-zhenghang-1-anniu-rq:hover {
  cursor: pointer;
  opacity: 1;
  width: 60.5px;
  height: 30.5px;
}
.box43-zhenghang-2-kj {
  width: 34%;
  height: 300px;
}
.box43-zhenghang-2-bk {
  /*电视机屏幕框架*/
  width: 110%;
  height: 300px;
  margin-left: -30px;
  /*transform: perspective(1200px) rotateY(-25deg);
	transform-style: preserve-3d;*/
}
.box43-zhenghang-2-lbt-rq {
  /*轮播图容器*/
  height: 235px;
  width: 374px;
  margin-top: -273px;
  margin-left: 40px;
  border-radius: 18px;
}
.box43-zhenghang-2-lbt {
  position: absolute;
  height: 236px;
  width: 376px;
  opacity: 0;
}
.box43-zhenghang-2-lbt:nth-child(1) {
  opacity: 1;
}
.box43-zhenghang-2-lbt img {
  border-radius: 18px;
  border: 3px solid black;
}
.box43-zhenghang-2-dingge-rq {
  /*宇航员容器*/
  height: 300px;
  width: 180px;
  margin-left: -550px;
  margin-top: -260px;
}
.box43-zhenghang-2-dingge-tp {
  height: 300px;
  width: 240px;
  margin-left: -30px;
}
.box43-zhenghang-3-kj {
  width: 20%;
  height: 300px;
}
.box43-zhenghang-3-yingwen {
  width: 100%;
  height: 150px;
}
.box43-zhenghang-3-yingwen p {
  font-size: 19px;
  font-weight: bold;
  text-align: left;
  color: #ffffff;
  font-family: 'Blackadder ITC';
  line-height: 1.5em;
  cursor: pointer;
  padding-top: 20px;
}
.box43-zhenghang-3-yingwen p:hover {
  cursor: pointer;
  color: #55ffff;
}
.box43-zhenghang-3-zhongwen {
  width: 100%;
  height: 150px;
}
.box43-zhenghang-3-zhongwen p {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #ffffff;
  font-family: '楷体';
  line-height: 1.5em;
  cursor: pointer;
  padding-top: 20px;
}
.box43-zhenghang-3-zhongwen p:hover {
  cursor: pointer;
  color: #55ffff;
}
.box44-zhenghang-1-kj {
  /*音乐沙龙整行框架1*/
  position: relative;
  width: 36%;
  height: 300px;
}
.box44-zhenghang-1-rq {
  /*音乐沙龙整行容器1*/
  width: 100%;
  position: absolute;
  height: 100%;
}
.box44-zhenghang-1-rq video {
  width: 100%;
  border-radius: 5px;
}
.box44-tucamengban {
  /*涂擦蒙版*/
  width: 100%;
  height: 282px;
  position: absolute;
  background-image: url('/images/涂擦蒙版3.jpg');
  background-size: contain;
  mix-blend-mode: soft-light;
  background-repeat: round;
  border-radius: 5px;
}
.box44-zhenghang-2-kj {
  position: relative;
  width: 30%;
  height: 300px;
}
.box44-zhenghang-2-rq {
  width: 100%;
  position: absolute;
  height: 100%;
}
.box44-yinyueshalong-tb-rq {
  /*音乐沙龙图标容器*/
  position: relative;
  width: 300px;
  height: 140px;
  top: 0px;
  left: 0px;
  background-image: url('/images/梅花左上.png');
  background-position: 78% -95%;
}
.box44-guangdeng-kj {
  /*光灯框架*/
  position: absolute;
  width: 150px;
  height: 150px;
  left: 295px;
  top: -30px;
}
.box44-guangyun-kj {
  /*光灯框架*/
  position: absolute;
  width: 150px;
  height: 150px;
  left: 285px;
  top: -10px;
  opacity: 0.6;
  display: none;
}
.box44-shalong-wz {
  width: 400px;
  height: 50px;
  position: relative;
  margin-top: 5px;
}
.box44-shalong-wz p {
  font-size: 15px;
  color: #fff;
  text-align: left;
  font-family: '仿宋';
  font-weight: bold;
  padding: 5px;
}

.box44-shalong-wz p:hover {
  cursor: pointer;
  color: #00ffff;
}
.box44-shalong-wz2 {
  width: 400px;
  height: 90px;
  position: absolute;
  border: 4px dotted #f7f4cf;
  margin-top: 20px;
}
.box44-shalong-wz2 p {
  font-size: 15px;
  color: #a2ffff;
  text-align: left;
  font-family: '仿宋';
  font-weight: bold;
  padding: 5px;
}
.box44-shalong-wz2 p:hover {
  cursor: pointer;
  color: #ffdf29;
}
.box44-shalong-wz3 {
  width: 600px;
  height: 105px;
  position: absolute;
  border: 4px dotted #79ffd3;
  margin-top: 130px;
}
.box44-shalong-wz3 p {
  font-size: 15px;
  color: #fff7c6;
  text-align: left;
  font-family: '仿宋';
  font-weight: bold;
  padding: 5px;
}
.box44-shalong-wz3 p:hover {
  cursor: pointer;
  color: #00aaff;
}
.lifangtizhanshi-anniu-kj {
  /*立方体展示按钮框架*/
  position: absolute;
  height: 40px;
  width: 100px;
  left: 660px;
  top: 380px;
  opacity: 0.9;
}
.lifangtizhanshi-anniu-kj:hover {
  transform: scale(1.1);
  opacity: 1;
  cursor: pointer;
}
.box44-zhenghang-3-kj {
  position: relative;
  width: 30%;
  height: 300px;
}
.box44-zhenghang-3-rq {
  position: absolute;
  width: 100%;
  height: 100%;
}
.box44-shanzi-kj {
  /*扇子框架*/
  position: relative;
  width: 450px;
  margin-left: -20px;
}
.box44-shanzi-kj img {
  object-fit: contain;
}

.box44-shalong-shipin-kj {
  /*音乐沙龙变换视频框架*/
  width: 450px;
  height: 450px;
  position: absolute;
  margin-top: -380px;
  margin-left: -19.35px;
  clip-path: polygon(
    49% 2%,
    30% 6%,
    15% 15%,
    3% 30%,
    0% 46%,
    31% 52%,
    50% 37%,
    67% 52%,
    100% 46%,
    96% 30%,
    84% 15%,
    68% 6%
  );
  overflow: hidden;
  opacity: 0.95;
}
.box44-shanzi-kj2 {
  /*扇子框架2*/
  position: relative;
  width: 450px;
  margin-left: -20px;
  margin-top: -367px;
  opacity: 0.1;
}
.box44-shanzi-kj2:hover {
  cursor: pointer;
}
.box44-shalong-shipin-kj video {
  width: 100%;
  position: absolute;
}
.box44-meihua-kj {
  /*梅花框架*/
  position: relative;
  width: 200px;
  margin-left: 220px;
  margin-top: -390px;
  opacity: 0.9;
}
.box44-hengtiao-kj {
  /*横条属性*/
  width: 40%;
  height: 200px;
  position: relative;
  margin-left: 58px;
  margin-top: -43px;
}
.box44-shanzi-dianjiyulan-kj {
  /*扇子点击展示预览框架*/
  position: fixed;
  height: 800px;
  width: 800px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
}
.box44-shanzi-kj--x {
  position: absolute;
  width: 800px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.box44-shanzi-kj--x img {
  object-fit: contain;
}
.box44-shanzi-kj2--x {
  position: absolute;
  width: 800px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
}
.box44-shalong-shipin-kj--x {
  width: 800px;
  height: 800px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -43.5%);
  clip-path: polygon(
    49% 2%,
    30% 6%,
    15% 15%,
    3% 30%,
    0% 46%,
    31% 52%,
    50% 37%,
    67% 52%,
    100% 46%,
    96% 30%,
    84% 15%,
    68% 6%
  );
  overflow: hidden;
  opacity: 0.95;
}
.box44-shalong-shipin-kj--x video {
  width: 100%;
  position: absolute;
}
.box44-meihua-kj--x {
  position: absolute;
  width: 500px;
  left: 350px;
}
.box44-zhezhao-kj {
  /*遮罩框架*/
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
.lifangtizhanshi-kj {
  /*立方体展示框架*/
  position: fixed;
  height: 250px;
  width: 250px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  animation: lftbh 8s ease-in infinite alternate;
  display: none;
}
.lifangti1 {
  /*前*/
  position: absolute;
  background-image: url('/images/lifangti1.jpg');
  background-position: center center;
  opacity: 0.8;
  transform: rotateX(0deg) rotateY(0deg) translateZ(125px);
  height: 250px;
  width: 250px;
  background-size: cover;
  box-shadow: inset 0px 0px 3px 4px rgba(0, 0, 0, 0.8);
  filter: brightness(150%);
}
.lifangti2 {
  /*右*/
  position: absolute;
  background-image: url('/images/lifangti2.jpg');
  background-position: center center;
  opacity: 0.8;
  transform: rotateY(90deg) translateZ(125px); /*先旋转，再平移！不能加视距*/
  height: 250px;
  width: 250px;
  background-size: cover;
  box-shadow: inset 0px 0px 3px 4px rgba(0, 0, 0, 0.8);
  filter: brightness(150%);
}
.lifangti3 {
  /*上*/
  position: absolute;
  background-image: url('/images/lifangti3.jpg');
  background-position: center center;
  opacity: 0.8;
  transform: rotateX(90deg) translateZ(125px);
  height: 250px;
  width: 250px;
  background-size: cover;
  box-shadow: inset 0px 0px 3px 4px rgba(0, 0, 0, 0.8);
  filter: brightness(150%);
}
.lifangti4 {
  /*下*/
  position: absolute;
  background-image: url('/images/lifangti4.jpg');
  background-position: center center;
  opacity: 0.8;
  transform: rotateX(-90deg) translateZ(125px);
  height: 250px;
  width: 250px;
  background-size: cover;
  box-shadow: inset 0px 0px 3px 4px rgba(0, 0, 0, 0.8);
  filter: brightness(150%);
}
.lifangti5 {
  /*左*/
  position: absolute;
  background-image: url('/images/lifangti5.jpg');
  background-position: center center;
  opacity: 0.8;
  transform: rotateY(-90deg) translateZ(125px);
  height: 250px;
  width: 250px;
  background-size: cover;
  box-shadow: inset 0px 0px 3px 4px rgba(0, 0, 0, 0.8);
  filter: brightness(150%);
}
.lifangti6 {
  /*后*/
  position: absolute;
  background-image: url('/images/lifangti6.jpg');
  background-position: center center;
  opacity: 0.8;
  transform: rotateY(180deg) translateZ(125px);
  height: 250px;
  width: 250px;
  background-size: cover;
  box-shadow: inset 0px 0px 3px 4px rgba(0, 0, 0, 0.8);
  filter: brightness(150%);
}
@keyframes lftbh {
  0% {
    /*前*/
    transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg);
  }
  20% {
    /*右*/
    transform: translate(-50%, -50%) rotateX(0deg) rotateY(-90deg);
  }
  40% {
    /*上*/
    transform: translate(-50%, -50%) rotateX(-90deg) rotateY(0deg);
  }
  60% {
    /*左*/
    transform: translate(-50%, -50%) rotateX(0deg) rotateY(90deg);
  }
  80% {
    /*下*/
    transform: translate(-50%, -50%) rotateX(90deg) rotateY(0deg);
  }
  100% {
    /*后*/
    transform: translate(-50%, -50%) rotateX(0deg) rotateY(-180deg);
  }
}
.box-24-baiyechuang-flex-kj {
  /*百叶窗（flex）框架*/
  width: 90%;
  margin-left: 5%;
  position: relative;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 40px;
}
.box-24-baiyechuang-tp-kj {
  /*百叶窗（flex）图片框架*/
  width: 300px;
  height: 350px;
  box-sizing: border-box;
  border: 7px solid #fff;
  box-shadow: 7px 7px 20px #000000;
  border-radius: 7px;
  margin-right: 30px;
  transition: ease-in-out 0.5s;
  overflow: hidden;
  -webkit-box-reflect: below 3px
    linear-gradient(
      to bottom,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      rgba(0, 0, 0, 0.5)
    );
}
.box-24-baiyechuang-tp-kj img {
  object-fit: cover;
}
.box-24-baiyechuang-tp-kj:nth-child(6) {
  margin-right: 0px;
}
.box-24-baiyechuang-tp-kj:hover {
  width: 800px;
  cursor: pointer;
}
.box-24-baiyechuang-tp-kj:hover > img {
  width: 100%;
  height: 100%;
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
.box61 {
  /*第三模块音乐推荐文字样式*/
  margin-top: 35px;
  margin-left: 30px;
  font-size: 18px;
  font-weight: bold;
  color: rgb(64, 115, 217);
}
</style>
