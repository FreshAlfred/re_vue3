<template>
  <ul class="news-list">
    <li>{{ id }}</li>
    <li>{{ title }}</li>
    <li>{{ content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
import { defineProps } from 'vue'
defineProps(['id', 'title', 'content'])
</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list>li {
  line-height: 30px;
}
</style>