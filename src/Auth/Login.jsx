import Cookie from 'cookie-universal'
import { baseUrl } from '../back-end/api/Axios';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSubmit from '../LoadingSubmit';

const Login = () => {

  
  const [form,setForm] =useState({
    email:"",
    password:"",

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
      const res = await axios.post(`${baseUrl}auth/login` ,{
        "email": form.email,
        "password":form.password,
      });

      setLoading(false);
      const token = res.data.token
      cookie.set("e-c", token)
      console.log(cookie.get("e-c"))
      window.location.pathname = "/"
      // nav("/")
      
        }catch(err){
          console.log(err)
          setLoading(false);
          // if (err.response.status === 401){
          setErr("Wrong email or password");
        // }else{
          setErr("Internal Server Error");
        // }
       }
    }


  return (
    <>
    {/* {loading && <LoadingSubmit/>}
    
    <div className="w-100"
    style={{desplay: "flex" ,justifyContent: "center" , alignItems: "center"}}

    >
    <div className="login_wrap widget-taber-content p-30 background-white border-radius-10 mb-md-5 mb-lg-0 mb-sm-5">
      <div className="bg-white" >
        <div className="heading_s1">
          <h3 className="mb-30">
            <Link to="/">Home</Link>
          </h3>
          <h3 className="mb-30">Login</h3>
        </div>
        <form  onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              required=""
              name="email"
              onChange={handleChange}
              value={form.email}
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <input
              required=""
              type="password"
              name="password"
              onChange={handleChange}
              value={form.password}
              placeholder="Password"
            />
          </div>
          <div className="login_footer form-group">
            <div className="chek-form">
              <div className="custome-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="exampleCheckbox1"
                  defaultValue=""
                />
            {err && <p>{err}</p>}
              </div>
            </div>
            <Link className="text-muted" to="/reg">
            Register now 
            </Link>

          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-fill-out btn-block hover-up"
              name="login"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div> */}

{loading && <LoadingSubmit/>}
<main className="main">
    <section className="pt-150 pb-150">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 m-auto">
        <div className="row">
          <div className="col-lg-5">
            <div className="login_wrap widget-taber-content p-30 background-white border-radius-10 mb-md-5 mb-lg-0 mb-sm-5">
              <div className="padding_eight_all bg-white">
                <div className="heading_s1">
                  <h3 className="mb-30">Login</h3>
                </div>
                <form  onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                     type="text"
                     required=""
                     name="email"
                     onChange={handleChange}
                     value={form.email}
                     placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required=""
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={form.password}
                      placeholder="Password"
                    />
                  </div>
                  <div className="login_footer form-group">
                    <div className="chek-form">
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox1"
                          defaultValue=""
                        />
                         {err && <p>{err}</p>}
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox1"
                        >
                          <span>Remember me</span>
                        </label>
                      </div>
                    </div>
                    <a className="text-muted" href="#">
                      Forgot password?
                    </a>
                  </div>
                  <div className="form-group">
                  <button
              type="submit"
              className="btn btn-fill-out btn-block hover-up"
              name="login"
            >
              Log in
            </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-6">
            <div className="login_wrap widget-taber-content p-30 background-white border-radius-5">
              <div className="padding_eight_all bg-white">
                <div className="heading_s1">
                  <h3 className="mb-30">Create an Account</h3>
                </div>
                <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            required=""
            value={form.first_name}
            name="first_name"
            onChange={handleChange}
            placeholder="First Name :"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            required=""
            value={form.last_name}
            name="last_name"
            onChange={handleChange}
            
           
            placeholder="Last Name :"
          />
                  </div>
                  <div className="form-group">
          <input
            type="email"
            required=""
            onChange={handleChange}
            value={form.email}
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            required=""
            onChange={handleChange}
            value={form.phone_number}
            name="phone_number"
            placeholder="Phone Number"
          />
        </div>
      <div className="form-group">
        <select
           className="form-select form-select-sm"
          name="gender"
          onChange={handleChange}
          value={form.gender}
        id=""
        >
          <option selected>Gender</option>
          <option >male</option>
          <option >female</option>
        </select>
       </div>
       
        <div className="form-group">
          <input
            required=""
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            placeholder="Password"
          />
          {err && <p>{err}</p>}
        </div>
        <div className="login_footer form-group">
          <div className="chek-form">
           
          </div>
          <a href="page-privacy-policy.html">
            <i className="fi-rs-book-alt mr-5 text-muted" />
            Lean more
          </a>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-fill-out btn-block hover-up"
            name="login"
          >
            Submit &amp; Register
          </button>
        </div>
      </form>
      <div className="divider-text-center mt-15 mb-15">
        <span> or</span>
      </div>
      <div className="text-muted text-center">
        Already have an account? <Link to="/log">Sign in now</Link>

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


  </>
  )
}

export default Login
