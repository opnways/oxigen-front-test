import axios from "axios";

 export async function getIndividualProduct(id) {
    return axios({
      method: "GET",
      url: `https://front-test-api.herokuapp.com/api/product/${id}`,
    });
  }