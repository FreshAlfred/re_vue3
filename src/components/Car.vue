<template>
    <div class="car">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}元</h2>
        <button @click="changePrice">修改汽车价格</button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
    let car = reactive({brand: '小米', price: 210000})
    function changePrice() {
        Object.assign(car, { price: car.price + 100, brand: '大米' })
    }
</script>

<style scoped>
.car {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>