import React, { useState,useEffect } from 'react'
import ListUser from '../Components/ListUser'
import { Axios } from '../api/Axios'
import { Link } from 'react-router-dom'

const Account = () => {

  useEffect(()=>{
    getuser()
  },[])
  const [get,setget] = useState("")
  const getuser = async ()=>{
    try {
      await Axios.get('user/getUserById')
      .then(({data})=>{setget(data.data[0].id)})
      
    } catch (error) {
      console.log(error)
    }
  }

  const [user,setuser] = useState([])

   useEffect( () => {
   fetchuser();
  }, [] )

  const fetchuser = async ()=>{
    try {
      await Axios.get('user/getAllUser').then(({ data }) => {setuser(data.data)
      console.log(data.data)
      }) 

    } catch (error) {
      console.log(error)
    }
  }
  
  
  return (
<main className="main-wrap">
  <section className="content-main">
    <div className="content-header">
      <div>
        <h1><Link ClassName='btn btn-color-primary' to='/DashBoard/CreatUser'>Creat user</Link></h1>
        <h2 className="content-title card-title">Accounts List</h2>
        <p>All Accounts</p>
      </div>
      <div>
      
      </div>
      
    </div>
    <div className="card mb-4">
      <div className="card-body">
      
        {/* compomamets carts  */}

        {user.map((us)=>(

        <ListUser email={us.email} name={us.first_name} lname={us.last_name}
          gender={us.gender} id={us.id} role={us.role} getid={get} />
        ))}

      </div>
      {/* card-body end// */}
    </div>
    {/* card end// */}
  </section>
  {/* content-main end// */}
  <footer className="main-footer font-xs">
    <div className="row pb-30 pt-15">
      <div className="col-sm-6">©, Multimart</div>
      <div className="col-sm-6">
        <div className="text-sm-end">All rights reserved</div>
      </div>
    </div>
  </footer>
</main>

  )
}

export default Account
