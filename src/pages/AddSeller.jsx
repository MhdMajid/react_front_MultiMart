import {  useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import { AdminAxios, Axios } from "../back-end/api/Axios"


const AddSeller = () => {
    const navigate = useNavigate()
    const [form , setForm] = useState({
      name:"",
      type:"",
      price:"",
      details:"",
      phone:"",
    })
   
    function handleFormChange(e){
      setForm({...form, [e.target.name] : e.target.value })
    }

    const [image, setImage] = useState('')

    const changeHandlerImg = (e) => {
      setImage(e.target.files[0]);
      console.log(e.target.files[0])  
      }

    // 0000000000000000000000000
     
    async function CreateItem(e){
      e.preventDefault()
      // console.log(form);
      try {
        const formdata = new FormData()
        formdata.append('name',form.name)
        formdata.append('type',form.type)
        formdata.append('price',form.price)
        formdata.append('details',form.details)
        formdata.append('product_image',image)
        formdata.append('phone_number',form.phone)

        await Axios.post('seller/addSeller' , formdata )
       navigate("/Account")
        console.log("trueeee")
      } catch (error) {

        console.log("errorrrrrr")
        console.log(error)
      }
    }
    // 0000000000000000000000000



    // console.log(form)
    return (
  
        <main className="main-wrap">
          
              
              <div className="container pt-4 ">
              <h1 >Add new</h1>
              <h2>Seller</h2>
              </div>
              <hr /><hr />

             <form className="row g-3 needs-validation" novalidate onSubmit={CreateItem}>
               <div className="row  ">
               <div className="col-md-4 ">
                 <label for="validationCustom01" className="form-label">Name</label>
                 <input type="text" className="form-control" id="validationCustom01" 
                  required
                  name="name"
                  value={form.name} 
                  onChange={handleFormChange}
                  />
                 <div className="valid-feedback">
                   Looks good!
                 </div>
               </div>
               </div> 
               <div className="row">
               <div className="col-md-4 p-4">
                 <label for="validationCustom02" className="form-label">Price</label>
                 <input type="text" className="form-control" id="validationCustom02"
                  value={form.price} 
                  name="price"
                  onChange={handleFormChange} 
                  required/>
                 <div className="valid-feedback">
                   Looks good!
                 </div>
               </div>
               </div>
               <div className="row">
               <div className="col-md-4 p-4" >
                 <label for="validationCustomUsername" className="form-label">type</label>
                 <div className="input-group">
                   
                   <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                    value={form.type} 
                    name="type"
                    onChange={handleFormChange}
                     required/>
                   <div className="invalid-feedback">
                     Please choose a username.
                   </div>
                 </div>
               </div>
               <div className="row"><div className="col-md-4">
                 {/* <label for="validationCustom04" className="form-label">Category</label> */}
                 {/* <select
           className="form-select form-select-sm"
          name="category"
          onChange={handleFormChange}
          value={form.category}
       >
          <option selected>Category</option>
         { cat.length > 0 && (
              cat.map((row,key)=>(
                 <option key={key} value={row.id} >{row.name}</option>)
          ))}
         
          
        </select> */}
                 <div className="invalid-feedback">
                   Please select a valid state.
                 </div>
               </div></div>
               </div>


               <div className="row">
               <div className="col-md-4 p-4" >
                 <label for="validationCustomUsername" className="form-label">details</label>
                 <div className="input-group">
                   
                   <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                    value={form.details} 
                    name="details"
                    onChange={handleFormChange}
                     required/>
                   <div className="invalid-feedback">
                     Please choose a username.
                   </div>
                 </div>
               </div>
               <div className="row"><div className="col-md-4">
                 {/* <label for="validationCustom04" className="form-label">Category</label> */}
                 {/* <select
           className="form-select form-select-sm"
          name="category"
          onChange={handleFormChange}
          value={form.category}
       >
          <option selected>Category</option>
         { cat.length > 0 && (
              cat.map((row,key)=>(
                 <option key={key} value={row.id} >{row.name}</option>)
          ))}
         
          
        </select> */}
                 <div className="invalid-feedback">
                   Please select a valid state.
                 </div>
               </div></div>
               </div>

               <div className="row">
               <div className="col-md-4 p-4" >
                 <label for="validationCustomUsername" className="form-label">phone</label>
                 <div className="input-group">
                   
                   <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                    value={form.phone} 
                    name="phone"
                    onChange={handleFormChange}
                     required/>
                   <div className="invalid-feedback">
                     Please choose a username.
                   </div>
                 </div>
               </div>
               <div className="row"><div className="col-md-4">
                 {/* <label for="validationCustom04" className="form-label">Category</label> */}
                 {/* <select
           className="form-select form-select-sm"
          name="category"
          onChange={handleFormChange}
          value={form.category}
       >
          <option selected>Category</option>
         { cat.length > 0 && (
              cat.map((row,key)=>(
                 <option key={key} value={row.id} >{row.name}</option>)
          ))}
         
          
        </select> */}
                 <div className="invalid-feedback">
                   Please select a valid state.
                 </div>
               </div></div>
               </div>

               <div class="col-md-4 p-4">
                <label for="" class="form-label">Choose image</label>
                <input
                  type="file"
                  class="form-control"
                  name="item_image"
                  
                  aria-describedby="fileHelpId"
                  onChange={changeHandlerImg}
                />
                <div id="fileHelpId" class="form-text"></div>
               </div>
               


               
               <div className="col-12">
                 <button className="btn btn-primary mb-4" type="submit">Create</button>
               </div>
             </form> 
             
        </main>
        
        )
      
}

export default AddSeller;
