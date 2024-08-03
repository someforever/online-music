<script setup>
import $ from 'jquery'
import { onMounted, ref } from 'vue'
import pop from '../../../public/images/流行音乐.jpg'
import rock from '../../../public/images/摇滚音乐.jpg'
import jazz from '../../../public/images/爵士音乐.jpg'
import classical from '../../../public/images/古典音乐.jpg'
import hipHop from '../../../public/images/嘻哈音乐.jpg'
import electronic from '../../../public/images/电子音乐.jpg'
import country from '../../../public/images/乡村音乐.jpg'
import folk from '../../../public/images/民族音乐.jpg'
import metal from '../../../public/images/金属音乐.jpg'
import swing from '../../../public/images/摇摆音乐.jpg'
import gudaibayin1 from '../../../public/images/gudaibayin1.png'
import gudaibayin2 from '../../../public/images/gudaibayin2.png'
import gudaibayin3 from '../../../public/images/gudaibayin3.png'
import gudaibayin4 from '../../../public/images/gudaibayin4.png'
import gudaibayin5 from '../../../public/images/gudaibayin5.png'
import gudaibayin6 from '../../../public/images/gudaibayin6.png'
import gudaibayin7 from '../../../public/images/gudaibayin7.png'
import gudaibayin8 from '../../../public/images/gudaibayin8.png'
var currentIndex = ref(0) //控制当前展示的内容
var visibility = ref(false) //控制音乐类型是否显示
const featuredList = ref([
  {
    id: 1,
    name: '流行音乐',
    img: pop,
    content:
      '流行音乐是最广为流传的音乐类型，通常由电子乐器演奏，包含流行曲、流行舞曲和流行摇滚等子类型。流行音乐是根据英语Popular Music翻译过来的，流行音乐19世纪末20世纪初起源于美国，从音乐体系看，流行音乐是在叮砰巷歌曲、布鲁斯、爵士乐、摇滚乐、索尔音乐等美国大众音乐架构基础上发展起来的音乐。其风格多样，形态丰富，可泛指Jazz、Rock、Soul、Blues、Reggae、Rap、Hip-Hop、Disco等20世纪后诞生的都市化大众商品音乐。代表音乐：刘欢 -- 《带着地球去流浪》，电影《流浪地球》的主题曲，很深邃，很震撼的一首歌。'
  },
  {
    id: 2,
    name: '摇滚音乐',
    img: rock,
    content:
      '摇滚音乐是一种具有强烈节奏感和电吉他独奏的音乐类型，通常与叛逆文化和青少年反叛行为相关。起源于20世纪40年代末期的美国，20世纪50年代早期开始流行，迅速风靡全球。摇滚乐以其灵活大胆的表现形式和富有激情的音乐节奏表达情感，受到了全世界大多数人的喜爱，并在1960年和1970年形成一股热潮。代表音乐：Linkin Park -- 《New Divide》，很经典的一首曲子，那时的林肯公园还有6个人。这首New Divide在打击的音色上做的很特别，整体感觉很宏大，充满了力量。Bridge段落是亮点，满满的机械感，与电影主题十分吻合。'
  },
  {
    id: 3,
    name: '爵士音乐',
    img: jazz,
    content:
      '爵士音乐是一种由即兴演奏的复杂节奏、旋律和和弦组成的音乐，常常含有布鲁斯和摇摆舞的元素。于19世纪末20世纪初源于美国，诞生于南部港口城市新奥尔良，音乐根基来自布鲁斯（Blues）和拉格泰姆（Ragtime）。爵士乐讲究即兴，以具有摇摆特点的Shuffle节奏为基础，是非洲黑人文化和欧洲白人文化的结合。代表音乐：《I am Old Fashioned》，原为奥斯卡获奖喜剧电影《现在的你最可爱》的配乐，而后成为一首jazz standard。几十年来不断有艺人翻唱，最著名的版本包括Chet Baker、John Coltrane、Ella Fitzgerald等爵士艺人的演绎。'
  },
  {
    id: 4,
    name: '古典音乐',
    img: classical,
    content:
      '古典音乐是西方传统音乐，由管弦乐器演奏，包含多种旋律和和弦。古典音乐有广义、狭义之分。广义是指那些从西方中世纪开始的、在欧洲主流文化背景下创作的西方古典音乐，主要因其复杂多样的创作技术和所能承载的厚重内涵而有别于通俗音乐和民间音乐。狭义指古典主义时期，1750年（J·S·巴赫去世）至1827年（贝多芬去世），这一时期为古典主义音乐时期。代表音乐：《梦幻曲》--舒曼，德国作曲家舒曼的《梦幻曲》叙述着人们儿时的美丽的梦，包容了人们对生活、对爱情、对幻想的追求与希望，令人百听不厌。'
  },
  {
    id: 5,
    name: '嘻哈音乐',
    img: hipHop,
    content:
      '嘻哈音乐是一种由黑人文化发展出来的音乐类型，包含复杂的节奏、独特的音质和具有社会意义的歌词。嘻哈即“Hip-Hop”。Hip-Hop意为“摇摆的屁股”，源自美国黑人社区，其渊源可上溯至20世纪70年代。 Hip-Hop是一种由多种元素构成的街头文化的总称，它包括音乐、舞蹈、说唱、DJ技术、服饰、涂鸦等。 Hip-Hop是街头的文化，是一种生活态度。代表音乐：《天干物燥》--GAI，这是GAI在有beat的情况下第一次唱自己的风格，“天干物燥，小心火烛”这句词也成功的把大家洗脑了。'
  },
  {
    id: 6,
    name: '电子音乐',
    img: electronic,
    content:
      '电子音乐是一种使用电子合成器和数字技术制作的音乐类型，常常包含舞曲和流行电子音乐的元素。一般而言，可使用电子机械技术与使用电子技术制作的声音来区别。使用电子机械制造声音的设备有电传簧风琴、汉门式电风琴与电吉他；而纯粹的电子声音制造设备则有特雷门琴、声音合成器与电脑。代表音乐：《Darkside》，在全球十大电音神曲中《Darkside》源于挪威，整首歌的节奏个人很空灵的感觉，十分的轻快，还有着让人超然的热血情绪，毫不夸张的说此首歌节奏一起就能让人为之疯狂。'
  },
  {
    id: 7,
    name: '乡村音乐',
    img: country,
    content:
      '乡村音乐是一种使用简单乐器演奏，包含民间传说和故事的音乐类型，常常反映出现实社会问题和情感。于20世纪20年代兴起于美国南部，其根源来自英国民谣，是美国白人民族音乐代表。乡村音乐的特点是曲调简单，节奏平稳，带有叙事性，具有较浓的乡土气息，亲切热情而不失流行元素。多为歌谣体、二部曲式或三部曲式。代表音乐：《Take Me Home Country Roads》，乡村音乐代表人物之一约翰·丹佛，他的代表作之一《乡村路带我回家》。普遍都认为这是一首思乡的歌，但歌曲主题其实是环保公益。曲调悠扬轻快，给人描绘了一幅美丽的美国西部风光以及潇洒的牛仔。'
  },
  {
    id: 8,
    name: '民族音乐',
    img: folk,
    content:
      '狭义地讲，所谓中国民族音乐就是祖祖辈辈生活、繁衍在中国这片土地上的各民族，从古到今在悠久历史文化传统上创造的具有民族特色，能体现民族文化和民族精神的音乐。而广义上，民族音乐是泛指中国音乐家所创作的音乐和具有中国五声色彩的音乐。代表音乐：古琴曲《胡茄十八拍》，汉末大乱，连年烽火，蔡文姬在逃难中被匈奴所掳，流落塞外。十二年后曹操平定中原，重金赎回文姬，于是她写下了著名长诗《胡笳十八拍》，叙述了自己一生不幸的遭遇。'
  },
  {
    id: 9,
    name: '金属音乐',
    img: metal,
    content:
      '金属音乐（Metal）是一种音乐形式，以重金属为主，包括黑金属，死亡金属，激流金属，新金属，厄运金属，华丽金属，重金属，工业金属等重型音乐。代表音乐：《Aenima》，于1996年发行，让重金属乐队tool一夜成名，音乐风格融合了传统金属音乐的潇洒霸气，Post-Punk底蕴所营造的低调暗黑气息，还有一种粗狂原始的感觉，多种因素建立起tool乐团独树一帜的音乐风格，在重金属界掀起了一股热潮。'
  },
  {
    id: 10,
    name: '摇摆音乐',
    img: swing,
    content:
      '摇摆音乐是一种特殊的轻快的节奏风格，这种风格基于节拍的三连音细分，这种效果是在20世纪20年代由跨步钢琴家引入的。摇摆乐也指的是大约1930年到第二次世界大战期间流行的爵士风格。摇摆音乐主要由大乐队表演，并通过广播，唱片和全国舞厅吸引了广泛的听众。代表音乐：《Sing, Sing, Sing》，1936年由单簧管乐手路易斯·普利玛（Louis Prima）作曲发表的摇摆乐，是他个人的代表作，也是摇摆乐的代表歌曲之一。'
  }
])
const musicTypeRef = ref(null)
onMounted(() => {
  if (musicTypeRef.value) {
    musicTypeRef.value.addEventListener('click', () => {
      visibility.value = !visibility.value
    })
  }
})

