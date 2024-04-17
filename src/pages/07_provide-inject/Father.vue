<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>爸爸的钱：{{ money }}</h4>
    <h4>爸爸的车：{{ car.name }} 价值 {{ car.price }} 元</h4>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { provide, ref, reactive } from 'vue'

let money = ref(100)
let car = reactive({ name: '奔驰', price: 200 })
function updateMoney(value: number) {
  money.value += value
}
provide('moneyContext', { money, updateMoney})
provide('car', car)
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>