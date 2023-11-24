import ProductRegister from "./Components/ProductRegister"
import ProductList from "./Components/ProductList"
import CategoryRegister from "./Components/CategoryRegister"
import CategotyList from "./Components/CategotyList"
import useState from React

function App() {

const [visible, setVisible] = useState()

function selectComponent(){
  if(visible === 1){
    return <ProductRegister />
  } else if(visible === 2) {
    <ProductList />
  } else if(visible === 3) {
    <CategoryRegister />
  } else {
    <CategotyList />
  }
}

  return (
    <div>
      {selectComponent}
    </div>
  );
}

export default App;
