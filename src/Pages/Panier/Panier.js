import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch } from "react-redux";
import produits from '../../data/produits.js'
import { useState } from "react";
export default function Panier() {


// state qui permet de manipuler la quantité saisie
const [qte,setqte]=useState();
    
// hook useSelector pour acceder au store
const cart=useSelector(state=>state.cart);



const dispatch = useDispatch()

const handleChange = (event, id) => {

  const indexItem = cart.findIndex(obj => obj.id === id)

  const objUpdated = {
      ...cart[indexItem],
      quantity: Number(event.target.value)
  }

  dispatch({
      type: "UPDATEITEM",
      payload: objUpdated
  })

}


const deletep = (id) => {

    const indexItem = cart.findIndex(obj => obj.id === id)
  
    
  
    dispatch({
        type: "DELETEITEM",
        payload: indexItem
    })
  
  }


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



  return (
    <div>
      <h1>Contenu du panier</h1>


      <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">


<ul className="list-group"  style={{ listStyleType:'none' }}>




{cart.map((item,index)=>{
return(
<li key={item.id}>{item.title} -{item.price} 

<img 
                       className="img-product"
                       style={{ width:'100px' }}
                       src={process.env.PUBLIC_URL + `/images/${item.img}.png`} 
                       alt="produit" />

Qte : <input 
                onChange={e => handleChange(e, item.id)}
                id="quantityInput"
                type="number"
                value={item.quantity} /> &nbsp;&nbsp;&nbsp;

<input   type="button"  onClick={e => deletep(item.id)} value="Supprimer" className="btn btn-danger" />
</li>
)
})}
</ul>




   </div>

   <h3>Qte :{totalqte} </h3>

<h3>Prix total :{totalprice}</h3>


<input type="submit"    value="Passer au paiement"  />

    </div>
  )
}
