import ProductRegister from "./Components/ProductRegister"
import ProductList from "./Components/ProductList"
import CategoryRegister from "./Components/CategoryRegister"
import CategotyList from "./Components/CategotyList"
import useState from React

function App() {

const [visible, setVisivble]

  return (
    <div>
      <ProductRegister />
      <ProductList /> 
      <CategoryRegister />
      <CategotyList />
    </div>
  );
}

export default App;