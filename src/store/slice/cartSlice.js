import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        quotes: [],
        totalQuotes: 0,
    },
    reducers: {
        addToCart(state, action){
            const newQuote = action.payload;
            // Push the new quote to an array.
            let existingQuote = state.quotes.find(quote => quote.id === newQuote.id);
            state.totalQuotes++;
            if(!existingQuote){
                state.quotes.push({
                    id: newQuote.id,
                    quote: newQuote.quote,
                    author: newQuote.author,
                    quantity: 1,
                })
            }else{
                existingQuote.quantity++
            }
        },
        removeFromCart(state, action){
            const id = action.payload;
            let existingQueote = state.quotes.find(quote=> quote.id === id);
            state.totalQuotes--;
            if(existingQueote.quantity === 1){
                state.quotes = state.quotes.filter(item => item.id !== id)
            }else{
                existingQueote.quantity--;
            }
        }
    }
})

export const cartActions = cartSlice.actions;
// export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;