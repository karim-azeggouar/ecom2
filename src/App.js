
import './App.css';


import { Route,Routes,Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Products from './Pages/Products/Products'
import Panier from './Pages/Panier/Panier'
function App() {

  const test=()=>{

    alert('test');
    <Navigate to="/" />
  }
 
  return (


    <div className="App">
    
   
    <Navbar/>
   
    
    <Routes>


    
          
          <Route path="/"   element={<Home />} />
          <Route path="/contact"   element={<Contact />} />
          <Route path="/produits"   element={<Products />} />
          <Route path="/panier"   element={<Panier />} />
          <Route path="/pay"   element={<><h1> Paiement </h1></>} />
          <Route path="/panier/*"   element={<><h1>panier 404</h1></>} />
          <Route path="*"   element={<><h1> 404</h1></>} />
          
    </Routes>





    </div>


  );
}

export default App;
