import { Wrapper } from './Item.styles'
import Button from '@material-ui/core/Button';
const Item = ({ product, handleAddToCart }) => {

    return (
        <Wrapper>
            <img src={product.image} alt="" />
            <div className="details">

                <h3>{product.title}</h3>

                <h2><small>$</small>{product.price}</h2>

            </div>
            <Button fullWidth={true} onClick={() => handleAddToCart(product)} >
                Add to cart
            </Button>

        </Wrapper>
    )
}

export default Item