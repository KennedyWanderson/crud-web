import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      const getData = () => Promise.resolve('data');
      const getMoreData = () => Promise.resolve('more data');
      
      Promise.all(
        getData(),
        getMoreData()
      ).then(result => {
        const [data, moreData] = result;
      })
    </div>
  );
}

export default App;
