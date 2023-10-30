import React from 'react'
import Product from './components/Product'
import Data from './Data.js'
import Nabvar from './components/Nabvar'
import CartList from './components/CartList'
import { useSelector } from 'react-redux'
const App = () => {


  const showCart = useSelector(state => state.ui.cartIsVisible)

  return (
    <>
    <Nabvar />

    {showCart && <CartList />}
    <div  style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "12px", marginTop: "50px"}}>

      {Data.map((quote)=>{
        return <div key={quote.id}><Product id={quote.id} quote={quote.quote} author={quote.author} /></div>
      })}
      
    </div>
      </>
  )
}

export default App