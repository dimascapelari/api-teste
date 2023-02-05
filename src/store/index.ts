import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    storeProdutos: [
      {
        nome: "Dimas",
        sobrenome: "Capelari",
      },
    ],
   // baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1/",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
