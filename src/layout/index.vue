<script setup lang="ts">
import NavBar from '@/layout/NavBar.vue';
import SideBar from '@/layout/SideBar.vue';

const route = useRoute()
onMounted(() => { })
</script>
<template>
  <div class="app-container">
    <SideBar class="left" />
    <div class="right">
      <NavBar />
      <div class="main bg-blue-600">
        <!-- TODO 切换动画 -->
        <!-- <Transition name="fade" mode="out-in" appear>
          <router-view />
        </Transition> -->
        <router-view :key="route.path" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  user-select: none;
  height: 100vh;
  display: flex;
  flex-direction: row;

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    // 内容区域
    .main {
      margin: 10px 20px 20px;
      border-radius: 4px;
      position: relative;
      overflow-y: auto;
      flex: 1;
    }
  }
}
</style>
