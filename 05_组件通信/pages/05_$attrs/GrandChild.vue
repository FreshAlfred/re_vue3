<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>爷爷，a：{{ a }},b：{{ b }}</h4>
		<button @click="updateA(2)">点我将爷爷那的a更新</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
import { defineProps } from 'vue';
defineProps(['a', 'b', 'updateA'])
</script>

<style scoped>
	.grand-child{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>