import { useState } from 'react';
import { Axios, baseUrl, baseUrlImg } from '../back-end/api/Axios'
import Cookie from 'cookie-universal'

import { Link, useNavigate } from 'react-router-dom';
// import LoadingSubmit from '../LoadingSubmit';


const Checkout = () => {

  const [form,setForm] =useState({
    first_name: "",
    last_name: "",
    city: "",
    phone:"",
    adress:"",
    details:"",

  })
  const nav =useNavigate()
  const [loading,setLoading] = useState(false)

  const[err,setErr] = useState("")

  function handleChange(e){
    setForm({...form,[e.target.name]: e.target.value })
  }
  

  const cookie = Cookie()
  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    try{
      console.log(form)
      const res = await Axios.post(`${baseUrl}order/createOrder` ,{
        "first_name": form.first_name,
        "last_name": form.last_name,
        "city": form.city,
        "phone":form.phone,
        "adress":form.adress,
        "details":form.details,
      });
      setLoading(false);
     
      nav("/")
      
        }catch(err){
          console.log(err)
          setLoading(false);
          // if (err.response.status === 401){
          setErr("order has error");
        // }else{
          setErr("Internal Server Error");
        // }
       }
    }
  
  return (
    <form onSubmit={handleSubmit}>
    <main className="main">
<section className="mt-50 mb-50">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mb-sm-15">
        <div className="toggle_info">
          <span>
            <i className="fi-rs-user mr-10" />
            <span className="text-muted">Already have an account?</span>{" "}
            <a
              href="#loginform"
              data-bs-toggle="collapse"
              className="collapsed"
              aria-expanded="false"
            >
              Click here to login
            </a>
          </span>
        </div>
        <div className="panel-collapse collapse login_form" id="loginform">
          <div className="panel-body">
            <p className="mb-30 font-sm">
              If you have shopped with us before, please enter your details
              below. If you are a new customer, please proceed to the Billing
              &amp; Shipping section.
            </p>
            {/* <form method="post">
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Username Or Email"
                />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="login_footer form-group">
                <div className="chek-form">
                  <div className="custome-checkbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="remember"
                      defaultValue=""
                    />
                    <label className="form-check-label" htmlFor="remember">
                      <span>Remember me</span>
                    </label>
                  </div>
                </div>
                <a href="#">Forgot password?</a>
              </div>
              <div className="form-group">
                <button className="btn btn-md" name="login">
                  Log in
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="divider mt-50 mb-50" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="mb-25">
          <h4>Billing Details</h4>
        </div>
        <div className="form-group">
            <input
              type="text"
              required
           
              name="first_name"
              value={form.first_name} 
              onChange={handleChange}
              placeholder="first  name *"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              required
           
              name="last_name"
              value={form.last_name} 
              onChange={handleChange}
              placeholder="Last name *"
            />
          </div>
          
     
          <div className="form-group">
            <input
              type="text"
            
              required
              name="adress"
              value={form.adress} 
              onChange={handleChange}
              placeholder="Address *"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
            
              required
              name="city"
              value={form.city} 
              onChange={handleChange}
              placeholder="city *"
            />
          </div>
        
         
       
          <div className="form-group">
            <input required="" type="text" name="phone" 
            
              value={form.phone} 
              onChange={handleChange}
            
            placeholder="Phone *" />
          </div>
        
          <div className="form-group">
            <div className="checkbox">
              <div className="custome-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="createaccount"
                />
              </div>
            </div>
          </div>
          <div
            id="collapsePassword"
            className="form-group create-account collapse in"
          >
            <input
              required=""
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="ship_detail">
            <div className="form-group">
              <div className="chek-form">
                <div className="custome-checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    id="differentaddress"
                  />
                </div>
              </div>
            </div>
            <div id="collapseAddress" className="different_address collapse in">
              <div className="form-group">
                <input
                  type="text"
                  required=""
                  name="fname"
                  placeholder="First name *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  required=""
                  name="lname"
                  placeholder="Last name *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="billing_address"
                  required=""
                  placeholder="Address *"
                />
              </div>
            </div>
          </div>
          <div className="mb-20">
            <h5>Additional information</h5>
          </div>
          <div className="form-group mb-30">


            <textarea   name="details"
              value={form.details} 
              onChange={handleChange} rows={5} placeholder="Order notes" defaultValue={""} />
          </div>
          <button type='submit' href="#" className="btn btn-fill-out btn-block mt-30">
            Place Order
          </button>
      </div>
     
    </div>
  </div>
</section>
</main>
</form>
    )
}

export default Checkout