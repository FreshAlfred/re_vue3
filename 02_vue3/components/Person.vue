<template>
    <div class="person">
        <h2>当前n值：{{ n }}</h2>
        <button @click="increment">点我n + 1</button>
        <button @click="decrement">点我n - 1</button>
        <button @click="resetN">点我n归零</button>
        <hr />
        <img v-for="(item, index) in dogList" :key="index" :src="item as string" alt="@">
        <span v-show="dogList.isLoading">加载中......</span><br>
        <button @click="getDog">点我新增一条狗</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog';
let { n, increment, decrement, resetN } = useSum()
let { dogList, getDog } = useDog()
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

img {
    height: 100px;
    margin-left: 10px;
}
</style>
