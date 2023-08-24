<template>
    <h1>Primeiro template a dar certo</h1>
    <p>Digite se nome;</p>
    <input v-model="nome" type="text">
    <p>Digite Sua profissão;</p>
    <input v-model="profissao" type="text">
    <h1>Olá meu nome é {{ nome }} e minha profissão é {{ profissao }}</h1>
</template>

<script>
export default {
    name: 'FirtComponent',
    data () {
        return {
            nome: '',
            profissao: ''
        }
    }
}
</script>