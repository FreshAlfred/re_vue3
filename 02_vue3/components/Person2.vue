<template>
    <div class="person">
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.name }} -- {{ item.age }} -- {{ item.id }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { defineProps,withDefaults } from 'vue'
import { type Persons } from '@/types';
withDefaults(defineProps<{list: Persons}>(), {
    list: () => [ { id: '002', name: 'lisi', age: 20 }, { id: '003', name: 'wangwu', age: 30 }]
})
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>
