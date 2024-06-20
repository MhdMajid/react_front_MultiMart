import axios from "axios"
import { useState } from "react"

// import { Navigate } from "react-router-dom"
import { Axios } from "../api/Axios"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {


  const nvaigate = useNavigate()
  const [formData , setFormData] = useState({
    name :'',
    
  })

  function handleChange(e){
    setFormData({...formData,[e.target.name]: e.target.value })
  }

  
  const CreateProduct = async (e)=>{
    e.preventDefault()    
    await Axios.post('product/create' ,formData )
     .then(({data})=>{
        // console.log(data)
        nvaigate('/Dashboard/DashHome')
     }).catch(({response})=>{
      // if (responce.status == 422){
        // console.log(responce.data.errors)
      // } else{
        // console.log(responce.data.message)
        // }

     })
  }
  return (

<main className="main-wrap">
     <form className="row g-3 needs-validation" 
     onSubmit={CreateProduct}
     >
       <div className="col-md-4">
         <label for="validationCustom01" className="form-label">Product name</label>
         <input type="text" className="form-control" id="validationCustom01" required
          value={formData.name} 
          name="name"
          onChange={handleChange}
          placeholder="Product name"
          />
       </div>
        <div className="row">
       

        </div>
       <div className="col-12">
         <button className="btn btn-primary" type="submit">Add Product</button>
       </div>

     </form>
      
</main>

    
  )
}

export default AddProduct