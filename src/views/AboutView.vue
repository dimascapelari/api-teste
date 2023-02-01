<template>
  <div class="about">
    <h1>About</h1>
    <p>Novo método virá aqui</p>
    <p>{{ aboutProducts }}</p>

    <hr />

    <p>Resultado: {{ resultado }}</p>
    <input type="number" v-model="resultado" />
    <button @click="somar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "AboutView",

  data() {
    return {
      aboutProducts: [],
      resultado: 0,
    };
  },

  computed: {
    ...mapState({
      storeProdutos: (state) => state.storeProdutos,
      baseURL: (state) => state.baseURL,
    }),

    ...mapGetters({}),
  },

  mounted() {
    // Product.listar().then((resposta) => {
    //   console.log(resposta.data.products);
    //   this.products = resposta.data.products;
    // });
    this.aboutProducts = this.storeProdutos;
    console.log(this.baseURL);
  },
  methods: {
    somar() {
      this.resultado = this.resultado + 1;
    },
    subtrair() {
      this.resultado = this.resultado - 1;
    },
  },
};
</script>
