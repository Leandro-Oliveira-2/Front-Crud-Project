<template>
  <nav-bar />
  <div class="container-fluid">
    <div class="row">
      <div id="myDiv" class="container col-12">
        <h1>Tela de extratos</h1>
        <table class="table table-dark table-striped">
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
              <td>{{ new Date(transacao.date).toLocaleString() }}</td>
              <td>{{ transacao.transationType }}</td>
              <td>{{ transacao.description }}</td>
              <td>
                {{
                  transacao.value
                    ? transacao.value.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })
                    : ""
                }}
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          class="btn btn-outline-light"
          v-on:click="mudarPag()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
            routerLink="betting"
          >
            <path
              d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import navBar from "@/views/navBar.vue";
import request from "../utils/request";

const userComplite = JSON.parse(localStorage.getItem("Usuario"));
export default {
  components: {
    "nav-bar": navBar,
  },
  name: "betting",
  data() {
    return {
      usuarios: [],
      user: {},
      userId: localStorage.getItem("UserId"),
      transacoes: [], // Adicione esta linha
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
    async transacoesUser() {
      try {
        const response = await request(
          `/transations/`,
          "GET",
          "",
          userComplite.accessToken,
          (r) => {
            this.transacoes = r.data;
            Alert("usuário atualizado com Sucesso!");
          }
        );
      } catch (error) {
        console.error("Erro ao listar usuários", error.response);
      }
    },
    mudarPag() {
      this.$router.push({ name: "betting" });
    },
  },
  mounted() {
    this.verificarUser();
    this.transacoesUser();
  },
};
</script>
  
<style>
@import "bootstrap/dist/css/bootstrap.css";
.container {
  height: auto;
  width: 100vw;
}

.nav-bar {
  background-color: aqua;
  font-size: small;
}

.table.table-dark.table-striped {
  width: 50%;
  font-size: 0.8vw;
  position: relative;
}

.btn.btn-secondary.dropdown-toggle {
  font-size: 1vw; /* Ajuste o tamanho da fonte conforme necessário */
  text-align: center;
}

button.btn.btn-outline-light {
  position: fixed;
  top: 90%;
  width: 80px;
  margin-left: -80%;
}

</style>


<!-- <h3 class="plansanet">Dados do usuário:</h3>
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
        </table> -->




<!--         <div id="myDiv" class="container col-10">
            <h1>Todos os Usuários </h1> 
         <table class="able table table-bordered">
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
         <button type="button" class="btn btn-outline-light" v-on:click="mudarPag()">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width="25"
     height="25"
     fill="currentColor"
     class="bi bi-arrow-left-square-fill"
     viewBox="0 0 16 16"
     routerLink="betting"
   >
     <path
       d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"
     />
   </svg>
 </button>
       </div> -->