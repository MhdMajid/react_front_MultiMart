import { Link } from "react-router-dom"
import { AdminAxios, Axios, baseUrl, baseUrlImg } from "../back-end/api/Axios"


const Categories = (props) => {
  return (
    <div className="card-1">
    <figure className=" img-hover-scale overflow-hidden">
      <a href="shop-grid-right.html">
        <img src={baseUrlImg + props.img} alt="" />
      </a>
    </figure>
    <div className="product-action-1">
          
          <a
          //  onClick={()=>addToWishlist(props.id)} 
            aria-label="Add To Wishlist"
            className="action-btn hover-up"
            // href="shop-wishlist.html"
          >
            <i className="fi-rs-heart" />
          </a>
         
        </div>
        <div className="product-badges product-badges-position product-badges-mrg">
        </div>

        <div className="product-content-wrap">
        <div className="product-category">
        </div>
        <h2>
          <a href="shop-product-right.html">
        {props.name}
          </a>
        </h2>
        <div className="rating-result" title="90%">
          <span>
            <span>{props.type}%</span>
          </span>
        </div>
        <div className="product-price">
        <span>${((props.price)*0.93).toFixed(2)} </span>
        <span className="old-price">${props.price.toFixed(2)}</span>
        </div>
        <div className="product-action-1 show">

          <a 
            // onClick={()=>addToCart(props.id)} 
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

export default Categories