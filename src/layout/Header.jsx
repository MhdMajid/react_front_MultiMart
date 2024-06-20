import { Link, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import { Axios, baseUrl } from "../back-end/api/Axios";
import axios from "axios";
import Logout from "../Auth/Logout";

const Header = () => {
  
  // check user
  const [flag,setflag] = useState(false)
  const [check,setcheck]=useState('')
  useEffect(()=>{
    fetchCheck();
  },[])
  const fetchCheck = async ()=>{
    
      await Axios.get('user/checkUser')
      .then(({data})=>{
        setcheck(data.role)
        console.log(data.role)
        // cookie.set("rloe", data.role)
        if(data.role == "admin" || data.role == "superadmin" ){
          setflag(true)
        }

      })
      .catch(({error})=>{
        console.log(error)})

  }
  // end check user

const nav = useNavigate()
const [co,setco] = useState(0)
const [cop,setcop] = useState(0)
function prduct(id){
  setfilter(false)
  nav("Product/" +id)
 }
  // search
  const [item, setitem] = useState([])
  useEffect(() => {
      fetchitem();
  }, [])
  const fetchitem = async () => {
    try {
        setlodaing(true)
    const res =  await axios.get(`${baseUrl}item/getAllItems`)
    setitem(res.data.data)
    console.log(res.data.data)
      // .then(({ data }) => {console.log(data)}) 
      setlodaing(false)
  }catch(error) {
      setlodaing(false)
     console.log(error)
    }
  }
  const [filtername , setfilter]  = useState([])


  const handleChange = (e) =>{
    
    console.log("object")
    const filterr = item.filter(
      (ite) =>  ite.name.includes(e.target.value)
    )
    
    e.target.value !== "" ? setfilter(filterr):setfilter(false)
  }

  // =======
  const cookie = Cookie();
  const [lodaing, setlodaing] = useState(false);
  const [runEffaect, setRun] = useState(0);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCateogries();
  }, []);

  const admin = cookie.get("admintoken");
  const fetchCateogries = async () => {
    setlodaing(true);
    const token = cookie.get("e-c");
    console.log(token);
    // if (token != undefined) {
      await axios.get(`${baseUrl}category/getAllCategories`).then(({ data }) => {
        setCategories(data.data);
      });
      setlodaing(false);
    // }
  };
      
  // setRun((pref)=>pref+1);
  const [CartItemCount, SetCartItemCount] = useState(0);
  useEffect(() => {
    fetchCount();
  }, []);
  const fetchCount = async () => {
    try{
      setlodaing(true);
      const token = cookie.get("e-c");
      console.log(token);
      if (token != undefined) {
        await Axios.get("item/cartItemCount").then(({ data }) => {
          SetCartItemCount(data.data);
        });
        setlodaing(false);
      }
    }catch(err){
      setcop((pref)=>pref+1)
    }
    
  };

  function selectedCategoy(categoryId) {
    console.log(categoryId);
  }

  
