import React from 'react'
import { uiActions } from '../store/slice/UISlice'
import { useDispatch, useSelector } from 'react-redux'
const CartButton = () => {

  const dispatch = useDispatch()
  const totalQoutesAdded = useSelector(state=> state.cart.totalQuotes)

  const toggleCartHandler = ()=>{
    dispatch(uiActions.toggle())
  }
  return (
    <div>
        <button onClick={toggleCartHandler}>
            <sup>{totalQoutesAdded}</sup>
            <span>My Cart</span>
        </button>
    </div>
  )
}

export default CartButton