onMounted(() => {
  $(function () {
    $('.box1').click(function () {
      $('.bg').toggleClass('bg2')
    })
    $('.zhezhao-anniu-kj img').click(function () {
      $('.zhezhao-kj').fadeIn(500)
      $('.box-fenceng-kj').fadeIn(500)
    })
    $('.zhezhao-kj').click(function () {
      $('.zhezhao-kj').fadeOut(500)
      $('.box-fenceng-kj').fadeOut(500)
    })
    $('.box-fenceng-kj').click(function () {
      $('.zhezhao-kj').fadeOut(500)
      $('.box-fenceng-kj').fadeOut(500)
    })
    /*古代八音展品展示移动js*/
    function zhanshi() {
      $('.bayin-wupin-kj').find('img').css('transform', 'translate(0px,-4px)')
      setTimeout(function () {
        $('.bayin-dengguang-kj').css('opacity', '1')
      }, 1000)
      setTimeout(function () {
        $('.bayin-wupin-kj').find('img').css('transform', 'translate(0px,4px)')
      }, 2000)
      setTimeout(function () {
        $('.bayin-dengguang-kj').css('opacity', '0')
      }, 3000)
    }
    zhanshi()
    setInterval(zhanshi, 4000)
    /*古代八音物品点击预览图片+文字js*/
    $('.bayin-wupin-kj')
      .eq(0)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin1)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '金是指金属乐器,大多是由铜或铜锡混合制成。在古代的金属乐器中,种类繁多,其中钟类乐器便是最主要的。钟不仅是以乐器的形式出现在中国,还是一种地位和权力象征的礼器。钹、锣等也是金属乐器。它们的共同特性就是声音洪亮、音质清脆、音色柔和,足以代表中国乐器的金石之声。被誉为“2000年前的地下音乐厅”的济南洛庄汉墓乐器坑中出土的一套编钟,其工艺考究、保存完好,是西汉的第一编钟。这也从另一个侧面说明了,金属乐器作为“八音”之首,确实有其意想不到的优势。'
          )
      })
    $('.bayin-dengguang-kj')
      .eq(0)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin1)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '金是指金属乐器,大多是由铜或铜锡混合制成。在古代的金属乐器中,种类繁多,其中钟类乐器便是最主要的。钟不仅是以乐器的形式出现在中国,还是一种地位和权力象征的礼器。钹、锣等也是金属乐器。它们的共同特性就是声音洪亮、音质清脆、音色柔和,足以代表中国乐器的金石之声。被誉为“2000年前的地下音乐厅”的济南洛庄汉墓乐器坑中出土的一套编钟,其工艺考究、保存完好,是西汉的第一编钟。这也从另一个侧面说明了,金属乐器作为“八音”之首,确实有其意想不到的优势。'
          )
      })
    $('.bayin-wupin-kj')
      .eq(1)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin2)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '石指的是石类乐器,主要是磬,质料主要是石灰石,其次是青石和玉石。石质越是坚硬,声音就越是铿锵洪亮。“磬”也和钟一样,有“特”字号的和“编”字号的,可以分为特磬、编磬等。特磬整套十二枚,以对应十二律,做到一磬一音。编磬则是由十六枚大小不同或厚薄不同的石块编悬而成。单体特磐具有铜钟似的清亮音色,编磬则已经是带有旋律性的乐器。'
          )
      })
    $('.bayin-dengguang-kj')
      .eq(1)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin2)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '石指的是石类乐器,主要是磬,质料主要是石灰石,其次是青石和玉石。石质越是坚硬,声音就越是铿锵洪亮。“磬”也和钟一样,有“特”字号的和“编”字号的,可以分为特磬、编磬等。特磬整套十二枚,以对应十二律,做到一磬一音。编磬则是由十六枚大小不同或厚薄不同的石块编悬而成。单体特磐具有铜钟似的清亮音色,编磬则已经是带有旋律性的乐器。'
          )
      })
    $('.bayin-wupin-kj')
      .eq(2)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin3)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '丝指的是用蚕丝制成弦,再制作成的丝弦乐器。在商周以前,丝弦乐器就只有琴和瑟两种,秦汉以后才有了筝、箜篌、阮咸、秦琴、三弦、琵琶、胡琴等。“伯牙子期”的故事,讲的就是古琴。筝这种丝弦乐器也极具抒情性,轻柔而婉转、端庄而雅正,其中又分有大筝和小筝。'
          )
      })
    $('.bayin-dengguang-kj')
      .eq(2)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin3)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '丝指的是用蚕丝制成弦,再制作成的丝弦乐器。在商周以前,丝弦乐器就只有琴和瑟两种,秦汉以后才有了筝、箜篌、阮咸、秦琴、三弦、琵琶、胡琴等。“伯牙子期”的故事,讲的就是古琴。筝这种丝弦乐器也极具抒情性,轻柔而婉转、端庄而雅正,其中又分有大筝和小筝。'
          )
      })
    $('.bayin-wupin-kj')
      .eq(3)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin4)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '竹是指竹类制成的乐器,主要有箫、笛和管。其实比较简单的区分方法是直吹为箫,横吹为笛。这二者虽都是竹子制作而成的乐器,但乐器的性质和音色各有巧妙的不同。进一步辨别箫和笛的不同,则在于笛有膜,出音特别的嘹亮,而箫没有膜孔,音色柔和许多。在竹制的古乐器中,最重要的是排箫,因为其有发标准音的功能。'
          )
      })
    $('.bayin-dengguang-kj')
      .eq(3)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin4)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '竹是指竹类制成的乐器,主要有箫、笛和管。其实比较简单的区分方法是直吹为箫,横吹为笛。这二者虽都是竹子制作而成的乐器,但乐器的性质和音色各有巧妙的不同。进一步辨别箫和笛的不同,则在于笛有膜,出音特别的嘹亮,而箫没有膜孔,音色柔和许多。在竹制的古乐器中,最重要的是排箫,因为其有发标准音的功能。'
          )
      })
    $('.bayin-wupin-kj')
      .eq(4)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin5)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '匏是指匏类乐器。有一种葫芦叫作匏瓜,古人会用老的匏瓜制成乐器,就是匏类乐器。匏类乐器包括笙和竽等簧片乐器。笙是和声乐器,而竽形状很像笙,比笙大一点儿,管也比笙多,战国以前在民间极为盛行。常用的“滥竽充数”这个成语故事,其实就是关于竽的一个趣闻。可见笙和竽早在数千年前就已经在民间普遍流行。'
          )
      })
    $('.bayin-dengguang-kj')
      .eq(4)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin5)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '匏是指匏类乐器。有一种葫芦叫作匏瓜,古人会用老的匏瓜制成乐器,就是匏类乐器。匏类乐器包括笙和竽等簧片乐器。笙是和声乐器,而竽形状很像笙,比笙大一点儿,管也比笙多,战国以前在民间极为盛行。常用的“滥竽充数”这个成语故事,其实就是关于竽的一个趣闻。可见笙和竽早在数千年前就已经在民间普遍流行。'
          )
      })
    $('.bayin-wupin-kj')
      .eq(5)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin6)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '土八音中的土类乐器,是指陶制乐器,主要的只有两种,一个是埙,另一个是缶。埙的历史悠久,目前发现最为古老的埙距今已有7000余年,最初只有一个吹口,有音孔,而后慢慢增加演变为八孔埙,十孔埙和半音埙。埙的音色柔美,音质圆润,颇有高处不胜寒的凄凉美感。缶的形状很像一个小缸或火钵,是很少见的乐器。缶本是用来装酒的瓦器,敲打起来就算是音乐了。'
          )
      })
    $('.bayin-dengguang-kj')
      .eq(5)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin6)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '土八音中的土类乐器,是指陶制乐器,主要的只有两种,一个是埙,另一个是缶。埙的历史悠久,目前发现最为古老的埙距今已有7000余年,最初只有一个吹口,有音孔,而后慢慢增加演变为八孔埙,十孔埙和半音埙。埙的音色柔美,音质圆润,颇有高处不胜寒的凄凉美感。缶的形状很像一个小缸或火钵,是很少见的乐器。缶本是用来装酒的瓦器,敲打起来就算是音乐了。'
          )
      })
    $('.bayin-wupin-kj')
      .eq(6)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin7)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '革是指用野兽皮革制成的乐器,鼓就是其中十分具有典型性的乐器,古代人民也多用鼓来表达一种强烈激昂的节奏和运动感。上古时代的战鼓,皆由鳄鱼皮制成,而鼓皮选用鳄鱼皮,是取鳄鱼的凶猛习性以壮鼓声。鼓在很多场合下都可以用,比如祭祀的时候或者行军打仗的时候。'
          )
      })
    $('.bayin-dengguang-kj')
      .eq(6)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin7)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '革是指用野兽皮革制成的乐器,鼓就是其中十分具有典型性的乐器,古代人民也多用鼓来表达一种强烈激昂的节奏和运动感。上古时代的战鼓,皆由鳄鱼皮制成,而鼓皮选用鳄鱼皮,是取鳄鱼的凶猛习性以壮鼓声。鼓在很多场合下都可以用,比如祭祀的时候或者行军打仗的时候。'
          )
      })
    $('.bayin-wupin-kj')
      .eq(7)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin8)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '木是指木类乐器。这算是一种打击乐器,最初有柷、敔、拍板等,后来有木鱼、梆子等。柷是古代打击乐器,方形,以木棒击奏,用于宫廷雅乐,表示乐曲开始。后来作为一种祭祀用的启奏乐器。而敔也是一种打击乐器,用于宫廷雅乐,表示乐曲结束。拍板就是两片竹板形成,相互敲击可以发出声响。'
          )
      })
    $('.bayin-dengguang-kj')
      .eq(7)
      .click(function () {
        $('.baiyindianjiyulan-zhezhao').fadeIn(500)
        $('.baiyindianjiyulan-kj').fadeIn(500)
        $('.baiyindianjiyulan-kj').find('img').prop('src', gudaibayin8)
        $('.baiyindianjiyulan-kj')
          .find('p')
          .text(
            '木是指木类乐器。这算是一种打击乐器,最初有柷、敔、拍板等,后来有木鱼、梆子等。柷是古代打击乐器,方形,以木棒击奏,用于宫廷雅乐,表示乐曲开始。后来作为一种祭祀用的启奏乐器。而敔也是一种打击乐器,用于宫廷雅乐,表示乐曲结束。拍板就是两片竹板形成,相互敲击可以发出声响。'
          )
      })
    $('.baiyindianjiyulan-zhezhao').click(function () {
      $('.baiyindianjiyulan-zhezhao').fadeOut(500)
      $('.baiyindianjiyulan-kj').fadeOut(500)
    })
    $('.baiyindianjiyulan-kj').click(function () {
      $('.baiyindianjiyulan-zhezhao').fadeOut(500)
      $('.baiyindianjiyulan-kj').fadeOut(500)
    })
  })
})
</script>
<template>
  <div class="box-fenceng-kj">
    <div class="box-fenceng-tp-top">
      <h1>音乐多样性</h1>
    </div>
    <div class="box-fenceng-tp">
      <img src="/images/fenceng1.jpg" />
      <img src="/images/fenceng1.jpg" />
      <img src="/images/fenceng1.jpg" />
    </div>
    <h2>音乐之水交相辉映，缠绵悱恻</h2>
    <div class="box-fenceng-wz">
      <p>
        当音符在空气中回荡，音乐的世界便展开了它的翅膀。它像一只自由的鸟儿，穿越时空和文化的界限，把我们带到一个充满多彩的世界里。在这个世界里，每一种音乐都有着自己的故事，有着自己的灵魂和情感。从古典的交响乐到现代的流行曲，从东方的民乐到西方的爵士乐，每一种音乐都有着它独特的韵味和魅力。音乐多样性是一朵盛开的花朵，它把世界上的每一个角落都涂上了绚烂的色彩。让我们跟随着音乐的旋律，感受着它带来的美好和力量，让我们一起在音乐的海洋里尽情航行。
      </p>
    </div>
  </div>
  <div class="box30-kj">
    <div class="box-liebiao30">
      <ul>
        <li ref="musicTypeRef" class="liebiao30-li">音乐类型</li>
        <li
          v-show="visibility === true"
          @click="currentIndex = index"
          v-for="(item, index) in featuredList"
          :key="item.id"
          class="liebiao30-li"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="box30-bk3">
      <img src="/images/书本框架1.png" />
    </div>
    <div class="box-tp30">
      <img :src="featuredList[currentIndex].img" />
    </div>
    <div class="box-kj-wz30">
      <p class="box-wz30">
        {{ featuredList[currentIndex].content }}
      </p>
    </div>
    <span class="zhezhao-anniu-kj"><img src="/images/小狗按钮.png" /></span>
  </div>
  <div class="box22-by" style="border-radius: 8px; margin-left: 10%; width: 80%; margin-top: 10px">
    <p>音乐如丝绸般滑过心灵，旋律的起伏如山间流水，温柔而深情。</p>
  </div>
  <div
    class="aa"
    style="
      width: 80%;
      margin-left: 10%;
      border-bottom: 10px dotted rgb(64, 115, 217);
      margin-top: 25px;
    "
  ></div>
  <div class="zhezhao-kj"></div>
  <div class="dis">
    <div style="width: 30%; position: relative">
      <div
        style="
          border-bottom: 4px solid #2a354b;
          position: relative;
          width: 80%;
          margin-left: 180px;
          margin-top: 50px;
        "
      ></div>
    </div>
    <div class="yinyueyinxiang-kj"><img src="/images/音乐印象.png" /></div>
    <div style="width: 30%; position: relative">
      <div
        style="
          border-bottom: 4px solid #2a354b;
          position: relative;
          width: 80%;
          margin-left: -80px;
          margin-top: 50px;
        "
      ></div>
    </div>
  </div>
  <div class="dis1" style="width: 80%; margin-left: 10%; margin-top: 10px">
    <div class="box23-yinxiang-kj1">
      <div class="box23-yinxiang-lankuai">
        <div class="box23-yinxiang-danlan-kj">
          <div class="box23-yinxiang-tb-kj">
            <img src="/images/音乐印象图标.png" />
          </div>
          <div class="box23-yinxiang-wz-youshang">
            <h2>一抹音乐之韵</h2>
            <p>A touch of musical charm</p>
          </div>
          <div class="box23-yinxiang-wz-xia">
            <p>
              在远古的岁月里，中国的祖先们用他们的智慧和灵感，创造出了一系列优美的乐器。这些乐器，有的像龙一样威武雄壮，有的像鸟一样婉转动听，有的像水一样清澈悦耳。它们用音乐的语言，诉说着古老的故事和传说，表达着人们对生命和自然的敬畏和感悟。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="box23-yinxiang-kj2">
      <div class="box23-yinxiang-tp1-rq3">
        <p>
          中国早期乐器文化如一股清风，吹拂着人们的心灵。它们以独特的音色和独特的韵律，将古老的智慧和美妙的情感传递给世人。在这个喧嚣的世界中，它们是一道沉静的风景，提醒着我们珍惜内心的宁静与和谐。
        </p>
      </div>
      <div class="box23-yinxiang-tp1-rq1">
        <img src="/images/音乐印象图1.jpg" />
      </div>
      <div class="box23-yinxiang-tp1-rq2">
        <img src="/images/音乐印象图1.jpg" />
      </div>
    </div>
    <div class="box23-yinxiang-kj3">
      <div class="box23-yinxiang-tp2-rq--4">
        <img src="/images/声动千年背景图.jpg" />
      </div>
      <div class="box23-yinxiang-tp2-rq--3">
        <img src="/images/声动千年宣传图.jpg" />
      </div>
      <div class="box23-yinxiang-tp2-rq--1">
        <img src="/images/音乐印象图2.jpg" />
      </div>
      <div class="box23-yinxiang-tp2-rq--2">
        <img src="/images/音乐印象图2.jpg" />
      </div>

      <div class="box23-yinxiang-tp2-rq2">
        <img src="/images/城楼.png" />
      </div>
    </div>
  </div>
  <div class="dis1" style="width: 80%; height: 150px; margin-top: 10px; margin-left: 10%">
    <div class="gudaibayin-kj1">
      <div class="gudaibayin-wz-kj">
        <img src="/images/gudaibayin-logo.png" />
      </div>
    </div>
    <div class="gudaibayin-kj2">
      <div class="bayin-dengguang-kj">
        <img src="/images/灯光.png" />
      </div>
      <div class="bayin-wupin-kj">
        <img style="margin-left: 10px" src="/images/gudaibayin1.png" />
      </div>
      <div class="bayin-dizuo-kj">
        <img src="/images/底座.png" />
      </div>
      <div class="gudaibayin-dibu-wz-kj">
        <p>金/编钟</p>
      </div>
    </div>
    <div class="gudaibayin-kj3">
      <div class="bayin-dengguang-kj">
        <img src="/images/灯光.png" />
      </div>
      <div class="bayin-wupin-kj">
        <img src="/images/gudaibayin2.png" />
      </div>
      <div class="bayin-dizuo-kj">
        <img src="/images/底座.png" />
      </div>
      <div class="gudaibayin-dibu-wz-kj">
        <p>石/编磬</p>
      </div>
    </div>
    <div class="gudaibayin-kj4">
      <div class="bayin-dengguang-kj">
        <img src="/images/灯光.png" />
      </div>
      <div class="bayin-wupin-kj">
        <img src="/images/gudaibayin3.png" />
      </div>
      <div class="bayin-dizuo-kj">
        <img src="/images/底座.png" />
      </div>
      <div class="gudaibayin-dibu-wz-kj">
        <p>丝/古琴</p>
      </div>
    </div>
    <div class="gudaibayin-kj5">
      <div class="bayin-dengguang-kj">
        <img src="/images/灯光.png" />
      </div>
      <div class="bayin-wupin-kj">
        <img src="/images/gudaibayin4.png" />
      </div>
      <div class="bayin-dizuo-kj">
        <img src="/images/底座.png" />
      </div>
      <div class="gudaibayin-dibu-wz-kj">
        <p>竹/箎</p>
      </div>
    </div>
    <div class="gudaibayin-kj6">
      <div class="bayin-dengguang-kj">
        <img src="/images/灯光.png" />
      </div>
      <div class="bayin-wupin-kj">
        <img src="/images/gudaibayin5.png" />
      </div>
      <div class="bayin-dizuo-kj">
        <img src="/images/底座.png" />
      </div>
      <div class="gudaibayin-dibu-wz-kj">
        <p>匏/笙</p>
      </div>
    </div>
    <div class="gudaibayin-kj7">
      <div class="bayin-dengguang-kj">
        <img src="/images/灯光.png" />
      </div>
      <div class="bayin-wupin-kj">
        <img src="/images/gudaibayin6.png" />
      </div>
      <div class="bayin-dizuo-kj">
        <img src="/images/底座.png" />
      </div>
      <div class="gudaibayin-dibu-wz-kj">
        <p>土/埙</p>
      </div>
    </div>
    <div class="gudaibayin-kj8">
      <div class="bayin-dengguang-kj">
        <img src="/images/灯光.png" />
      </div>
      <div class="bayin-wupin-kj">
        <img src="/images/gudaibayin7.png" />
      </div>
      <div class="bayin-dizuo-kj">
        <img src="/images/底座.png" />
      </div>
      <div class="gudaibayin-dibu-wz-kj">
        <p>革/鼓</p>
      </div>
    </div>
    <div class="gudaibayin-kj9">
      <div class="bayin-dengguang-kj">
        <img src="/images/灯光.png" />
      </div>
      <div class="bayin-wupin-kj">
        <img src="/images/gudaibayin8.png" />
      </div>
      <div class="bayin-dizuo-kj">
        <img src="/images/底座.png" />
      </div>
      <div class="gudaibayin-dibu-wz-kj">
        <p>木/敔</p>
      </div>
    </div>
  </div>
  <div class="baiyindianjiyulan-zhezhao"></div>
  <div class="baiyindianjiyulan-kj">
    <div class="dis1" style="width: 800px; height: 288.75px">
      <div class="baiyindianjiyulan-tp-kj">
        <img src="" />
      </div>
      <div class="baiyindianjiyulan-wz-kj">
        <p></p>
      </div>
    </div>
  </div>
  <div class="dis" style="margin-top: 45px">
    <div style="width: 30%; position: relative">
      <div
        style="
          border-bottom: 4px solid #26847e;
          position: relative;
          width: 80%;
          margin-left: 180px;
          margin-top: 50px;
        "
      ></div>
    </div>
    <div class="yinyueyinxiang-kj" style="width: 15%"><img src="/images/声动千年logo.png" /></div>
    <div style="width: 30%; position: relative">
      <div
        style="
          border-bottom: 4px solid #48844a;
          position: relative;
          width: 80%;
          margin-left: -80px;
          margin-top: 50px;
        "
      ></div>
    </div>
  </div>
  <div class="shengdongqiannian-kj">
    <video src="/images/声动千年.mp4" autoplay muted loop></video>
  </div>
  <div class="xiangyun-kj">
    <img src="/images/祥云.png" />
  </div>
  <div class="foot" style="margin-top: 10px">
    <div style="height: 20px"></div>
    <p>在线音乐屋版权所有</p>
    <p style="margin-top: 10px">Misappropriation without consent is prohibited</p>
    <div class="foot-tp"><img src="/images/音律1.png" /></div>
    <div class="foot-tp2"><img src="/images/音律2.png" /></div>
  </div>
