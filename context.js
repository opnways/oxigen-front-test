import { createContext } from "react";
const StorageContext = createContext({
  readLocalStorage: false,
  toogleReadLocalStorage: () => {},
});
export default StorageContext;
