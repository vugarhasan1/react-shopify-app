import './App.css';
import { useEffect } from 'react';
import { BottomMenu, Header, Navbar, RegisterPopUp, SearchNavbar, AccordionFooter } from './components/index'
import { Routes, Route } from 'react-router-dom';
import { Home, Shop, Page, Blog, About, ContactUS, Cart, Details, MainSlider } from './pages/index'
import Footer from './components/footer/Footer';
import {useSelector, useDispatch} from "react-redux";
import {calculateTotals} from './features/cart/cartSlice';



function App() {

  const {cartItems} = useSelector((store)=>store.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])

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
        <Route path='main-slider' element={<MainSlider/>} />
        <Route path='/products/:id' element={<Details/>} />
        <Route path='details' element={<Details/>} />
      </Routes>
      <Footer />
      <AccordionFooter />
      <BottomMenu />
    </div>
  );
}

export default App;
