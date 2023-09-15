<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar Esquerda -->
      <aside class="sidebar-left col-2">
        <nav class="dp-menu">
          <ul>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Futebol</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Basquete</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Beisebol</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Hóquei</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Tênis</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Futebol</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Basquete</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Beisebol</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Hóquei</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Tênis</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Futebol</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Basquete</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Beisebol</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Hóquei</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Tênis</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Futebol</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Basquete</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Beisebol</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Hóquei</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Tênis</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Futebol</a>
            </li>
            <li class="teste" style="margin-block-end: 20px">
              <a href="#">Basquete</a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Conteúdo Principal -->
      <div id="myDiv" class="container col-6">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id">
              <td>{{ usuario.id }}</td>
              <td>{{ usuario.name }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.adress }}</td>
              <td>
                {{ usuario.saldo ? usuario.saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : '' }}

              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sidebar Direita -->
      <!-- Sidebar Direita -->
      <aside class="sidebar-right col-4">
        <h3 class="plansanet">Dados do usuário:</h3>
        <h4 id="name">Nome: {{ user.fullname }}</h4>
        <p id="info" class="mb-7 opacity-70">
          <b>Gênero:</b> {{ user.gender }}<br />
          <b>E-mail:</b> {{ user.email }}<br />
          <b>Endereço</b>: {{ user.adress }}<br />
          <b>Telefone</b>: {{ user.phone }}
        </p>

        <h4>Transações do Usuário:</h4>
        <table class="table transations">
          <thead>
            <tr>
              <th class="id">id</th>
              <th class="date">Date</th>
              <th class="transaction">Transaction Type</th>
              <th class="description">Description</th>
              <th class="value">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transacao in transacoes" :key="transacao.id">
              <td>{{ transacao.id }}</td>
              <td>{{  new Date(transacao.date).toLocaleString()  }}</td>
              <td>{{ transacao.transationType }}</td>
              <td>{{ transacao.description }}</td>
              <td>
                {{ transacao.value ? transacao.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : '' }}
              </td>
            </tr>
          </tbody>
        </table>
      </aside>
    </div>
  </div>
</template>


    
<script>
import axios from "axios";

export default {
  name: "betting",
  data() {
    return {
      usuarios: [],
      user: {},
      userId: localStorage.getItem("UserId"),
      transacoes: [] // Adicione esta linha
    };
  },
  methods: {
    verificarUser() {
      if (this.userId === null || this.userId == "") {
        this.$router.push({ name: "about" });
      }
      const usuarioString = localStorage.getItem("Usuario");
      return (
        (this.user = JSON.parse(usuarioString).user), console.log(this.user)
      );
    },
    async listarUsers() {
      try {
        const response = await axios.get("http://localhost:8081/api/v1/users/");
        this.usuarios = response.data;
      } catch (error) {
        console.error("Erro ao listar usuários", error.response);
      }
    },
    async transacoesUser() {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/v1/transations/list/${this.userId}`
        );
        
        this.transacoes = response.data.transations;
      } catch (error) {
        console.error("Erro ao listar usuários", error.response);
      }
    },
  },
  mounted() {
    this.listarUsers();
    this.verificarUser();
    this.transacoesUser();
  },
};
</script>
    
<style>
@import "bootstrap/dist/css/bootstrap.css";
.container-fluid.row {
  margin: 0 -15px; /* Remova as margens negativas que o Bootstrap aplica */
  height: 100vh;
  width: 50%;
}

.date{
  width: 2%;
}

.id{
  width: 0.1%;
}
.transaction{
  width: 0.5%;
}

.description{
  width: 0.6%;
}

.value{
  width: 4%;
}


.sidebar-left,
.sidebar-right {
  margin: 0; /* Remova qualquer margem padrão que possa estar sendo aplicada */
}

.container.col-6 {
  margin-top: -15%;
  height: 160vh;
  font-size: 0.8vw;
}

.table.transations{
  width:700px;
  font-size: 0.8vw;
  background-color: blue;
}
.sidebar-left {
  border-radius: 20px;
  display: block;
  height: 100%;
  background: #eba020;
  font-size: 0.65em;
  position: sticky;
  top: 0;
}
</style>
  