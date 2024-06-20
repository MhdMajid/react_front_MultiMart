import { useEffect, useState } from 'react'
import { Axios, baseUrl, baseUrlImg } from '../back-end/api/Axios'
import Cookie from 'cookie-universal'
import {  Link, useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';


const Wishlist = () => {
  const nav = useNavigate()
  const cookie=Cookie()

  if(cookie.get('e-c') == undefined ){
    nav('/log')
  }
  async function handleDelete(id){
    try {
    
      console.log(id)
      await Axios.post(`${baseUrl}item/deleteFromWishList`,{
        "wishlist_item_id" :id
      }
      )
      setRun((pref)=>pref+1)

      console.log("delete success")
    } catch (error) {

      console.log(error)}
    }
  const [runEffaect , setRun] =  useState(0);
  useEffect(() => {
    
    fetchWishlist();
  }, [runEffaect])

const[Wishlist, setWishlist ] = useState ([])

  const fetchWishlist = async () => {
    
      await Axios.get(`${baseUrl}item/getWishList`).then(({ data }) => {
        setWishlist(data.data);
      }) .catch(({response})=>{console.log(response)})
    
   }
   console.log(Wishlist)

  //  add to cart 
  const addToCart = async (id) => {
    // setlodaing(true)
    const token = cookie.get("e-c")
   console.log(token)
    if (token != undefined ){
      await Axios.post('cart/addToCart', {
        "item_id": id
      }).then(({ data }) => {
        toast("item added successfuly!");
       //  setAddToCart(data.data);
      }) 
      // setlodaing(false)
    }else{
     nav('/log')
   }
   }

  return (
    <main className="main">

<section className="mt-50 mb-50">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table shopping-summery text-center">
            <thead>
              <tr className="main-heading">
                <th scope="col" colSpan={2}>
                  Product
                </th>
                <th scope="col">Price</th>
                <th scope="col">Stock Status</th>
                <th scope="col">Action</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {Wishlist.map((wish, key)=>(
              <tr key={key}>
                <td className="image product-thumbnail">
                  <img src= {`${baseUrlImg}${wish.product_image}`}  />
                </td>
                <td className="product-des product-name">
                  <h5 className="product-name">
                    <Link  to={`/product/${wish.id}`}>

                            
                         {wish.name}

                    </Link>
                  </h5>
                  <p className="font-xs">
                    Maboriosam in a tonto nesciung eget
                    <br /> distingy magndapibus.
                  </p>
                </td>
                <td className="price" data-title="Price">
                  <span>${wish.price} </span>
                </td>
                <td className="text-center" data-title="Stock">
                  <span className="color3 font-weight-bold">In Stock</span>
                </td>
                <td className="text-right" data-title="Cart">
                  <button className="btn btn-sm" onClick={()=>addToCart(wish.id)}>
                    <i className="fi-rs-shopping-bag mr-5"  />
                    Add to cart
                  </button>
                </td>
                <td className="action" data-title="Remove">
                  <a href="#" onClick={() =>handleDelete(wish.wish_list_id)}>
                    
                    <i className="fi-rs-trash" />
                  </a>
                </td>
              </tr>
                                        ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
</main>

    )
}

export default Wishlist

