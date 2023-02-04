<template>
  <h1>Teste View</h1>
  <hr />
  <p>Dados: {{ dados }}</p>
  <hr />
  <p><b>userId:</b> {{ dados.userId }}</p>
  <p><b>id:</b> {{ dados.id }}</p>
  <p><b>title:</b> {{ dados.title }}</p>
  <p><b>body:</b> {{ dados.body }}</p>
  <hr />
  <hr />

  <ul v-for="dado in dados" :key="dado.id">
    <li>{{ dado }}</li>
  </ul>
</template>

<script>
import TesteJson from "../services/teste";

export default {
  data() {
    return {
      dados: "",
    };
  },
  mounted() {
    TesteJson.listar().then((resposta) => {
      console.log(resposta.data);
      this.dados = resposta.data;
    });
  },
};
</script>

<style></style>
