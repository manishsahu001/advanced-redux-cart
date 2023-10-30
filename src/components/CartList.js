import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/slice/cartSlice';
const CartList = () => {

    const cartItems = useSelector(state => state.cart.quotes);
    const dispatch = useDispatch();

    

    return (
        <div>
            {cartItems.map((quote)=>{
                return <div className="card" style={{ width: "18rem" }} key={Math.random()}>
                <div className="card-body">
                    <h5 className="card-title">{quote.author}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{quote.id}</h6>
                    <p className="card-text">
                        {quote.quote}
                    </p>
                    <em>{quote.quantity}</em>
                    
                    <button onClick={()=>{dispatch(cartActions.addToCart({id: quote.id, quote: quote.quote, author: quote.author}))}} >+</button>
                    <button onClick={()=>{dispatch(cartActions.removeFromCart(quote.id))}} >-</button>

                </div>
            </div>
            })}
            
        </div>
    )
}

export default CartList