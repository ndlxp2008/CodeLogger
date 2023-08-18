
<template>
  <div>
    <p>learn页面</p>
    <p>{{ route.query.message }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>
