import React from "react";

import "./Products.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch } from "react-redux";
import produits from '../../data/produits.js'
import { useState } from "react";
import {Link} from 'react-router-dom'
import { getRoles } from "@testing-library/react";



export default function Products() {



// state qui permet de manipuler la quantité saisie
const [qte,setqte]=useState();



// hook useSelector pour acceder au store
const cart=useSelector(state=>state.cart);




// calcul de la quantité totale et prix total
let totalqte = 0;
let totalprice=0;




if(cart.length !== 0){
for(let item of cart){
    totalqte +=  item.quantity;
  let itemprice = item.price * item.quantity;
    totalprice += itemprice;
  
    
  }

}







const updateval=(e)=>
{


setqte(Number(e.target.value));


}


// hook useDispatch pour pouvoir modifier les données(state) du store

const dispatch = useDispatch()





const addTocart =(ids)=>{

  // récupérer l'indice du produit clické dans le tableau des produits
  const indexItemAdd = produits.findIndex(
    (obj) => obj.id === ids
  );


document.getElementById(ids).value='';

// paylod objet produit en lui ajoutant l'attribut quantity

const itemAdded = {
  ...produits[indexItemAdd],
  quantity: qte
}

dispatch({
  type: "ADDITEM",
  payload: itemAdded   // produit avec  qte
})



}

  return (
    <div>
 <h1>Liste des produits</h1>
 <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">


 <ul className="list-group"  style={{ listStyleType:'none' }}>




{produits.map((item,index)=>{
return(
 <li>{item.title} -{item.price} 
 
 <img 
                        className="img-product"
                        style={{ width:'100px' }}
                        src={process.env.PUBLIC_URL + `/images/${item.img}.png`} 
                        alt="produit" />
 
 Qte : <input type="text" id={item.id}  onChange={(e)=>updateval(e)} /> &nbsp;&nbsp;&nbsp;
 <input   type="button" onClick={(id)=>addTocart(item.id)}  value="Ajouter au panier" className="btn btn-danger" />
 </li>
)
})}
 </ul>




    </div>


<h3>Qte :{totalqte} </h3>

<h3>Prix total :{totalprice}</h3>


<Link to="/panier"><h2>Panier</h2></Link>
    </div>
  );
}
