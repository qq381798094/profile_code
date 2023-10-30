import { defineStore } from 'pinia';

const useColorStore = defineStore('color', {
    state: () => {
        return {
            switchFlag: false
        }
    },

    actions: {
        /*  
            修改主题颜色方案1
        */
        changeFlag(flag: boolean) {
            this.switchFlag = flag;
        },

        changeTheme(flag: boolean) {
            this.changeFlag(flag);

            // 获取body属性
            const body = document.body;
            // body.style.transition = 'all .3s linear';
            if(this.switchFlag) {
                body.classList.add("theme_white")
                body.style.background = '#fff';
            } else {
                body.classList.remove("theme_white")
                body.style.background = '#000';
            }
        }
    },

    getters: {}
})

export default useColorStore;