const [CountWishList, setCountWishList] = useState ([])
useEffect(() => {
  fetchCountWishList();
}, []);

  const token = cookie.get("e-c");
  const fetchCountWishList = async () => {
    try{
setlodaing(true);
    console.log(token);
    if (token != undefined) {
      await Axios.get("item/wishlistCount").then(({ data }) => {
        setCountWishList(data.data);
      });
      setRun((pref)=>pref+1);
      setlodaing(false);
    }
    }catch(err){
      setco((pref)=>pref+1)
    }
    
  };
  return (
    <>
      <header className="header-area header-style-1 header-height-2">
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4">
                <div className="header-info">
                  <ul>
                    <li>
                      <i className="fi-rs-smartphone" />{" "}
                      <Link to="#">(+963) - 852- 1459</Link>
                    </li>
                    <li>
                      <i className="fi-rs-marker" />
                      <Link to="/" className="">
                        Our location
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4"></div>
              <div className="col-xl-3 col-lg-4">
                <div className="header-info header-info-right">
                  <ul>
                    {/* ------------ Log/reg -------------- */}

                    {cookie.get("e-c") && <Logout />}
                    {!cookie.get("e-c") && (
                      <li>
                        <i className="fi-rs-user" />
                        <Link to="/log">Log In / </Link>
                        <Link to="/reg">/ Sign Up</Link>
                      </li>
                    )}

                    {/* --------------------------- */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1" >
        <Link to="index.html">
          <img src={require("../logo.png")} alt="" width="100px" height="100px"/>
           </Link>
  </div>
              <div className="header-right">
                <div className="search-style-2">
                  <form action="#">
                    <select className="select-active" onChange={() => selectedCategoy()}>
                      <option key={0}>All Categories</option>
                      {categories.map(function (category, index) {
                        return (
                          <option key={category.id} onClick={() => selectedCategoy(category.id)} > {category.name} </option>
                        );
                      })}
                      {/* search ------------------------------------------ */}
                    </select>
                    <input onInput={handleChange} type="text" placeholder="Search for items..." />
                  
                  </form>
                   <div calssName="m-1 center container rounded-3" style={{
                    width:'348px' ,
                     height:'auto',
                     position:'relative',
                     left:'133px',
                     zIndex:'100',
                     backgroundColor:'#fbf5ff',
                     borderRadius:'1px'
                     }} > 
                        <ul>
                      { filtername &&  filtername.map(i =>
                      <li className="" ><a onClick={()=>prduct(i.id)} > {i.name}  </a></li> 
                    )}</ul>
                       </div>

                  {/* {filtername[0] == undefined || filtername[0] == "" ? ""  :
                  <div className="alert alert-secondary w-75 h-10 small mt-1" role="alert">
                  <Link to = {"Product/"+ filtername[0].id}> {filtername[0].name}  </Link> */}
                {/* </div> */}
                    {/* }      */}
                </div>

                <div className="header-action-right">
                  <div className="header-action-2">
                    <div className="header-action-icon-2">
                      <Link to="/wishlist">
                        <img
                          className="svgInject"
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-heart.svg"
                        />
                     {CountWishList != null && CountWishList != 0 && (

                        <span className="pro-count blue">
                        {CountWishList}

                        </span>
                     )}

                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <Link className="mini-cart-icon" to="/cart">
                        <img
                          alt="Multimart"
                          src="/assets/imgs/theme/icons/icon-cart.svg"
                        />
                        {CartItemCount != null && CartItemCount != 0 && (
                          <span className="pro-count blue">
                            {CartItemCount}
                          </span>
                        )}
                      </Link>
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom header-bottom-bg-color sticky-bar">
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <Link to="index.html">
                  <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                </Link>
              </div>
              <div className="header-nav d-none d-lg-flex">
                {/* ----------------------------------------------------------------------------------------------- */}
                {/* ----------------------------------------------------------------------------------------------- */}
                {/* ----------------------------------------------------------------------------------------------- */}
                {/* ----------------------------------------------------------------------------------------------- */}
                {/* ----------------------------------------------------------------------------------------------- */}
                <div className="main-categori-wrap d-none d-lg-block">
                  <Link className="categori-button-active" to="#">
                    <span className="fi-rs-apps" /> Browse Categories
                  </Link>
                  <div className="categori-dropdown-wrap categori-dropdown-active-large">
                    <ul>
                      {categories.map(function (category, index) {
                        return (
                          <li key={index}>
                            <Link onClick={() => selectedCategoy(category.id)}>
                              {category.name}
                            </Link>
                            
                          </li>
                        );
                      })}
                    </ul>
                   
                  </div>
                </div>
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/About">About</Link>
                      </li>

                      <li>
                        <Link to="/Account">Account</Link>
                      </li>

                      { flag && <li>
                        <Link to="/DashBoard/DashHome">Dashboard</Link>
                      </li>  }

                     
                      <li>
                        <Link to="#">
                          Pages <i className="fi-rs-angle-down" />
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/About">About Us</Link>
                          </li>
                         
                          <li>
                            <Link to="/Account">My Account</Link>
                          </li>
                 
                          <li>
                            <Link to="/Cart">Cart</Link>
                          </li>
                          <li>
                            <Link to="/Wishlist">Wishlist</Link>
                          </li>
                          
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <p className="mobile-promotion">
                Happy <span className="text-brand">Mother's Day</span>. Big Sale
                Up to 40%
              </p>
              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link to="shop-wishlist.html">
                      <img
                        alt="Multimart"
                        src="/assets/imgs/theme/icons/icon-heart.svg"
                      />
                      <span className="pro-count white">4</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link className="mini-cart-icon" to="/cart">
                      <img
                        alt="Evara"
                        src="/assets/imgs/theme/icons/icon-cart.svg"
                      />
                      <span className="pro-count white">2</span>
                    </Link>
                  
                  </div>
                  <div className="header-action-icon-2 d-block d-lg-none">
                    <div className="burger-icon burger-icon-white">
                      <span className="burger-icon-top" />
                      <span className="burger-icon-mid" />
                      <span className="burger-icon-bottom" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-header-active mobile-header-wrapper-style">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-top">
            <div className="mobile-header-logo">
              <Link to="index.html">
                <img src="/assets/imgs/theme/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
              <button className="close-style search-close">
                <i className="icon-top" />
                <i className="icon-bottom" />
              </button>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="mobile-search search-style-3 mobile-header-border">
              <form action="#">
                <input type="text" placeholder="Search for items…" />
                <button type="submit">
                  <i className="fi-rs-search" />
                </button>
              </form>
            </div>
            <div className="mobile-menu-wrap mobile-header-border">
              <div className="main-categori-wrap mobile-header-border">
                <Link className="categori-button-active-2" to="#">
                  <span className="fi-rs-apps" /> Browse Categories
                </Link>
                <div className="categori-dropdown-wrap categori-dropdown-active-small">
                  <ul>
                    <li>
                      <Link to="shop-grid-right.html">
                        <i className="evara-font-dress" />
                        Women's Clothing
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html">
                        <i className="evara-font-tshirt" />
                        Men's Clothing
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="shop-grid-right.html">
                        <i className="evara-font-smartphone" /> Cellphones
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html">
                        <i className="evara-font-desktop" />
                        Computer &amp; Office
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html">
                        <i className="evara-font-cpu" />
                        Consumer Electronics
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html">
                        <i className="evara-font-home" />
                        Home &amp; Garden
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html">
                        <i className="evara-font-high-heels" />
                        Shoes
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html">
                        <i className="evara-font-teddy-bear" />
                        Mother &amp; Kids
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html">
                        <i className="evara-font-kite" />
                        Outdoor fun
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* mobile menu start */}
              <nav>
                <ul className="mobile-menu">
                  <li className="menu-item-has-children">
                    <span className="menu-expand" />
                    <Link to="index.html">Home</Link>
                   
                  </li>
                 
                  <li className="menu-item-has-children">
                    <span className="menu-expand" />
                    <Link to="#">Mega menu</Link>
                    <ul className="dropdown">
                      <li className="menu-item-has-children">
                        <span className="menu-expand" />
                        <Link to="#">Women's Fashion</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="/product">Dresses</Link>
                          </li>
                          <li>
                            <Link to="/product">Blouses &amp; Shirts</Link>
                          </li>
                          <li>
                            <Link to="/product">Hoodies &amp; Sweatshirts</Link>
                          </li>
                          <li>
                            <Link to="/product">Women's Sets</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <span className="menu-expand" />
                        <Link to="#">Men's Fashion</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="/product">Jackets</Link>
                          </li>
                          <li>
                            <Link to="/product">Casual Faux Leather</Link>
                          </li>
                          <li>
                            <Link to="/product">Genuine Leather</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <span className="menu-expand" />
                        <Link to="#">Technology</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="/product">Gaming Laptops</Link>
                          </li>
                          <li>
                            <Link to="/product">Ultraslim Laptops</Link>
                          </li>
                          <li>
                            <Link to="/product">Tablets</Link>
                          </li>
                          <li>
                            <Link to="/product">Laptop Accessories</Link>
                          </li>
                          <li>
                            <Link to="/product">Tablet Accessories</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  
                  <li className="menu-item-has-children">
                    <span className="menu-expand" />
                    <Link to="#">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="page-about.html">About Us</Link>
                      </li>

                      <li>
                        <Link to="page-account.html">My Account</Link>
                      </li>
                      <li>
                        <Link to="page-login-register.html">
                          login/register
                        </Link>
                      </li>
                      <li>
                        <Link to="page-404.html">404 Page</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <span className="menu-expand" />
                    <Link to="#">Language</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="#">English</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* mobile menu end */}
            </div>
            <div className="mobile-header-info-wrap mobile-header-border">
              <div className="single-mobile-header-info mt-30">
                <Link to="page-contact.html"> Our location </Link>
              </div>
              <div className="single-mobile-header-info">
                <Link to="page-login-register.html">Log In / Sign Up </Link>
              </div>
              <div className="single-mobile-header-info">
                <Link to="#">(+01) - 2345 - 6789 </Link>
              </div>
            </div>
            <div className="mobile-social-icon">
              <h5 className="mb-15 text-grey-4">Follow Us</h5>
              <Link to="#">
                <img src="/assets/imgs/theme/icons/icon-facebook.svg" alt="" />
              </Link>
              <Link to="#">
                <img src="/assets/imgs/theme/icons/icon-twitter.svg" alt="" />
              </Link>
              <Link to="#">
                <img src="/assets/imgs/theme/icons/icon-instagram.svg" alt="" />
              </Link>
              <Link to="#">
                <img src="/assets/imgs/theme/icons/icon-pinterest.svg" alt="" />
              </Link>
              <Link to="#">
                <img src="/assets/imgs/theme/icons/icon-youtube.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
