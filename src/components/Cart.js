import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="border p-2 m-2 text-white bg-black rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is empty.<Link to="/">Click here to add items</Link></h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;