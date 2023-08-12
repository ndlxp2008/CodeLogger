<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

type EChartsOption = echarts.EChartsOption
const jurisdiction = sessionStorage.jurisdiction
const router = useRouter()
const route = useRoute()
const chartDom = ref<HTMLElement>()
const props = defineProps({
  reportData: {
    type: Object,
    default: () => ({}),
    required: true,
  },
  active: {
    type: Number,
    default: 0,
    required: true,
  },
})

// 字体适应
function getRelativeSize(val: number): number {
  const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  if (!clientWidth) return 0
  return val * (clientWidth / 1920)
}
let options: EChartsOption = {}

const getOption = () => {
  const data = props.reportData

  const drawMark = (
    groupLeft: number,
    rectLeft: number,
    rectWidth: number,
    rectColor: string,
    rectText: string,
  ): any => ({
    type: 'group',
    bounding: 'raw',
    width: getRelativeSize(100),
    left: getRelativeSize(groupLeft),
    children: [
      {
        type: 'rect',
        top: 'center',
        left: rectLeft,
        shape: {
          width: getRelativeSize(rectWidth),
          height: getRelativeSize(26),
        },
        style: {
          fill: rectColor,
        },
      },
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          fill: '#fff',
          text: rectText,
          font: `${getRelativeSize(14)}px sans-serif`,
        },
      },
    ],
  })

  const drawLine = (top: number) => ({
    type: 'line',
    shape: {
      x1: 40,
      y1: getRelativeSize(top),
      x2: 860,
      y2: getRelativeSize(top),
    },
    style: {
      stroke: 'rgba(255,255,255,0.2)',
      lineWidth: 1,
    },
  })
  const drawText = (
    top: number | string,
    left: number | string,
    fontsize: number,
    text: string,
  ) => ({
    type: 'text',
    left,
    top: typeof top === 'string' ? top : getRelativeSize(top),
    z: 100,
    style: {
      fill: '#fff',
      text,
      font: `${getRelativeSize(fontsize)}px sans-serif`,
    },
  })

  function generateLine(): any {
    const temp = data.map((item: any, index: any) =>
      drawLine((435 / data.length) * index),
    )
    temp.push(drawLine((435 / data.length) * data.length))
    return temp
  }
  function generateText(type: number): any {
    return data.reverse().map((item: any, index: any) => {
      const { factor, score, lowScoreFeature, highScoreFeature } = item
      let text = ''
      switch (type) {
        case 1:
          text = `${factor}  ${score}分`
          break
        case 2:
          text = `${lowScoreFeature}`
          break
        case 3:
          text = `${highScoreFeature}`
          break
        default:
          break
      }
      return drawText((420 / data.length) * (index + 1), 'center', 14, text)
    })
  }

  return {
    title: {
      left: 'center',
      top: getRelativeSize(25),
      text: '测试得分',
      textStyle: { color: '#fff', fontSize: getRelativeSize(16) },
    },
    tooltip: { trigger: 'axis' },
    grid: {
      bottom: getRelativeSize(50),
      top: getRelativeSize(100),
      left: 'center',
      width: getRelativeSize(300),
      containLabel: true,
      // show: true,
      // borderColor: '#ccc',
      // borderWidth: 1,
    },
    xAxis: [
      {
        min: 0,
        max: 10,
        interval: 1,
        type: 'value',
        position: 'top',
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { color: '#fff' },
        axisLine: { onZero: false, show: false },
      },
    ],
    yAxis: {
      type: 'category',
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      axisLine: { onZero: false, show: false },
      boundaryGap: ['0%', '0%'],
    },
    visualMap: [
      {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 10,
        inRange: {
          color: ['red', 'yellow', 'green'],
          symbolSize: [10],
        },
      },
    ],
    dataset: {
      source: {
        factor: data.map((item: any) => item.factor),
        分数: data.map((item: any) => item.score),
      },
    },
    series: [
      {
        type: 'line',
        symbolSize: getRelativeSize(0.12),
        xAxisIndex: 0,
        smooth: false,
        // data,
        symbol: 'circle',
        itemStyle: {
          borderColor: '#fff',
        },
        markLine: {
          label: {
            show: true,
            position: 'start',
            formatter: '{b}',
            color: '#fff',
            fontSize: getRelativeSize(12),
          },
          lineStyle: {
            type: 'solid',
            color: '#fff',
          },
          symbol: ['none', 'none'],
          data: [
            { xAxis: 3.5, name: '-1.5区间' },
            { xAxis: 5, name: '标准值' },
            { xAxis: 6.5, name: '1.5区间' },
          ],
        },
      },
    ],
    graphic: [
      {
        type: 'group',
        top: getRelativeSize(115),
        children: [...generateLine()],
      },
      {
        type: 'group',
        bounding: 'all',
        width: getRelativeSize(330),
        left: 'center',
        top: getRelativeSize(60),
        children: [
          drawMark(194, 0, 105, '#51C95EFF', '高'),
          drawMark(100, 0, 95, '#F2B642FF', '中'),
          drawMark(0, 0, 105, '#F4795DFF', '低'),
        ],
      },
      {
        type: 'group',
        bounding: 'all',
        width: getRelativeSize(250),
        left: getRelativeSize(50),
        top: getRelativeSize(60),
        children: [drawText('center', 'center', 14, '因素')],
      },
      {
        type: 'group',
        bounding: 'all',
        width: getRelativeSize(250),
        left: getRelativeSize(50),
        top: getRelativeSize(120 + 430 / (data.length * 2)),
        children: [
          // 算起来很麻烦，别人我为什么，因为产品需要
          ...generateText(1),
        ],
      },
      {
        type: 'group',
        bounding: 'all',
        width: getRelativeSize(250),
        left: getRelativeSize(170),
        top: getRelativeSize(60),
        children: [drawText('center', 'center', 14, '低分者特征')],
      },
      {
        type: 'group',
        bounding: 'all',
        width: getRelativeSize(250),
        left: getRelativeSize(170),
        top: getRelativeSize(120 + 430 / (data.length * 2)),
        children: [...generateText(2)],
      },
      {
        type: 'group',
        bounding: 'all',
        width: getRelativeSize(250),
        right: getRelativeSize(150),
        top: getRelativeSize(60),
        children: [drawText('center', 'center', 14, '高分者特征')],
      },
      {
        type: 'group',
        bounding: 'all',
        width: getRelativeSize(250),
        right: getRelativeSize(150),
        top: getRelativeSize(120 + 430 / (data.length * 2)),
        children: [...generateText(3)],
      },
    ],
  }
}

