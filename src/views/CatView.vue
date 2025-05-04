<script setup>
// import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFavoritoStore } from "@/store/favoritos";

const route = useRoute();
const router = useRouter();
const catImage = ref(null);
const catFound = ref(false);
const selectedCat = ref(null);

const useFavorito = useFavoritoStore();

const { add, findCat } = useFavorito;

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
        selectedCat.value= {
            id: cat.id,
            name: cat.name,
            image: cat.reference_image_id,
        };
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
        <div v-if="data">
            <img :src="catImage" alt="" style="width: 300px; height: auto" />
            <h1>Gato: {{ $route.params.name }}</h1>
            <button :disabled="findCat(selectedCat?.name)"
            @click="add(selectedCat)"
            class="btn btn-outline-primary mb-2">Agregar favorito</button>
        </div>
        <h1 v-if="error">Gato no encontrado...</h1>
        <button @click="back()" class="btn btn-outline-secondary">Volver</button>
    </div>
</template>
