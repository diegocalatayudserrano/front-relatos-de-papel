import './App.css';
import {GlobalRouter} from './router/router.jsx'
import {useBooks} from '../src/hooks/useBooks.jsx'
import { BooksContext } from './contexts/BooksContext.jsx';
import { CartContext } from './contexts/CartContex.jsx';
import useCart from './hooks/useCart.jsx';

function App() {
  const books = useBooks()
  const { cart, addItemToCart, removeItemFromCart, editQuantity, totalPrice, totalItems } = useCart()
  return (
    <>
      <BooksContext.Provider value={{books}}>
        <CartContext.Provider 
          value={{
            cart,
            addItemToCart,
            removeItemFromCart,
            editQuantity,
            totalPrice,
            totalItems
          }}>
            <GlobalRouter></GlobalRouter>
          </CartContext.Provider>
      </BooksContext.Provider>
    </>
  );
}

export default App;
