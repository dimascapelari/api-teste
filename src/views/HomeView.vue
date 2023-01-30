<template>
  <div class="home">
    <h1>Home</h1>

    <!-- <table border="1"> -->
    <table>
      <tr v-for="(product, index) in products" :key="index">
        <td><b>Name:</b> {{ product.name }}</td>
        <td><b>Brand:</b> {{ product.brand }}</td>
        <td><b>Description:</b> {{ product.description }}</td>
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
      products: [],
    };
  },

  mounted() {
    Product.listar().then((resposta) => {
      // console.log(resposta.data.products);
      this.products = resposta.data.products;
    });
  },
});
</script>
