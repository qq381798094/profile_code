<template>
  <div class="container">
    <!-- 头部标签 -->
    <header-view @switchChangeFlag="switchFlagChange" />
    <!-- 身体标签 -->
    <router-view />
  </div>
</template>

<style scoped lang="less">

.container {
  margin: 0 auto;
  max-width: 900px;
  height: 100%;
}

@media screen and (width < 920px) {
  .container {
    padding: 20px;
  }
  
}
</style>

<script setup lang="ts">
import HeaderView from '@/components/headerLabel/index.vue';

import useColorStore from '@/store/useColorStore';

let colorStore = useColorStore();

// 切换皮肤点击事件
const switchFlagChange = (flag: boolean) => {
  colorStore.changeTheme(flag);
}
</script>