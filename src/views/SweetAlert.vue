<template>
  <h1>Sweet Alert 2</h1>
  <p>
    Link:
    <a href="https://sweetalert2.github.io/" target="_blank"
      >https://sweetalert2.github.io/</a
    >
  </p>
  <p>
    Exemplos:
    <a href="https://avil13.github.io/vue-sweetalert2/" target="_blank"
      >https://avil13.github.io/vue-sweetalert2/</a
    >
  </p>
  <p>
    Documentação:
    <a href="https://www.npmjs.com/package/vue-sweetalert2" target="_blank"
      >https://www.npmjs.com/package/vue-sweetalert2</a
    >
  </p>

  <button @click="mostrarAlertaPadrao">Alerta Padrão</button>
  <button @click="mostrarAlertaSucesso">Alerta de Sucesso</button>
  <button @click="mostrarAlertaErro">Alerta de Erro</button>
  <button @click="mostrarAlertaCanto">Alerta no canto</button>
  <button @click="toastTopEnd">Alerta menor no canto</button>
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
    mostrarAlertaCanto() {
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    toastTopEnd() {
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        icon: "success",
        title: "Hi man",
        text: "is a good day!",
      });
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
