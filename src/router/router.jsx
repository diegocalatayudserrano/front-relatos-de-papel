import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NotFound } from "../views/NotFound";
import Landing from "../views/Landing"
import BookDetail from "../views/BookDetail";
import Checkout from "../views/Checkout";

export const GlobalRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/home" element={<Layout> <Home/> </Layout>}/>
                <Route path="/book/:id" element={<Layout> <BookDetail/> </Layout>}/>
                <Route path="/checkout/" element={<Layout> <Checkout/> </Layout>}/>
                <Route path="*" element={<Layout> <NotFound/> </Layout>}/>
            </Routes>
        </BrowserRouter>
    )
}

const Layout = ({children}) => (
    <>
        <Header />
        <div className="h-100">
            {children}
        </div>
    </>
);