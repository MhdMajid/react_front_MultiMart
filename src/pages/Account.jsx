import { useEffect, useState } from "react"
import { AdminAxios, Axios, baseUrl, baseUrlImg } from "../back-end/api/Axios"
import { Link, useNavigate } from "react-router-dom"
import Cookie from 'cookie-universal'
import Logout from '../Auth/Logout'

const Account = () => {
  const nav = useNavigate()
  const cookie=Cookie()

  if(cookie.get('e-c') == undefined ){
    nav('/log')
  }
  // here we get the user
  const [user,setuser] = useState([])

   useEffect( () => {
   fetchuser();
  }, [] )

  const fetchuser = async ()=>{
    try {
      await Axios.get('user/getUserById').then(({ data }) => {setuser(data.data[0])
      // console.log(data.data)
      }) 

    } catch (error) {
      console.log(error)
    }
  }
  // ------------------------------------------------
  const [lodaing,setlodaing] = useState(false)

  async function handleDelete(id){
    try {
      setlodaing(true)
      console.log(id)
      await Axios.post('/seller/deleteseller',{
        "id" :id
      }
      )
      setRun((pref)=>pref+1)
      setlodaing(false)

      console.log("delete success")
    } catch (error) {
      setlodaing(false)

      console.log(error)}
    }

  const [runEffaect , setRun] =  useState(0);
  const [item, setitem] = useState([])
  useEffect(() => {
      fetchitem();
  }, [runEffaect])

  const fetchitem = async () => {
    setlodaing(true)

      // await Axios.get('seller/getseller').then(({ data }) => {setitem(data.data)}) 
      await Axios.get('seller/getAllSellerById').then(({ data }) => {setitem(data.data)}) 
      .catch(({response})=>{console.log(response)})
      // .catch(({})=>{})
      setlodaing(false)

  }
  // -----------------
  const [getorder, setGetOrder] = useState ([])
useEffect(()=>{
  fetchorder();
},[])
  const fetchorder = async () => {
try {

  const res= await Axios.get(`order/getOrdersByUser`) 
  setGetOrder(res.data.data);
console.log(res.data.data)
} catch (error) {
  console.log(error)
}
  } 
  return (
    <main className='main'>
<section className="pt-150 pb-150">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 m-auto">
        <div className="row">
          <div className="col-md-4">
            <div className="dashboard-menu">
              <ul className="nav flex-column" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="dashboard-tab"
                    data-bs-toggle="tab"
                    href="#dashboard"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    <i className="fi-rs-settings-sliders mr-10" />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="orders-tab"
                    data-bs-toggle="tab"
                    href="#orders"
                    role="tab"
                    aria-controls="orders"
                    aria-selected="false"
                  >
                    <i className="fi-rs-shopping-bag mr-10" />
                    Orders
                  </a>
                </li>
              
               
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="account-detail-tab"
                    data-bs-toggle="tab"
                    href="#account-detail"
                    role="tab"
                    aria-controls="account-detail"
                    aria-selected="true"
                  >
                    <i className="fi-rs-user mr-10" />
                    Account details
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="page-login-register.html">
                    <i className="fi-rs-sign-out mr-10" />
                     <Logout />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content dashboard-content">
              <div
                className="tab-pane fade active show"
                id="dashboard"
                role="tabpanel"
                aria-labelledby="dashboard-tab"
              >
                                <div className="card">
                  <div className="card-header">
                    <h5>Seller</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      Click her to add your product{" "}
                      <Link to="/contact">Create</Link>
                    </p>
                    {item.length > 0 &&(
              item.map((row,key)=>(
          <article key={key} className="itemlist">
    <div className="row align-items-center">
      <div className="col col-check flex-grow-0">
       
      </div>
      <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
        <Link className="itemside" to={`${baseUrlImg}${row.product_image}`}>
          <div className="left">
            <img
              src={`${baseUrlImg}${row.product_image}`}
              className="img-sm img-thumbnail"
              alt={row.product_image}
            />
          </div>
          <div className="info">
            <h6 className="mb-0">{row.name}</h6>
          </div>
        </Link>
      </div>
      <div className="col-lg-2 col-sm-2 col-4 col-price">
        
        <span>${row.price}</span>
      </div>
      <div className="col-lg-2 col-sm-2 col-4 col-status ">
        <h6 className="badge rounded-pill alert-success">{row.type}</h6>
      </div>
      {/* date */}
      <div className="col-lg  col-6 ">
        <span>{row.phone_number}</span>
      </div>
      {/* Edit and Delete */}
      <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
        {/* <Link to={`/DashBoard/editItem/${row.id}` } className="btn btn-sm font-sm rounded btn-brand m-1 ">
          <i className="material-icons md-edit " /> Edit
        </Link> */}
        <button onClick={() =>handleDelete(row.id)} className="btn btn-sm font-sm btn-light rounded">
          <i className="material-icons md-delete_forever" /> Delete
        </button>
      </div>
    </div>
   
  </article>
    )
    )
    )}
                  </div>
                </div>

              </div>
              <div
                className="tab-pane fade"
                id="orders"
                role="tabpanel"
                aria-labelledby="orders-tab"
              >
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Your Orders</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getorder.map((ord, key)=>
                           <tr key={key}>

                           <td>{key+1}</td>
                           <td>{ord.order_date}</td>
                           <td>Processing</td>
                           <td>${ord.total_price}</td>
                         </tr>
                          )}
                         
                      
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            
              <div
                className="tab-pane fade"
                id="address"
                role="tabpanel"
                aria-labelledby="address-tab"
              >
              </div>
              <div
                className="tab-pane fade"
                id="account-detail"
                role="tabpanel"
                aria-labelledby="account-Seller-tab"
              >
                  <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Hello ! {user.first_name} {user.last_name} </h5>
                  </div>
                  <div className="card-body">
                    <p>
                    From your account dashboard. you can easily check &amp;
                      view your <a href="#">recent orders</a>, manage your{" "}
                      <a href="#">shipping and billing</a> and{" "} <br/>
                       email : {user.email} <br/>
                       phone : {user.phone_number} <br/>
                       gender : {user.gender} <br/>
                    </p>
                  </div>
                </div>
              </div>
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

export default Account

