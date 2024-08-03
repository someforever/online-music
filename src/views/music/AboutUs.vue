<script setup>
import $ from 'jquery'
import yx1 from '../../../public/images/yx1.jpg'
import yx2 from '../../../public/images/yx2.jpg'
import yx3 from '../../../public/images/yx3.jpg'
import yx4 from '../../../public/images/yx4.jpg'
import yx5 from '../../../public/images/yx5.jpg'
import yx6 from '../../../public/images/yx6.jpg'
import yx7 from '../../../public/images/yx7.jpg'
$(function () {
  $('.box23-jgg-rq')
    .eq(0)
    .mouseover(function () {
      $('.box23-jgg-rq img').eq(0).addClass('box23-jgg-bh1')
      $('.box23-th1').eq(0).addClass('box23-jgg-th1')
    })
  $('.box23-jgg-rq')
    .eq(2)
    .mouseover(function () {
      $('.box23-jgg-rq img').eq(2).addClass('box23-jgg-bh2')
      $('.box23-th2').eq(0).addClass('box23-jgg-th2')
    })
  $('.box23-jgg-rq')
    .eq(6)
    .mouseover(function () {
      $('.box23-jgg-rq img').eq(6).addClass('box23-jgg-bh3')
      $('.box23-th3').eq(0).addClass('box23-jgg-th3')
    })
  $('.box23-jgg-rq')
    .eq(8)
    .mouseover(function () {
      $('.box23-jgg-rq img').eq(8).addClass('box23-jgg-bh4')
      $('.box23-th4').eq(0).addClass('box23-jgg-th4')
    })
  $('.box23-th1')
    .eq(0)
    .mouseout(function () {
      $('.box23-jgg-rq img').eq(0).removeClass('box23-jgg-bh1')
      $('.box23-th1').eq(0).removeClass('box23-jgg-th1')
    })
  $('.box23-th2')
    .eq(0)
    .mouseout(function () {
      $('.box23-jgg-rq img').eq(2).removeClass('box23-jgg-bh2')
      $('.box23-th2').eq(0).removeClass('box23-jgg-th2')
    })
  $('.box23-th3')
    .eq(0)
    .mouseout(function () {
      $('.box23-jgg-rq img').eq(6).removeClass('box23-jgg-bh3')
      $('.box23-th3').eq(0).removeClass('box23-jgg-th3')
    })
  $('.box23-th4')
    .eq(0)
    .mouseout(function () {
      $('.box23-jgg-rq img').eq(8).removeClass('box23-jgg-bh4')
      $('.box23-th4').eq(0).removeClass('box23-jgg-th4')
    })
  $('.box1').click(function () {
    $('.bg').toggleClass('bg2')
  })
  // $('.box51-yinyuehe-anniu-kj')
  //   .find('img')
  //   .click(function () {
  //     $('.yijianfankui-wz').css('opacity', '1')
  //     $('.box51-yijian').css('opacity', '1')
  //   })
  // $('.box23-jgg-kj').click(function () {
  //   $('.yijianfankui-wz').css('opacity', '0')
  //   $('.box51-yijian').css('opacity', '0')
  // })
  $('.yinxingyizu1').click(function () {
    $('.box53-zhezhao1-kj').show()
    $('.box53-yinxingdianjiyulan-kj').show()
    $('.box53-yulan-tp-rq').find('img').attr('src', yx1)
    $('.box53-yulan-wz-rq p').text(
      '夕阳低垂，树枝轻遮，城楼若隐若现。生活在这美景中绽放。此时一曲笛声悠扬,微风伴着曲声轻拂，抚摸着心弦，诗人的笔尖倾诉着思念。在这夕阳余晖下，描摹交织成一幅绚丽的画卷，沉浸其中，感受那美妙的旋律，将心灵的和弦奏响。'
    )
  })
  $('.yinxingyizu2').click(function () {
    $('.box53-zhezhao1-kj').show()
    $('.box53-yinxingdianjiyulan-kj').show()
    $('.box53-yulan-tp-rq').find('img').attr('src', yx2)
    $('.box53-yulan-wz-rq p').text(
      '夜幕降临，天空融合着蓝与粉，层层绚烂如画。地铁站显得灰暗，轻轻打开耳机。远处的灯火闪烁，如星辰点缀。如诗如画般的所及。旅人在节奏中律动，心灵在旋律里沉淀。音符穿越时空的隧道，将寂寞与喧嚣化为和谐。'
    )
  })
  $('.yinxingyizu3').click(function () {
    $('.box53-zhezhao1-kj').show()
    $('.box53-yinxingdianjiyulan-kj').show()
    $('.box53-yulan-tp-rq').find('img').attr('src', yx3)
    $('.box53-yulan-wz-rq p').text(
      '夕阳西下，晚霞燃烧天边，群山连绵如黛。池塘倒映夕阳，画面如诗如画，唯美的景色。微风吹拂，蝉鸣低语，伴随着心灵的共鸣。一起一伏，如蝴蝶翩翩起舞，穿越时光的界限。沉醉其中，感受生活的美好。'
    )
  })
  $('.yinxingyizu4').click(function () {
    $('.box53-zhezhao1-kj').show()
    $('.box53-yinxingdianjiyulan-kj').show()
    $('.box53-yulan-tp-rq').find('img').attr('src', yx4)
    $('.box53-yulan-wz-rq p').text(
      '楼阁之内，凭窗眺望，远处楼阁蔚然。天空染上淡黄色，落雁翩翩掠过，鸟鸣轻吟悠然。一阵阵舒适的声音，似音符飘散于空中，远处的城市静谧如画，宛如音符的舞台。心灵在鸟鸣中起舞，与自然和谐共舞。'
    )
  })
  $('.yinxingyizu5').click(function () {
    $('.box53-zhezhao1-kj').show()
    $('.box53-yinxingdianjiyulan-kj').show()
    $('.box53-yulan-tp-rq').find('img').attr('src', yx5)
    $('.box53-yulan-wz-rq p').text(
      '湖面波光粼粼，夕阳倒映如诗。手握两朵玫瑰花，浪漫绽放唯美。湖水轻声低语，起伏跳跃如音符。如琴弦轻拨的旋律，穿越心灵的深处，唤起柔情的涟漪。每一次涟漪的起伏，都是生命的跳跃，一曲永恒的诗篇。'
    )
  })
  $('.yinxingyizu6').click(function () {
    $('.box53-zhezhao1-kj').show()
    $('.box53-yinxingdianjiyulan-kj').show()
    $('.box53-yulan-tp-rq').find('img').attr('src', yx6)
    $('.box53-yulan-wz-rq p').text(
      '海鸥成群飞过，近在眼前，翱翔自由的灵魂。天空云朵稀少，苍穹宛如画布，等待着思绪的涂鸦。远处群山连绵，如诗人笔下的山水画卷。打开相机，记录这一刻的美丽，将思绪凝固成图像。画面与音符交织，大自然的旋律在心中回响。'
    )
  })
  $('.yinxingyizu7').click(function () {
    $('.box53-zhezhao1-kj').show()
    $('.box53-yinxingdianjiyulan-kj').show()
    $('.box53-yulan-tp-rq').find('img').attr('src', yx7)
    $('.box53-yulan-wz-rq p').text(
      '天空橘黄色，大雁划破天际，桥梁远处明亮。城市天边通明，路灯暗淡如愁，寄托着疲惫的脚步。每一步踏出，都是节拍的律动，生活的琐碎与耳机音乐的韵律交织，将灰暗的心情染上温暖的彩虹。从灰暗到明亮，情绪在音符中翩跹。'
    )
  })
  $('.box53-zhezhao1-kj').click(function () {
    $('.box53-zhezhao1-kj').hide()
    $('.box53-yinxingdianjiyulan-kj').hide()
  })
  $('.box53-yinxingdianjiyulan-kj').click(function () {
    $('.box53-zhezhao1-kj').hide()
    $('.box53-yinxingdianjiyulan-kj').hide()
  })
  $('.box-yinxing-youxia-kj').click(function () {
    $('.box53-zhezhao1-kj2').show()
    $('.box54-xinfeng-zhongxin-kj').show()
  })
  $('.box53-zhezhao1-kj2').click(function () {
    $('.box53-zhezhao1-kj2').hide()
    $('.box54-xinfeng-zhongxin-kj').hide()
  })
  $('.box54-xinfeng-zhongxin-kj').click(function () {
    $('.box53-zhezhao1-kj2').hide()
    $('.box54-xinfeng-zhongxin-kj').hide()
  })
})
</script>
<template>
  <div>
    <h4
      class="box61"
      style="
        margin-left: 710px;
        color: aquamarine;
        font-size: 28px;
        margin-top: 30px;
        text-shadow: 4px 4px 7px #d7ffac;
      "
    >
      文案&nbsp;&nbsp;分享
    </h4>
  </div>
  <div class="box23-jgg-kj">
    <div class="box23-jgg-rq"><img src="/images/九宫格w1.jpg" /></div>
    <div class="box23-jgg-rq"><img src="/images/九宫格wdj1.jpg" /></div>
    <div class="box23-jgg-rq"><img src="/images/九宫格w2.jpg" /></div>
    <div class="box23-jgg-rq"><img src="/images/九宫格wdj2.jpg" /></div>
    <div class="box23-jgg-rq"><img src="/images/九宫格中.jpg" /></div>
    <div class="box23-jgg-rq"><img src="/images/九宫格wdj3.jpg" /></div>
    <div class="box23-jgg-rq"><img src="/images/九宫格w3.jpg" /></div>
    <div class="box23-jgg-rq"><img src="/images/九宫格wdj4.jpg" /></div>
    <div class="box23-jgg-rq"><img src="/images/九宫格w4.jpg" /></div>
    <div class="box23-th1"><img src="/images/九宫格n1.jpg" /></div>
    <div class="box23-th2"><img src="/images/九宫格n2.jpg" /></div>
    <div class="box23-th3"><img src="/images/九宫格n3.jpg" /></div>
    <div class="box23-th4"><img src="/images/九宫格n4.jpg" /></div>
  </div>
  <div class="box51-yinyuehe-anniu-kj">
    <img src="/images/音乐盒.png" />
  </div>
  <div class="box51-haqiexiaogou-kj">
    <img src="/images/哈切小狗.gif" />
  </div>
  <!-- <div class="yijianfankui-wz">
    <h4
      class="box61"
      style="
        margin-left: 1230px;
        color: aquamarine;
        font-size: 28px;
        margin-top: -680px;
        text-shadow: 4px 4px 7px #d7ffac;
      "
    >
      意见&nbsp;&nbsp;反馈
    </h4>
  </div>
  <div class="box51-yijian">
    <form name="form1">
      <div class="box51-yijian-1">
        <h3>基本信息</h3>
        <p>性别：</p>
        <input type="radio" name="sex" value="male" checked="checked" />男性
        <input type="radio" name="sex" value="female" />女性<br />
        <p>年龄：</p>
        <input type="text" name="xm" maxlength="10" size="5" /><br />
        <p>E-mail:</p>
        <input type="text" name="email" maxlength="15" size="15" />
        <p>风格爱好：</p>
        <input type="checkbox" name="c1" value="流行" />流行
        <input type="checkbox" name="c1" value="摇滚" />摇滚
        <input type="checkbox" name="c1" value="爵士" />爵士
        <input type="checkbox" name="c1" value="古典" />古典
        <input type="checkbox" name="c1" value="嘻哈" />嘻哈<br />
        <input type="checkbox" name="c1" value="电子" />电子
        <input type="checkbox" name="c1" value="乡村" />乡村
        <input type="checkbox" name="c1" value="民族" />民族
        <input type="checkbox" name="c1" value="金属" />金属
        <input type="checkbox" name="c1" value="摇摆" />摇摆
      </div>
      <div class="box51-yijian-2">
        <h3>服务评价</h3>
        <p>页面流畅度：</p>
        <input type="radio" name="pingjia" value="zhi" />1<input
          type="radio"
          name="pingjia"
          value="zhi"
        />2<input type="radio" name="pingjia" value="zhi" />3<input
          type="radio"
          name="pingjia"
          value="zhi"
        />4<input type="radio" name="pingjia" value="zhi" />5
        <p>板块多样度：</p>
        <input type="radio" name="pingjia2" value="zhi" />1<input
          type="radio"
          name="pingjia2"
          value="zhi"
        />2<input type="radio" name="pingjia2" value="zhi" />3<input
          type="radio"
          name="pingjia2"
          value="zhi"
        />4<input type="radio" name="pingjia2" value="zhi" />5
        <p>内容契合度：</p>
        <input type="radio" name="pingjia3" value="zhi" />1<input
          type="radio"
          name="pingjia3"
          value="zhi"
        />2<input type="radio" name="pingjia3" value="zhi" />3<input
          type="radio"
          name="pingjia3"
          value="zhi"
        />4<input type="radio" name="pingjia3" value="zhi" />5
        <p>操作难易度：</p>
        <input type="radio" name="pingjia4" value="zhi" />1<input
          type="radio"
          name="pingjia4"
          value="zhi"
        />2<input type="radio" name="pingjia4" value="zhi" />3<input
          type="radio"
          name="pingjia4"
          value="zhi"
        />4<input type="radio" name="pingjia4" value="zhi" />5
        <p>总体满意度：</p>
        <input type="radio" name="pingjia5" value="zhi" />1<input
          type="radio"
          name="pingjia5"
          value="zhi"
        />2<input type="radio" name="pingjia5" value="zhi" />3<input
          type="radio"
          name="pingjia5"
          value="zhi"
        />4<input type="radio" name="pingjia5" value="zhi" />5
      </div>
      <div class="box51-yijian-3">
        <h3>您的意见</h3>
        <textarea name="info" rows="4" cols="33" wrap="virtual"></textarea>
        <div class="dis">
          <input type="submit" name="submit" value="&nbsp;&nbsp;&nbsp;提交&nbsp;&nbsp;&nbsp;" />
          <input type="reset" name="reset" value="&nbsp;&nbsp;&nbsp;重置&nbsp;&nbsp;&nbsp;" />
        </div>
      </div>
    </form>
  </div> -->
  <div class="box51-luorihuachuan-kj">
    <img src="/images/落日划船.png" />
  </div>
  <div class="box51-meihua4-kj">
    <img src="/images/灯笼飞扬.png" />
  </div>
  <div class="box51-denglong1-kj">
    <img src="/images/第五页面灯笼1.png" />
  </div>
  <div class="box51-denglongmeihua-kj">
    <img src="/images/denglongmeihua.png" />
  </div>
  <!-- <div class="box51-jiantou-kj">
    <img src="/images/箭头.png" />
  </div> -->
  <div class="box51-dengdai-kj">
    <img src="/images/灯带.png" />
  </div>
  <div class="box51-xiaomao1-kj">
    <img src="/images/小猫1.png" />
  </div>
  <div class="box51-xiaomao2-kj">
    <img src="/images/草坪1.png" />
  </div>
  <div class="yinxingshu-kj">
    <div class="box-yinxing-youshang-kj">
      <img src="/images/银杏树枝右上.jpg" />
    </div>
    <div class="box-yinxing-yangguang-kj">
      <img src="/images/氛围阳光1.png" />
    </div>
    <div class="box-yinxing-xingxing-kj">
      <img src="/images/星星1.png" />
    </div>
    <div class="box52-fenge-wz-kj">
      <div class="box52-fenge-wz-rq1">
        <p>银杏&Album</p>
      </div>
      <div class="box52-fenge-wz-rq2">
        <p>Life with Music</p>
      </div>
      <div class="box52-fenge-wz-rq3">
        <p>银杏&Album</p>
      </div>
    </div>
    <div class="box-yinxing-youxia-kj">
      <img src="/images/信箱.png" />
    </div>
    <div class="box-jiantou-youxia-kj">
      <img src="/images/信箱箭头.png" />
    </div>
    <div class="yinxingyizu1">
      <div class="box-clip-yinxingye-kj1">
        <img src="/images/银杏叶.png" />
      </div>
      <div class="box-clip-yx1-kj">
        <img src="/images/yx1.jpg" />
      </div>
      <div class="box-clip-yinxingye-kj2">
        <img src="/images/银杏叶.png" />
      </div>
    </div>
    <div class="yinxingyizu2">
      <div class="box-clip-yinxingye-kj1">
        <img src="/images/银杏叶.png" />
      </div>
      <div class="box-clip-yx1-kj">
        <img src="/images/yx2.jpg" />
      </div>
      <div class="box-clip-yinxingye-kj2">
        <img src="/images/银杏叶.png" />
      </div>
    </div>
    <div class="yinxingyizu3">
      <div class="box-clip-yinxingye-kj1">
        <img src="/images/银杏叶.png" />
      </div>
      <div class="box-clip-yx1-kj">
        <img src="/images/yx3.jpg" />
      </div>
      <div class="box-clip-yinxingye-kj2">
        <img src="/images/银杏叶.png" />
      </div>
    </div>
    <div class="yinxingyizu4">
      <div class="box-clip-yinxingye-kj1">
        <img src="/images/银杏叶.png" />
      </div>
      <div class="box-clip-yx1-kj">
        <img src="/images/yx4.jpg" />
      </div>
      <div class="box-clip-yinxingye-kj2">
        <img src="/images/银杏叶.png" />
      </div>
    </div>
    <div class="yinxingyizu5">
      <div class="box-clip-yinxingye-kj1">
        <img src="/images/银杏叶.png" />
      </div>
      <div class="box-clip-yx1-kj">
        <img src="/images/yx5.jpg" />
      </div>
      <div class="box-clip-yinxingye-kj2">
        <img src="/images/银杏叶.png" />
      </div>
    </div>
    <div class="yinxingyizu6">
      <div class="box-clip-yinxingye-kj1">
        <img src="/images/银杏叶.png" />
      </div>
      <div class="box-clip-yx1-kj">
        <img src="/images/yx6.jpg" />
      </div>
      <div class="box-clip-yinxingye-kj2">
        <img src="/images/银杏叶.png" />
      </div>
    </div>
    <div class="yinxingyizu7">
      <div class="box-clip-yinxingye-kj1">
        <img src="/images/银杏叶.png" />
      </div>
      <div class="box-clip-yx1-kj">
        <img src="/images/yx7.jpg" />
      </div>
      <div class="box-clip-yinxingye-kj2">
        <img src="/images/银杏叶.png" />
      </div>
    </div>
  </div>
  <div class="dis" style="margin-top: -150px">
    <div style="width: 30%; position: relative">
      <div
        style="
          border-bottom: 4px solid #43a4a6;
          position: relative;
          width: 80%;
          margin-left: 180px;
          margin-top: 50px;
        "
      ></div>
    </div>
    <div class="yinyueyinxiang-kj" style="transform: scale(1.3)">
      <img src="/images/关于我们.png" />
    </div>
    <div style="width: 30%; position: relative">
      <div
        style="
          border-bottom: 4px solid #43a646;
          position: relative;
          width: 80%;
          margin-left: -80px;
          margin-top: 50px;
          opacity: 0.8;
        "
      ></div>
    </div>
  </div>
  <div
    class="dis1"
    style="width: 80%; margin-left: 10%; height: 440px; margin-top: -10px; align-items: center"
  >
    <div class="box-52-kapian-kj1">
      <div class="box-52-tp-rq1">
        <img src="/images/box52-tp1.jpg" />
        <p>Touch to Open</p>
      </div>
      <div class="box-52-wz-rq1">
        <h2>关于我们</h2>
        <p>
          当音符跃动，动听旋律在耳畔缭绕，这是一个充满音乐魅力的地方——在线音乐屋。
          <br />
          在这里，你可以通过首页快速了解我们最新的音乐资讯和推荐，专题栏目更是描摹了音乐的多样性，让你畅享不同风格的音乐盛宴。
          <br />
          音乐推荐不仅仅是歌曲，更是我们对音乐的情感表达。独具特色的推荐，让你在音乐的海洋中领略到不同的风景。
          <br />
          音乐社区是精神家园，这里有着一群热爱音乐的朋友，分享着自己的音乐心得和感悟，畅聊着音乐人生。
        </p>
      </div>
    </div>

    <div class="box-52-kapian-kj1">
      <div class="box-52-tp-rq1">
        <img src="/images/box52-tp2.jpg" />
        <p>Touch to Open</p>
      </div>
      <div class="box-52-wz-rq1">
        <h2>设计理念</h2>
        <p>
          在我们的音乐屋，设计是一种灵魂的表达，是一种对音乐情感的诠释。
          <br />
          我们的设计理念，是将音乐的韵律和美感融入到每一个元素中。从色彩到排版，从图标到按钮，每一个细节都被精心打磨，让你感受到音乐的魅力。
          <br />
          我们的设计风格，是音乐美和视觉美。每一个元素都被设计在恰当的地方，让你在布局中感受到极致的美。
          <br />
          在我们的音乐屋，设计是一种情感的传递，是一种对音乐的敬意。让我们一起，用设计的力量，让音乐更加美妙！
        </p>
      </div>
    </div>
    <div class="box-52-kapian-kj1">
      <div class="box-52-tp-rq1">
        <img src="/images/box52-tp3.jpg" />
        <p>Touch to Open</p>
      </div>
      <div class="box-52-wz-rq1">
        <h2>联系我们</h2>
        <p>
          在音乐的海洋中漂泊，寻找着那份共鸣的你。
          <br />
          我们搭建了一座桥梁，让你与我们相遇。
          <br />
          我们愿意倾听你的心声，细细品味你的故事。
          <br />
          一扇通往音乐世界的大门，等待你的到来。
          <br />
          联系方式：111-111-11111；000-000-00000@qq.com。
          <br />
          无论你身处何方，无论你的音乐梦想有多遥远。
          <br />
          我们都在这里，等待着你的到来，与你共同谱写音乐的奇迹。
          <br />
          让我们的声音相互呼应，让我们的梦想相互交织.
          <br />
          在这个联系我们的板块，我们将与你共创美妙的旋律。
        </p>
      </div>
    </div>
  </div>
  <div class="box53-zhezhao1-kj"></div>
  <div class="box53-zhezhao1-kj2"></div>
  <div class="box53-yinxingdianjiyulan-kj">
    <div class="dis1" style="width: 100%; height: 400px">
      <div class="box53-yulan-tp-kj">
        <div class="box53-yulan-tp-rq">
          <img src="" />
        </div>
      </div>
      <div class="box53-fenge-kj"></div>
      <div class="box53-yulan-wz-kj">
        <div class="box53-yulan-wz-rq">
          <p></p>
        </div>
      </div>
    </div>
  </div>
  <div class="box54-xinfeng-zhongxin-kj">
    <div class="box54-xinfeng-zhongxin-rq">
      <div class="box54-xinfeng-hou-kj"></div>
      <div class="box54-xinfeng-xinzhi-kj">
        <div class="face2 front2">
          <h3>致用户的一封信:</h3>
          <p>
            亲爱的音乐屋用户，
            <br />
            &nbsp;&nbsp;倾听夕阳下的旋律，感受生活的节拍。在这个音乐的海洋里，你们是舞动的音符，是流动的旋律。
            <br />
            &nbsp;&nbsp;每一次点击，每一次分享，都是一次与音乐相遇的奇妙邂逅。你们的存在，让我们的在线音乐屋充满了生命的色彩。
            <br />
            &nbsp;&nbsp;在这个平台上，我们带你穿越中国古代音乐的文物，让你感受历史的韵味；我们向你推荐国外歌手的动人歌曲，让你体验不同文化的交融；我们举办音乐沙龙活动，让你与其他音乐爱好者一同分享激情与感动。
            <br />
            &nbsp;&nbsp;生活和音乐，如夕阳倒影般交织在一起。当你仔细聆听，你会发现，音乐是生活的灵魂，它陪伴我们走过每一个时刻，给予我们力量和慰藉。
            <br />
            &nbsp;&nbsp;因此，希望你能用心感受音乐的美好，深入了解音乐文化的渊源。让音乐成为你生活的一部分，伴随你的喜怒哀乐，让它成为你的灵感源泉。
            <br />
            &nbsp;&nbsp;在这个音乐屋里，我们希望你享受音乐，享受生活。让音符在你的心中跳动，让旋律在你的灵魂中回荡。
            <br />
            &nbsp;&nbsp;感谢你选择在线音乐屋，让我们一同探索音乐的奇妙世界，共同创造美妙的旋律。
            <br />
            祝福与音乐同在，
            <br />
            "在线音乐屋团队"
          </p>
        </div>
        <div class="face2 back2">
          <h2>"在线音乐屋团队"</h2>
          <p>
            组长：陈广迪
            <br />
            组员：陈凯 陈千宇 冯昊 李亚鹏 胡振宇 马浩天
          </p>
        </div>
      </div>
      <div class="box54-xinfeng-qian-kj"></div>
      <div class="box54-xinfeng-zuo-kj"></div>
      <div class="box54-xinfeng-you-kj"></div>
      <div class="box54-xinfeng-shang-kj"></div>
      <div class="box54-xinfeng-xia-kj"></div>
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
/*第5页面*/
.box23-jgg-kj {
  /*九宫格样式*/
  width: 900px;
  height: 600px;
  position: relative;
  margin-left: 320px;
  margin-top: 40px;
  border: 6px double #000000;
  box-shadow: 5px 5px 10px 5px #000000;
}
.box23-jgg-rq {
  width: 300px;
  height: 200px;
  float: left;
}
.box23-jgg-rq img {
  transition: all 1.2s;
}
.box23-th1 {
  position: absolute;
  width: 300px;
  height: 200px;
  margin-top: 0px;
  margin-left: 300px;
  opacity: 0%;
  transition: all 1.2s;
}
.box23-th2 {
  position: absolute;
  width: 300px;
  height: 200px;
  margin-top: 0px;
  opacity: 0;
  margin-left: 300px;
  transition: all 1.2s;
}
.box23-th3 {
  position: absolute;
  width: 300px;
  height: 200px;
  margin-top: 600px;
  opacity: 0;
  transition: all 1.2s;
}
.box23-th4 {
  position: absolute;
  width: 300px;
  height: 200px;
  margin-top: 600px;
  margin-left: 600px;
  opacity: 0;
  transition: all 1.2s;
}
.box23-jgg-bh1 {
  margin-left: -300px;
  transition: all 1.2s;
  opacity: 0;
}
.box23-jgg-bh2 {
  margin-left: 200px;
  transition: all 1.2s;
  opacity: 0.7;
  transform: scale(0.5, 0.5) rotateY(360deg);
}
.box23-jgg-bh3 {
  margin-left: -300px;
  transition: all 1.2s;
  opacity: 0;
  transform: rotate(360deg) scale(0.1, 0.1);
}
.box23-jgg-bh4 {
  margin-left: 200px;
  transition: all 1.2s;
  opacity: 0.7;
  transform: skewX(45deg) rotateX(360deg);
}
.box23-jgg-th1 {
  margin-top: 0px;
  opacity: 1;
  transition: all 1.2s;
  margin-left: 0px;
}
.box23-jgg-th2 {
  margin-top: 0px;
  opacity: 1;
  transition: all 1.2s;
  margin-left: 600px;
}
.box23-jgg-th3 {
  margin-top: 400px;
  opacity: 1;
  transition: all 1.2s;
  margin-left: 0px;
}
.box23-jgg-th4 {
  margin-top: 400px;
  opacity: 1;
  transition: all 1.2s;
  margin-left: 600px;
}
.box51-yinyuehe-anniu-kj {
  /*音乐盒子按钮框架*/
  position: absolute;
  width: 100px;
  height: 100px;
  left: 1040px;
  top: 72px;
}
.box51-haqiexiaogou-kj {
  /*哈切小狗框架*/
  position: absolute;
  width: 120px;
  height: 120px;
  left: 610px;
  top: 72px;
}
.box51-yinyuehe-anniu-kj :hover {
  filter: brightness(110%);
  transform: scale(1.05);
  cursor: pointer;
}
/* .yijianfankui-wz {
  opacity: 0;
  transition: ease-in-out 0.7s;
} */

