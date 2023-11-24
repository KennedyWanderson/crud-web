import ProductRegister from "./Components/ProductRegister"
import ProductList from "./Components/ProductList"
import CategoryRegister from "./Components/CategoryRegister"
import CategotyList from "./Components/CategotyList"
import React, { useState } from 'react';

function App() {

const [visible, setVisible] = useState(1)

function selectComponent(){
  if(visible === 1){
    return <ProductRegister text={"Componente de Cadastro de produtos"} />
  } else if(visible === 2) {
    return <ProductList text={"Componente de listagem de produtos"}/>
  } else if(visible === 3) {
    return <CategoryRegister text={"Componente de Cadastro"}/>
  } else {
    return <CategotyList text={"Componentes de Cadastro"}/>
  }
}

  return (
    <div>
      <button onClick={() => {setVisible(1)}}>Cadatros de produtos</button>
      <button onClick={() => {setVisible(2)}}>Listagem de produtos</button>
      <button onClick={() => {setVisible(3)}}>Cadastro de categorias</button>
      <button onClick={() => {setVisible(4)}}>Listagem de categorias</button>
      {selectComponent()}
    </div>
  );
}

export default App;
