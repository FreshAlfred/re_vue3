<template>
  <div class="father">
    <h3>父组件</h3>
    <!-- <input type="text" v-model="name"> -->
    <!-- <input type="text" :value="name" @input="name=(<HTMLInputElement>$event.target).value"> -->
      <AlfredInput v-model:test="name"/>
  </div>
</template>

<script setup lang="ts" name="Father">
import {ref} from 'vue'
import AlfredInput from './AlfredInput.vue'

let name = ref('Alfred')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
