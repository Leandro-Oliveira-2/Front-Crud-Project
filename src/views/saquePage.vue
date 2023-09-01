<template>
  <div class="container-body">
    <div class="centered-container">
      <h2 class="pb-2 border-bottom">Saque</h2>
      <form class="form" @submit.prevent="depositForm">
        <label class="label-input">
          <i class="far fa-envelope icon-modify"></i>
          <input type="text" placeholder="Valor" v-model="postData.value" >
        </label>
        <label class="label-input">
            <i class="fas fa-lock icon-modify"></i>
            <input type="text" placeholder="Descrição" v-model="postData.description" >
        </label>
        <button class="btn btn-second" type="submit">Enviar</button>
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const user = localStorage.getItem("UserId");

  export default {
      name: 'saquePage',
      data() {
        return {
          postData: {
          userId: user,
          transationType: "Deposito",
          description: "",
          value: "",
          status: "Concluído" 
          },
    };
  },
    methods:{
      async depositForm(){
        this.postData.userId = parseInt(this.postData.userId);
        this.postData.value = parseFloat(this.postData.value);
        this.postData.value = -+this.postData.value;
        console.log(this.postData.value)
        try {
      const response = await axios.post('http://localhost:8081/api/v1/transations/', this.postData);
      this.postData.value = '';
      this.postData.description = '';
      console.log("Transação Concluída com Sucesso!", response);
      } catch (error) {
        console.error("Erro na Transação: ", error);
      }
    }
}
    }
</script>

<style>
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
input:-webkit-autofill
{
    -webkit-box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
    -webkit-text-fill-color: #000 !important;
}

</style>