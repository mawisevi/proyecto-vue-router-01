<script setup>
// import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";

const route = useRoute();
const router = useRouter();
const catImage = ref(null);
const catFound = ref(false);

const back = () => {
    router.push("/gatos");
};

// const getData = async () => {
//     try {
//         const { data } = await axios.get("https://api.thecatapi.com/v1/breeds");

//         const cat = data.find(
//             (breed) => breed.name.toLowerCase() === route.params.name.toLowerCase()
//         );

//         if (cat && cat.reference_image_id) {
//             catImage.value = `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`;
//             catFound.value = true;
//         } else {
//             catFound.value = false;
//         }
//     } catch (error) {
//         console.log(error);
//         catFound.value = false;
//     }
// };

onMounted(async () => {
    await getData("https://api.thecatapi.com/v1/breeds");

    const cat = data.value.find(
        (breed) => breed.name.toLowerCase() === route.params.name.toLowerCase()
    );

    if (cat && cat.reference_image_id) {
        catImage.value = `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`;
        catFound.value = true;
    } else {
        catFound.value = false;
    }
});



const { getData, data, error, loading } = useGetData(`https://cdn2.thecatapi.com/v1/gatos/${route.params.name}`);

getData();
</script>

<template>
    <div v-if="loading">Cargando...</div>
    <div v-else>
        <div v-if="catFound">
            <img :src="catImage" alt="" style="width: 300px; height: auto" />
            <h1>Gato: {{ $route.params.name }}</h1>
        </div>
        <h1 v-if="error">Gato no encontrado...</h1>
        <button @click="back()">Volver al listado</button>
    </div>
</template>
