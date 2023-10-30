<template>
    <div class="home-page-container">
        <!-- 自我介绍列表 -->
        <MySelfView @gotoGithub="gotoGithub" @gotoGitee="gotoGitee" />
        <!-- 项目集合 -->
        <div class="project-list-box">
            <h1>项目集 ({{ projectArr.length }})</h1>
            <ProjectView 
            v-for="(project,index) in projectArr" 
            :key="project.id" 
            :currentIndex="index"
            :project-item="project"
            @jumpClick="handleJumpClick" />
        </div>
        <!-- 取得联系 -->
        <div class="concat-box">
            <h1>取得联系</h1>
            <div class="content">
                <span>
                    可以通过邮箱<a href="mailto:hzy381798094@163.com">hzy381798094@163.com</a>或者
                    <el-popover
                    popper-style="width:150px;height:150px;"
                    placement="top">
                        <template #reference>
                            <span style="text-decoration:underline;">扫描微信二维码</span>
                        </template>
                        <img
                        style="width: 140px;=height: 140px;position: absolute;top: 5px;left: 5px;" 
                        src="@/assets/wxScan.jpg" />
                    </el-popover>
                    取得联系。
                </span>
            </div>
            <ul class="content-ul">
                <li @click="gotoGitee">Gitee</li>
                <li>/</li>
                <li @click="gotoGithub">Github</li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="less">
.home-page-container {
    color: #fff;
    padding: 20px 0 70px 0;

    // 项目集合
    .project-list-box {
        margin-top: 60px;

        >h1 {
            color: var(--theme-title-text);
            font-size: 20px;
        }

        .concat-box {
            color: var(--theme-content-text);
        }
    }

    // 取得联系
    .concat-box {
        margin-top: 60px;

        .content {
            max-width: 500px;
            margin: 30px 0;

            >span {
                color: var(--theme-content-text);
                font-size: 15px;
		position:relative;

                a {
                    color: var(--theme-content-text);

                    &:hover {
                        color: var(--theme-link-hover);
                    }
                }
            }
        }

        >h1 {
            font-size: 20px;
            color: var(--theme-title-text);
        }
    }

    .content-ul {
        display: flex;

        >li {
            color: var(--theme-content-text);
            font-size: 16px;
            margin-right: 8px;

            &:nth-of-type(2n-1) {
                cursor: pointer;

                &:hover {
                    color: var(--theme-link-hover);
                }
            }
        }
    }
}
</style>

<script setup lang="ts">
/** API 引入 */
import { ref } from 'vue';
/** Element */
import { ElMessageBox } from 'element-plus'
/** 组件引入 */
import MySelfView from '@/components/introduce/mySelf.vue';
import ProjectView from '@/components/card/projectCard.vue';
/** 引入数据类型约束 */
import type { TProjectArr } from '@/type/projectType.ts';

/* 项目对象 */

const projectArr = ref<TProjectArr>([
    {
        id: 1,
        pName: '博客',
        tech: 'Vue全家桶 + Axios + Less',
        link: 'github.com/qq381798094/Mock_Blog',
        introduce: '个人博客网页为Vue2学习之后实践的产品。该博客主要使用Vue2全家桶技术栈，使用Axios实现前后端异步通信效果，使用Mock模拟数据充实网页界面。人博客含有首页、文章、关于、技术分析、留言板等模块。首页模块含有轮播图、以及根据鼠标位置移动图片的效果。文章模块含有对文章的分类，以及分页器的应用，点击文章会进入文章详情，详情页面除了含有内容外还含有当前内容的关键词锚点。关于模块放置了代码块技术分析主要是对列表进行了渲染、图片渲染上使用了懒加载技术。留言板会展示用户留言以及提供留言功能，提交后能够更新留言板。',
    },
    {
        id: 2,
        pName: '医院预约挂号平台',
        tech: 'Vue3.0 + TypeScript + Element-Plus UI + Axios + Sass',
        link: 'github.com/qq381798094/Regisitration_Platform',
        introduce: '挂号平台是在实践Vue3 + TypeScript技术栈的时候开发的一款网站。主要技术栈为Vue3 + TypeScript + Pinia，UI库为 Element-Plus UI。'
    },
    {
        id: 3,
        pName: '寻谱',
        tech: 'uniapp + Vant UI + Less',
        link: null,
        introduce: '寻谱是之前写的一个微信小程序，是用的微信小程序原生开发的，只是暂时没有将资源上传到 github / gitee 上。寻谱所用到的技术栈主要为微信小程序、Vant UI组件库以及Less样式语言组成。小程序模块有四个，分别是首页、曲谱、用户、以及视频模块。   '
    }
])

// 项目点击事件：跳转到gitee or github的项目
const handleJumpClick = (link: string | null) => {

    if (link == null) {
        ElMessageBox.alert('当前暂无该项目资源！', '提示', {
            confirmButtonText: '确认',
            type: 'warning',
            callback: () => { }
        })
    } else {
        let path = 'https://' + link;
        console.log(path);
                
        window.location.href = path;
    }
}

// 点击事件：跳转到github的主页
const gotoGithub = () => {
    window.location.href = 'https://github.com/qq381798094?tab=repositories';
}
// 点击事件： 跳转到gitee
const gotoGitee = () => {
    window.location.href = 'https://gitee.com/hu-zhengyuan';
}
</script>