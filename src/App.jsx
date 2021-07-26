import { useQuery } from "react-query";
import LinearProgress from '@material-ui/core/LinearProgress';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useState } from 'react'
import Button from '@material-ui/core/Button';
// Styled Components
import { Wrapper, StyledButton, Grid } from "./App.styles";

// Components
import Item from './Components/Item'
import Cart from './Components/Cart'


const getData = async () => {
  let local = localStorage.getItem('fake')
  if (local) {
    let result = JSON.parse(local)
    return result;
  }
  let result = await (await fetch('https://fakestoreapi.com/products')).json()
  await localStorage.setItem('fake', JSON.stringify(result))
  return result
}
const getCartItems = (cartItems) => {
  console.log(cartItems)
  return (cartItems.reduce((accumulator, item) => accumulator + item.amount, 0)
  )
}

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([]) // Array of objects (products)

  const { isLoading, error, data } = useQuery('dat', getData)
  if (error) return <div>Something Went Wrong</div>
  if (isLoading) return <LinearProgress style={{ height: '3px' }} />

  const handleAddToCart = (product) => {
    //If already present in cart
    let flag = 0;
    let newCart = cartItems.map((item) => {
      if (item.id === product.id) {
        item.amount += 1;
        flag = 1
        return item
      }
      return item
    })
    if (flag == 1) setCartItems(newCart)
    else
      setCartItems([...newCart, { ...product, amount: 1 }])
  }

  return (
    <Wrapper>
      <SwipeableDrawer
        open={cartOpen}
        anchor='right'
        transitionDuration={{ enter: 400, exit: 400 }}
        onClose={() => setCartOpen(false)}
      >
        {/* Cart */}
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={setCartItems} />

      </SwipeableDrawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge
          badgeContent={getCartItems(cartItems)}
          color='error'
          max={99}
        >
          <AddShoppingCartIcon />
        </Badge>

      </StyledButton>
      <Grid>
        {data.map((product) => {
          return (
            <Item product={product} handleAddToCart={handleAddToCart} key={product.id} />
          )
        })}
      </Grid>
      <Button fullWidth={true} color='secondary' >
        Load More
      </Button>
    </Wrapper>
  );
}

export default App;
