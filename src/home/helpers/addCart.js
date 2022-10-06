import axios from "axios";

export async function addItemToCart({ id, colorCode, storageCode }) {
  return axios({
    method: "POST",
    url: "https://front-test-api.herokuapp.com/api/cart",
    data: {
      id: id,
      colorCode: colorCode,
      storageCode: storageCode,
    },
  });
}
