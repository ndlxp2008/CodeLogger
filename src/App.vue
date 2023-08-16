
<template>
  <el-config-provider :locale="zhCn" :size="size" :z-index="zIndex">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const zIndex = 3000
const size: any = 'default'
</script>
