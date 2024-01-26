import './App.css';
import Home from './screens/Home';
import Signup from './screens/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Update the import statement
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Theme from './components/Theme';

function App() {
  return (
  
    <BrowserRouter>
 <Navbar  />
    <Theme/>
    <Routes>
     <Route exact path="/" element= {<Home/>}/>
    <Route path='/createuser' element= {<Signup/>}/>

    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
