<script setup>
// import axios from 'axios';
// import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useGetData } from '@/composables/getData'

// const gatos = ref([]);

const { getData, data, error, loading } = useGetData();

// const getData = async () => {
//     try {
//         const {data} = await axios.get("https://api.thecatapi.com/v1/breeds");
//         // console.log(data);
//         gatos.value=data;

//     } catch (error) {
//         console.log(error);
//     }
// };

// getData();

getData("https://api.thecatapi.com/v1/breeds");
</script>

<template>
    <h1>Gatos</h1>
    <p v-if="loading">Cargando...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    <div v-if="data">
        <ul class="list-group">
            <li v-for="cat in data" class="list-group-item">
                <router-link :to="`/gatos/${cat.name}`">
                    {{ cat.name }} </router-link>
            </li>
        </ul>

    </div>

</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>