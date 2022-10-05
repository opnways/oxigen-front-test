import { Navigate, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { ProductPage } from "../product/pages/ProductPage"
import { HomePage } from "../home/pages/HomePage"


export const AppRouter = () => {
  return (   
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
    
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/*" element={<Navigate to="/" />} />

    </Routes>
    </>
  )
}