// 绘制图表
function render() {
  const chart = echarts.init(chartDom.value as HTMLElement)
  chart.setOption(options)
  window.addEventListener('resize', () => {
    chart.resize()
  })
}

// 测试回溯
function testBack() {
  const query = {
    userId: route.query.userId,
    paperId: route.query.paperId,
    moduleId: props.active === 5 ? '5' : '4',
    type: props.active === 3 ? '1' : '2',
  }
  // 用户端
  if (jurisdiction === 'student') {
    router.push({
      path: '/tests/psychological-test-retrospective',
      query,
    })
  } else {
    router.push({
      path: '/admin/tests/psychological-test-retrospective',
      query,
    })
  }
}
watch(
  () => props.reportData,
  () => {
    nextTick(() => {
      options = getOption() as any
      render()
    })
  },
  // { immediate: true },
)
onMounted(() => {
  render()
})
</script>

<template>
  <div class="table-chart">
    <div style="height: 40px">
      <el-button
        type="primary"
        size="default"
        style="position: absolute; right: 0; top: 10px"
        @click="testBack"
      >
        测试回溯
      </el-button>
    </div>

    <div class="chart-main">
      <div id="chart-dom" ref="chartDom"></div>
      <p style="color: yellow; text-indent: 50px">
        注：某项人格因素测试分值越高，表明受测者越趋向高分者特征；测试分值越低，表明越趋向低分者特征
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-chart {
  position: relative;
  width: 900px;
  margin: 0 auto;
}

.chart-main {
  background-image: url('@/assets/image/chart-bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 900px;
  height: 670px;
  margin: 0 auto;
  position: relative;
}

#chart-dom {
  height: 600px;
  width: 100%;
  min-height: 100px;
}
</style>
