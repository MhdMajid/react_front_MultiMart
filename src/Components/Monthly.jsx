import { Link } from "react-router-dom"
import { Axios, baseUrl, baseUrlImg } from "../back-end/api/Axios"
import LoadingSubmit from "../LoadingSubmit"
import { useState } from "react"
import Cookie from 'cookie-universal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Monthly = (props) => {

  const width = '300px'; 
  const hight = '300px'; 
 const [loading, setlodaing] = useState (false)
const cookie = Cookie () 
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
    }
   }
// add to wishlist

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

  return (
    <div className="product-cart-wrap fixedWidth" style={{ width }} >
    <div className="product-img-action-wrap">
      <div className="product-img product-img-zoom">
        {/* <Link to= {`/Product/${props.id}`} > */}
        <Link to= {"/Product/"+props.id} >
          <img
            className="default-img" 
            width="100px" height="160px"
            src={(baseUrlImg+props.img)}
            alt=""
          />
          <img
            className="hover-img"
            src={(baseUrlImg+props.img)}
            alt=""
          />
        </Link>
      </div>
      <div className="product-action-1">
      
        <a
          onClick={()=>addToWishlist(props.id)} 
          aria-label="Add To Wishlist"
          className="action-btn small hover-up"
          
        >
          <i className="fi-rs-heart" />
        </a>
     
      </div>
      <div className="product-badges product-badges-position product-badges-mrg">
        <span className="best">{props.best}</span>
      </div>
    </div>
    <div className="product-content-wrap">
      <div className="product-category">
        <a href="shop-grid-right.html">{props.catName} </a>
      </div>
      <h2>
        <a href="shop-product-right.html">{props.itemName}</a>
      </h2>
      <div className="rating-result" title="90%">
        <span>
          <span>{props.dis}%</span>
        </span>
      </div>
      <div className="product-price">
        <span>${props.price} </span>
        <span className="old-price">${props.price}</span>
      </div>
      <div className="product-action-1 show">
        <a
         onClick={()=>addToCart(props.id)} 
          aria-label="Add To Cart"
          className="action-btn hover-up"
         
        >
          <i className="fi-rs-shopping-bag-add" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default Monthly