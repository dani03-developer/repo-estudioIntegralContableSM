import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';
import EmptyCart from '../sections/Cart/EmptyCard';
import CartView from "../sections/Cart/CartView";
const CartContainer = () => {
    const { cart } = useContext(CartContext);
    return(
        <>
        {!cart.length ? <EmptyCart /> : <CartView />}
        </>
    );
};
export default CartContainer;