import ProductRegister from "./Components/ProductRegister"
import ProductList from "./Components/ProductList"
import CategoryRegister from "./Components/CategoryRegister"
import CategotyList from "./Components/CategotyList"
import React, { useState } from 'react';
import { Container } from "@mui/material";
import Menu from "./Components/Menu";

function App() {




  return (
    <div>
      <Menu />
      <Container>
        <button onClick={() => {setVisible(1)}}>Cadatros de produtos</button>
        <button onClick={() => {setVisible(2)}}>Listagem de produtos</button>
        <button onClick={() => {setVisible(3)}}>Cadastro de categorias</button>
        <button onClick={() => {setVisible(4)}}>Listagem de categorias</button>
        {selectComponent()}
      </Container>
    </div>
  );
}

export default App;
