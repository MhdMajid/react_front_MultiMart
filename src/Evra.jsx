import { Outlet } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/footer';
import ScrollToTop from "./ScrollToTop";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Star from './pages/Star';
const Evra = () => {
  return (
    <div>
       <Header/>
      <Outlet/>
      <ScrollToTop/>
      <ToastContainer />
     
      <Footer/>
    </div>
  )

}

export default Evra
