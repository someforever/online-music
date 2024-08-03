<script setup>
import { onMounted, ref, watch } from 'vue'
import { useTransition } from '@vueuse/core'
import * as echarts from 'echarts'
import { getQuestionnaireServer, getUserAndQuestionnaireTotalServer } from '@/api/questionnaire' //ASD获取问卷接口数据
import { ArrowLeftBold } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const questionnaireData = ref({})
//获取问卷反馈的所有数据
const getQuestionnaire = async () => {
  const res = await getQuestionnaireServer()
  // console.log(res)
  questionnaireData.value = res.data.data
  // console.log(questionnaireData.value)
}
getQuestionnaire()
//获取问卷和注册用户总数
const userTotal = ref(0)
const questionnaireTotal = ref(0)
const source = ref(0)
const source2 = ref(0)
const outputValue = useTransition(source, {
  duration: 1500
})
const outputValue2 = useTransition(source2, {
  duration: 1500
})

const getUserAndQuestionnaireTotal = async () => {
  const res = await getUserAndQuestionnaireTotalServer()
  userTotal.value = res.data.data.user_total
  questionnaireTotal.value = res.data.data.questionnaire_total
  source.value = userTotal.value

  source2.value = questionnaireTotal.value
}

getUserAndQuestionnaireTotal()

watch([userTotal, questionnaireTotal], ([newValue1, newValue2]) => {
  source.value = newValue1
  source2.value = newValue2
})

