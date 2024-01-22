<template>
  <div class="container">
    <!-- 头部标签 -->
    <header-view />
    <!-- 身体标签 -->
    <router-view style="max-width: 900px;margin: 0 auto;" />
  </div>
</template>

<style lang="less">
@import "@/assets/style/theme.css";
.container {
  margin: 0 auto;
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


</script>