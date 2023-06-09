import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart  =(props) =>{
    const cartCtx = useContext(CartContext);
    console.log(cartCtx);
    
    const cartItemRemoveHandler = id =>{};
    const cartItemAddHandler= item =>{};
    

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
                <CartItem
                    key={item.key} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price}
                    onRemove= {cartItemRemoveHandler.bind(null,item.id)}
                    onAdd={cartItemAddHandler(null,item)}
                    ></CartItem>))}
    </ul>;

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>100.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;