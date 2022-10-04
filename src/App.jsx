import './App.css';
import React, {useEffect} from 'react';
import { BottomMenu, Header, Navbar, RegisterPopUp, SearchNavbar, AccordionFooter} from './components/index'
import { Routes, Route } from 'react-router-dom';
import { Home, Shop, Page, Blog, About, ContactUS, Cart, Details, MainSlider, Wishlist, Favorite } from './pages/index'
import Footer from './components/footer/Footer';
import {useSelector, useDispatch} from 'react-redux';
import {calculateTotals} from './features/cart/cartSlice'
import {wishListAmount} from './features/wishlist/wishSlice'


function App() {

  const {cartItems} = useSelector((store) => store.cart);
  const {wishItems} = useSelector((store)=>store.wish)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateTotals())
  }, [cartItems, dispatch]);

  useEffect(()=>{
    dispatch(wishListAmount())
  }, [wishItems, dispatch])


  return (
    <div className="App">
      <Header />
      <SearchNavbar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/page' element={<Page />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<ContactUS />} />
        <Route path='/register' element={<RegisterPopUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='slider' element={<MainSlider/>} />
        <Route path='/products/:id' element={<Details/>} />
        <Route path='details' element={<Details/>} />
        <Route path='favorite' element={<Favorite/>} />
        <Route path='wishlist' element={<Wishlist/>} />
      </Routes>
      <Footer />
      <AccordionFooter />
      <BottomMenu />
    </div>
  );
}

export default App;