/* .box51-yijian {
  height: 600px;
  width: 300px;
  margin-left: 1150px;
  margin-top: 20px;
  position: relative;
  z-index: 40;
  transition: ease-in-out 0.7s;
  opacity: 0;
}

.box51-yijian h3 {
  text-align: left;
  color: #0000c1;
  padding-bottom: 10px;
  text-indent: 1.5em;
}
.box51-yijian p {
  color: #000000;
  letter-spacing: 0.4em;
  line-height: 25px;
}
.box51-yijian-1 {
  position: relative;
  border: 4px dotted #55ffff;
  padding: 10px 10px;
  background-image: url('/images/fankuibg1.jpg');
  background-size: cover;
}
.box51-yijian-2 {
  position: relative;
  border: 4px dotted #55ffff;
  padding: 10px 10px;
  background-image: url('/images/fankuibg2.jpg');
  background-size: cover;
}
.box51-yijian-3 {
  position: relative;
  border: 4px dotted #55ffff;
  padding: 10px 10px;
  background-image: url('/images/fankuibg3.jpg');
  background-size: cover;
} */
.box51-luorihuachuan-kj {
  /*落日划船图片框架*/
  position: absolute;
  width: 500px;
  height: 450px;
  margin-top: -380px;
  margin-left: -60px;
}
.box51-meihua4-kj {
  /*灯笼飞扬框架*/
  position: absolute;
  width: 350px;
  margin-top: -712px;
  margin-left: -32px;
}
.box51-denglong1-kj {
  /*第五页面灯笼1框架*/
  position: absolute;
  width: 300px;
  margin-top: -712px;
  margin-left: 1212px;
}
.box51-denglongmeihua-kj {
  /*灯笼梅花框架*/
  position: absolute;
  width: 280px;
  height: 480px;
  margin-top: -512px;
  margin-left: 1232px;
}
/* .box51-jiantou-kj { */
/*箭头框架*/
/* position: absolute; */
/* width: 60px; */
/* height: 60px; */
/* left: 940px; */
/* top: 100px; */
/* } */

