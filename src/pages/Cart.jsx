import Cookie from 'cookie-universal'
import { useEffect, useState } from 'react'
import { Axios, baseUrl, baseUrlImg } from '../back-end/api/Axios'
import { Link,useNavigate } from 'react-router-dom';
const Cart = () => {
const [runEffaect , setRun] =  useState(0);
const nav = useNavigate()

 // => change quantity cart
 async function quantity(id,q) {
  try {
    await Axios.post("cart/countCart",{
    "cart_item_id":id,
    "count":q
    })
    setRun((pref) => pref + 1)
    console.log("quantity update successfully")
   
  } catch (error) {
    console.log(error)
  }
}
 // END  change quantity cart ##



  // delete cart

  async function DEL() {
    try {
      await Axios.get(`${baseUrl}cart/deleteCart`)
      setRun((pref) => pref + 1)
      console.log("cart deleted successfly")
      nav("/")
    } catch (error) {
      console.log(error)
    }
  }
  // --

  //remove cart 
  async function handleDelete(id){
    try {
      console.log(id)
      await Axios.post(`${baseUrl}cart/deleteFromCart`,{
        "cart_item_id" :id
      }
      )
      
      setRun((pref) => pref + 1)
      console.log("delete cart successfly")
    } catch (error) {
      console.log(error)}
    }
  // ----
  const cookie=Cookie()
  const [lodaing, setlodaing] = useState(false)

  const [cart, setCart] = useState({itmes :[],total:0,data:[]})
  useEffect(() => {
    
    fetchCart();
  }, [runEffaect])

  const fetchCart = async () => {
    setlodaing(true)
    const token = cookie.get("e-c")
  //  console.log(token)
    // if (token != undefined ){
      await Axios.get('/cart/getCart' ).then(({ data }) => {
        setCart(data.message)
        console.log(data.message)
        // console.log(data.message.itmes.count[0])
       }
      )
      .catch(({response})=>{console.log(response)})
      
      setlodaing(false)
    // }
   }
  //  console.log(cart.itmes[0].count)
  return (
    <main className="main">
    <section className="mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table shopping-summery text-center clean">
                <thead>
                  <tr className="main-heading">
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    {/* <th scope="col">Subtotal</th> */}
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart !=null && cart.itmes.length>0 &&cart.itmes.map( (cartItem,index)=>{

                    return  <tr key={index}>
                    <td className="image product-thumbnail">
                      <img src={`${baseUrlImg}${cartItem.product_image}`} alt="#" />
                    </td>
                    <td className="product-des product-name">
                      <h5 className="product-name">
                        <Link to={`/product/${cartItem.id}`}>
                        {cartItem.name}
                        </Link>
                      </h5>
                    
                    </td>
                    <td className="price" data-title="Price">
                      <span>${cartItem.price} </span>
                    </td>
                    
                    {/* <td className="text-right" data-title="Cart">
                      <span>${cartItem.discount} </span>
                    </td> */}
                    {/* <td className="action" data-title="Remove">
                     
                     <button type="button" className="" onClick={()=>{
                       quantity(cartItem.cart_id,((cart.itmes[index].count)+1))
                       }}>
                       +
                     </button>
                     <span>{cartItem.count} </span>
                     <button type="button" className="" onClick={()=>{
                       quantity(cartItem.cart_id,(cart.itmes[index].count != 1 ? cart.itmes[index].count -1 : cart.itmes[index].count))
                     }
                       }>
                       -
                     </button>
 
                     </td> */}
                     <td className="text-center" data-title="Stock">
                                            <div className="detail-qty border radius  m-auto">
                                                <Link                                               
                                                className="qty-down"
                                                onClick={()=>{
                                                  quantity(cartItem.cart_id,(cart.itmes[index].count != 1 ? cart.itmes[index].count -1 : cart.itmes[index].count))
                                                }}>
                                                  <i className="fi-rs-angle-small-down"></i></Link>
                                                <span className="qty-val">{cartItem.count}</span>
                                                <Link
                                                onClick={()=>{
                                                  quantity(cartItem.cart_id,((cart.itmes[index].count)+1))
                                                  }}
                                                className="qty-up"><i className="fi-rs-angle-small-up"></i></Link>
                                            </div>
                                        </td>
                    <td className="action" data-title="Remove">
                      <a
                      onClick={() =>handleDelete(cartItem.cart_id)} 
                      // href="#"
                       className="text-muted">
                        <i className="fi-rs-trash" />
                      </a>
                    </td>
                    
                  </tr>;
                  })
             
                }
              
                </tbody>
              </table>
            </div>
            <div className="cart-action text-end">
              <a className="btn  mr-10 mb-sm-15" onClick={DEL}>
                <i className="fi-rs-shuffle mr-10" />
                {/*  */}
                Update Cart
              </a>
              <Link className="btn " to={"/"}>
                <i className="fi-rs-shopping-bag mr-10" />
                Continue Shopping
              </Link>
            </div>
            <div className="divider center_icon mt-50 mb-50">
              <i className="fi-rs-fingerprint" />
            </div>
            <div className="row mb-50">

              <div className="col-lg-6 col-md-12"  style={{ marginLeft: '342px' }} >
                <div className="border p-md-4 p-30 border-radius cart-totals">
                  <div className="heading_s1 mb-3">
                    <h4>Cart Totals</h4>
                  </div>
                  <div className="table-responsive" >
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="cart_total_label">Cart Subtotal</td>
                          <td className="cart_total_amount">
                            <span className="font-lg fw-900 text-brand">
                              ${cart.total}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="cart_total_label">Shipping</td>
                          <td className="cart_total_amount">
                            {" "}
                            <i className="ti-gift mr-5" /> Free Shipping
                          </td>
                        </tr>
                        <tr>
                          <td className="cart_total_label">Total</td>
                          <td className="cart_total_amount">
                            <strong>
                              <span className="font-xl fw-900 text-brand">
                              ${cart.total}
                              </span>
                            </strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Link to="/Checkout" className="btn ">
                    {" "}
                    <i className="fi-rs-box-alt mr-10" /> Proceed To CheckOut
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Cart