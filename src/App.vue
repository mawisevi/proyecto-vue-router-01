<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
    <nav class="navbar bg-secondary ">
      <div class="container-fluid">
        <router-link class="navbar-brand text-white" to="/">
          <img alt="Vue logo" src="@/assets/logo.svg" width="30" height="24" class="d-inline-block align-text-top " />
          CatAPI
        </router-link>
        <div>
          <router-link 
          active-class="active"
          class="btn btn-outline-light me-2" 
          to="/"
          >Home</router-link>

          <router-link active-class="active"
          class="btn btn-outline-light me-2" 
          to="/gatos"
          >Gatos</router-link>

          <router-link active-class="active"
          class="btn btn-outline-light" 
          to="/favoritos"
          >Favoritos</router-link>
        </div>
      </div>
    </nav>


    <div class="container">
      <RouterView />
    </div>
</template>

