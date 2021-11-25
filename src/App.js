import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/Index";
import ShoppingCart from "./components/ShoppingCart/Index";
import { useState } from 'react';
import { productImg, thumbnails, product } from "./components/Data";
import MainContent from "./components/MainContent/Index";

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

  const [cartItems, setCartItems] = useState([
    
  ]);
  
  const [showCart, setShowCart] = useState(false);
  
  const [qtyToCart, setQtyToCart] = useState(0);
  
  const addQtyToCart = () => {
    
    setQtyToCart(qtyToCart + 1);
  }

  const minusQtyToCart = () => {

    qtyToCart === 0 ? setQtyToCart(0) : setQtyToCart(qtyToCart - 1);
    
  } 

  const handleShowCart = () => {
      setShowCart(!showCart);
  }

  const addProduct = (product) => {
    // exist variable to check if the cart already has same product as the product being added
  
    const exist = cartItems.find( (x) => x.id === product.id);

    if(!exist) {

      // console.log(totalPrice);

      let newItem = {
        ...product, 
        qty: qtyToCart, 
        totalPrice: product.price * qtyToCart
      };

      console.log(newItem); 

      setCartItems([...cartItems, newItem])

      console.log(cartItems);  
    } else {
      

      const { qty, price, totalPrice} = exist;
      console.log(qty);
      console.log(totalPrice);


      const newExistingItem = {
         ...exist,
         qty: parseInt(qty + qtyToCart),
         totalPrice: parseInt(totalPrice + (price * qtyToCart))
      }

      console.log(newExistingItem);

      setCartItems([...cartItems, newExistingItem]);

      console.log(cartItems);

    }

  }

  const removeProduct = (product) => {

    // const exist = cartItems.find( (x) => x.id === product.id); 

    // if (exist.qty === 1) {
    //   setCartItems(cartItems.filter((x) => x.id !== product.id))
    // } else {
    //   setCartItems(cartItems.map((x) =>
    //     x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
    // }
      
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
