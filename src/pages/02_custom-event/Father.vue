<template>
  <div class="father">
    <h3>父组件</h3>
	<p v-show="car">收到子组件车车：{{ car }}</p>
    <Child @send-car="getCar"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import { ref } from 'vue';
let car = ref()
function getCar(value:string) {
	car.value = value
}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>