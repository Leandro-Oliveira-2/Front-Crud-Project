<template>
  <div>
    <nav v-if="isHomeRoute" class="nav">
      <div class="">
        <img
          src="../../frontcrudproject/public/img/logo-icon.png"
          class="logo-icon"
        />
      </div>
      <div class="router-container">
       
        <router-link to="/deposit">Deposito</router-link>
        <router-link to="/saque">Saque</router-link>
        
        
      </div>
      <div class="saldo">
        Saldo:
        {{ this.saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) }}
      </div>
      
      <form
        class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
        style="width: 400px"
      >
        <input
          type="search"
          class="form-control"
          placeholder="Search..."
          aria-label="Search"
          v-model="userId"
          @keyup.enter="FindUser"
          id="searchInput"
        />
      </form>
      <router-link to="/" class="sair"><b>SAIR</b></router-link>

      <!-- Button trigger modal -->
    </nav>
    <router-view />
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "app",
  computed: {
    isHomeRoute() {
      return this.$route.path === "/betting";
    },
  },
  data() {
    return {
      saldo: 0,
      user: {},
      userId: "",
    };
  },
  methods: {
    async getSaldo() {
      const usuarioString = localStorage.getItem("Usuario");
      return (this.saldo = JSON.parse(usuarioString).user.saldo);
    },
    async FindUser() {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/v1/users/${this.userId}`
        );
        console.log(response)
        this.user = response.data;
        localStorage.setItem("userFind", JSON.stringify(response.data));
      } catch (error) {
        alert("Usuário não encontrado");
      }
    },
  },
  mounted() {
    this.getSaldo();
  },
};
</script>

<style>

.saldo {
  position: relative;
  top: 0; /* Pode ajustar conforme necessário */
  right: -800px;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #49502c;
}
.nav {
  background-color: #23a05b;
  position: relative;
  z-index: 101;
  display: flex;
  align-items: center;
  height: 75px;
}

.logo-container {
  margin-right: 10px; /* Ajuste a margem direita para separar o ícone dos links */
}

.sair{
  position: relative;
  top: 0; /* Pode ajustar conforme necessário */
  right: -650px;
  color: rgb(248, 248, 248);
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
