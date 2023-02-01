<template>
  <h1>Sweet Alert</h1>

  <button @click="mostrarAlertaPadrao">Alerta Padrão</button>
  <button @click="mostrarAlertaSucesso">Alerta de Sucesso</button>
  <button @click="mostrarAlertaErro">Alerta de Erro</button>
  <hr />
  <br /><br />
  <input type="text" v-model="auth" />

  <p>Valor do input: {{ auth }}</p>
  <button @click="mensagem">Alerta</button>

  <p>auth/NEWPASSWORD_FAILURE</p>
  <p>auth/NEWPASSWORD_SUCCESS</p>
</template>

<script>
export default {
  data() {
    return {
      auth: "",
    };
  },

  methods: {
    mostrarAlertaPadrao() {
      this.$swal("Texto Padrão do alerta");
    },
    mostrarAlertaSucesso() {
      this.$swal("Sucesso", "Mensagem de sucesso", "success");
    },
    mostrarAlertaErro() {
      this.$swal("Erro", "Erro ao cadastrar os dados", "error");
    },

    mensagem() {
      if (this.auth === "auth/NEWPASSWORD_FAILURE") {
        this.mostrarAlertaErro();
        this.auth = "";
      } else if (this.auth === "auth/NEWPASSWORD_SUCCESS") {
        this.mostrarAlertaSucesso();
        this.auth = "";
      } else {
        this.mostrarAlertaPadrao();
        this.auth = "";
      }
    },
  },
};
</script>

<style></style>
