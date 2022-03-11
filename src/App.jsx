import React, {useEffect, useState} from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components"
import {createTheme, ThemeProvider} from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const theme = createTheme();

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    };

    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quanitity) => {
      const item = await commerce.cart.add(productId, quanitity);
      setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])

    console.log(cart)

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Navbar totalItems={cart.total_items}/>
                <Routes>
                    <Route path={'/'} element={<Products products={products} onAddToCart={handleAddToCart}/>}/>
                    <Route path={'/cart'} element={<Cart cart={cart} /> }/>
                </Routes>
            </ThemeProvider>
        </Router>

    )
}

export default App;