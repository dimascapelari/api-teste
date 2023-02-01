import { jsonteste } from "./config";

export default {
  listar: () => {
    return jsonteste.get("10");
  },
};
