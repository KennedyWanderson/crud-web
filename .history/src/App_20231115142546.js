import ProductRegister from "./Components/ProductRegister"
import ProductList from "./Components/ProductList"
import CategoryRegister from "./Components/CategoryRegister"
import CategotyList from "./Components/CategotyList"
import React, { useState } from 'react';

function App() {

const [visible, setVisible] = useState(1)

function selectComponent(){
  if(visible === 1){
    return <ProductRegister />
  } else if(visible === 2) {
    return<ProductList />
  } else if(visible === 3) {
    <CategoryRegister />
  } else {
    <CategotyList />
  }
}

  return (
    <div>
      <button onClick={() => {setVisible(2)}}>Click</button>
      {selectComponent()}
    </div>
  );
}

export default App;
