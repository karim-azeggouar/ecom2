import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
     
      <div className="nav-top">
      <Link to="/">ACCUEIL</Link>
      <Link to="/produits">PRODUITS</Link>
      <Link to="/contact">CONTACT</Link>
      <Link to="/pay">Pay</Link>
  </div>
    )
}