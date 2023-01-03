import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import SideMenu from './Component/SideMenu';
import MainBar from './Component/MainBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container" style={{display:"flex", width:"1260px", margin: "auto"}}>
      <SideMenu/>
      <MainBar/>
     
      </div>
      
    </div>

    
  );
  
}

export default App;
