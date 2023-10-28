<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div>
    <router-link to="/" msg="Vite + Vue" style="padding-right: 50px"
      >Home</router-link
    >
    <router-link to="/funds" style="padding-right: 50px">Fonds</router-link>
    <router-link to="/news" style="padding-right: 50px">News</router-link>
    <router-link to="/pressreleases" style="padding-right: 50px"
      >Press Releases</router-link
    >
    <router-link to="/administrator" style="padding-right: 50px"
      >Administrator</router-link
    >
    <router-link to="/institutional" style="padding-right: 50px"
      >Institutional</router-link
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
  <h1>{{ msg }}</h1>
  <h2>General funds</h2>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/GeneralDashboard.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="../../../public/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
