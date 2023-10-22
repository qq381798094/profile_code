<template>
    <div class="posts-page-container">
        <!-- 内容 -->
        <div class="content-box">
            <h1>Skill</h1>
            <!-- 数据集合 -->
            <div class="list-container">
                <skill-view 
                v-for="skill in skillDataArr" 
                :key="skill.sId"
                :skillInfo="skill" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.posts-page-container {
    
    .content-box {

        > h1 {
            margin: 25px 0;
            font-size: 24px;
            color: #fff;
        }

    }
}
</style>

<script setup lang="ts">
/** API */
import { ref } from 'vue';
/** 组件 */
import SkillView from '@/components/card/skillCard.vue';
/** 类型约束导入 */
import type { TSkillArr } from '@/type/skillType';
/* 模拟接口数据 */
const skillDataArr = ref<TSkillArr>([
    {
        sId: 1,
        sName: 'HTML + CSS + JavaScript',
        sLevel: '熟练',
        sLevelOrder: 1,
        sIntroduce: '熟络搭起静态网页框架，进行快速的静态网页开发以及部分交互功能。',
    },
    {
        sId: 2,
        sName: 'Vue + Vue-Router + Vuex',
        sLevel: '熟练',
        sLevelOrder: 1,
        sIntroduce: '熟络使用Vue-CLI脚手架搭建，使用Router构建路由结构，Vuex仓库存储数据、对外暴露操作仓库数据方法等。',
    },
    {
        sId: 3,
        sName: 'Vue3 + TypeScript + Pinia',
        sLevel: '熟悉',
        sLevelOrder: 2,
        sIntroduce: '熟络使用Vue3组合式API编码风格进行项目开发，使用TypeScript对数据、变量进行类型约束，Pinia用于部分数据存储以及向外暴露部分方法。',
    },
    {
        sId: 4,
        sName: '移动端开发',
        sLevel: '熟悉',
        sLevelOrder: 2,
        sIntroduce: '移动端开发主要涉及技术栈为微信小程序、uniapp；微信小程序为微信开发者工具原生开发、uniapp为以Vue.js框架为基底的项目开发。',
    },
    {
        sId: 5,
        sName: '异步通信',
        sLevel: '熟悉',
        sLevelOrder: 2,
        sIntroduce: '熟悉对Ajax以及Axios的使用，实现前后端分离式数据交互。',
    },
    {
        sId: 6,
        sName: 'CSS扩展语言',
        sLevel: '熟练',
        sLevelOrder: 1,
        sIntroduce: '对Css的扩展语言Less以及Sass能够熟练使用，实现快速的样式搭建。',
    },
    {
        sId: 7,
        sName: 'UI库',
        sLevel: '熟练',
        sLevelOrder: 1,
        sIntroduce: '能妥善使用Element UI、Vant UI、Element-Plus UI、We UI等UI库，实现静态页面的快速开发。',
    },
    {
        sId: 8,
        sName: '切图工具',
        sLevel: '了解',
        sLevelOrder: 3,
        sIntroduce: '能使用PhotoShop、pxcook等相关软件完成设计图切图工作。',
    },
    {
        sId: 9,
        sName: '命令工具',
        sLevel: '了解',
        sLevelOrder: 3,
        sIntroduce: '对npm、pnpm有一定了解、使用git命令完成对项目的上传、更新等操作。',
    }
]);
</script>
