<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>爷爷的钱：{{ money }}</h4>
    <button @click="updateMoney(add)">点我给爷爷加钱</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
import { inject, ref } from 'vue'
let add = ref(6)
let { money, updateMoney } = inject('moneyContext', { money: 0, updateMoney: (x: number) => {} }) 
</script>

<style scoped>
  .grand-child{
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>