</template>
<style scoped>
/*第2页面*/
.box30-kj {
  /*第一模块框架*/
  width: 80%;
  height: 500px;
  margin-left: 10%;
  margin-top: 30px;
  display: flex;
  position: relative;
  border-radius: 14px;
  background-image: url('/images/xiaobj.jpg');
  background-size: cover;
}

.box30-bk3 {
  /*书本框架*/
  height: 565px;
  width: 1115px;
  position: absolute;
  margin-left: 93.5px;
  margin-top: -40px;
  z-index: 1;
}
.box-liebiao30 {
  /*音乐类型列表容器*/
  width: 11%;
  height: 430px;
  margin-top: 30px;
  margin-left: 30px;
  z-index: 2;
}

.box-liebiao30 ul {
  padding: 0px;
  list-style: none;
}
.liebiao30-li {
  /*11个li样式*/
  font-size: 28px;
  font-family: '华文新魏';
  color: #fff;
  transition: all 0.7s;
  border-radius: 5px;
  margin-bottom: 3px;
  background-color: #5e6a7a;
  text-align: center;
}
.box30-bk3 {
}

.liebiao30-li:not(:first-child):hover {
  color: #55aaff;
  cursor: pointer;
}
.liebiao30-li:nth-child(1) {
  cursor: pointer;
}
.box-tp30 {
  /*图片框架*/
  height: 430px;
  width: 322px;
  border: 6px solid #fff;
  margin-left: 162px;
  margin-top: 30px;
}
.box-kj-wz30 {
  /*右边文字框架*/
  height: 430px;
  width: 322px;
  border: 6px solid #fff;
  margin-left: 16px;
  background-color: #afd3ff;
  margin-top: 30px;
}
.box-wz30 {
  /*右边文字样式*/
  font-size: 14px;
  font-family: '幼圆';
  color: #000000;
  text-align: center;
  line-height: 23px;
  padding-left: 55px;
  padding-top: 30px;
  padding-right: 35px;
}
.zhezhao-kj {
  /*遮罩*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}
.zhezhao-anniu-kj {
  position: relative;
  height: 80px;
  width: 80px;
  margin-left: 70px;
  z-index: 100;
  margin-top: 10px;
}
.zhezhao-anniu-kj img {
  position: absolute;
  margin-left: 50%;
  margin-top: 50%;
  transform: translate(-50%, -50%) scale(1);
  opacity: 0.85;
  object-fit: contain;
}
.zhezhao-anniu-kj:hover img {
  position: absolute;
  margin-left: 50%;
  margin-top: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  opacity: 1;
  cursor: pointer;
  object-fit: contain;
}
.box-fenceng-kj {
  /*瀑布分层图框架*/
  width: 80%;
  height: 600px;
  margin-left: 25%;
  transform: skewY(-20deg);
  transform-style: preserve-3d;
  margin-top: 40px;
  position: absolute;
  z-index: 101;
  display: none;
}
.box-fenceng-tp-top {
  position: absolute;
  width: 80%;
  height: 150px;
  margin-top: -200px;
  margin-left: -300px;
}
.box-fenceng-tp-top > h1 {
  position: absolute;
  line-height: 150px;
  margin-left: 10%;
  color: #fff;
  font-size: 3em;
  text-shadow: -5px -5px 6px #000000;
}

