<template>
  <div id="myDiv" >
      <div class="container" :key="activeContent">
        <div class="content first-content">
          <div class="first-column">
            <h2 class="title title-primary">Olá Amigo!</h2>
            <p class="description description-primary">Insira seus dados pessoais</p>
            <p class="description description-primary">e comece a jornada conosco</p>
              <button id="signin" class="btn btn-primary" v-on:click="onSignInClick()">Login</button>
          </div>
          <div class="second-column">
            
              <h2 class="title title-second">Crie Sua Conta</h2>           
              <form  class="form" @submit.prevent="cadastroForm">
                <label class="label-input" for="">
                    <i class="far fa-user icon-modify"></i>
                    <input type="text" v-model="userData.name"   placeholder="Nome">
                </label>

                <label class="label-input" for="">
                    <i class="far fa-envelope icon-modify"></i>
                    <select id="gender" v-model="userData.gender" class="custom-select" required>
                      <option value="MASCULINO">Masculino</option>
                      <option value="FEMININO">Feminino</option>
                      <option value="OUTROS">Outros</option>
                    </select>
                </label>

                <label class="label-input" for="">
                    <i class="fas fa-lock icon-modify"></i>
                    <input type="text"  v-model="userData.email"  placeholder="email">
                </label>

                <label class="label-input" for="">
                    <i class="far fa-user icon-modify"></i>
                    <input type="text" v-model="userData.phone"   placeholder="Número de telefone">
                </label>

                <label class="label-input" for="">
                    <i class="far fa-envelope icon-modify"></i>
                    <input type="text"   v-model="userData.adress"  placeholder="Endereço">
                </label>

                <label class="label-input" for="">
                    <i class="fas fa-lock icon-modify"></i>
                    <input type="text"  v-model="userData.passwordHash"  placeholder="Confirme a senha">
                </label>
                <button class="btn btn-second"  type="submit">Cadastrar</button>
            </form>
          </div>
      </div>
      <div class="content second-content">
          <div class="first-column">
              <h2 class="title title-primary">Olá Amigo!</h2>
              <p class="description description-primary">Insira seus dados pessoais</p>
              <p class="description description-primary">e comece a jornada conosco</p>
              <button id="signup" class="btn btn-primary" >inscrever-se</button>
          </div>
          <div class="second-column">
              <h2 class="title title-second">Faça Login com sua conta</h2>
             
              <p class="description description-second">ou use seu Email cadastrado</p>
             
          </div>
      </div>
    </div>
