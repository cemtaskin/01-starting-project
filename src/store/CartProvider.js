import {useReducer} from 'react';
import CartContext from "./cart-context";
import { act } from 'react-dom/test-utils';

const defaultCardState =  {
    items:[],
    totalAmount:0
};

const cardReducer = (state,action) =>{
    if (action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        console.log(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    
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
        dispatchCartAction({type:'ADD',item : item});
    };
    const remoteItemFromCartHanler = (id) =>{};


    const cartContext = {
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        remoteItem:remoteItemFromCartHanler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children};
    </CartContext.Provider>
};

export default CartProvider;