.box51-dengdai-kj {
  /*灯带框架*/
  width: 100%;
  position: relative;
  height: 200px;
  top: -50px;
}
.yinxingshu-kj {
  /*银杏树框架*/
  position: relative;
  height: 1000px;
  width: 800px;
  background-image: url('/images/银杏大树.png');
  left: 0%;
  background-size: cover;
  top: 0px;
}
.box52-fenge-wz-kj {
  height: 100px;
  width: 400px;
  position: absolute;
  left: 580px;
  top: -80px;
}
.box52-fenge-wz-kj:hover .box52-fenge-wz-rq1 {
  transform: translateY(-15px);
  cursor: pointer;
}
.box52-fenge-wz-kj:hover .box52-fenge-wz-rq2 {
  transform: scaleY(1);
  cursor: pointer;
}
.box52-fenge-wz-kj:hover .box52-fenge-wz-rq2 p {
  opacity: 1;
  transition-delay: 0.4s;
}
.box52-fenge-wz-kj:hover .box52-fenge-wz-rq3 {
  transform: translateY(15px);
  cursor: pointer;
}
.box52-fenge-wz-rq1 {
  position: absolute;
  height: 100px;
  width: 400px;
  clip-path: polygon(0% 0%, 0% 56%, 100% 56%, 100% 0%);
  overflow: hidden;
  transition: all ease-in-out 0.6s;
}
.box52-fenge-wz-rq1 p {
  color: #ffd917;
  font-size: 60px;
  text-align: center;
  line-height: 100px;
  letter-spacing: 3px;
  font-family: '楷体';
  font-weight: 900;
  text-shadow: 0px 0px 10px rgba(254, 255, 217, 0.7);
}
.box52-fenge-wz-rq2 {
  position: absolute;
  height: 30px;
  width: 300px;
  left: 50px;
  background-color: #6683c6;
  top: 40px;
  transform: scaleY(0);
  border-radius: 5px;
  transition: all ease-in-out 0.6s;
}
.box52-fenge-wz-rq2 p {
  color: #fff;
  font-size: 18px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  line-height: 30px;
  text-align: center;
  letter-spacing: 8px;
  opacity: 0;
  transition: all ease-in-out 0.6s;
}
.box52-fenge-wz-rq3 {
  position: absolute;
  height: 100px;
  width: 400px;
  clip-path: polygon(0% 56%, 0% 100%, 100% 100%, 100% 56%);
  overflow: hidden;
  transition: all ease-in-out 0.6s;
}
.box52-fenge-wz-rq3 p {
  color: #ffd917;
  font-size: 60px;
  text-align: center;
  line-height: 100px;
  letter-spacing: 3px;
  font-family: '楷体';
  font-weight: 900;
  text-shadow: 0px 0px 10px rgba(254, 255, 217, 0.7);
}
.box51-xiaomao1-kj {
  /*小猫1框架*/
  position: absolute;
  width: 160px;
  margin-top: 764px;
  margin-left: 380px;
}
.box51-xiaomao2-kj {
  /*草坪1框架*/
  position: absolute;
  width: 400px;
  margin-top: 804px;
  margin-left: 902px;
}
.yinxingyizu1 {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 700px;
  top: 300px;
  rotate: 30deg;
  cursor: pointer;
}
.yinxingyizu2 {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 600px;
  top: 500px;
  rotate: 60deg;
  transform: scale(0.9);
  cursor: pointer;
}
.yinxingyizu3 {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 750px;
  top: 570px;
  rotate: 110deg;
  transform: scale(0.8) rotateY(-30deg) rotateX(35deg);
  cursor: pointer;
}
.yinxingyizu4 {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 920px;
  top: 670px;
  rotate: 30deg;
  transform: scale(0.75) rotateY(14deg) rotateX(30deg);
  cursor: pointer;
}
.yinxingyizu5 {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 860px;
  top: 410px;
  rotate: 0deg;
  transform: scale(0.9) rotateY(25deg) rotateX(11deg);
  cursor: pointer;
}
.yinxingyizu6 {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 900px;
  top: 100px;
  rotate: 30deg;
  cursor: pointer;
  transform: scale(0.9) rotateX(30deg);
}
.yinxingyizu7 {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 670px;
  top: 80px;
  rotate: 30deg;
  cursor: pointer;
  transform: scale(0.9) rotate(39deg);
}
.box-yinxing-youshang-kj {
  position: absolute;
  height: 500px;
  width: 500px;
  margin-top: 0px;
  margin-left: 1010px;
}
.box-yinxing-yangguang-kj {
  position: absolute;
  height: 300px;
  width: 300px;
  margin-top: -90px;
  margin-left: 1020px;
  filter: brightness(0.88);
  opacity: 0;
  animation: yangguangbh 2.1s ease-in-out infinite alternate;
}
@keyframes yangguangbh {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.box-yinxing-xingxing-kj {
  position: absolute;
  height: 1000px;
  width: 300px;
  margin-top: -100px;
  margin-left: 720px;
  transform: scale(1) rotate(-40deg);
  opacity: 0;
  animation: xingxingbh 3s ease-in-out infinite alternate;
}
@keyframes xingxingbh {
  0% {
    opacity: 0;
    transform: rotate(-40deg) scale(1);
  }
  100% {
    opacity: 1;
    transform: rotate(-40deg) scale(1.1);
    filter: brightness(1.1);
  }
}
.box-yinxing-youxia-kj {
  /*信箱框架*/
  position: absolute;
  height: 200px;
  width: 240px;
  top: 693px;
  left: 1170px;
  transition: all linear 0.5s;
}
.box-jiantou-youxia-kj {
  position: absolute;
  height: 70px;
  width: 80px;
  top: 653px;
  left: 1320px;
}
.box-yinxing-youxia-kj:hover {
  transform: scale(1.02);
  filter: brightness(1.1);
  transform-origin: center bottom;
  cursor: pointer;
}
.box-clip-yinxingye-kj1 {
  position: absolute;
  width: 150px;
  height: 150px;
  left: 0px;
  top: 20px;
}
.box-clip-yinxingye-kj2 {
  position: absolute;
  width: 150px;
  height: 150px;
  left: 0px;
  top: 20px;
  opacity: 0.4;
}
.box-clip-yx1-kj {
  position: absolute;
  width: 150px;
  height: 150px;
  left: 0px;
  top: 0px;
  opacity: 0.8;
  clip-path: polygon(
    51% 15%,
    33% 16%,
    21% 20%,
    9% 28%,
    0% 43%,
    27% 52%,
    45% 66%,
    69% 59%,
    100% 59%,
    92% 31%,
    79% 25%,
    73% 16%
  );
}
.box-clip-yx1-kj img {
  object-fit: cover;
}
.box53-zhezhao1-kj {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}
.box53-zhezhao1-kj2 {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
}
.box53-yinxingdianjiyulan-kj {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 400px;
  display: none;
}
.box53-yulan-tp-kj {
  position: relative;
  width: 48%;
  height: 400px;
}
.box53-yulan-tp-rq {
  position: absolute;
  width: 65%;
  height: 300px;
  left: 35%;
  top: 50px;
  border-radius: 7px;
  overflow: hidden;
}
.box53-yulan-tp-rq:hover {
  transition: all ease-in-out 0.8s;
  cursor: pointer;
  transform: scale(1.1);
  transform-origin: right center;
}
.box53-fenge-kj {
  position: relative;
  width: 1%;
  height: 300px;
  top: 50px;
  background-color: #939393;
  border-radius: 5px;
}
.box53-yulan-wz-kj {
  position: relative;
  width: 48%;
  height: 400px;
}
.box53-yulan-wz-rq {
  width: 70%;
  height: 400px;
  position: absolute;
  top: 60px;
}
.box53-yulan-wz-rq p {
  color: #fff;
  font-family: '宋体';
  font-size: 15px;
  line-height: 35px;
}
.box53-yulan-wz-rq p:hover {
  cursor: pointer;
  color: #c6ffff;
}
.box-52-kapian-kj1 {
  /*卡片罗列图的框架1*/
  position: relative;
  height: 220px;
  width: 31%;
  transition: ease-in-out 0.5s;
  display: flex;
  flex-direction: column;
  -webkit-box-reflect: below 0px
    linear-gradient(
      to bottom,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      #000000
    );
}
.box-52-kapian-kj1:nth-child(1) {
  background-image: url('/images/box52-kp-bg1.jpg');
  background-size: cover;
}
.box-52-kapian-kj1:nth-child(2) {
  background-image: url('/images/box52-kp-bg2.jpg');
  background-size: cover;
}
.box-52-kapian-kj1:nth-child(3) {
  background-image: url('/images/box52-kp-bg3.jpg');
  background-size: cover;
}
.box-52-kapian-kj1:hover {
  height: 440px;
  cursor: pointer;
}
.box-52-kapian-kj1:hover .box-52-wz-rq1 {
  opacity: 1;
  transition: ease-in-out 0.8s;
  margin-top: -60px;
}
.box-52-kapian-kj1:hover .box-52-tp-rq1 p {
  opacity: 0;
  transition: ease-in-out 0.8s;
}
.box-52-tp-rq1 {
  /*图片1容器*/
  width: 220px;
  height: 220px;
  position: relative;
  top: -50px;
  left: 75px;
  box-shadow: 0px 3px 10px 1px #000000;
  border-radius: 6px;
  z-index: 2;
}
.box-52-tp-rq1 p {
  text-align: center;
  color: #fff;
  letter-spacing: 4px;
  opacity: 1;
  padding-top: 10px;
  transition: ease-in-out 0.8s;
  font-family: 'Lucida Calligraphy';
}
.box-52-tp-rq1 img {
  border-radius: 6px;
}
.box-52-wz-rq1 {
  /*文字1容器*/
  position: relative;
  height: 200px;
  width: 100%;
  box-sizing: border-box;
  margin-top: -200px;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  opacity: 0;
  transition: ease-in-out 0.6s;
}
.box-52-wz-rq1 h2 {
  text-align: center;
  color: #ffffff;
}
.box-52-wz-rq1 p {
  font-size: 14px;
  font-family: '宋体';
  text-align: left;
  color: #ffffff;
  line-height: 18px;
}
.box54-xinfeng-zhongxin-kj {
  /*信封框架*/
  position: fixed;
  width: 600px;
  height: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}
.box54-xinfeng-zhongxin-rq {
  /*信封中心容器*/
  position: absolute;
  width: 600px;
  height: 350px;
  transform-style: preserve-3d;
  transform: perspective(800px);
  transform-origin: center center;
  animation: xinfengbh 40s ease-in-out;
}
@keyframes xinfengbh {
  0% {
    /*前*/
    transform: rotateX(0deg) rotateY(0deg);
  }
  5% {
    /*右*/
    transform: rotateY(-75deg);
  }
  10% {
    /*上*/
    transform: rotateX(-75deg);
  }
  15% {
    /*左*/
    transform: rotateY(75deg);
  }
  20% {
    /*下*/
    transform: rotateX(75deg);
  }
  25% {
    /*后*/
    transform: rotateY(180deg);
  }
  31.25% {
    /*停止等待撕开上面*/
    transform: rotateX(-60deg) rotateY(-30deg);
  }
  35% {
    /*撕完,等待卡片拿出*/
    transform: rotateX(-60deg) rotateY(-30deg);
  }
  38.75% {
    transform: rotateX(-60deg) rotateY(-30deg);
  }
  42.5% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg);
  }
}
.box54-xinfeng-hou-kj {
  /*信封后面*/
  position: absolute;
  width: 600px;
  height: 350px;
  transform: rotateY(180deg) translateZ(5px);
  transform-style: preserve-3d;
  background-image: url('/images/信封背面.png');
  background-size: cover;
  background-position: center center;
  border: 5px solid #000000;
  background-repeat: round;
  box-sizing: border-box;
  filter: brightness(1.1);
}
.box54-xinfeng-qian-kj {
  /*信封前面*/
  position: absolute;
  width: 600px;
  height: 350px;
  transform: rotateY(0deg) translateZ(5px);
  transform-style: preserve-3d;
  background-image: url('/images/信封封面.png');
  background-size: cover;
  background-position: center center;
  border: 5px solid #000000;
  background-repeat: round;
  box-sizing: border-box;
  filter: brightness(1.1);
}
.box54-xinfeng-zuo-kj {
  /*信封左面*/
  position: absolute;
  width: 10px;
  height: 350px;
  left: 295px;
  transform: rotateY(-90deg) translateZ(300px);
  background-color: #d0e4e5;
  border: 0.1px solid #000000;
  box-sizing: border-box;
  filter: brightness(1.1);
}
.box54-xinfeng-you-kj {
  /*信封右面*/
  position: absolute;
  width: 10px;
  height: 350px;
  left: 295px;
  transform: rotateY(90deg) translateZ(300px);
  background-color: #d0e4e5;
  border: 0.1px solid #000000;
  box-sizing: border-box;
  filter: brightness(1.1);
}
.box54-xinfeng-shang-kj {
  /*信封上面*/
  position: absolute;
  width: 600px;
  height: 10px;
  top: 170px;
  transform: rotateX(90deg) translateZ(175px);
  background-color: #d0e4e5;
  border: 0.1px solid #000000;
  box-sizing: border-box;
  animation: sixinfengbh 27.5s linear 12.5s;
  opacity: 1;
  filter: brightness(1.1);
}
@keyframes sixinfengbh {
  0% {
    /*撕1.5s*/
    transform: rotateX(90deg) translateZ(175px);
    opacity: 1;
  }
  5.45454545% {
    transform: rotateX(90deg) translateZ(175px) translateX(610px);
    opacity: 1;
  }
  6% {
    transform: rotateX(90deg) translateZ(175px) translateX(610px);
    opacity: 0;
  }
  100% {
    transform: rotateX(90deg) translateZ(175px) translateX(610px);
    opacity: 0;
  }
}
.box54-xinfeng-xia-kj {
  /*信封下面*/
  position: absolute;
  width: 600px;
  height: 10px;
  top: 170px;
  transform: rotateX(-90deg) translateZ(175px);
  background-color: #d0e4e5;
  border: 0.1px solid #000000;
  box-sizing: border-box;
  filter: brightness(1.1);
}
.box54-xinfeng-xinzhi-kj {
  /*信封里面的信纸*/
  position: absolute;
  width: 540px;
  height: 310px;
  left: 30px;
  top: 0.5px;
  transform-style: preserve-3d;
  animation: xinzhibh 26s ease-in-out 14s;
  transform: perspective(800px);
}
@keyframes xinzhibh {
  5.769% {
    /*信纸拿出1.5s*/
    transform: translateY(-320px);
  }
  11.53846% {
    /*信纸移到面前1.5s*/
    transform: rotateX(0deg) rotateY(0deg) translateZ(310px) scale(1.6);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg) translateZ(310px) scale(1.6);
  }
}
.box54-xinfeng-xinzhi-kj .face2 {
  position: absolute;
  width: 540px;
  height: 310px;
  transform-style: preserve-3d;
  border: 1px solid #000000;
  box-sizing: border-box;
  backface-visibility: hidden;
}
.box54-xinfeng-xinzhi-kj .face2.front2 {
  position: absolute;
  width: 540px;
  height: 310px;
  background-image: url('/images/信纸背景1.jpg');
  background-size: cover;
  background-repeat: round;
  background-position: center center;
  animation: kapianfrontbh 8.5s ease-in-out 31.5s;
  border-radius: 7px;
  overflow: hidden;
}
@keyframes kapianfrontbh {
  0% {
    transform: rotateY(0deg);
  }
  17.6471% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}
