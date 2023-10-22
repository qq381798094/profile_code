import { defineStore } from 'pinia';

const useColorStore = defineStore('color', {
    state: () => {
        return {
            switchFlag: false
        }
    },

    actions: {
        changeFlag() {
            this.switchFlag = !this.switchFlag;
        }
    },

    getters: {}
})

export default useColorStore;