<template>
    <div class="container">
    <div class="col-12">
        <h2 class="pb-2 border-bottom">Saque</h2>
    </div>
    <div class="col-12">
        <form>
            <div class="col">
            <div class="mb-3" >
            <label  for="agencia" class="form-label">Agência</label>
            <input type="text" class="form-control" id="nome" formControlName="agencia">
            </div>
        </div>
        <div class="col">
            <div class="mb-3">
            <label for="numeroConta" class="form-label">Número da Conta</label>
            <input type="text" class="form-control" id="nome" formControlName="numeroConta">
            </div>
        </div>
        <div class="col">
            <div class="mb-3">
            <label for="valor" class="form-label">Valor</label>
            <input type="text" class="form-control" id="nome" formControlName="valor">
            </div>
        </div>
        <div class="col mb-12">
            <button type="submit" class="btn mb-2 col-3 btn-primary">
            Sacar
            </button>
        </div>
        </form>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'bankDeposit',
        data(){
            retorn:{

            }
        }
    }
</script>

<style>
    label.form-label {
  color: rgb(0, 0, 0);
  font-size: 20px;
}

h2{
  margin-top: -15%;
  margin-block-end: 20px;
}


.container{
  width: 550px;
  height: 550px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

}

button.btn.btn-primary {
  background-size: 50px;
  font-size: 28px;
  margin-top: 10%;
  border-radius: 5%;
}


h2.pb-2.border-bottom {
  display: flex;
  justify-content: center;
}


.col.mb-12 {
  top: -10%;
  display: flex;
  justify-content: center;
}


.col-12 {
  margin-top: -30%;
}
</style>