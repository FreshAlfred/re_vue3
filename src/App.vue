<template>
    <div class="app">
       <h2>{{ msg }}</h2>
    </div>
</template>

<script lang="ts" setup name="App">
import {  ref } from 'vue'
let msg = ref('hello alfred')
</script>

<style scoped>
.app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>
