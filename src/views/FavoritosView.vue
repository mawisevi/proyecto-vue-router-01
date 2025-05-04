<script setup>
import { useFavoritoStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";

const useFavorito = useFavoritoStore();

const { favoritos } = storeToRefs(useFavorito);
const { remove } = useFavorito;
</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul class="list-group" v-else>
        <li v-for="cat in favoritos" :key="cat.id" class="list-group-item">
            <div> {{ cat.id }} - {{ cat.name }}</div>
            <router-link
                class="btn btn-sm btn-outline-primary me-2 mt-2"
                :to="`/gatos/${cat.name}`"
            >
                Más info
            </router-link>
            <button
                class="btn btn-sm btn-outline-danger  mt-2"
                @click="remove(cat.id)"
            >
                Eliminar
            </button>
        </li>
    </ul>
</template>