<template>
    <input v-model="nome" type="text">
    <h1>Meu nome é: {{ nome }} </h1>
</template>

<script>
export default {
    name: 'LifeCycle',
    data () {
        return {
            nome: "ainda não sei"
        }
    },
    created() {
        setTimeout(()=>{
            this.nome = "Leandro"
        }, 2000);
    },
    mounted() {
        setTimeout(()=>{
            this.nome = "Pedro"
        }, 1000);
    }
}
    
</script>