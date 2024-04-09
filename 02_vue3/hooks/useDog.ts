import { reactive, onMounted } from "vue";
import axios from "axios";

export default function () {
    let dogList = reactive<String[]>([])
    async function getDog() {
        try {
            let { data } = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(data.message)
        } catch (error) {
            const arr = error as Error
            console.log(arr.message)
        }
        
    }

    onMounted(() => {
        getDog()
    })
    return { dogList, getDog }
}