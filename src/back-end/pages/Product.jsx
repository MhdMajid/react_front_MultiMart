import {Link} from 'react-router-dom'
// import ListProduct from '../Components/ListProduct'
import { Axios,  baseUrlImg } from '../api/Axios'
import { useEffect,useState } from 'react'
import LoadingSubmit from "../../LoadingSubmit"
const Product = () => {


  const [lodaing,setlodaing] = useState(false)

  async function handleDelete(id){
    try {
      setlodaing(true)
      console.log(id)
      await Axios.post('item/deleteItem',{
        "id" :id
      }
      )
      setRun((pref)=>pref+1)
      setlodaing(false)

      console.log("delete successfuly")
    } catch (error) {
      setlodaing(false)

      console.log(error)}
    }

  const [runEffaect , setRun] =  useState(0);
  const [item, setitem] = useState([])
  useEffect(() => {
      fetchitem();
  }, [runEffaect])

  const fetchitem = async () => {
    setlodaing(true)

      await Axios.get('item/getAllItems').then(({ data }) => {setitem(data.data)}) 
      setlodaing(false)

  }
  
  return (
   
<main className="main-wrap">
  {lodaing && <LoadingSubmit/>}
  <section className="content-main">
    <div className="content-header">
      <div>
        <h2 className="content-title card-title">Products List</h2>
        <p>All Products</p>
      </div>
      <div>
        
        <Link to="/Dashboard/addItem" className="btn btn-primary btn-sm rounded">
          Create new
        </Link>
      </div>
      
    </div>
    <div className="card mb-4">
      <div className="card-body">


       
     {/* { item.length > 0 &&(
              item.map((row,key)=>(
                //  <option  value={row.id} >{row.name}</option>
                <ListProduct key={key}
                 img={`${baseUrlImg}${row.product_image}`}
                  name={row.product_image}
                  price={row.price}
                  date="200"
                  id={row.id}
                
                    />
                )
          )
          )} */}

          {/* ...............................................  */}
          { 
      item.length > 0 &&(
              item.map((row,key)=>(
          <article key={key} className="itemlist">
    <div className="row align-items-center">
      <div className="col col-check flex-grow-0">
       
      </div>
      <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
        <Link className="itemside" to={`${baseUrlImg}${row.product_image}`}>
          <div className="left">
            <img
              src={`${baseUrlImg}${row.product_image}`}
              className="img-sm img-thumbnail"
              alt={row.product_image}
            />
          </div>
          <div className="info">
            <h6 className="mb-0">{row.product_image.split(".")[0]}</h6>
          </div>
        </Link>
      </div>
      <div className="col-lg-2 col-sm-2 col-4 col-price">
        
        <span>${row.price}</span>
      </div>
      <div className="col-lg-2 col-sm-2 col-4 col-status ">
        <h6 className="badge rounded-pill alert-success">{row.description.substring(0,10)+"..."}</h6>
      </div>
      {/* date */}
      <div className="col-lg-1 col-sm-2 col-4 col-date">
        <span>{row.date}</span>
      </div>
      {/* Edit and Delete */}
      <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
        <Link to={`/DashBoard/editItem/${row.id}` } className="btn btn-sm font-sm rounded btn-brand m-1 ">
          <i className="material-icons md-edit " /> Edit
        </Link>
        <button onClick={() =>handleDelete(row.id)} className="btn btn-sm font-sm btn-light rounded">
          <i className="material-icons md-delete_forever" /> Delete
        </button>
      </div>
    </div>
   
  </article>
    )
    )
    )}


          {/* ................................................ */}
      
        {/* compomamets carts  */}
    

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

export default Product
