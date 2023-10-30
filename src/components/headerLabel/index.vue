<template>
    <div 
    class="header-label-component-container">
        <div class="header-box">
            <span>
                <a href="mailto:hzy381798094@163.com">hzy381798094@163.com</a>
            </span>
            <div class="bread">

                <ul class="bread-ul">
                    <li :class="{ active: flag == '/home' }" @click="changePage('/home')">Home</li>
                    <li>/</li>
                    <li :class="{ active: flag == '/skill' }" @click="changePage('/skill')">Skill</li>
                </ul>

                <div class="switch">
                    <el-switch v-model="switchFlag" @change="switchChangeFlag" />
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.header-label-component-container {
    position: sticky;
    margin: 0 auto;
    top: 0;
    left: 0;
    z-index: 99;
    padding: 70px 0;
    background: var(--theme-background);

    .header-box {
        display: flex;
        justify-content: space-between;
        font-size: 15px;

        >span {
            >a {
                color: var(--theme-link-text);
                cursor: pointer;

                &:hover {
                    color: var(--theme-link-hover);
                }
            }
        }

        .bread {
            display: flex;
            align-items: center;
            .bread-ul {
            display: flex;

            >li {
                margin-right: 8px;
                color: var(--theme-link-text);

                &:nth-of-type(2n-1) {
                    cursor: pointer;
                    font-size: 16px;

                    &:hover {
                        color: var(--theme-link-hover);
                    }
                }

                &.active {
                    color: var(--theme-link-active);
                }
            }

            }

            .switch {
                margin-left: 20px;
            }
        }
        
    }
}
</style>

<script setup lang="ts">
// 引入API
import { computed, defineEmits, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
/** API实现 */
let $router = useRouter();
let $route = useRoute();
let $emits = defineEmits(['switchChangeFlag']);

const switchFlag = ref(false);

// 切换页面功能
let flag = computed(() => {
    return $route.path
});

const changePage = (path: string) => {
    $router.push({
        path: path
    })
}

const switchChangeFlag = (val: boolean) => {
    if(val) {
        document.documentElement.className = "white";
    } else {
        document.documentElement.className = "dark";
    }
}

</script>