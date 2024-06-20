import { Navigate, Outlet } from 'react-router-dom';
import SideBar from './layout/SideBar'
import { useEffect, useState } from 'react';
import { Axios } from './api/Axios';
import LoadingSubmit  from '../LoadingSubmit'

const DashBorad = () => {
  // check user
  const [flag , setflag] = useState(false)
  const [check , setcheck] = useState("")
  useEffect(()=>{
    fetchCheck();
  },[])
  const fetchCheck = async ()=>{
    setflag(true)
      await Axios.get('user/checkUser')
      .then(({data})=>{
        // console.log(data.role)
        setcheck(data.role)
        setflag(false)
      })
      .catch(({error})=>{
        setflag(false)
        console.log(error)})
  }
  // end check user
  return (
    <>
    { flag ? <LoadingSubmit/> : check == "admin" || check == "superadmin"  ? <div>
      <SideBar/>
      
      <Outlet/>
    </div> : "" }
    {/* </div> : <Navigate to={'/'} replace={true} /> } */}



    
    </>
  )
}

export default DashBorad
