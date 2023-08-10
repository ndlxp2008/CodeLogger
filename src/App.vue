
<template>
<div class="line">
    <div id="container" style="display: flex; justify-content: space-between; position: relative">
      <el-table
        ref="leftTable"
        :data="leftTreeData"
        :row-class-name="({ row }) => `leftRow Id-${row.id}`"
        style="width: 40%; margin-bottom: 20px; display: inline-block;"
        row-key="id"
        border
        default-expand-all
      >
        <el-table-column prop="name" label="姓名"/>
        <el-table-column prop="gender" label="性别"/>
        <el-table-column prop="age" label="年龄"/>
      </el-table>
      <el-table
        ref="rightTable"
        :data="rightTreeData"
        :row-class-name="({ row }) => `rightRow Id-${row.id}`"
        style="width: 40%; margin-bottom: 20px; display: inline-block;"
        row-key="id"
        border
        default-expand-all
      >
        <el-table-column prop="name" label="姓名"/>
        <el-table-column prop="gender" label="性别"/>
        <el-table-column prop="age" label="年龄"/>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/components/TableChart.vue';

import {
  reactive,
  ref,
} from 'vue';

import { ElMessage } from 'element-plus';
import { jsPlumb } from 'jsplumb';

import { useAppStore } from '@/store/index';

const counter = useAppStore()

const state = reactive({
  title: '',
  userInfo: {},
  reportData: [] as any,
  evaluationSuggestions: '',
  combatAbilityList: [] as any,
  defenseInfoList: [] as any,
  psyData: {} as any,
})

state.combatAbilityList = [{ "factor": "aaaa", "score": "1", "lowScoreFeature": "高分", "highScoreFeature": "高分", "standardDev": "2", "average": "3", "scoreStatus": "3" }]

var a = reactive({
  test: 1,
  test1: "aaaa"
})

function add() {
  a.test++
}

function minus(test1) {
  a.test1 = '我是新数据'
}

function test(counter) {
  console.log('test');
  console.log(counter)
  ElMessage.success(counter + "");
}

// 左侧静态数据
const leftData = ref([
  { id: 1, name: '张三', gender: '男', age: 23, parentId: null, hasChild: true },
  { id: 2, name: '李四', gender: '男', age: 22, parentId: null, hasChild: false },
  { id: 3, name: '坤坤', gender: '女', age: 24, parentId: 1, hasChild: true },
  { id: 4, name: '小黑子', gender: '男', age: 25, parentId: 3, hasChild: false },
]);
const leftTreeData = ref([
  {
    id: 1, name: '张三', gender: '男', age: 23, parentId: null, children: [
      {
        id: 3, name: '坤坤', gender: '女', age: 24, parentId: 1, children: [
          { id: 4, name: '小黑子', gender: '男', age: 25, parentId: 3 },
        ]
      },
    ]
  },
  { id: 2, name: '李四', gender: '男', age: 22, parentId: null },
]);

// 右侧静态数据
const rightData = ref([
  { id: 5, name: '柯洁', gender: '男', age: 23, parentId: null, hasChild: true },
  { id: 6, name: '战鹰', gender: '女', age: 30, parentId: 5, hasChild: false },
  { id: 7, name: '唱跳', gender: '男', age: 24, parentId: null, hasChild: false },
  { id: 8, name: 'rap', gender: '男', age: 25, parentId: null, hasChild: false },
]);
const rightTreeData = ref([
  {
    id: 5, name: '柯洁', gender: '男', age: 23, parentId: null, children: [
      { id: 6, name: '战鹰', gender: '女', age: 30, parentId: 6 },
    ]
  },
  { id: 7, name: '唱跳', gender: '男', age: 24, parentId: null },
  { id: 8, name: 'rap', gender: '男', age: 25, parentId: null },
]);

const leftTable = ref(null);
const rightTable = ref(null);

let instance = null;

function init() {
  instance = jsPlumb.getInstance({
    Connector: "Straight", //连接线形状 Bezier: 贝塞尔曲线 Flowchart: 具有90度转折点的流程线 StateMachine: 状态机 Straight: 直线
    PaintStyle: { strokeWidth: 3, stroke: "#dfbee7" }, //连接线样式
    Endpoint: ["Blank", { radius: 1 }], //端点
    anchor: 'Right',
    // 绘制箭头
    Overlays: [['Arrow', { width: 12, length: 12, location: 1 }]],
    EndpointStyle: { fill: "#000000" }, //端点样式
    Container: "container", //目标容器id
    ListStyle: {
      endpoint: ["Rectangle", { width: 30, height: 30 }],
    },
  });
}


// 设置可以连线的元素
function setContainer() {
  const leftElList = document.querySelectorAll('.leftRow'); // 左侧行元素集合
  const rightElList = document.querySelectorAll('.rightRow');  // 右侧行元素集合

  console.log(leftElList.length)

  instance.makeSource(leftElList[3], {
    allowLoopback: false,
    anchor: ["Right"], // 设置端点位置
    maxConnections: 1
  });

  instance.makeTarget(leftElList[1], {
    anchor: ["Left"],
    maxConnections: 1
  });
  // 将dom元素设置为连线的起点或者终点 设置了起点的元素才能开始连线 设置为终点的元素才能为连线终点
  instance.batch(function () {
    [leftElList, rightElList].forEach((trList, index) => {

      // trList.forEach((tr) => {
      // const id = interceptId(tr.classList[2]);
      // if (index === 0) {
      //   const item = leftData.value.find(i => i.id == id);
      //   // 判断是否有子项,若没有则设置为起点
      //   !item?.hasChild && instance.makeSource(tr, {
      //     allowLoopback: false,
      //     anchor: ["Right"], // 设置端点位置
      //     maxConnections: 1
      //   });
      // } else {
      //   const item = rightData.value.find(i => i.id == id);
      //   // 判断是否有子项,若没有则设置为终点
      //   !item?.hasChild && instance.makeTarget(tr, {
      //     anchor: ["Left"],
      //     maxConnections: 1
      //   });
      // }
      // });
    });
  });
}

// 截取元素类名中的id
const interceptId = className => {
  return className.slice(className.indexOf('-') + 1);
}


onMounted(() => {
  initJsPlumb();
  console.log("onMounted")
})

const relationship = reactive([
  { sourceId: 4, targetId: 8 }
])

// 设置默认连线
function setConnect(relationship) {
  setTimeout(() => {
    relationship.forEach(function (data) {
      // source是连线起点元素id target是连线终点元素id
      instance.connect({
        source: document.querySelector(`.Id-${data.sourceId}`),
        target: document.querySelector(`.Id-${data.targetId}`)
      });
    });
  })
}

//  绑定事件监听
function setEvent() {
  // 连线事件
  instance.bind("connection", function (connInfo, originalEvent) {
    // connInfo是jsPlumb对象 可以打印出来康康有哪些东西
    console.log(connInfo, originalEvent, 'connInfo')
  });

  // 点击连接线删除该条线
  instance.bind('click', function (connection, originalEvent) {
    instance.deleteConnection(connection);
  })
}

const initJsPlumb = () => {
  jsPlumb.ready(function () {
    // 初始化jsPlumb 创建jsPlumb实例
    init();
    // 设置可以为连线起点和连线终点的元素
    setContainer();
    // 设置默认连线
    setConnect(relationship);
    // 绑定事件监听
    setEvent();
  });
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.table-chart {
  position: absolute;
  top: 0;
  right: 200px;
  width: 900px;
  height: 650px;
}
</style>
