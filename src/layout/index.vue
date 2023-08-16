
<template>
  <div class="app-container">
    <div>
        <router-view :key="route.path" />
        <h1 class="bg-slate-500">容器页</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRouter()
</script>

<style scoped></style>
