import axios from "axios";
const { VITE_SERVER_API } = import.meta.env;
export async function addItemToCart({ id, colorCode, storageCode }) {
  return axios({
    method: "POST",
    url: `${VITE_SERVER_API}api/cart`,
    data: {
      id: id,
      colorCode: colorCode,
      storageCode: storageCode,
    },
  });
}
