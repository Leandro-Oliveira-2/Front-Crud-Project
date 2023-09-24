<template>
  <nav-bar />
  <body>
    <div class="container-fluid">
      <div class="row">
        <div id="myDiv" class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="pb-2">Clientes</h2>
            </div>
            <div class="col-12">
              <button
                type="button"
                class="btn btn-light"
                v-on:click="registrerScreen()"
                style="margin: 0 8% 0"
              >
                Cadastrar
              </button>
              <a>{{ " " }}</a>
              <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Saldos</th>
                    <th style="text-align: center">Alterações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="usuario in usuarios" :key="usuario.id">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.name }}</td>
                    <td>{{ usuario.email }}</td>
                    <td>{{ usuario.adress }}</td>
                    <td>
                      {{
                        usuario.saldo
                          ? usuario.saldo.toLocaleString("pt-BR", {
                              minimumFractionDigits: 2,
                            })
                          : ""
                      }}
                    </td>
                    <td>
                      <div class="dropdown">
                        <button
                          class="btn btn-sm btn-light dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style="text-align: center"
                        >
                          Ações
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a
                              class="dropdown-item"
                              v-on:click="editPag(usuario)"
                              >Editar</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="javascript:void(0)"
                              v-on:click="excluirUsuario(usuario.id)"
                              >Excluir</a
                            >
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="txt-pag">
            <!-- <pagination-controls (pageChange)="p = $event"></pagination-controls> -->
          </div>
        </div>
      </div>
    </div>
  </body>
  <footer-view />
</template>


    
<script>
import axios from "axios";
import navBar from "@/views/navBar.vue";
import request from "../utils/request";
import footer from "../views/FooterView.vue";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const userComplite = JSON.parse(localStorage.getItem("Usuario"));

export default {
  components: {
    "nav-bar": navBar,
    "footer-view": footer,
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
      localStorage.setItem("entrei", 1);

      if(localStorage.getItem("userEdit") == 1){
        localStorage.setItem("userEdit", 0);
        window.location.reload();
      }
      if (this.userId === null || this.userId == "") {
        this.$router.push({ name: "about" });
      }

      const usuarioString = localStorage.getItem("Usuario");
      return (this.user = JSON.parse(usuarioString).user);
    },
    editPag(user) {
      localStorage.setItem("userAlter", JSON.stringify(user));
      localStorage.setItem("userEdit", 1);

      this.$router.push({ name: "alterUser" });
    },
    registrerScreen() {
      this.$router.push({ name: "about" });
    },
    async listarUsers() {
      try {
        const response = await request(
          `/users/`,
          "GET",
          "",
          userComplite.accessToken,
          (r) => {
            this.usuarios = [...r.data].sort(
              (a, b) => parseInt(a.id) - parseInt(b.id)
            );
            Alert("usuário atualizado com Sucesso!");
          }
        );
        this.usuarios = response.data;
      } catch (error) {
        console.error("Erro ao listar usuários", error.response);
      }
    },
    excluirUsuario(id) {
      console.log(id);
      request(`/users/${id}`, "DELETE", {}, userComplite.accessToken, (r) => {
        Alert("usuário deletado com Sucesso!");
      });
    },
  },
  mounted() {
    this.listarUsers();
    this.verificarUser();
  },
};
</script>
    
<style>
@import "bootstrap/dist/css/bootstrap.css";

.txt-pag {
  margin-block-end: 15%;
}

.pb-2 {
  margin: 0 50% 0;
}

.container {
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #89f3ac;
  height: max-content;
  width: 100vw;
  overflow: visible;
  margin-block-end: -25%;
}

.nav-bar {
  background-color: aqua;
  font-size: small;
}

.table.table-dark.table-striped {
  margin: 0 8% 0;
  width: 900px;
  font-size: 0.8vw;
  position: relative;
  margin-block-end: 5%;
}

.btn.btn-secondary.dropdown-toggle {
  font-size: 1vw; /* Ajuste o tamanho da fonte conforme necessário */
  text-align: center;
}
</style>
  