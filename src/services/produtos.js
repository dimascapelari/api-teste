import { http } from "./config";

export default {
  listar: () => {
    return http.get("products?page=1&rows=6&sortBy=id&orderBy=DESC");
  },
};