.box-fenceng-tp {
  position: relative;
  width: 80%;
  height: 300px;
  transform: skewX(45deg);
  transform-origin: bottom;
  margin-top: 0px;
}
.box-fenceng-tp img {
  position: absolute;
  max-width: 100%;
  margin-top: 0;
  filter: grayscale(0.7); /*滤镜（灰度）*/
  transition: all 0.5s;
}
.box-fenceng-tp:hover img:nth-child(3) {
  transform: translate(100px, -100px);
}
.box-fenceng-tp:hover img:nth-child(2) {
  transform: translate(50px, -50px);
  opacity: 0.5;
}
.box-fenceng-tp:hover img:nth-child(1) {
  transform: translate(0px, 0px);
  opacity: 0.1;
}
.box-fenceng-kj > h2 {
  color: #fff;
  position: relative;
  font-size: 3em;
}
.box-fenceng-wz {
  transform-origin: top;
  transform: skewX(45deg);
  position: relative;
  width: 80%;
  color: #fff;
}
.yinyueyinxiang-kj {
  /*音乐印象整个模块框架*/
  position: relative;
  width: 10%;
  height: 100px;
}
.yinyueyinxiang-kj img {
  width: 100%;
  height: 100%;
  transform: scale(1.1);
}
.yinyueyinxiang-kj img:hover {
  transform: scale(1.2);
}

