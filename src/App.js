// import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

// CSS File
import './App.css';
import './loading.css'

// Auth 
import Login from './Auth/Login';
import Reg from './Auth/Reg';

//Auth Admin

import {BrowserRouter as Router , Route, Routes } from "react-router-dom";
//  Front and back 
import DashBoard from './back-end/DashBorad';
import Evra from './Evra'

// get pages
import {Home, Account, Checkout, Product, Wishlist, Cart ,About, Contact,AddSeller,ProductSeller} from "./pages/index";
import {Products, User, Show, EditUser,CreatUser, AddProduct, AddItem, AddCategory, EditItem ,Seller,Order,DashHome} from "./back-end/index";

import Page404 from './pages/Page404';

const App = () => {

return (
<>


<Router>
    <Routes>
      
        <Route path='log' element={ <Login />}/>
        <Route path='reg' element={ <Reg />}/>

        
        <Route path='/*' element={<Page404/>}/>
        <Route path='/' element={ <Evra />}>
          <Route path='' element={ <Home />}/>
          <Route path='Account' element={ <Account />}/>
          <Route path='Checkout' element={ <Checkout />}/>
          <Route path='Product/:id' element={ <Product />}/>
          <Route path='Product/seller/:id' element={ <ProductSeller />}/>
          <Route path='Wishlist' element={ <Wishlist />}/>
          <Route path='Cart' element={ <Cart />}/>
          <Route path='About' element={ <About />}/>
          <Route path='Contact' element={ <Contact />}/>
          <Route path='addseller' element={ <AddSeller />}/>
          



        </Route>

        <Route path='/DashBoard' element={ <DashBoard />} >
          <Route path='Products' element={ <Products />}/>
          <Route path='User' element={ <User />}/>
          <Route path='show' element={ <Show />}/>
          <Route path='addProduct' element={ <AddProduct />}/>
          <Route path='addItem' element={ <AddItem />}/>
          <Route path='editUser/:id' element={ <EditUser />}/>
          <Route path='editItem/:id' element={ <EditItem />}/>
          <Route path='CreatUser' element={ <CreatUser />}/>
          <Route path='addCategory' element={ <AddCategory />}/>
          <Route path='Seller' element={ <Seller />}/>
          <Route path='Order' element={ <Order />}/>
          <Route path='DashHome' element={ <DashHome />}/>
        </Route>

    </Routes>
   
</Router>
  
</>
  );
}
export default App;
