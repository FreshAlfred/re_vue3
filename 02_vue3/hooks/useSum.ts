import { ref, onMounted } from 'vue'
export default function() {

    let n = ref(0)
    function increment() {
        n.value++
    }
    function decrement() {
        n.value--
    }
    function resetN() {
        n.value = 0
    }
    onMounted(() => {
        increment()
    })

    return { n, increment, decrement, resetN }
}
