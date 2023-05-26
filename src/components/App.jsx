import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "react-use-cart";

import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";
import ShoppingCart from "../pages/ShoppingCart";
import History from "../pages/History";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "./Layout";
import Navigation from "./Navigation";

const Container = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
`;

const App = () => {
  return (
    <CartProvider>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Shop />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="history" element={<History />} />
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        draggable
        pauseOnHover
        theme="light"
      />
    </CartProvider>
  );
};

export default App;