//ASD左上图表
onMounted(async () => {
  // 获取DOM元素
  var chartDom = document.getElementById('leftTop')

  // 如果存在已初始化的实例，则销毁
  var myechart = echarts.getInstanceByDom(chartDom)
  if (myechart) {
    myechart.dispose()
  }
  myechart = echarts.init(chartDom)
  const keys = ref([])
  const values = ref([])
  await getQuestionnaire()
  //等待questionnaireData.value拿到数据之后再进行操作
  const MusicType = questionnaireData.value.MusicType
  keys.value = Object.keys(MusicType)
  values.value = Object.values(MusicType)
  function UpdateEcharts() {
    var option = {
      color: ['#2fccef'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: keys.value,

          // 设置x轴标签文字样式
          // x轴的文字颜色和大小
          axisLabel: {
            color: 'rgba(255,255,255,0.9)',
            fontSize: '12'
          },
          //  x轴样式不显示

          axisTick: {
            show: false
            // 如果想要设置单独的线条样式
            // lineStyle: {
            //    color: "rgba(255,255,255,.1)",
            //    width: 1,
            //    type: "solid"
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          // y轴线条样式
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.7)'
              // width: 11,
              // type: 'solid'
            }
          },
          // y 轴分隔线样式
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.2)'
            }
          }
        }
      ],

      series: [
        {
          name: 'likes',
          type: 'bar',
          // 修改柱子宽度
          barWidth: '35%',
          data: values.value,
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          }
        }
      ]
    }
    myechart.setOption(option)
  }
  UpdateEcharts()
  watch([keys, values], () => {
    UpdateEcharts()
  })
  window.addEventListener('resize', () => {
    myechart.resize()
  })
})
//ASD右上图表
onMounted(async () => {
  // 获取DOM元素
  var chartDom = document.getElementById('rightTop')

  // 如果存在已初始化的实例，则销毁
  var myechart = echarts.getInstanceByDom(chartDom)
  if (myechart) {
    myechart.dispose()
  }
  myechart = echarts.init(chartDom)

  const values2 = ref([])
  await getQuestionnaire()
  //等待questionnaireData.value拿到数据之后再进行操作

  const FiveCommentAVG = questionnaireData.value.FiveCommentAVG
  values2.value = Object.values(FiveCommentAVG)
  var myColor = ['#f77d70', '#f8b448', '#c371a1', '#6ac335', '#60c0f3']
  function UpdateEcharts() {
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },

      // 图标位置
      grid: {
        top: '10%',
        left: '22%',
        bottom: '10%'
      },
      xAxis: {
        show: false
      },
      yAxis: [
        {
          type: 'category',
          data: ['页面流畅度', '板块多样度', '内容契合度', '操作便捷度', '总体满意度'],
          //data标签内容从上往下排列
          inverse: true,
          //不显示y轴线条
          axisLine: {
            show: false
          },
          // 不显示刻度
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              fontSize: 14,
              color: '#fff'
            }
          }
        },
        {
          //data标签内容从上往下排列
          inverse: true,
          show: true,
          data: values2.value.map((item) => {
            return item.toFixed(2)
          }),
          // 不显示y轴的线
          axisLine: {
            show: false
          },
          // 不显示刻度
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }
          }
        }
      ],
      series: [
        {
          yAxisIndex: 0,
          name: '占比%',
          type: 'bar',
          data: values2.value.map((item) => {
            return Math.round((item / 5) * 100)
          }),
          // 柱子之间的距离
          barCategoryGap: 50,
          //柱子的宽度
          barWidth: 10,
          // 柱子设为圆角
          itemStyle: {
            normal: {
              barBorderRadius: 20,
              color: function (params) {
                return myColor[params.dataIndex]
              }
            }
          },
          // 图形上的文本标签
          label: {
            show: true,
            // 图形内显示
            position: 'inside',
            // 文字的显示格式
            formatter: '{c}%',
            color: '#fff'
          }
        },
        {
          yAxisIndex: 1,
          name: '总值%',
          type: 'bar',
          barCategoryGap: 50,
          barWidth: 15,
          itemStyle: {
            color: 'none',
            borderColor: '#00c1de',
            borderWidth: 3,
            barBorderRadius: 15
          },
          data: [100, 100, 100, 100, 100]
        }
      ]
    }
    myechart.setOption(option)
  }
  UpdateEcharts()
  watch(values2, () => {
    UpdateEcharts()
  })
  window.addEventListener('resize', () => {
    myechart.resize()
  })
})
//ASD左中图表
onMounted(async () => {
  // 获取DOM元素
  var chartDom = document.getElementById('leftCenter')

  // 如果存在已初始化的实例，则销毁
  var myechart = echarts.getInstanceByDom(chartDom)
  if (myechart) {
    myechart.dispose()
  }
  myechart = echarts.init(chartDom)

  const keys1 = ref([])
  const values1 = ref([])
  await getQuestionnaire()
  //等待questionnaireData.value拿到数据之后再进行操作
  const delivery = questionnaireData.value.delivery
  keys1.value = Object.keys(delivery)
  values1.value = Object.values(delivery)
  const keys2 = ref([])
  const values2 = ref([])
  await getQuestionnaire()
  //等待questionnaireData.value拿到数据之后再进行操作
  const gender = questionnaireData.value.gender
  keys2.value = Object.keys(gender)
  values2.value = Object.values(gender)
  function UpdateEcharts() {
    const labelRight = {
      position: 'right'
    }
    var option = {
      color: ['#73c0de'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '12%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        show: true, // 显示边框
        borderColor: '#012f4a' // 边框颜色
        // containLabel: true // 包含刻度文字在内
      },
      xAxis: {
        type: 'value',
        position: 'top',
        axisLine: { show: false },

        axisTick: { show: false },
        splitLine: { show: false }
      },
      yAxis: {
        type: 'category',
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        data: ['不推荐', '推荐', '♀', '♂']
      },
      series: [
        {
          name: '数量',
          type: 'bar',

          label: {
            show: true,
            formatter: '{b}'
          },
          data: [
            { value: -values1.value[0], label: labelRight },

            values1.value[1],

            { value: -values2.value[0], label: labelRight },
            values2.value[1]
          ],
          // 柱子设为圆角
          itemStyle: {
            normal: {
              barBorderRadius: 18
            }
          }
        }
      ]
    }
    myechart.setOption(option)
  }
  UpdateEcharts()
  watch([values1, keys1, values2, keys2], () => {
    UpdateEcharts()
  })
  window.addEventListener('resize', () => {
    myechart.resize()
  })
})
//ASD右中图表
onMounted(async () => {
  // 获取DOM元素
  var chartDom = document.getElementById('rightCenter')

  // 如果存在已初始化的实例，则销毁
  var myechart = echarts.getInstanceByDom(chartDom)
  if (myechart) {
    myechart.dispose()
  }
  myechart = echarts.init(chartDom)
  const keys = ref([])
  const values = ref([])
  await getQuestionnaire()
  //等待questionnaireData.value拿到数据之后再进行操作
  const month = questionnaireData.value.month
  keys.value = Object.keys(month)
  values.value = Object.values(month)
  function UpdateEcharts() {
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        top: '0%',
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: '12'
        }
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: {}
      //   }
      // },
      grid: {
        left: '10',
        top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: keys.value,
          // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
          axisLabel: {
            textStyle: {
              color: 'rgba(255,255,255,.6)',
              fontSize: 12
            }
          },
          // x轴线的颜色为   rgba(255,255,255,.2)
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'rgba(255,255,255,.6)',
              fontSize: 12
            }
          },
          // 修改分割线的颜色
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          }
        }
      ],
      series: [
        {
          name: '问卷数量',
          emphasis: {
            focus: 'series',
            blurScope: 'coordinateSystem'
          },
          type: 'line',
          data: values.value,
          //第一条 线是圆滑
          smooth: true,
          // 单独修改线的样式
          lineStyle: {
            color: '#0184d5',
            width: 2
          },
          // 填充区域
          areaStyle: {
            // 渐变色，只需要复制即可
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(1, 132, 213, 0.4)' // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: 'rgba(1, 132, 213, 0.1)' // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          },
          // 设置拐点 小圆点
          symbol: 'circle',
          // 拐点大小
          symbolSize: 8,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: '#0184d5',
            borderColor: 'rgba(221, 220, 107, 0.1)',
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false
        }
        // {
        //   name: 'Search Engine',
        //   emphasis: {
        //     focus: 'series',
        //     blurScope: 'coordinateSystem'
        //   },
        //   data: [
        //     130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70,
        //     30, 40, 30, 120, 20, 99, 50, 20
        //   ],
        //   type: 'line',
        //   smooth: true,
        //   lineStyle: {
        //     normal: {
        //       color: '#00d887',
        //       width: 2
        //     }
        //   },
        //   areaStyle: {
        //     normal: {
        //       color: new echarts.graphic.LinearGradient(
        //         0,
        //         0,
        //         0,
        //         1,
        //         [
        //           {
        //             offset: 0,
        //             color: 'rgba(0, 216, 135, 0.4)'
        //           },
        //           {
        //             offset: 0.8,
        //             color: 'rgba(0, 216, 135, 0.1)'
        //           }
        //         ],
        //         false
        //       ),
        //       shadowColor: 'rgba(0, 0, 0, 0.1)'
        //     }
        //   },
        //   // 设置拐点 小圆点
        //   symbol: 'circle',
        //   // 拐点大小
        //   symbolSize: 5,
        //   // 设置拐点颜色以及边框
        //   itemStyle: {
        //     color: '#00d887',
        //     borderColor: 'rgba(221, 220, 107, .1)',
        //     borderWidth: 12
        //   },
        //   // 开始不显示拐点， 鼠标经过显示
        //   showSymbol: false
        // }
      ]
    }
    myechart.setOption(option)
  }
  UpdateEcharts()
  watch([keys, values], () => {
    UpdateEcharts()
  })
  window.addEventListener('resize', () => {
    myechart.resize()
  })
})
//ASD左下图表
onMounted(async () => {
  // 获取DOM元素
  var chartDom = document.getElementById('leftBottom')

  // 如果存在已初始化的实例，则销毁
  var myechart = echarts.getInstanceByDom(chartDom)
  if (myechart) {
    myechart.dispose()
  }
  myechart = echarts.init(chartDom)
  // const keys = ref([])
  const values = ref([])
  await getQuestionnaire()
  //等待questionnaireData.value拿到数据之后再进行操作
  const Age = questionnaireData.value.Age
  // keys.value = Object.keys(Age)
  values.value = Object.values(Age)
  function UpdateEcharts() {
    var option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        // 距离底部为0%
        bottom: '0%',
        // 小图标的宽度和高度
        itemWidth: 10,
        itemHeight: 10,
        data: ['20岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
        // 修改图例组件的文字为 12px
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: '12'
        }
      },
      series: [
        {
          name: '年龄分布',
          type: 'pie',
          // 设置饼形图在容器中的位置
          center: ['50%', '50%'],
          //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
          radius: ['40%', '70%'],
          // 不显示标签文字
          label: { show: true, fontSize: '11', position: 'outside' },
          // 不显示连接线
          labelLine: { show: true },
          data: [
            { value: values.value[0], name: '20岁以下' },
            { value: values.value[1], name: '20-29岁' },
            { value: values.value[2], name: '30-39岁' },
            { value: values.value[3], name: '40-49岁' },
            { value: values.value[4], name: '50岁以上' }
          ],
          // emphasis: {
          //   label: {
          //     show: true,
          //     fontSize: 13,
          //     fontWeight: 'bold'
          //   }
          // },
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 8
          },
          legendHoverLink: true
        }
      ]
    }
    myechart.setOption(option)
  }
  UpdateEcharts()
  watch(values, () => {
    UpdateEcharts()
  })
  window.addEventListener('resize', () => {
    myechart.resize()
  })
})
//ASD右下图表
onMounted(async () => {
  // 获取DOM元素
  var chartDom = document.getElementById('rightBottom')

  // 如果存在已初始化的实例，则销毁
  var myechart = echarts.getInstanceByDom(chartDom)
  if (myechart) {
    myechart.dispose()
  }
  myechart = echarts.init(chartDom)
  // const keys = ref([])
  const values = ref([])
  await getQuestionnaire()
  //等待questionnaireData.value拿到数据之后再进行操作
  const timeOfUse = questionnaireData.value.timeOfUse
  // keys.value = Object.keys(timeOfUse)
  values.value = Object.values(timeOfUse)

  function UpdateEcharts() {
    var option = {
      color: ['#f2de2e', '#60cda0', '#ed8884', '#f7ba46', '#8ef6b0', '#fc5bf5', '#32c5e9'],
      legend: {
        top: 'bottom',
        textStyle: {
          color: '#fff'
        }
      },
      // toolbox: {
      //   show: true,
      //   feature: {
      //     mark: { show: true },
      //     dataView: { show: true, readOnly: false },
      //     restore: { show: true },
      //     saveAsImage: { show: true }
      //   }
      // },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: ['10%', '80%'],
          center: ['50%', '38%'],
          roseType: 'areas',
          itemStyle: {
            borderRadius: 8
          },
          avoidLabelOverlap: true,
          data: [
            { value: values.value[0], name: '<0.5h' },
            { value: values.value[1], name: '0.5-1h' },
            { value: values.value[2], name: '1-1.5h' },
            { value: values.value[3], name: '1.5-2h' },
            { value: values.value[4], name: '2-2.5h' },
            { value: values.value[5], name: '2.5-3h' },
            { value: values.value[6], name: '>3h' }
          ],
          label: {
            fontSize: 10,
            color: '#fff',
            position: 'outside'
          },
          // 引导线调整
          labelLine: {
            // 连接扇形图线长
            length: 4,
            // 连接文字线长
            length2: 6
          }
        }
      ]
    }
    myechart.setOption(option)
  }
  UpdateEcharts()
  watch(values, () => {
    UpdateEcharts()
  })
  window.addEventListener('resize', () => {
    myechart.resize()
  })
})
</script>

