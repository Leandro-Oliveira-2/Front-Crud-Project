<template>
    <div class="container-body">
      <div class="centered-container">
        <h2 class="pb-2 border-bottom">Deposito</h2>
        <form class="form">
          <label class="label-input">
            <i class="far fa-envelope icon-modify"></i>
            <input type="text" placeholder="Valor"  >
          </label>
          <label class="label-input">
              <i class="fas fa-lock icon-modify"></i>
              <input type="text" placeholder="Descrição">
          </label>
          <button class="btn btn-second" type="submit">Enviar</button>
          </form>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        name: 'saquePage',
        data(){
            retorn:{
              
            }
        },
        methods:{
          putValue(){
  
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