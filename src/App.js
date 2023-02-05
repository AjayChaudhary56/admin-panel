import Navbar from './Navbar'
import Tabs from './Tabs'
// import Reacthookform from './Reacthookform';
import './App.css';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <div className='mainContainer'>
          <Tabs/>
          {/* <Reacthookform/> */}
           </div>
    </div>
  );
}

export default App;
