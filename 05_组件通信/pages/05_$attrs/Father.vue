<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>a：{{ a }}</h4>
		<h4>b：{{ b }}</h4>
		<Child :a="a" :b="b" :updateA="updateA"/>
	</div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'
let a = ref(1)
let b = ref(2)
function updateA(value) {
	a.value += value
}
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}
</style>
