<template>
    <div class="person">
        <h2>name: {{ name }}</h2>
        <h2>age: {{ age }}</h2>
        <button @click="showTel">查看联系方式</button>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Person-alfred">
import { ref } from 'vue'
let name = ref('Alfred')
let age = ref(18)
let tel = '17318400111'
function changeName() {
    name.value = '黄小俊'
}
function changeAge() {
    age.value += 1
}
function showTel() {
    alert(tel)
}
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