'
  </div>
  <div class="alert alert-info" role="alert">
    Login feito com sucesso!
  </div>
  
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AboutView',
    data () {
      return {
         userData: {
          name: '',
          gender: '',
          email: '',
          phone: '',
          adress: '',
          secret: '',
          saldo: 0,
        },
        activeContent: 'signin'
      };
    },
    methods: {
      async cadastroForm (){
        console.log(this.userData)
        try {
          const response = await axios.post("http://localhost:8081/api/v1/users/", this.userData);
          console.log('Usuário cadastrado: ', response.data);
  
          this.userData = {
            name:  '',
            gender:'',
            email: '',
            phone: '',
            adress: '',
            secret: '',
            saldo: 0,
          };
        }catch (error) {
          console.error("Erro ao cadastrar usuário:", error)
        } 
      }, onSignInClick(){
        this.activeContent = this.activeContent === 'signin' ? 'signup' : 'signin';
        this.$router.push({ name: 'home' });
      }
    }
  
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
      font-family: 'Open Sans', sans-serif;
  }

  .custom-select {
    height: 45px;
    width: 100%;
    border: none;
    background-color: #ecf0f1;
    padding-left: 40px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path d="M7.646 11.854a.5.5 0 0 1-.707 0L2.93 7.828a.25.25 0 0 1 0-.354l.354-.354a.5.5 0 0 1 .708 0L8 10.293l4.007-4.007a.5.5 0 0 1 .708 0l.354.354a.25.25 0 0 1 0 .354L8.354 11.854a.5.5 0 0 1-.708 0z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 16px 16px;
    transition: background-color .5s;
}
.custom-select:hover {
    background-color: #ecf0f1;
}
.custom-select:focus {
    outline: none;
    background-color: #ecf0f1;
}

  .container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -2vh;
      height: 100vh;
      background-color: #6e2121;
      background: linear-gradient(-45deg, #ee7752, #ffcc33, #9cde9f, #23d5ab);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      height: 100vh;
  
  }
  
  .custom-select {
      height: 45px;
      width: 100%;
      border: none;
      background-color: #ecf0f1;
      padding-left: 40px;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path d="M7.646 11.854a.5.5 0 0 1-.707 0L2.93 7.828a.25.25 0 0 1 0-.354l.354-.354a.5.5 0 0 1 .708 0L8 10.293l4.007-4.007a.5.5 0 0 1 .708 0l.354.354a.25.25 0 0 1 0 .354L8.354 11.854a.5.5 0 0 1-.708 0z"/></svg>');
      background-repeat: no-repeat;
      background-position: right 10px center;
      background-size: 16px 16px;
      transition: background-color .5s;
  }
  .custom-select:hover {
      background-color: #ecf0f1;
  }
  .custom-select:focus {
      outline: none;
      background-color: #ecf0f1;
  }
  
  .slide-enter-active, .slide-leave-active {
    transition: opacity 0.8s, transform 0.8s;
  }
  .slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }
  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
  
    50% {
        background-position: 100% 50%;
    }
  
    100% {
        background-position: 0% 50%;
    }
  }
  
  .content {
      background-color: #fff;
      border-radius: 15px;
      width: 60vw;
      height: 75vh;
      justify-content: space-between;
      align-items: center;
      position: relative;
  
  
  }
  .content::before {
      content: "";
      position: absolute;
      background-image: url('/public/img/bet-apostas.jpg');
      background-position: center;
      background-size: cover;
      background-color: rgba(255, 255, 255, 0.6);
      width: 40%;
      height: 100%;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      left: 0;
  }
  .title {
      font-size: 28px;
      font-weight: bold;
      text-transform: capitalize;
  }
  .title-primary {
      color: #fff;
  }
  .title-second {
      margin-top: -10%;    
      color: #58af9b;
      margin-block-end: -10px;
  }
  .description {
      font-size: 14px;
      font-weight: 300;
      line-height: 30px;
  }
  .description-primary {
      color: #fff;
  }
  .description-second {
      color: #7f8c8d;
  }
  .btn {
      border-radius: 15px;
      text-transform: uppercase;
      color: #fff;
      font-size: 10px;
      padding: 10px 50px;
      cursor: pointer;
      font-weight: bold;
      width: 150px;
      align-self: center;
      border: none;
      margin-top: 1rem;
  }
  .btn-primary {
      background-color: transparent;
      border: 1px solid #fff;
      transition: background-color .5s;
  }
  .btn-primary:hover {
      background-color: #fff;
      color: #58af9b;
  }
  .btn-second {
      background-color: #58af9b;
      border: 1px solid #58af9b;
      margin-top: 10px;
      margin-block-end: -13%;
      transition: background-color .5s;
  }
  .btn-second:hover {
      background-color: #fff;
      border: 1px solid #58af9b;
      color: #58af9b;
  }
  .first-content {
      display: flex;
  }
  .first-content .second-column {
      z-index: 11;
  }
  .first-column {
      text-align: center;
      width: 40%;
      z-index: 10;
  }
  .second-column {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .social-media {
      margin: 1rem 0;
  }
  .link-social-media:not(:first-child){
      margin-left: 10px;
  }
  .link-social-media .item-social-media {
      transition: background-color .5s;
  }
  .link-social-media:hover .item-social-media{
      background-color: #58af9b;
      color: #fff;
      border-color: #58af9b;
  }
  .list-social-media {
      display: flex;
      list-style-type: none;
  }
  .item-social-media {
      border: 1px solid #bdc3c7;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      color: #95a5a6;
  }
  .form {
      display: flex;
      flex-direction: column;
      width: 55%;
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
  .label-input {
      background-color: #ecf0f1;
      display: flex;
      align-items: center;
      margin: 8px;
  }
  .icon-modify {
      color: #7f8c8d;
      padding: 0 5px;
  }
  
  
  
  .second-content {
      position: absolute;
      display: flex;
  }
  .second-content .first-column {
      order: 2;
      z-index: -1;
  }
  .second-content .second-column {
      order: 1;
      z-index: -1;
  }
  .password {
      color: #34495e;
      font-size: 14px;
      margin: 15px 0;
      text-align: center;
  }
  .password::first-letter {
      text-transform: capitalize;
  }
  
  .sign-in-js .first-content .first-column {
      z-index: -1;
  }
  
  .sign-in-js .second-content .second-column {
      z-index: 11;
  }
  .sign-in-js .second-content .first-column {
      z-index: 13;
  }
  
  .sign-in-js .content::before {
      left: 60%;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      animation: slidein 0.8s; 
  
      z-index: 12;
  }
  
  .sign-up-js .content::before {
      animation: slideout 0.8s; 
      z-index: 12;
  }
  
  .sign-up-js .second-content .first-column,
  .sign-up-js .second-content .second-column {
      z-index: -1;
  }
  
  .sign-up-js .first-content .second-column {
      z-index: 11;
  }
  
  .sign-up-js .first-content .first-column {
      z-index: 13;
  }
  
  .sign-in-js .first-content .second-column {
  
      z-index: -1;
      position: relative;
      animation: deslocamentoEsq 0.8s;
  }
  
  .sign-up-js .second-content .second-column {
      position: relative;
      z-index: -1;
      animation: deslocamentoDir 0.8s; 
  }
  
  @keyframes deslocamentoEsq {
  
      from {
          left: 0;
          opacity: 1;
          z-index: 12;
      }
  
      25% {
          left: -80px;
          opacity: .5;
      }
  
      50% {
          left: -100px;
          opacity: .2;
      }
  
      to {
          left: -110px;
          opacity: 0;
          z-index: -1;
      }
  }
  
  
  @keyframes deslocamentoDir {
  
      from {
          left: 0;
          z-index: 12;
      }
  
      25% {
          left: 80px;
          
      }
  
      50% {
          left: 100px;
          
          
      }
  
      to {
          left: 110px;
          z-index: -1;
      }
  }
  
  
  
  
  @keyframes slidein {
  
      from {
          left: 0;
          width: 40%;
      }
  
      25% {
          left: 5%;
          width: 50%;
      }
  
      50% {
          left: 25%;
          width: 60%;
      }
  
      75% {
          left: 45%;
          width: 50%;
      }
  
      to {
          left: 60%;
          width: 40%;
      }
  }
  
  @keyframes slideout {
  
      from {
          left: 60%;
          width: 40%;
      }
  
      25% {
          left: 45%;
          width: 50%;
      }
  
      50% {
          left: 25%;
          width: 60%;
      }
  
      75% {
          left: 5%;
          width: 50%;
      }
  
      to {
          left: 0;
          width: 40%;
      }
  }
  
  
  @media screen and (max-width: 1040px) {
      .content {
          width: 100%;
          height: 100%;
      }
  
      .content::before {
          width: 100%;
          height: 40%;
          top: 0;
          border-radius: 0;
      }
      .first-content, .second-content {
          flex-direction: column;
          justify-content: space-around;
      }
  
      .first-column, .second-column {
          width: 100%;
      }
  
      .sign-in-js .content::before {
          top: 60%;
          left: 0;
          border-radius: 0;
  
      }
  
      .form {
          width: 90%;
      }
  
      
  
      @keyframes deslocamentoEsq {
  
          from {
              top: 0;
              opacity: 1;
              z-index: 12;
          }
  
          25% {
              top: -80px;
              opacity: .5;
              
          }
  
          50% {
              top: -100px;
              opacity: .2;
              
          }
  
          to {
              top: -110px;
              opacity: 0;
              z-index: -1;
          }
      }
  
  
      @keyframes deslocamentoDir {
  
          from {
              top: 0;
              z-index: 12;
          }
  
          25% {
              top: 80px;
              
          }
  
          50% {
              top: 100px;
              
              
          }
  
          to {
              top: 110px;
              z-index: -1;
          }
      }
  
  
  
      @keyframes slidein {
  
          from {
              top: 0;
              height: 40%;
          }
  
          25% {
              top: 5%;
              height: 50%;
          }
  
          50% {
              top: 25%;
              height: 60%;
          }
  
          75% {
              top: 45%;
              height: 50%;
          }
  
          to {
              top: 60%;
              height: 40%;
          }
      }
  
      @keyframes slideout {
  
          from {
              top: 60%;
              height: 40%;
          }
  
          25% {
              top: 45%;
              height: 50%;
          }
  
          50% {
              top: 25%;
              height: 60%;
          }
  
          75% {
              top: 5%;
              height: 50%;
          }
  
          to {
              top: 0;
              height: 40%;
          }
      }
  
  }
  
  @media screen and (max-width: 740px) {
      .form {
          width: 50%;
      }
  }
  
  @media screen and (max-width: 425px) {
      .form {
          width: 100%;
      }
  }
  
  </style>
  