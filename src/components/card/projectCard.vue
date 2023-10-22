<template>
    <div class="project-card-component-container">
        <el-card class="box-card">

            <div class="content-box">
                <!-- 标题 -->
                <div class="title">
                    <div @click="handleIntroDisplayClick(currentIndex)">
                        <span>{{ projectItem.pName }}</span>
                        <span>{{ projectItem.tech }}</span>
                    </div>
                    <div @click="handleJumpClick">
                        <el-icon v-if="projectItem.link !== null" :size="20">
                            <TopRight color="#6C6C6C" />
                        </el-icon>
                        <el-icon v-else :size="20">
                            <WarnTriangleFilled color="#6C6C6C" />
                        </el-icon>
                    </div>
                </div>
                <!-- 内容 -->
                <div :class="['intro', switchArr[currentIndex] ? 'pull' : 'pull-down']">
                    <span style="display:block;margin-top: 10px;">{{ projectItem.introduce }}</span>
                </div>
            </div>
        </el-card>
    </div>
</template>

<style scoped lang="less">
.project-card-component-container {
    -webkit-user-select: none;
    margin: 25px 0;
    cursor: pointer;
    transition: transform .2s;

    &:hover {
        transform: translateY(-4px) scale(1.02);

        :deep(.el-card) {
            border: 1px solid #fff;
        }
    }

    :deep(.el-card__body) {
        background: #000;
    }

    :deep(.el-card) {
        border: 1px solid #666;
    }

    .content-box {

        >.title {
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;

            span {
                font-size: 16px;
                margin-right: 5px;

                &:first-child {
                    color: #fff;
                }

                &:last-child {
                    color: #9F9F9F;
                    margin-left: 10px;
                    min-width: 100px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }

        .pull-down {
            max-height: 0;
            margin-top: 0;
        }
        .pull {
            max-height: 200px;
        }
        >.intro {
            max-width: 750px;
            overflow: auto;
            text-indent: 1.85rem;
            line-height: 25px;
            color: #9F9F9F;
            transition: all .2s linear;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
}
</style>

<script setup lang="ts">
/** API */
import { defineProps, defineEmits, ref } from 'vue';
/** 引入图标 */
import { TopRight, WarnTriangleFilled } from '@element-plus/icons-vue';
import type { IProjectItem } from '@/type/projectType.ts';
/** 引入仓库 */
import useColorStore from '@/store/useColorStore';
import { storeToRefs } from 'pinia';

/** 实例化API */
const props = defineProps<{
    projectItem: IProjectItem
    currentIndex: number
}>();

const colorStore = useColorStore();
const { switchFlag } = storeToRefs(colorStore);

const $emit = defineEmits(['jumpClick']);

// 点击事件 —— 抛出事件
const handleJumpClick = () => {
    $emit('jumpClick', props.projectItem.link);
}

// 数据变量，控制简介的开启与关闭
let switchArr = ref<Array<boolean>>([false,false,false,false,false]);

// 点击事件 —— 控制简介的显示与隐藏
const handleIntroDisplayClick = (index: number) => {
    // switchArr[index]赋相反值;
    switchArr.value[index] = !switchArr.value[index];
}
</script>

