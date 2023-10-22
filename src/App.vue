<template>
  <div class="container" :class="{'theme_white': switchFlag}">
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
import { storeToRefs } from 'pinia';

let colorStore = useColorStore();
let { switchFlag } = storeToRefs(colorStore);

// 切换皮肤点击事件
const switchFlagChange = (flag:boolean) => {
  
  // 获取body属性
  const body = document.body;
  // body.style.transition = 'all .3s linear';
  if(flag) {
    body.style.background = '#fff';
  } else {
    body.style.background = '#000';
  }
  
}

</script>