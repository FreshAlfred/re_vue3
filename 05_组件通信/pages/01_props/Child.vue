<template>
	<div class="child">
		<h3>子组件</h3>
		<p>子组件的车：{{ myCar }}</p>
		<p>拿到父亲的车：{{ car }}</p>
		<!-- <button @click="sendCar(myCar)">给父亲传车</button> -->
	</div>
</template>

<script setup lang="ts" name="Child">
import { defineProps, ref, onMounted } from 'vue'
let myCar = ref('自行车')
const { car, sendCar } = defineProps(['car','sendCar'])
sendCar(myCar)
</script>

<style scoped>
.child {
	background-color: skyblue;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}
</style>
