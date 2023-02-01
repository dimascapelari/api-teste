<template>
  <div class="home">
    <h1>Home</h1>
    <p>Nome: {{ produto.nome }}</p>
    <p>Quantidade: {{ produto.quantidade }}</p>
    <p>Valor: {{ produto.valor }}</p>
    <form @submit.prevent="salvar">
      <label>Nome</label>
      <input type="text" placeholder="Nome" v-model="produto.nome" />
      <br /><br />
      <label>Quantidade</label>
      <input
        type="number"
        placeholder="Quantidade"
        v-model="produto.quantidade"
      />
      <br /><br />
      <label>Valor</label>
      <input type="text" placeholder="Valor" v-model="produto.valor" />
      <br /><br />
      <button>Salvar</button>
    </form>
    <hr />
    <!-- <table border="1"> -->
    <table>
      <tr v-for="(product, index) in products" :key="index">
        <td><b>Name:</b> {{ product.name }}</td>
        <td><b>Brand:</b> {{ product.brand }}</td>
        <td><b>Description:</b> {{ product.description }}</td>
        <td>{{ product.photo }}</td>
      </tr>
    </table>
  </div>
</template>

<!-- <script lang="ts"> -->
<script>
import { defineComponent } from "vue";
import Product from "../services/produtos";

export default defineComponent({
  name: "HomeView",

  data() {
    return {
      produto: {
        nome: "",
        quantidade: "",
        valor: "",
      },
      products: [],
      photo: "product.photo",
    };
  },

  mounted() {
    Product.listar().then((resposta) => {
      console.log(resposta.data.products);
      this.products = resposta.data.products;
    });
  },

  methods: {
    /* salvar() {
      // alert(this.produto.nome);
      Product.salvar(this.produto).then((resposta) => {
        alert("Salvo com sucesso!");
      });
    },*/
  },
});
</script>
