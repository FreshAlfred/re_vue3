<template>
    <div class="count">
        <h2>当前求和为:{{ count }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus(n)">减</button>
    </div>
</template>

<script lang="ts" setup>
import { useCountStore } from '@/store/count'
import { ref } from 'vue'
import { storeToRefs } from 'pinia';

let countStore = useCountStore()
let { count } = storeToRefs(countStore)
let { minus } = countStore
let n = ref(1)

function add() {
  countStore.count += n.value
}

</script>

<style scoped>
  .count {
    background-color: #ffd299;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>