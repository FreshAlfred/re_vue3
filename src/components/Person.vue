<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br />
        名：<input type="text" v-model="lastName"><br />
        全名：<span>{{ fullName }}</span><br />
        <button @click="changeFullName">修改全名</button>
    </div>
</template>

<script lang="ts" setup name="Person-alfred">
import { computed, ref } from 'vue'
let firstName = ref('zhang')
let lastName = ref('san')
let fullName = computed({
    get() {
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    },
    set(val) {
        [firstName.value, lastName.value] = val.split('-')
    }
})
function changeFullName() {
    fullName.value = 'li-si'
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
