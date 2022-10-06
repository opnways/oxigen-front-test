import { useState } from "react";
import StorageContext from "../context";
import { AppRouter } from "./router/AppRouter"

export const App = () => {
  const [readLocalStorage, setReadLocalStorage] = useState(false);

  function toogleReadLocalStorage() {
    setReadLocalStorage((readLocalStorage) =>
      readLocalStorage === false ? true : false
    );
  }
    return (
        <>
        <StorageContext.Provider
        value={{
          readLocalStorage,

          toogleReadLocalStorage,
        }}
      > <AppRouter/></StorageContext.Provider>
     
        </>
    )
}
