import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/Index";
import ShoppingCart from "./components/ShoppingCart/Index";
import { useState } from 'react';
import { productImg, thumbnails, product } from "./components/Data";
import MainContent from "./components/MainContent/Index";

// themeProvider for the design of the wpage to be used in styled components css
const theme = {
  colors: {
    orange: "hsl(26, 100%, 55%)",
    paleOrange: "hsl(25, 100%, 94%)",
    veryDarkBlue: "hsl(220, 13%, 13%)",
    darkGrayishBlue: "hsl(219, 9%, 45%)",
    grayishBlue: "hsl(220, 14%, 75%)",
    lightGrayishBlue: "hsl(223, 64%, 98%)",
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)"
  },
}




function App() {
  //state array to store added item and qty 

  const [cartItems, setCartItems] = useState([]);
  
  //state to toggle between cart popup being shown and not shown
  const [showCart, setShowCart] = useState(false);

  // state to track how much quantity of correponding item to be added to cartItems state
  const [qtyToCart, setQtyToCart] = useState(0);
  
  //functions to add and minus the qty to be added to cartItems onClick
  const addQtyToCart = () => {

    setQtyToCart(qtyToCart + 1);
  }

  const minusQtyToCart = () => {

    qtyToCart === 0 ? setQtyToCart(0) : setQtyToCart(qtyToCart - 1);
    
  } 

  // function to toggle open and close of cart popup when cart icon is clicked
  const handleShowCart = () => {
      setShowCart(!showCart);
  }

  const addProduct = (product) => {
    // exist variable to check if the cart already has same product as the product being added
  
    const exist = cartItems.find( (x) => x.id === product.id);

    if(!exist) {

    // create newItem object with new qty and totalPrice property to be added to cartItems array
      let newItem = {
        ...product, 
        qty: qtyToCart, 
        totalPrice: product.price * qtyToCart
      };

      setCartItems([...cartItems, newItem])
 
    } else {
      
      //if exist returns as true , qty, price and totalPrice properties destructured from returned object.
      
      const { qty, price, totalPrice} = exist;

      //qty and totalPrice updated in newExistingItem object when more units added, then newExistingItem added to cartItems.
      const newExistingItem = {
         ...exist,
         qty: parseInt(qty + qtyToCart),
         totalPrice: parseInt(totalPrice + (price * qtyToCart))
      }

      setCartItems([...cartItems, newExistingItem]);

    }

  }

  //function to delete all product objects in cartItems arary, when delete icon is clicked

  const removeProduct = (product) => {
    setCartItems([]);
  }



  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <Navbar handleShowCart={handleShowCart} showCart={showCart}/>
        <ShoppingCart addProduct={addProduct} 
                      removeProduct={removeProduct} 
                      cartItems={cartItems} 
                      showCart={showCart}
                      thumbnails={thumbnails}
                      />
        <MainContent productImg={productImg} 
        thumbnails={thumbnails} 
        addProduct={addProduct} 
        qtyToCart={qtyToCart}
        addQtyToCart={addQtyToCart}
        minusQtyToCart={minusQtyToCart}
        product={product}
        />
            
        
      </div>
    </ThemeProvider>
  );
}

export default App;
