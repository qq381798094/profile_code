<template>
    <div class="skill-card-component-container">
        <div class="list-box transition-color">
            <div class="title-and-subtle">
                <span>{{ skillInfo.sName }}</span>
                <span class="skill-intro">{{ skillInfo.sIntroduce }}</span>
            </div>
            <div class="other">
                <span :style="{color:getColor}">{{ skillInfo.sLevel }}</span>
                <el-icon :size="20">
                    <CircleCheck :style="{color:getColor}" />
                </el-icon>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.skill-card-component-container {
    .list-box {
        border-top: 1px solid #454240;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #A3A2A1;

        // 标题
        .title-and-subtle {
            min-width: 200px;
            display: flex;
            flex-direction: column;

            &:hover {
                cursor: pointer;
                color: #fff;
                -webkit-user-select: none;
            }

            >span {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                &:first-child {
                    font-size: 18px;
                }

                &:last-child {
                    max-width: 700px;
                    font-size: 13px;
                    margin-top: 15px;
                }
            }
        }

        // 其他
        .other {

            >span {
                margin-right: 10px;
            }

            display: flex;
        }
    }
}
</style>

<script setup lang="ts">
/** API */
import { defineProps, computed } from 'vue';
/** icon  */
import { CircleCheck } from '@element-plus/icons-vue';
/** 类型引入 */
import type { ISkillItem } from '@/type/skillType';

/** API实例化 */
let props = defineProps<{
    skillInfo: ISkillItem
}>();

// 根据level排序去染色
const getColor = computed(() => {
    if(props.skillInfo.sLevelOrder == 1) {
        return '#67c23a';
    } else if(props.skillInfo.sLevelOrder == 2) {
        return '#409eff';
    } else {
        return '#e6a23c';
    }
})
</script>