<template>
  <div>
    <div class="echarts-bg">
      <div class="topbar">
        <el-icon
          @click="router.push('/user/personalcenter')"
          style="margin-top: 20px; margin-left: 30px; color: #fff"
          size="32"
          ><ArrowLeftBold
        /></el-icon>
      </div>
      <div style="position: relative">
        <div class="mainbox">
          <!-- //* //ASD 左 -->
          <div class="column">
            <div class="keji-bk1"><img src="/images/科技感边框1.png" alt="" /></div>
            <div class="keji-bk2"><img src="/images/科技感边框2.png" alt="" /></div>

            <div class="panel bar">
              <h2>各类音乐likes</h2>
              <div class="chart" id="leftTop"></div>
              <div class="panel-footer"></div>
            </div>
            <div class="panel line">
              <h2>Gender&Recom</h2>
              <div id="leftCenter" class="chart">图标</div>
              <div class="panel-footer"></div>
            </div>
            <div class="panel pie">
              <h2>年龄分布</h2>
              <div id="leftBottom" class="chart"></div>
              <div class="panel-footer"></div>
            </div>
          </div>

          <!-- //* //ASD 中 -->
          <div class="column">
            <div class="no">
              <el-statistic title="网站总注册数" :value="outputValue" />
              <el-statistic title="问卷总反馈数" :value="outputValue2" />
            </div>
          </div>

          <!-- //* //ASD 右 -->
          <div class="column">
            <div class="panel bar">
              <h2>五度评分</h2>
              <div id="rightTop" class="chart"></div>
              <div class="panel-footer"></div>
            </div>
            <div class="panel line">
              <h2>反馈数量曲线per-month</h2>
              <div id="rightCenter" class="chart"></div>
              <div class="panel-footer"></div>
            </div>
            <div class="panel pie">
              <h2>使用时间-pie分布</h2>
              <div id="rightBottom" class="chart"></div>
              <div class="panel-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  background: url('/images/顶栏.jpg');
  width: 100%;
  height: 10vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-position: center center;
  filter: brightness(0.9) grayscale(0.4) blur(0.5px);
}
.echarts-bg {
  width: 100%;
  position: absolute;
  /* background-repeat: round; */
}
.mainbox {
  width: 100%;
  height: 100vh;
  background: url('/images/echarts背景.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  display: flex;
}
.keji-bk1 {
  position: absolute;
  width: 600px;
  filter: grayscale(0.1);
  opacity: 0.5;
  top: 70px;
  left: 430px;
  animation: keji-bk1KF 7s linear infinite;
}
@keyframes keji-bk1KF {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.keji-bk2 {
  position: absolute;
  width: 700px;
  filter: grayscale(0.1);
  opacity: 0.7;
  top: 20px;
  left: 380px;
  animation: keji-bk1KF 11s linear infinite reverse;
}
@keyframes keji-bk2KF {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.column:nth-child(1) {
  flex: 3;
}
.column:nth-child(2) {
  flex: 5;
  margin: 0 10px 15px 10px;
  box-sizing: border-box;
}
.column:nth-child(3) {
  flex: 3;
}
.panel {
  position: relative;
  height: 190px;
  border: 1px solid rgba(25, 186, 139, 0.27);
  background: url('/images/line.png');
  padding: 0 15px 40px;
  margin-bottom: 15px;
}
.panel::before {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}
.panel::after {
  position: absolute;
  top: 0;
  right: 0;
  content: '';
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}
.panel-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.panel-footer::before {
  position: absolute;
  bottom: 0;
  left: 0;
  content: '';
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}

.panel-footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: '';
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}
.panel h2 {
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #86fdff;
  font-size: 20px;
  font-weight: 500;
  font-family: '幼圆';
  text-shadow: 2px 2px 4px rgb(78, 226, 238);
  letter-spacing: 2px;
}
.panel .chart {
  height: 185px;
  width: 375px;
}
.no {
  background-color: rgba(101, 132, 226, 0.1);
  padding: 15px;
  display: flex;
  justify-content: space-around;
  z-index: 100;
  position: absolute;
  width: 650px;
}
.no::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 20px;
  border-top: 2px solid #c4faffea;
  border-left: 2px solid #c4faffea;
}
.no::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 20px;
  border-bottom: 2px solid #c4faffea;
  border-right: 2px solid #c4faffea;
}
::v-deep .el-statistic__content {
  color: #c4faff !important;
  font-size: 48px;
  font-family: 'electronicFont';
}
::v-deep .el-statistic__head {
  font-size: 20px !important;
  color: rgb(116, 163, 209);
  margin-left: 8px;
}
</style>
