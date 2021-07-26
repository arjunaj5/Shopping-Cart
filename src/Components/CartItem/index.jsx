import IconButton from '@material-ui/core/IconButton'

const CartItem = ({ product, addToCart, removeFromCart }) => (
    <div className="cart-item">
        <div className="details">
            <h3>{product.title}</h3>
            <h3>Quantity: {product.amount}</h3>
            <p>Price: <small>$</small> <b> {product.price} </b></p>
            <IconButton onClick={() => { addToCart(product) }} color='secondary'> + </IconButton>
            <IconButton onClick={() => {
                removeFromCart((prev) => {
                    return prev.map((element) => {
                        if (element.id === product.id) {
                            return element.amount === 1 ? undefined : { ...element, amount: element.amount - 1 }
                        }
                        return element
                    }).filter((element) => element)
                })
            }} color='secondary'> - </IconButton>

        </div>
        <img src={product.image} alt="" />
    </div>
)

export default CartItem