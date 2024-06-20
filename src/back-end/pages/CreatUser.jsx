import React, { useEffect, useState ,useTransition} from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import { Axios } from '../api/Axios'

const CreatUser = () => {
  const nav = useNavigate()
  const [isPendig , startTransition] = useTransition()
  const [flag,setflag] = useState(false)

  const [first_name , setfirst_name] = useState()
  const [password , setpassword] = useState()
  const [last_name , setlast_name] = useState()
  const [phone , setphone] = useState()
  const [gender , setgender] = useState()
  const [email , setemail] = useState()
  const [role , setrole] = useState()


  // startTransition(()=>{
    
    // })
  const qweqweqwe = async ()=>{
    // e.preventDefault()
    const formdata = new FormData()
    formdata.append('first_name',first_name)
    formdata.append('first_name',first_name)
    formdata.append('last_name',last_name)
    formdata.append('phone_number',phone)
    formdata.append('gender',gender)
    formdata.append('email',email)
    formdata.append('role',role)
    formdata.append('password',password)
    console.log(formdata)
    await Axios.post('user/creaTUserByAdmin',formdata)
    .then(({data})=>{console.log(data)})
    .catch(({response})=>{console.log(response)})
    nav('/DashBoard/User')
  }



  return (

    <div>
        <section className="content-main  mb-80">
  <div className="card mx-auto card-login">
    <div className="card-body">
      <h4 className="card-title mb-4">Account</h4>
      <form >
        <div className="mb-3">
          <label className="form-label">fisrt name</label>
          <input
            
            onChange={(e) => {setfirst_name(e.target.value)}} 
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">last name</label>
          <input
           
           onChange={(e) => {setlast_name(e.target.value)}} 
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            
            onChange={(e) => {setemail(e.target.value)}} 
            className="form-control"
            type="email"
          />
        </div>
        
        <select
           className="form-select form-select-sm"
           value={role}
          onChange={(e)=>{setrole(e.target.value)}}>
           <option selected > role </option>
           <option value='user' > user </option>
                 <option value='admin' > admin </option>
                 <option value='superadmin' > super admin </option>
        </select>
        <select
           className="form-select form-select-sm"
           value={gender}
          onChange={(e)=>{setgender(e.target.value)}}>

                 <option selected > gender </option>
                 <option value='male' > male </option>
           <option value='female' > female </option>
        </select>
        <div className="mb-3">
          <label className="form-label">password</label>
          <div className="row gx-2">
           
              
              <input
                
                onChange={(e) => {setpassword(e.target.value)}}
                className="form-control"
                type="text"
              />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <div className="row gx-2">
           
              
              <input
                
                onChange={(e) => {setphone(e.target.value)}}
                className="form-control"
                type="text"
              />
          </div>
        </div>
        <Link className="w-50 btn btn-light font-sm" onClick={qweqweqwe} >Edit</Link>

      </form>
      <div className="d-flex gap-2 mb-4">

      </div>
    
    </div>
  </div>
</section>

      
    </div>
  )
}

export default CreatUser
