<template>
  <div>
    <nav v-if="isHomeRoute" class="nav-container">
      <div class="logo-container">
        <img src="../../frontcrudproject/public/img/logo-icon.png" class="logo-icon">
      </div>
      <div class="router-container">
        <router-link to="/">Esportes</router-link>
        <router-link to="/about">Ao Vivo</router-link>
        <router-link to="/">Cassino</router-link>
        <router-link to="/about">Crash</router-link>
        <router-link to="/">Games Virtuais</router-link>
        <router-link to="/about">E-Sports</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'app',
  computed: {
    isHomeRoute() {
      return this.$route.path === '/betting';
    },
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.nav-container {
  padding: 30px;
  background-color: #23a05b;
  position: relative;
  z-index: 101;
  display: flex;
  align-items: center;
  height: 63px;
}

.logo-container {
  margin-right: 10px; /* Ajuste a margem direita para separar o ícone dos links */
}

.logo-icon {
  width: 120px; /* Ajuste o tamanho desejado */
  height: 80px; /* Ajuste o tamanho desejado */
}

.router-container {
  display: flex;
  align-items: center;
}

nav a {
  font-weight: bold;
  font-size: 0.9vw;
  color: white;
  margin-right: 10px;
}
</style>
