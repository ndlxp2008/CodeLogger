
<template>
  <h1 class="text-5xl font-bold underline">Hello CodeLogger!</h1>
  <el-button type="success" size="default" @click="test(counter.testCount)">显示</el-button>
  <el-button type="success" size="default" @click="counter.add">增加</el-button>
  <el-button type="success" size="default" @click="counter.minus">减少</el-button>
  <el-button type="primary" size="default" >counter.testCount</el-button>
  <el-button type="primary" size="default" >{{ counter.testCount }}</el-button>

  <el-button type="success" size="default" @click="add()">增加</el-button>
  <el-button type="success" size="default" @click="minus(a.test1)">减少</el-button>
  <el-button type ="primary" size="default" >{{ a.test }}</el-button>
  <el-button type="primary" size="default" >{{ a.test1 }}</el-button>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import { ElMessage } from 'element-plus';

import { useAppStore } from '@/store/index';

const counter = useAppStore()


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
</style>
