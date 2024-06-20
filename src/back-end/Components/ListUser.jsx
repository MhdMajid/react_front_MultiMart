import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Axios } from '../api/Axios'

const ListUser = (props) => {
  
  const deleteuser = async ()=>{
    try {
      await Axios.post('user/deleteuser',{'id':props.id})
      console.log("deleted successfully")

    } catch (error) {
      console.log(error)
    }
  }
 

  return (
    <article className="itemlist">
    <div className="row align-items-center">
      <div className="col col-check flex-grow-0">
       
      </div>
      <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
        <Link className="itemside" to="#">
          <div className="left">
          <h6 className="mb-0">{props.name} {props.lname} </h6>

          </div>
          <div className="info">
            <h5 className="mb-0"> {props.getid == props.id && 'my account'}</h5>
          </div>
        </Link>
      </div>
      <div className="col-lg-2  col-4 ">
        
        <span>{props.email}</span>
      </div>
      <div className="col-lg-2 col-sm-2 col-4 col-status">
        <span className="badge rounded-pill alert-success">{props.role}</span>
      </div>
      {/* date */}
      <div className="col-lg-1 col-sm-2 col-4 col-date">
        <span>{props.date}</span>
      </div>
      {/* Edit and Delete */}
      <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
        {/* <Link to="#" className="btn btn-sm font-sm rounded btn-brand m-1">
          <i className="material-icons md-edit" /> Edit
        </Link> */}
        {props.role != 'superadmin' && 
          <>
        <Link onClick={deleteuser} className="btn btn-sm font-sm btn-light rounded">
          <i className="material-icons md-delete_forever" /> Delete
        </Link>
        <Link to={`/DashBoard/editUser/${props.id}`} className="btn btn-sm font-sm btn-light rounded">
          <i className="material-icons md-delete_forever" /> Edit
        </Link>
          </>

        }
        
      </div>
    </div>
   
  </article>
  )
}

export default ListUser
