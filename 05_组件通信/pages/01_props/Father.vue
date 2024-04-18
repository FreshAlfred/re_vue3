<template>
	<div class="father">
		<h3>父组件</h3>
		<p>父亲的车：{{ car }}</p>
		<p>子组件的车：{{ sonCar }}</p>
		<Child :car="car" :sendCar="getCar"/>
	</div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'
let car = ref('奔驰')
let sonCar = ref()

function getCar(value: string) {
	sonCar.value = value
}
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}
</style>