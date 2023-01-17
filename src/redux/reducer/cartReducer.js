/*


const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}];

const index = arr.findIndex(object => {
  return object.id === 'b';
});

console.log(index); //




*/










const INITIAL_STATE = {
  cart: [],
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDITEM":
      const indexItemAdd = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );


console.log('pppppppp'+'id from payload '+action.payload.id+''+indexItemAdd);


      if (indexItemAdd !== -1) {
        const updatedQuantity = {
          ...state.cart[indexItemAdd],
          quantity: Number(state.cart[indexItemAdd].quantity) + Number(action.payload.quantity),
        };
        const newArr = [...state.cart];
        newArr.splice(indexItemAdd, 1, updatedQuantity);
        console.log(newArr);
        return {
          cart: newArr,
        };
      } else
      
      {
        const newArr = [...state.cart];
        newArr.push(action.payload);
        console.log(newArr);
        return {
          cart: newArr,
        };
      }

    case "UPDATEITEM":
      const indexItemUpdate = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );

      const newArr = [...state.cart];
      newArr.splice(indexItemUpdate, 1, action.payload);
      
      return {
        cart: newArr,
      };

      case "DELETEITEM":{
        const indexItemdel = action.payload;

        console.log('tesssssssssssssssst'+indexItemdel)
  
       const newArr = [...state.cart];
        newArr.splice(indexItemdel, 1);
        
        return {
          cart: newArr,
        };

      }



  }

  return state;
}