.box54-xinfeng-xinzhi-kj .face2.back2 {
  position: absolute;
  width: 540px;
  height: 310px;
  transform: rotateY(180deg);
  background-image: url('/images/信纸背景2.jpg');
  background-size: cover;
  background-repeat: round;
  background-position: center center;
  animation: kapianbackbh 8.5s ease-in-out 31.5s;
  border-radius: 7px;
  overflow: hidden;
}
@keyframes kapianbackbh {
  0% {
    transform: rotateY(180deg);
  }
  17.6471% {
    transform: rotateY(360deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
.face2.front2 {
  padding: 10px;
  box-sizing: border-box;
}
.face2.front2 p {
  color: #ffffff;
  font-family: '宋体';
  font-size: 12px;
  line-height: 15px;
  padding: 10px;
}
.face2.front2 h3 {
  color: #fff;
  font-family: '华文行楷';
}
.face2.back2 h2 {
  color: #fff;
  text-align: center;
  font-family: '华文行楷';
  padding-top: 20px;
}
.face2.back2 p {
  font-size: 23px;
  padding: 60px;
  color: #fff;
  font-family: '华文行楷';
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
.yinyueyinxiang-kj {
  /*音乐印象整个模块框架*/
  position: relative;
  width: 10%;
  height: 100px;
}
</style>
