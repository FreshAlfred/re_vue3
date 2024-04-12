<template>
    <input type="text" :value="test" @input="$emit('update:test', (<HTMLInputElement>$event.target).value)">
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
defineProps(['test'])
defineEmits(['update:test'])
</script>

<style scoped>
input {
    border: 2px solid black;
    background-image: linear-gradient(45deg, lightblue, pink);
    height: 30px;
    font-size: 20px;
    color: greenyellow;
}
</style>
