import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/slice/cartSlice'


import '../App.css'
const Product = ({ id, quote, author }) => {


  const dispatch = useDispatch()
  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({
      id,
      quote,
      author
    }))
  }
  
  return (
    <div>
      <div className="card card-parent-com" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{author}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{id}</h6>
          <p className="card-text">
            {quote}
          </p>

          <button onClick={addToCartHandler}>Add to cart</button>
        </div>
        </div>

    </div>
  )
}

export default Product