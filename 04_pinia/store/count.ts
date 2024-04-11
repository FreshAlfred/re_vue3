import { defineStore } from "pinia"; 


export const useCountStore = defineStore('count', {
    state() {
        return {
            count: 110
        }
    },
    actions: {
        minus(n: number) {
            this.count -= n
        }
    },
    getters: {
        bigCount(): number {
            return this.count * 10
        }
    }
})