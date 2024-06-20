import { Link } from "react-router-dom"
import { Axios } from "../api/Axios"
import { useEffect, useState } from "react"
const SideBar = () => {
    // check user
    const [flag,setflag] = useState(false)
    const [check,setcheck]=useState('')
    useEffect(()=>{
      fetchCheck();
    },[])
    const fetchCheck = async ()=>{
      
        await Axios.get('user/checkUser')
        .then(({data})=>{
          setcheck(data.role)
          // cookie.set("rloe", data.role)
          if( data.role == "superadmin" ){
            setflag(true)
          }
  
        })
        .catch(({error})=>{
          console.log(error)})
  
    }
    // end check user
  return (
     <>
  <div className="screen-overlay" />
  <aside className="navbar-aside" id="offcanvas_aside">
    <div className="aside-top">
      <Link to="/" className="brand-wrap">
        <img        
          src={require('../../logo.png')}
          className="logo"
          alt="Multimart Dashboard"
        />
      </Link>
      <div>
        
      </div>
    </div>
    <nav>
      <ul className="menu-aside">
        <li className="menu-item ">
          <Link className="menu-link" to="/DashBoard/DashHome">
            
            <i className="icon material-icons md-home" />
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li className="menu-item ">
          <Link className="menu-link" to="/DashBoard/Products">
            
            <i className="icon material-icons md-shopping_bag" />
            <span className="text">Products</span>
          </Link>
       
        </li>
        <li className="menu-item ">
          <Link className="menu-link" to="/DashBoard/AddCategory">
            
            <i className="icon material-icons md-add_box" />
            <span className="text">Add category</span>
          </Link>
         
        </li>
        {flag && <li className="menu-item  ">
          <Link className="menu-link" to="/DashBoard/User">
            
            <i className="icon material-icons md-person" />
            <span className="text">Account</span>
          </Link>
         
        </li> }
       
        <li className="menu-item ">
          <Link className="menu-link" to="Order">
            
            <i className="icon material-icons md-shopping_cart" />
            <span className="text">Orders</span>
          </Link>
        
        </li>
        <li className="menu-item ">
          <Link className="menu-link" to="Seller">
            
            <i className="icon material-icons md-store" />
            <span className="text">Sellers</span>
          </Link>
         
        </li>
      
        
    
      </ul>
      <hr />
      {/* ========================================= */}
   
      <br />
      <br />
    </nav>
  </aside>
</>

    
  )
}

export default SideBar
