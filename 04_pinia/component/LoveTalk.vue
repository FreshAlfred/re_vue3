<template>
    <div class="talk">
        <ul>
            <li v-for="item in talkList" :key="item.id">{{ item.content }}</li>
        </ul>
        <button @click="add">添加一句</button>
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { nanoid } from 'nanoid'
import axios from 'axios';
import { useTalkStore } from '@/store/talk'

const talkStore = useTalkStore()
let talkList = talkStore.talkList
talkStore.$subscribe(() => {
    localStorage.setItem('talkList', JSON.stringify(talkList))
})

async function add() {
    let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    talkList.unshift({ id: nanoid(), content })
}

</script>

<style scoped>
  .talk {
    background-color: #FF7F50;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>
