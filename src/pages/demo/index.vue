<template>
    <div 
    class="demo-container"
    :class="changeFlag ? 'theme_blue' : 'theme_black'">
        <div class="tool-btn">
            <span>llllalalala</span>
        </div>
        <button @click="click">切换颜色</button>
    </div>
</template>

<style scoped lang="less">
.demo-container {
    color:#fff;
    .tool-btn {
        width: 100px;
        height: 100px;
        background: gray;
    }
}
</style>

<script setup lang="ts">
    import { ref } from 'vue';
    let changeFlag = ref<boolean>(false);
    const click = () => {
        changeFlag.value = !changeFlag.value;
    }
</script>