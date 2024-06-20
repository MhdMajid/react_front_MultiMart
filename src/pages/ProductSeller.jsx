import { Link, useParams } from "react-router-dom";

import Cookie from 'cookie-universal'
import { useEffect, useState } from 'react'
import { Axios, baseUrl, baseUrlImg } from '../back-end/api/Axios'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



const ProductSeller = () => {
  const addToWishlist = async (id) => {
    try {
      
     const  res = await Axios.post(`${baseUrl}item/addToWishList`, {
      "item_id": id 
      })
     console.log("added to wishlist successfuly")
  
    } catch (error) {
      console.log(error)
    }
  
  }
  // rand

  const [popularitems, setPopularItems] = useState([])
console.log("")
useEffect(() => {
  
  fetchpopularitems();
}, [])

const fetchpopularitems = async () => {
  setlodaing(true)
  const token = cookie.get("e-c")
 console.log(token)
 try {
  const formdata = new FormData ()
  formdata.append ('number_of_items',4)
  const  res = await axios.post(`${baseUrl}item/getItemsRandomly`, formdata)

    console.log(res.data.data);
    setPopularItems(res.data.data);

  
 } catch (error) {
  console.log(error)
  setlodaing(false)

 }
   
 }
// ----------end rand




// const addToWishlist = async (id) => {
//   try {
    
//    const  res = await Axios.post(`${baseUrl}item/addToWishList`, {
//     "item_id": id 
//     })
//    console.log("added to wishlist successfuly")

//   } catch (error) {
//     console.log(error)
    
//   }

// }
const { id } = useParams();

  const cookie=Cookie()
  const [lodaing, setlodaing] = useState(false)
    const [runEffaect , setRun] =  useState(0);

  const [item, setItem] = useState(null)
  useEffect(() => {
    
    fetchItem();
  }, [runEffaect,id ])
  const fetchItem = async () => {
    setlodaing(true)
    const token = cookie.get("e-c")
   console.log(token)
    // if (token != undefined ){
      await Axios.post('seller/getoneseller', {
        "id": id
      }).then(({ data }) => {
        setItem(data.data);
        console.log(data.data);
      }) 
      setlodaing(false)
    // }
   }

  //  const [cart, setAddToCart] = useState(null)
  //  const addToCart = async () => {
  //   setlodaing(true)
  //   const token = cookie.get("e-c")
  //  console.log(token)
  //   if (token != undefined ){
  //     await Axios.post('cart/addToCart', {
  //       "item_id": id
  //     }).then(({ data }) => {
  //       toast("item added successfuly!");
  //       setAddToCart(data.data);
  //     }) 
  //     setlodaing(false)
  //   }
  //  }
  return (
    <main className='main'>
{item != null &&<section className="mt-50 mb-50">
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
        <div className="product-detail accordion-detail">
          <div className="row mb-50">
            <div className="col-md-6 col-sm-12 col-xs-12" >
              <div className="detail-gallery">
                <span className="zoom-icon">
                  <i className="fi-rs-search" />
                </span>
                {/* MAIN SLIDES */}
                <div className="product-image-slider">
                  <figure className="border-radius-10">
                    <img
                      src={`${baseUrlImg}${item.product_image}`}
                      alt="product image"
                    />
                  </figure>
              
                </div>
                {/* THUMBNAILS */}
            
              </div>
              {/* End Gallery */}
            
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="detail-info" >
                <h2 className="title-detail">{item.name}</h2>
                <div className="product-detail-rating">
                  <div className="pro-details-brand">
                   
                  </div>
                  <div className="product-rate-cover text-end">
                    <div className="">
                      

                    </div>
                    <span className="font-small ml-5 text-muted">
                      {item.description}
                    </span>
                  </div>
                </div>
                <div className="clearfix product-price-cover">
                  <div className="product-price primary-color float-left">
                    <ins>
                      <span className="text-brand">${item.price}</span>
                    </ins>
                    <span className="save-price  font-md color3 ml-15">
                      25% Off
                    </span>
                  </div>
                </div>
                <div className="bt-1 border-color-1 mt-15 mb-15" />
                <div className="short-desc mb-30">
                  <p>
                    {item.description}
                  </p>
                </div>
               
              
               
                <div className="bt-1 border-color-1 mt-30 mb-30" />
                <div className="detail-extralink">
                
                  {/* <div className="product-extra-link2">
                    <button type="submit" className="button button-add-to-cart" onClick={()=>addToCart()}>
                      Add to cart
                    </button>
                    <a 
                    onClick={()=>addToWishlist(id)} 
                      aria-label="Add To Wishlist"
                      className="action-btn hover-up"
                      // href="/wishlist"
                    >
                      <i className="fi-rs-heart"  />
              
                    </a>
                  </div> */}
                </div>
               
              </div>
              {/* Detail Info */}
            </div>
          </div>

          <div className="row mt-60">
            <div className="col-12">
              <h3 className="section-title style-1 mb-30">Related products</h3>
            </div>
            {/*  ---------start-------- */}
            {/*  ---------start-------- */}
            {/*  ---------start-------- */}
            {/*  ---------start-------- */}
            {/*  ---------start-------- */}
            {/*  ---------start-------- */}
            {/*  ---------start-------- */}
              <div className="col-12">
              <div className="row related-products">
            {popularitems.map((x)=>(
                <div className="col-lg-3 col-md-4 col-12 col-sm-6 m-3">
                  <div className="product-cart-wrap small hover-up">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link
                         to= {"/Product/"+x.id}
                         
                        tabIndex={0}>
                          <img
                          
                            src={baseUrlImg + x.product_image}
                            className="default-img"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src={baseUrlImg + x.product_image}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <a
                          aria-label="Add To Wishlist"
                          className="action-btn small hover-up"
                          
                          tabIndex={0}
                        >
                          <i 
                          onClick={()=>addToWishlist(x.id)}

                          className="fi-rs-heart" />
                        </a>
                       
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Related</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <h2>
                        <a tabIndex={0}>
                         {x.name}
                        </a>
                      </h2>
                      <div className="rating-result" title="90%">
                        <span></span>
                      </div>
                      <div className="product-price">
                        <span>${x.price} </span>
                      </div>
                    </div>
                  </div>
                </div>
             
            ))}
              </div>
            </div>
            {/* endddddddddddddddddddddddddddddd */}
            
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</section>}



</main>
    )
}

export default ProductSeller