.box23-yinxiang-kj1 {
  /*框架1*/
  width: 30%;
  height: 400px;
  position: relative;
}
.box23-yinxiang-kj2 {
  /*框架2*/
  width: 30%;
  height: 400px;
  position: relative;
}
.box23-yinxiang-kj3 {
  /*框架3*/
  width: 30%;
  height: 400px;
  position: relative;
}
.box23-yinxiang-lankuai {
  /*蓝块div*/
  width: 80%;
  height: 80%;
  margin-top: 10%;
  background-color: rgba(71, 87, 120, 0.8);
}
.box23-yinxiang-danlan-kj {
  /*淡蓝div*/
  position: absolute;
  width: 400px;
  height: 240px;
  margin-top: 40px;
  margin-left: 40px;
  background-color: rgba(175, 211, 250, 0.95);
  z-index: 50;
}
.box23-yinxiang-tb-kj {
  /*图标框架*/
  width: 55px;
  height: 55px;
  margin-top: 10px;
  margin-left: 10px;
}
.box23-yinxiang-wz-youshang {
  /*右上文字框架*/
  margin-top: -55px;
  margin-left: 170px;
  width: 200px;
  height: 50px;
}
.box23-yinxiang-wz-youshang h2 {
  font-size: 1.6em;
  color: #3e5796;
  font-family: '华文新魏';
  letter-spacing: 0.3em;
}
.box23-yinxiang-wz-youshang p {
  margin-left: -37px;
  margin-top: 5px;
  font-size: 0.7em;
  color: #3e5796;
  font-family: 'Lucida Calligraphy';
  letter-spacing: 0.25em;
}
.box23-yinxiang-wz-xia {
  position: absolute;
  height: 140px;
  margin-left: 45px;
  width: 310px;
  margin-top: 15px;
}
.box23-yinxiang-wz-xia p {
  font-size: 15px;
  font-family: '宋体';
  color: #3e5796;
  font-weight: bold;
  text-indent: 2em;
  line-height: 1.6em;
}
.box23-yinxiang-tp1-rq1 {
  /*第二框架图片1容器1*/
  height: 100%;
  width: 82%;
  position: absolute;
  margin-left: -20px;
  clip-path: polygon(0% 0%, 0% 50%, 100% 50%, 100% 0%);
  overflow: hidden;
  transition: all ease-in-out 0.8s;
}
.box23-yinxiang-tp1-rq2 {
  /*第二框架图片1容器2*/
  height: 100%;
  width: 82%;
  position: absolute;
  margin-left: -20px;
  clip-path: polygon(0% 50%, 0% 100%, 100% 100%, 100% 50%);
  overflow: hidden;
  transition: all ease-in-out 0.8s;
}
.box23-yinxiang-kj2:hover .box23-yinxiang-tp1-rq1 {
  transform: translateY(-200px);
  opacity: 0;
  cursor: pointer;
}
.box23-yinxiang-kj2:hover .box23-yinxiang-tp1-rq2 {
  transform: translateY(200px);
  opacity: 0;
  cursor: pointer;
}
.box23-yinxiang-tp1-rq3 {
  /*第二框架wenzi容器*/
  height: 100%;
  width: 82%;
  position: absolute;
  margin-left: -20px;
  box-sizing: border-box;
  background-image: url('/images/box23-yinxiang-tp1-bg.jpg');
  background-size: cover;
  background-repeat: round;
  filter: grayscale(0.4);
  border-radius: 5px;
}
.box23-yinxiang-tp1-rq3 p {
  font-size: 15px;
  font-family: '宋体';
  color: #ffffff;
  font-weight: bold;
  line-height: 1.6em;
  text-align: center;
  padding: 70px;
  opacity: 0;
  transition: ease-in-out 0.8s;
  transition-delay: 0.6s;
}
.box23-yinxiang-kj2:hover .box23-yinxiang-tp1-rq3 p {
  opacity: 1;
}
.box23-yinxiang-tp2-rq--1 {
  /*第二框架图片2容器1*/
  height: 100%;
  width: 82%;
  position: absolute;
  margin-left: -135px;
  padding: 10px 20px 10px 20px;
  margin-top: -10px;
  clip-path: polygon(0% 0%, 0% 50%, 100% 50%, 100% 0%);
  transition: all ease-in-out 1s;
}
.box23-yinxiang-tp2-rq--2 {
  /*第二框架图片2容器2*/
  height: 100%;
  width: 82%;
  position: absolute;
  margin-left: -135px;
  padding: 10px 20px 10px 20px;
  margin-top: -10px;
  clip-path: polygon(0% 50%, 0% 100%, 100% 100%, 100% 50%);
  transition: all ease-in-out 1s;
}
.box23-yinxiang-tp2-rq--3 {
  /*第二框架图片声动千年宣传图容器3*/
  height: 100%;
  width: 82%;
  position: absolute;
  margin-left: -135px;
  padding: 10px 20px 10px 20px;
  margin-top: -10px;
  border-radius: 5px;
  opacity: 0;
  filter: grayscale(0.6);
  transition: all ease-in-out 1s;
  transition-delay: 0.6s;
}
.box23-yinxiang-tp2-rq--4 {
  /*第二框架图片声动千年背景图容器4*/
  height: 100%;
  width: 82%;
  position: absolute;
  margin-left: -135px;
  padding: 10px 20px 10px 20px;
  margin-top: -10px;
  border-radius: 5px;
}
.box23-yinxiang-tp2-rq2 {
  /*城楼容器*/
  height: 125%;
  width: 82%;
  position: absolute;
  margin-left: 75px;
  margin-top: -96px;
}
.box23-yinxiang-kj3:hover .box23-yinxiang-tp2-rq--1 {
  transform: translateX(-300px);
  opacity: 0;
  cursor: pointer;
}
.box23-yinxiang-kj3:hover .box23-yinxiang-tp2-rq--2 {
  transform: translateX(300px);
  opacity: 0;
  cursor: pointer;
}
.box23-yinxiang-kj3:hover .box23-yinxiang-tp2-rq--3 {
  opacity: 1;
}
.box23-yinxiang-tp2-rq2:hover img {
  transform: scale(1.05);
  cursor: pointer;
  transform-origin: right center;
}
.gudaibayin-kj1 {
  /*古代八音框架1*/
  width: 10%;
  height: 100%;
  position: relative;
}
.gudaibayin-kj2 {
  width: 10%;
  height: 100%;
  position: relative;
}
.gudaibayin-kj3 {
  width: 10%;
  height: 100%;
  position: relative;
}
.gudaibayin-kj4 {
  width: 10%;
  height: 100%;
  position: relative;
}
.gudaibayin-kj5 {
  width: 10%;
  height: 100%;
  position: relative;
}
.gudaibayin-kj6 {
  width: 10%;
  height: 100%;
  position: relative;
}
.gudaibayin-kj7 {
  width: 10%;
  height: 100%;
  position: relative;
}
.gudaibayin-kj8 {
  width: 10%;
  height: 100%;
  position: relative;
}
.gudaibayin-kj9 {
  width: 10%;
  height: 100%;
  position: relative;
}
.gudaibayin-wz-kj {
  /*古代八音logo框架*/
  position: absolute;
  height: 220px;
  width: 200px;
  margin-top: -20px;
  margin-left: -40px;
}
.gudaibayin-wz-kj:hover img {
  cursor: pointer;
  transform: scale(1.1);
}
.bayin-dengguang-kj {
  /*灯光框架*/
  height: 90px;
  width: 80px;
  position: absolute;
  margin-left: 20px;
  margin-top: 5px;
  z-index: 30;
  opacity: 0;
  transition: all 1s;
}
.bayin-dizuo-kj {
  /*底座框架*/
  margin-top: 120px;
  height: 30px;
  width: 100px;
  margin-left: 10px;
  position: absolute;
}
.bayin-wupin-kj {
  /*古代八音物品框架*/
  position: absolute;
  height: 80px;
  width: 80px;
  margin-top: 40px;
  margin-left: 20px;
}
.bayin-wupin-kj img {
  transition: ease-in-out 2s;
}
.bayin-wupin-kj:hover {
  cursor: pointer;
}
.bayin-dengguang-kj:hover {
  cursor: pointer;
}
.gudaibayin-dibu-wz-kj {
  /*古代八音底部文字框架*/
  margin-top: 150px;
  height: 30px;
  width: 100px;
  margin-left: 10px;
  position: absolute;
}
.gudaibayin-dibu-wz-kj p {
  color: #cbbe05;
  font-size: 15px;
  font-size: 0.8em;
  font-family: '楷体';
  letter-spacing: 0.25em;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
}
.baiyindianjiyulan-zhezhao {
  /*点击古代八音物品产生的遮罩*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 150;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}
.baiyindianjiyulan-kj {
  /*古代八音物品介绍（图片+文字）的框架*/
  position: fixed;
  top: 50%; /*不能是margin-top和margin-left！！！！！！*/
  left: 50%;
  width: 800px;
  height: 288.75px;
  z-index: 152;
  transform: translate(-50%, -50%);
  display: none;
}
.baiyindianjiyulan-tp-kj {
  /*古代八音物品介绍图片的框架*/
  width: 385px;
  height: 288.75px;
}
.baiyindianjiyulan-tp-kj img:hover {
  transform: scale(1.2);
  transition: all 1s;
  cursor: pointer;
}
.baiyindianjiyulan-wz-kj {
  /*古代八音物品介绍文字的框架*/
  width: 385px;
  height: 288.75px;
}
.baiyindianjiyulan-wz-kj p {
  padding-top: 60px;
  font: 17px;
  color: #fff;
  font-family: '楷体';
  text-align: left;
}
.baiyindianjiyulan-wz-kj p::first-letter {
  /*首字下沉*/
  font-size: 3em;
  float: left;
  line-height: 1;
}
.shengdongqiannian-kj {
  /*声动千年视频框架*/
  position: relative;
  width: 80%;
  left: 10%;
  height: 640px;
  background-image: url('/images/声动千年背景.jpg');
  background-size: contain;
  top: 10px;
  filter: grayscale(0.7);
  border-radius: 7px;
}
.shengdongqiannian-kj video {
  position: absolute;
  width: 80%;
  left: 10%;
  top: 40px;
}
.xiangyun-kj {
  /*祥云框架*/
  width: 80%;
  margin-left: 10%;
  position: relative;
  height: 100px;
  top: -100px;
  filter: grayscale(0.1);
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
