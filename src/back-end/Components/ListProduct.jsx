import React from 'react'
import { Link } from 'react-router-dom'


const ListProduct = (props) => {


  return (
    
    <article className="itemlist">
    <div className="row align-items-center">
      <div className="col col-check flex-grow-0">
       
      </div>
      <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
        <Link className="itemside" to="#">
          <div className="left">
            <img
              src={props.img}
              className="img-sm img-thumbnail"
              alt={props.name}
            />
          </div>
          <div className="info">
            <h6 className="mb-0">{props.name}</h6>
          </div>
        </Link>
      </div>
      <div className="col-lg-2 col-sm-2 col-4 col-price">
        
        <span>${props.price}</span>
      </div>
      <div className="col-lg-2 col-sm-2 col-4 col-status">
        <span className="badge rounded-pill alert-success">Active</span>
      </div>
      {/* date */}
      <div className="col-lg-1 col-sm-2 col-4 col-date">
        <span>{props.date}</span>
      </div>
      {/* Edit and Delete */}
      <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
        <Link to="#" className="btn btn-sm font-sm rounded btn-brand m-1 ">
          <i className="material-icons md-edit " /> Edit
        </Link>
        <Link to="#" className="btn btn-sm font-sm btn-light rounded">
          <i className="material-icons md-delete_forever" /> Delete
        </Link>
      </div>
    </div>
   
  </article>

  )
}

export default ListProduct
