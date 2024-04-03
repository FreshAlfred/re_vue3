<template>
    <PersonWatch ref="person" />
    <button @click="show">show</button>
    <!-- <Car /> -->
</template>

<script lang="ts" setup>
    // import Person from './components/Person.vue'
    // import Car from './components/Car.vue'
    import PersonWatch from './components/PersonWatch.vue';
    import { ref } from 'vue'
    const person = ref()
    function show() {
        console.log(person.value.person.name);
    }

</script>

<style scoped>

</style>
