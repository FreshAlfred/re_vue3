<template>
	<div class="child2">
		<h3>子组件2</h3>
		<h4>车：{{ car }}</h4>
		<h4>书籍：{{ book }}本</h4>
		<button @click="changeMoney($parent)">点我拿父亲的钱</button>
	</div>
</template>

<script setup lang="ts" name="Child2">
import { ref } from 'vue';

let book = ref(4);
let car = ref('自行车')
defineExpose({book})

function changeMoney(parent: any) {
	parent.money --
}
</script>

<style scoped>
.child2 {
	margin-top: 20px;
	background-color: orange;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px black;
}
</style>
