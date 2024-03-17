import './App.css';
import Searchbar from './Components/Search/Search-bar';
function App() {

  const handleOnSearchChange = (searchData) =>{
    console.log(searchData);
  }
  return (
    <div className="container">
     
      <Searchbar/>
      <div>
      
     </div>
    </div>
    
  );
}

export default App;
