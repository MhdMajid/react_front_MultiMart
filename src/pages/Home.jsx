import CartHome from "../Components/CartHome";
import Monthly from "../Components/Monthly";
import Cookie from 'cookie-universal'
import { useEffect, useState } from 'react'
import {  Axios, baseUrl, baseUrlImg } from '../back-end/api/Axios'
import { Link } from "react-router-dom";
import axios from "axios";
import Skelet from "../Components/Skelet";


const Home = () => {
  const [skel, setskel] = useState (true)


  // new items

  const [newitems, setnewItems] = useState([])
  useEffect(() => {
   
      // Dispatch custom event when component mounts
      const event = new Event('myCustomEvent');
      window.dispatchEvent(event);
   

  fetchnewitems();
}, [])

const fetchnewitems = async () => {
  setlodaing(true)
  const token = cookie.get("e-c")
//  console.log(token)
 try {
  const formdata = new FormData ()
  formdata.append ('number_of_items',8)
  const  res = await axios.post(`${baseUrl}item/getNewItems`, formdata)

    // console.log(res.data.data + " : new items");
    setnewItems(res.data.data);

  
 } catch (error) {
  console.log(error)
  setlodaing(false)

 }
   
 }
  // ------------------
  const [seller, setseller] = useState([])
  useEffect(() => {
      fetchseller();
  }, [])

  const fetchseller = async () => {
    setlodaing(true)

      await axios.get(`${baseUrl}seller/getseller`).then(({ data }) => {setseller(data.data)}) 
      setlodaing(false)

  }
 
  const cookie=Cookie()
  const [lodaing, setlodaing] = useState(false)
    const [runEffaect , setRun] =  useState(0);

  const [items, setItems] = useState([])
  useEffect(() => {
    
    fetchItems();
  }, [runEffaect])

  const fetchItems = async () => {
    setlodaing(true)
    try {
      const  res = await axios.get(`${baseUrl}item/getAllItems`)
      setItems(res.data.data);
        console.log("uuuuuuuuuu");
        console.log(res.data.data);
        console.log("kkkkkkkkkk");
        setskel(false)
      setlodaing(false)

    } catch (error) {
      setlodaing(false)
      console.log(error);

    }
    
   }
   
   const addToWishlist = async (id) => {
    try {
      
     const  res = await axios.post(`${baseUrl}item/addToWishList`, {
      "item_id": id 
      })
     console.log("added to wishlist successfuly")
  
    } catch (error) {
      console.log(error)
      
    }
  
  }
   
// popular

const [popularitems, setPopularItems] = useState([])
useEffect(() => {
  
  fetchpopularitems();
}, [runEffaect])

const fetchpopularitems = async () => {
  setlodaing(true)
  const token = cookie.get("e-c")
 console.log(token)
 try {
  const formdata = new FormData ()
  formdata.append ('number_of_items',8)
  const  res = await axios.post(`${baseUrl}item/getItemsRandomly`, formdata)

    console.log(res.data.data);
    setPopularItems(res.data.data);

  
 } catch (error) {
  console.log(error)
  setlodaing(false)

 }
   
 }
 

  return (
    <main className="main">
    <section className="home-slider position-relative pt-50">
      <div className="hero-slider-1 dot-style-1 dot-style-1-position-1">
        <div className="single-hero-slider single-animation-wrap">
          <div className="container">
            <div className="row align-items-center slider-animated-1">
              <div className="col-lg-5 col-md-6">
              <div className="hero-slider-content-2">
               
                <h1 className="animated fw-800 text-8">Great Collection</h1>
                <p className="animated">Clothing, Shoes, Bags...</p>
                <a
                  className="animated btn btn-brush btn-brush-1"
                  // href="/product"
                >
                  {" "}
                  Shop Now{" "}
                </a>
                </div>

              </div>
              <div className="col-lg-7 col-md-6">
                <div className="single-slider-img single-slider-img-1">
                  <img
                    className ="animated slider-1-1 rounded-pill"
                    src= {require("../pic.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

    </section>
    <section className="featured section-padding position-relative">
    <section className="featured section-padding position-relative">
  <div className="container">
    <div className="row">
      <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
        <div className="banner-features wow fadeIn animated hover-up">
          <img src="/assets/imgs/theme/icons/feature-1.png" alt="" />
          <h4 className="bg-1">Free Shipping</h4>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
        <div className="banner-features wow fadeIn animated hover-up">
          <img src="/assets/imgs/theme/icons/feature-2.png" alt="" />
          <h4 className="bg-3">Online Order</h4>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
        <div className="banner-features wow fadeIn animated hover-up">
          <img src="/assets/imgs/theme/icons/feature-3.png" alt="" />
          <h4 className="bg-2">Save Money</h4>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
        <div className="banner-features wow fadeIn animated hover-up">
          <img src="/assets/imgs/theme/icons/feature-4.png" alt="" />
          <h4 className="bg-4">Promotions</h4>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
        <div className="banner-features wow fadeIn animated hover-up">
          <img src="/assets/imgs/theme/icons/feature-5.png" alt="" />
          <h4 className="bg-5">Happy Sell</h4>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
        <div className="banner-features wow fadeIn animated hover-up">
          <img src="/assets/imgs/theme/icons/feature-6.png" alt="" />
          <h4 className="bg-6">contact with us</h4>
        </div>
      </div>
    </div>
  </div>
</section>

    </section>
    <section className="product-tabs section-padding position-relative wow fadeIn animated">
      <div className="bg-square" />
      <div className="container">
        <div className="tab-header">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
           
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="nav-tab-two"
                data-bs-toggle="tab"
                data-bs-target="#tab-two"
                type="button"
                role="tab"
                aria-controls="tab-two"
                aria-selected="false"
              >
                Popular
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="nav-tab-three"
                data-bs-toggle="tab"
                data-bs-target="#tab-three"
                type="button"
                role="tab"
                aria-controls="tab-three"
                aria-selected="false"
              >
                New added
              </button>
            </li>
          </ul>
          
        </div>
        {/*End nav-tabs*/}
        <div className="tab-content wow fadeIn animated" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="tab-one"
            role="tabpanel"
            aria-labelledby="tab-one"
          >
            <div className="row product-grid-4">
            {skel && <>
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
              <Skelet />
          
             
             
            </> } 
            
              {items.map(function (item, index) {
                        return (
                          <CartHome name= "testname" item={item}/>
             
                          
                        );

              })
            }

            </div>
            {/*End product-grid-4*/}
          </div>
          {/*En tab one (Featured)*/}
          {/* --------------------- */}
       
          {/* ---------------------- */}
          <div
            className="tab-pane fade"
            id="tab-two"
            role="tabpanel"
            aria-labelledby="tab-two"
          >
            <div className="row product-grid-4">

              {/* staaaaaaaaarttttttttttttttttttttttttt */}
              {/* staaaaaaaaarttttttttttttttttttttttttt */}
              {/* staaaaaaaaarttttttttttttttttttttttttt */}
              {/* staaaaaaaaarttttttttttttttttttttttttt */}
              {/* staaaaaaaaarttttttttttttttttttttttttt */}
              {/* staaaaaaaaarttttttttttttttttttttttttt */}
              {/* popular */}

              {/* {skel && <Skeleton  width={40} height={100} /> }  */}
              {
              items.map(function (item, index) {
                return (
                  <CartHome name= "testname" item={item}/>             
                   );
                })
              }
             
          
              {/* enddddddddddddddddddddddd */}
              {/* enddddddddddddddddddddddd */}
              {/* enddddddddddddddddddddddd */}
              {/* enddddddddddddddddddddddd */}
              {/* enddddddddddddddddddddddd */}
            </div>
            {/*End product-grid-4*/}
          </div>
          {/*En tab two (Popular)*/}
          <div
            className="tab-pane fade"
            id="tab-three"
            role="tabpanel"
            aria-labelledby="tab-three"
          >
            <div className="row product-grid-4">
            {/* start---------------start */}
            {/* start---------------start */}
            {/* start---------------start */}
            {/* start---------------start */}
            {/* start---------------start */}
            {/* new add */}

             {newitems.map(function (item, index) {
                        return (
                          <CartHome name= "testname" item={item}/>
             
                          
                        );

              })
            }
           
            {/* enddddddddd----------ddddd */}
            {/* enddddddddd----------ddddd */}
            {/* enddddddddd----------ddddd */}
            {/* enddddddddd----------ddddd */}
            {/* enddddddddd----------ddddd */}
            {/* enddddddddd----------ddddd */}
            </div>
            {/*End product-grid-4*/}
          </div>
          {/*En tab three (New added)*/}
        </div>
        {/*End tab-content*/}
      </div>
    </section>
   {/* sellers */}
   {/* sellers */}
   {/* sellers */}
   {/* sellers */}
   {/* sellers */}
   {/* sellers */}
   {/* sellers */}
   {/* sellers */}
   {/* sellers */}
   {/* sellers */}
   {/* sellers */}
   {/* sellers */}
   
   <section className="product-tabs section-padding position-relative wow fadeIn animated">
      <div className="bg-square" />
      <div className="container">
        <div className="tab-header">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
           
            
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="nav-tab-three"
                data-bs-toggle="tab"
                data-bs-target="#tab-three"
                type="button"
                role="tab"
                aria-controls="tab-three"
                aria-selected="false"
              >
                user product
              </button>
            </li>
          </ul>
         
        </div>
        {/*End nav-tabs*/}
        <div className="tab-content wow fadeIn animated" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="tab-one"
            role="tabpanel"
            aria-labelledby="tab-one"
          >
            <div className="row product-grid-4">


              {/* section one ------------------------------------------------*/}



              {seller.length > 0 && (seller.map((row,key)=>(

                  <div key={key} className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30" >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <Link 
                      to={"product/seller/" + row.id}
                      >
                        <img
                          className="default-img"
                          // style={{width:'400px', height:'300' }}
                          src={`${baseUrlImg}${row.product_image}`}
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src={`${baseUrlImg}${row.product_image}`}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-action-1">
                   
                     
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">for seller</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                    
                    </div>
                    <h2>
                      <a 
                      // href="shop-product-right.html"
                      >
                      {row.name}
                      </a>
                    </h2>
                    <div className="" title="90%">
                      <span>
                        <span> <span style={{color:"blue"}} >Phone:</span>  {row.phone_number}</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>${row.price} </span>
                    </div>
                    <div className="product-action-1 show">
                     
                    </div>
                  </div>
                </div>
              </div>

              ))) 
              
              }
            
           
              {/* end section one------------------------------------------- */}
            </div>
            {/*End product-grid-4*/}
          </div>
          {/*En tab one (Featured)*/}
        
          {/*En tab two (Popular)*/}
          
          {/*En tab three (New added)*/}
        </div>
        {/*End tab-content*/}
      </div>
    </section>





   {/* end sellers */}
   {/* end sellers */}
   {/* end sellers */}
   {/* end sellers */}
   {/* end sellers */}
   {/* end sellers */}
   {/* end sellers */}
   {/* end sellers */}
   {/* end sellers */}
   {/* end sellers */}
   {/* end sellers */}
   {/* end sellers */}
    
    <section className="bg-grey-9 section-padding">
      <div className="container pt-25 pb-25">
        <div className="heading-tab d-flex">
          <div className="heading-tab-left wow fadeIn animated">
            <h3 className="section-title mb-20">
              <span>Monthly</span> Best Sell
            </h3>
          </div>
          <div className="heading-tab-right wow fadeIn animated">
            <ul
              className="nav nav-tabs right no-border"
              id="myTab-1"
              role="tablist"
            >
              {/* <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="nav-tab-one-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-one-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-one"
                  aria-selected="true"
                >
                  Featured
                </button>
              </li> */}
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="nav-tab-two-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-two-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-two"
                  aria-selected="false"
                >
                  Popular
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="nav-tab-three-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-three-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-three"
                  aria-selected="false"
                >
                  New added
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 d-none d-lg-flex">
            <div className="banner-img style-2 wow fadeIn animated">
              <img src = {require("../assets/bestsell.png")} alt=""  height="338px"/>
              <div className="banner-text">
                <span>Woman Area</span>
                <h4 className="mt-5">
                  Save 17% on <br />
                  Clothing
                </h4>
              
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div
              className="tab-content wow fadeIn animated"
              id="myTabContent-1"
            >
              <div
                className="tab-pane fade show active"
                id="tab-one-1"
                role="tabpanel"
                aria-labelledby="tab-one-1"
              >
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-arrows"
                  />
                  <div
                    className="carausel-4-columns carausel-arrow-center"
                    id="carausel-4-columns"
                  >
                
                    {/* Monthly components */}

                    {popularitems.map((hi)=>(
                    <Monthly  dis="50"
                      id={hi.id}
                      itemName={hi.name}
                      catName={hi.category_name}
                      price={hi.price}
                      img={hi.product_image}
                      // rating={hi.average_rating}
                      best="best sell"
                        />

                      ))}


                      {/* <CartHome name= "testname" item={hi}/> */}
                     


                  </div>
                </div>
              </div>
              {/*End tab-pane*/}
              <div
                className="tab-pane fade"
                id="tab-two-1"
                role="tabpanel"
                aria-labelledby="tab-two-1"
              >
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-2-arrows"
                  />
                  <div
                    className="carausel-4-columns carausel-arrow-center"
                    id="carausel-4-columns-2"
                  >
                    {popularitems.map((hi)=>(
                    <Monthly  dis="50"
                      id={hi.id}
                      itemName={hi.name}
                      catName={hi.category_name}
                      price={hi.price}
                      img={hi.product_image}
                      // rating={hi.average_rating}
                      best="best sell"
                        />

                      ))}
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-three-1"
                role="tabpanel"
                aria-labelledby="tab-three-1"
              >
                 <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-3-arrows"
                  />
                  <div
                    className="carausel-4-columns carausel-arrow-center"
                    id="carausel-4-columns-3"
                  >
                    {newitems.map((hi1)=>(
                    <Monthly  
                      id={hi1.id}
                      itemName={hi1.name}
                      catName={hi1.category_name}
                      price={hi1.price}
                      img={hi1.product_image}
                      // rating={hi1.average_rating}
                      best="best sell"
                        />

                      ))}
                  </div>
                </div>
              
              </div>
            </div>
            {/*End tab-content*/}
          </div>
          {/*End Col-lg-9*/}
        </div>
      </div>
    </section>
   

   
  </main>
  )
}

export default Home

