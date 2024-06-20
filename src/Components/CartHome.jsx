import { Link, useNavigate } from "react-router-dom"
import Cookie from 'cookie-universal'
import Rating from '@mui/material/Rating';
import { Axios, baseUrl, baseUrlImg } from "../back-end/api/Axios"
import { useEffect, useState } from "react"
import LoadingSubmit from "../LoadingSubmit"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const CartHome = (props) => {
const [loading, setlodaing] = useState (false)
// if(props.item){setskel(false)}
const nav = useNavigate()
// add to cart
const cookie =Cookie()
// const [cart, setAddToCart] = useState(null)
const addToCart = async (id) => {
 setlodaing(true)
 const token = cookie.get("e-c")
console.log(token)
 if (token != undefined ){
   await Axios.post('cart/addToCart', {
     "item_id": id
   }).then(({ data }) => {
     toast("item added successfuly!");
    //  setAddToCart(data.data);
   }) 
   setlodaing(false)
 }else{
  nav('/log')
}
}

// ---





   const addToWishlist = async (id) => {
    try {
      
     const  res = await Axios.post(`${baseUrl}item/addToWishList`, {
      "item_id": id 
      })
     console.log("added to wishlist successfuly")
     toast("item added successfuly!");
        } catch (error) {
        nav('/log')
      console.log(error)
    }
  
  }
   // ------------
  return (
    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
     { loading && <LoadingSubmit/>}

    <div className="product-cart-wrap mb-30">
      <div className="product-img-action-wrap">
        <div className="product-img product-img-zoom">
          <Link to={"/product/"+props.item.id}>
            
            <img
              className="default-img"  height="220px" 
              src={`${baseUrlImg}${props.item.product_image}`}
              alt=""
            />
            <img
              className="hover-img"  height="220px"
              src={`${baseUrlImg}${props.item.product_image}`}
              alt=""
            />
          </Link>
        </div>
        <div className="product-action-1">
          
          <a
           onClick={()=>addToWishlist(props.item.id)} 
            aria-label="Add To Wishlist"
            className="action-btn hover-up"
            // href="shop-wishlist.html"
          >
            <i className="fi-rs-heart" />
          </a>
         
        </div>
        <div className="product-badges product-badges-position product-badges-mrg">
        </div>
      </div>
      <div className="product-content-wrap">
        <div className="product-category">
          <a href="shop-grid-right.html">
                         {props.item.category_name}  
          </a>
        </div>
        <h2>
          <a href="shop-product-right.html">
        {props.item.name}
          </a>
        </h2>
        <div className="" title={((props.item.average_rating)*1).toFixed(1)}>
        <Rating
            name="simple-controlled"
            value={props.item.average_rating}
            precision={0.5}
            readOnly
            size="small"
        />
          <span>
            <span>{props.item.dis}%</span>
          </span>
        </div>
        <div className="product-price">
        <span>${((props.item.price)*0.93).toFixed(2)} </span>
        <span className="old-price">${props.item.price.toFixed(2)}</span>
        </div>
        <div className="product-action-1 show">

          <a 
            onClick={()=>addToCart(props.item.id)} 
            aria-label="Add To Cart"
            className="action-btn hover-up"
          >
            <i className="fi-rs-shopping-bag-add" />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartHome