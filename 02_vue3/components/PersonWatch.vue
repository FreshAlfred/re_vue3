<template>
    <div class="person">
        <h2>当前n值：{{ n }}</h2>
        <button @click="changeN">点我n + 1</button>
        <hr />
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人</button>
        <hr />
        <h2>车的品牌：{{ person.car.car1 }} 与 {{ person.car.car2 }}</h2>
        <button @click="changeCar1">修改car1</button>
        <button @click="changeCar2">修改car2</button>
        <button @click="changeCar">修改car</button>
    </div>
</template>

<script lang="ts" setup name="PersonWatch">
import { reactive,ref, watch, watchEffect, defineExpose } from 'vue'
let n = ref(0)
let person = reactive({ name: 'zhangsan', age: 10, car: { car1: 'bmw', car2: 'benz' } })
function changeN() {
    n.value++
}
function changeName() {
    person.name += '~'
}
function changeAge() {
    person.age += 1
}
function changePerson() {
    Object.assign(person, { name: 'lisi', age: 20 })
}
function changeCar1() {
    person.car.car1 += '~'
}
function changeCar2() {
    person.car.car2 += '~'
}
function changeCar() {
    person.car = { car1: 'audi', car2: 'honda' }
}


watchEffect(() => {
    if(person.age > 16){
        console.log('too much');
    }
})
defineExpose({person})

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
