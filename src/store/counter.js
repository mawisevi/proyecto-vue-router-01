import { defineStore } from 'pinia'
import { computed, ref } from "vue"

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

export const useCounterStore = defineStore("counter", () => {
    const count = ref(0);

    const increment = () => count.value++;

    const double = computed(() => count.value * 2);

    return {
        count,
        increment,
        double,
    };
});




// export const useCounterStore = defineStore('counter', {
//     // data reactiva
//     state: () => ({
//         count: 0,
//     }),
//     // methods
//     actions: {
//         increment() {
//             this.count++;
//         },
//     },
//     // computed
//     getters: {
//         double: (state) => state.count * 2,
//     },
// });