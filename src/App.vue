<script setup>
import GeneralDashboard from "./components/general/GeneralDashboard.vue";
</script>

<template>
  <div>
    <router-link to="/" msg="Vite + Vue" style="padding-right: 50px"
      >Home</router-link
    >
    <router-link to="/funds" style="padding-right: 50px">Funds</router-link>
    <router-link to="/creations" style="padding-right: 50px"
      >Creations</router-link
    >
    <router-link to="/register" style="padding-right: 50px"
      >Register</router-link
    >

    <router-link
      v-if="!Logged"
      to="/login"
      style="padding-right: 50px"
      class="button"
      >Login
    </router-link>
    <button
      v-else
      type="button"
      style="padding-right: 50px"
      class="logoutButton"
      @click="logout"
    >
      Logout
    </button>
    <!-- -->
    <router-view></router-view>
  </div>
</template>
