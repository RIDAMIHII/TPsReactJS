import logo from './logo.svg';
import './App.css';
import JeuDe from './components/JeuDe';
import Form from './components/Form';
import Home from './produits/Home';
import { BrowserRouter, Route ,Routes ,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListeProduit from './produits/ListeProduit';
import Produi from './produits/Produi';


function App() {
  return (
    <div>
      <BrowserRouter>

      <nav className='navbar'>
        <ul className='nav nav-pills'>
        <li><Link to={"/"} className='btn btn-outline-info'>Home</Link></li>
        <li><Link to={"/ListeProduit"} className='btn btn-outline-info'>ListeProduit</Link></li>
        <li><Link to={"/Produit"} className='btn btn-outline-info'>Produit</Link></li>
        </ul>
      </nav>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/ListeProduit' element={<ListeProduit />}/>
          <Route path='/Produit' element={<Produi />}/>
        </Routes>

      </BrowserRouter>


      

      {/* <JeuDe faceGagnante = {6}/> */}
      {/* <Form/> */}
    </div>
  );
}

export default App;
