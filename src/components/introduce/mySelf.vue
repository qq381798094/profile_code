<template>
    <!-- 自我介绍栏 -->
    <div class="intro-my-self-box">
            <!-- 招呼 -->
            <h1>你好，我是胡正源👋</h1>
            <!-- 介绍自己 -->
            
            <div>您好，我是一名前端开发者，目前拥有1年工作经验，共开发过3个及以上Web端项目，2个移动端项目。该电子简历是我于离职期间编写，用于展示目前我自己所开发过的
                一些项目以及目前我个人<span style="color: #FFC83D;">所学习并实践过的技术栈</span>。
                <!-- <p>目前</p> -->
                <span class="strong" style="color: orange;"></span>
            </div>
            <!-- 选项 -->
            <ul class="intro-ul">
                <li @click="navGiteeClick">Gitee</li>
                <li>/</li>
                <li @click="navGithubClick">Github</li>
            </ul>
        </div>
</template>

<style scoped lang="less">
    .intro-my-self-box {
        color: #99A19E;
        > h1 {
            color: #fff !important;
            font-size: 32px;
        }
        div {
            text-indent: 1.8rem;
            max-width: 500px;
            margin-top: 30px;
            line-height: 25px;
        }
        .intro-ul {
            margin-top: 30px;
            display: flex;
            li {
                font-size: 16px;
                margin-right: 8px;
                &:nth-of-type(2n-1){
                    cursor: pointer;
                    &:hover {
                        color: #fff;
                    }
                }
            }
        }
    }
</style>

<script setup lang="ts">
import { defineEmits } from 'vue';

let $emit = defineEmits(['gotoGithub', 'gotoGitee']);

// 点击事件：传出事件 —— 点击跳转到github
const navGithubClick = () => {
    $emit('gotoGithub');
}
// 点击事件：传出事件 —— 点击跳转到gitee
const navGiteeClick = () => {
    $emit('gotoGitee');
}
</script>