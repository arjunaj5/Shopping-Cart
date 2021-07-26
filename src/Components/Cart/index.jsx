// Styled Components


import CartItem from '../CartItem'
import { Wrapper } from "./Cart.styles";

const Cart = ({ cartItems, addToCart, removeFromCart }) => (
    <Wrapper>
        {cartItems.length !== 0 ? cartItems.map((product) => (
            <CartItem key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
        )) : <h1>No Items In Cart</h1>}
        <div><h1>Total: $ {cartItems.reduce((accum, product) => (
            accum + product.price * product.amount
        ), 0)}</h1></div>
    </Wrapper>
)

export default Cart