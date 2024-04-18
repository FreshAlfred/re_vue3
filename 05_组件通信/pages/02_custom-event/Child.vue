<template>
  <div class="child">
    <h3>子组件</h3>
	<p>子组件的车车：{{ car }}</p>
	<!-- 这里的event是原生事件对象 PointerEvent -->
	<button @click="emit('send-car', car)">向父亲发数据</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue';
import { defineEmits } from 'vue';
const emit = defineEmits(['send-car'])
let car = ref('自行车车')
</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>