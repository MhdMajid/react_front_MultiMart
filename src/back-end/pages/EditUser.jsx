import React, { useEffect, useState ,useTransition} from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import { Axios } from '../api/Axios'

const EditUser = () => {
  const nav = useNavigate()
  const [isPendig , startTransition] = useTransition()
  const [flag,setflag] = useState(false)

  const [first_name , setfirst_name] = useState()
  const [last_name , setlast_name] = useState()
  const [phone , setphone] = useState()
  const [gender , setgender] = useState()
  const [email , setemail] = useState()
  const [role , setrole] = useState()

  useEffect(()=>{
    fetchUser()
  },[])

  // get id
  const {id} = useParams()
  // get user with id

  const fetchUser = async () =>{
    await Axios.post('user/getUserByadmin',{"user_id":id})
    .then(({data}) => {
      const { last_name, first_name, phone_number, gender, email, role } = data.data
      setlast_name(last_name)
      setfirst_name(first_name)
      setphone(phone_number)
      setgender(gender)
      setemail(email)
      setrole(role) 


    
      })
    .catch(({response}) => {console.log(response.data)})
      
   
  }
  // startTransition(()=>{
    
    // })
  const qweqweqwe = async ()=>{
    // e.preventDefault()
    const formdata = new FormData()
    formdata.append('user_id',id)
    formdata.append('first_name',first_name)
    formdata.append('first_name',first_name)
    formdata.append('last_name',last_name)
    formdata.append('phone_number',phone)
    formdata.append('gender',gender)
    formdata.append('email',email)
    formdata.append('role',role)
    console.log(formdata)
    await Axios.post('user/updateUserByAdmin',formdata)
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
            value={first_name}
            onChange={(e) => {setfirst_name(e.target.value)}} 
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">last name</label>
          <input
           value={last_name}
           onChange={(e) => {setlast_name(e.target.value)}} 
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            value={email}
            onChange={(e) => {setemail(e.target.value)}} 
            className="form-control"
            type="email"
          />
        </div>
        
        <select
           className="form-select form-select-sm"
          name="category"
          onChange={(e)=>{setrole(e.target.value)}}
          value={role}
       >

           <option value='user' > user </option>
                 <option value='admin' > admin </option>
                 <option value='superadmin' > super admin </option>
         
         
        </select>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <div className="row gx-2">
           
              
              <input
                value={phone}
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

export default EditUser
