<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>爸爸的钱{{ money }}</h4>
		<button @click="getRefs($refs)">获取refs,子组件数据数++</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
		
	</div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import { ref } from 'vue';

let c1 = ref();
let c2 = ref();
let money = ref(100);
function getRefs(refs: any) {
	for(let key in refs) {
		console.log(refs[key].book);
	}
}
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

