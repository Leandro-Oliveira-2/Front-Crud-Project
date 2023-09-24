<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" routerLink="/">Snet Crud</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <router-link to="betting" class="nav-link" active-class="active">Clientes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="userScreen" class="nav-link" active-class="active">Extrato</router-link>  
        </li>
        <li class="nav-item">
          <router-link to="deposit" class="nav-link" active-class="active">Deposito</router-link>    
        </li>
        <li class="nav-item">
          <router-link to="saque" class="nav-link" active-class="active">Saque</router-link>  
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>


<script>
import axios from "axios";

export default {
  name: "nav-bar",
  computed: {
    isHomeRoute() {
      return this.$route.path === "/betting" || this.$route.path === "/alterUser";
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
    //get saldo
    async getSaldo() {
      const usuarioString = localStorage.getItem("Usuario");
      return (this.saldo = JSON.parse(usuarioString).user.saldo);
    },
    async FindUser() {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/v1/users/${this.userId}`
        );
        this.$emit('userFind',response.data )
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
@import "bootstrap/dist/css/bootstrap.css";



.logo-icon {
  margin-left: 20px;
  width: 120px; /* Ajuste o tamanho desejado */
  height: 80px; /* Ajuste o tamanho desejado */
}


</style>
