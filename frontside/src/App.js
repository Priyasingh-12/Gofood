import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Signup from './screens/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route exact path="/home" element= {<Home/>}/>
    <Route path='/createuser' element= {<Signup/>}/>

    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
