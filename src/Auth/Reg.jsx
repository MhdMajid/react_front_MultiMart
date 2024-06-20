import Cookie from 'cookie-universal'
import { baseUrl } from '../back-end/api/Axios';
import { useState } from 'react';
import axios from 'axios';
import LoadingSubmit from '../LoadingSubmit';
import { Link, useNavigate } from 'react-router-dom';



const Reg = () => {

  const nav =useNavigate()

  const [form,setForm] =useState({
    email:"",
    first_name:"",
    last_name:"",
    phone_number:"",
    gender:"",
    password:"",

  })

  const [loading,setLoading] = useState(false)

  const[err,setErr] = useState("")

  function handleChange(e){
    setForm({...form,[e.target.name]: e.target.value })
  }
  

  const cookie = Cookie()
  async function handleSubmit(e){
    e.preventDefault();
    // console.log(form)
    setLoading(true);
    try{
      const res = await axios.post(`${baseUrl}auth/register` , 
      {
 
        "first_name":form.first_name,
        "last_name" : form.last_name ,
        "phone_number":form.phone_number,
        "email": form.email,
        "gender":form.gender,
        "password":form.password,

      },
      
      );
      setLoading(false);
      console.log("success")
      const token = res.data.token
      cookie.set("e-c", token)
      window.location.pathname = "/"

      // nav("/")
      console.log(res)
        }catch(err){
          setLoading(false);
        console.log(err)
           if (err.response.status === 401){
          setErr(" Account already created");}
          else if(err.response.status === 500){
          setErr("error in the input field phone Out of range value \n or name or email");
        }else{
          setErr("Internal Server Error");
        }
        
       }
    }
    // console.log(form)
    
  
  return (
<>
    { loading  && <LoadingSubmit/> }
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
                
  </>
  )
}

export default Reg
