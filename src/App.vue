
<template>
  <h1 class="text-5xl font-bold underline">Hello CodeLogger!</h1>
  <el-button type="primary" size="default" @click="test"></el-button>
  <Pagination />
</template>

<script setup lang="ts">
import Pagination from '@/components/Pagination.vue'
import { ElMessage } from 'element-plus'
function test() {
  console.log('test');
  ElMessage.warning('ssss');
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
