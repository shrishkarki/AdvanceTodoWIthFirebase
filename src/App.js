import './App.css';
import Nav from './Nav/Nav';
import SideBar from './SideBar-Components/SideBar';
import Main from './Main-Components/Main';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='Container'>
      <SideBar/>
      <Main/>
      </div>
     
    </div>
  );
}

export default App;
