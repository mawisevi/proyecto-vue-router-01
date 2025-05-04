<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/store/counter";

const useCounter = useCounterStore();

const { count, double } = storeToRefs(useCounter); //storeToRefs se llama directamente de la biblioteca pinia
const { increment } = useCounter;
</script>

<template>
    <h1>Home Counter: {{ count }}</h1>
    <h2>Double: {{ double }}</h2>
    <button @click="increment">Increment</button>
</template>
