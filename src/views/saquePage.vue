<template>
  <div class="container-body">
    <div class="centered-container">
      <h2 class="pb-2 border-bottom">Saque</h2>
      <form class="form" @submit.prevent="saqueForm">
        <label class="label-input">
          <i class="far fa-envelope icon-modify"></i>
          <input type="text" placeholder="Valor" v-model="postData.value" />
        </label>
        <label class="label-input">
          <i class="fas fa-lock icon-modify"></i>
          <input
            type="text"
            placeholder="Descrição"
            v-model="postData.description"
          />
        </label>
        <button class="btn btn-second" type="submit">Enviar</button>
      </form>
    </div>
  </div>

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
</template>

<script>
import Alert from '@/utils/Alert'
const userComplite = JSON.parse(localStorage.getItem("Usuario"));
const user = localStorage.getItem("UserId");
import request from "../utils/request";

export default {
  name: "saquePage",
  data() {
    return {
      postData: {
        userId: user,
        transationType: "Saque",
        description: "",
        value: "",
        status: "Concluído",
      },
    };
  },
  methods: {
    async saqueForm() {
      this.postData.userId = parseInt(this.postData.userId);
      this.postData.value = parseFloat(this.postData.value);
      this.postData.value = this.postData.value;

      console.log(this.postData)
      console.log(userComplite.accessToken)
      try {
         request(
          `/transations/saque`,
          "POST",
          this.postData,
          userComplite.accessToken,
          (r) => {
            Alert("Saque feito com Sucesso!");
            this.postData.value = "";
            this.postData.description = "";
            const userAtualizado = JSON.parse(localStorage.getItem("Usuario"));
            userAtualizado.user.saldo = response.data.saldoAtual;
            localStorage.setItem("Usuario", JSON.stringify(userAtualizado));
          }
        );
      } catch (error) {
        Alert("Erro na transação!", error);
      }
    },
    verificarUser() {
      const user = localStorage.getItem("UserId");
      console.log(user);
      if (user === null || user == "") {
        this.$router.push({ name: "about" });
      }
    },
    mudarPag() {
      this.$router.push({ name: "betting" });
      localStorage.setItem("userEdit", 1);
    },
  },
};
</script>

<style>
button.btn.btn-outline-light {
  position: fixed;
  top: 90%;
  width: 80px;
  margin-left: 80px;
}

.container-body {
  width: 100vw;
  height: 100vh;
  background-color: #b9e2c7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered-container {
  width: 550px;
  height: 550px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin-block-end: 10vh;
}

h2 {
  margin-bottom: 60px;
}

.btn-second {
  font-size: 20px;
  background-color: #58af9b;
  text-align: center; /* Adicionado para centralizar o texto */
}

.btn-second:hover {
  background-color: #fff;
  border: 1px solid #58af9b;
  color: #58af9b;
  text-align: center; /* Mantido para o estado de hover */
}

.form {
  display: flex;
  flex-direction: column;
  width: 80%;
}
.form input {
  height: 45px;
  width: 100%;
  border: none;
  background-color: #ecf0f1;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
  -webkit-text-fill-color: #000 !important;
}
</style>