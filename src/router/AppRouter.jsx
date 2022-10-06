import { Navigate, Routes, Route } from "react-router-dom"

import { Header } from "../ui/"
import { ProductPage } from "../product/pages/ProductPage"
import { HomePage } from "../home/pages/HomePage"


export const AppRouter = () => {
  return (   
    <>
    <Header />
    <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    </>
  )
}
