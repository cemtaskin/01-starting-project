import {useReducer} from 'react';
import CartContext from "./cart-context";

const defaultCardState =  {
    items:[],
    totalAmount:0
};

const cardReducer = (state,action) =>{
    if (action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        console.log(state);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        console.log(action.item);
        

        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        };
    }
    return defaultCardState;
};

const CartProvider = props =>{
    const [cartState,dispatchCartAction] =  useReducer(cardReducer,defaultCardState);

    const addItemToCartHandler = (item) =>{
        console.log('item adding');
        dispatchCartAction({type:'ADD',item : item});
    };
    const remoteItemFromCartHanler = (id) =>{};


    const cartContext = {
        items: [],
        totalAmount:0,
        addItem: addItemToCartHandler,
        remoteItem:remoteItemFromCartHanler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children};
    </CartContext.Provider>
};

export default CartProvider;