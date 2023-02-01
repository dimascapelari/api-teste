import axios from "axios";

export const http = axios.create({
  baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1/",
});

export const jsonteste = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});
