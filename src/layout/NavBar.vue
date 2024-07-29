<template>
  <div>
    NavBar响应式数据：{{ countercounter.testCount }}
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/index';

const countercounter = useAppStore()
</script>
<style scoped></style>