import {  useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import { Axios,  } from "../api/Axios"


const AddItem = () => {
    const navigate = useNavigate()


    const [cat, setCat] = useState([])
    useEffect(() => {
        fetchCat();
    }, [])
  
    const fetchCat = async () => {
        await Axios.get('category/getAllCategories').then(({ data }) => {setCat(data.data)}) 
    }


    const [form , setForm] = useState({
      name:"",
      category:"",
      price:"",
      description:"",
      
    })
   
    function handleFormChange(e){
      setForm({...form, [e.target.name] : e.target.value })
    }

    const [image, setImage] = useState('')

    const changeHandlerImg = (e) => {
      setImage(e.target.files[0]);
      // console.log(e.target.files[0])
    }

    // const changeHandler =(e)=>{
    //   setimg(e.target.files);
    // }

    // 0000000000000000000000000
     
    async function CreateItem(e){
      e.preventDefault()
      // console.log(form);
      try {
        const formdata = new FormData()
        formdata.append('name',form.name)
        formdata.append('category_id',form.category)
        formdata.append('price',form.price)
        formdata.append('description',form.description)
        formdata.append('item_image',image)
        await Axios.post('item/addItem' , formdata )
        navigate("/DashBoard/Products")
        // console.log(formdata.getAll)
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
              <h2>Item</h2>
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
                 <label for="validationCustomUsername" className="form-label">Description</label>
                 <div className="input-group">
                   
                   <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                    value={form.description} 
                    name="description"
                    onChange={handleFormChange}
                     required/>
                   <div className="invalid-feedback">
                     Please choose a username.
                   </div>
                 </div>
               </div>
               <div className="row"><div className="col-md-4">
                 <label for="validationCustom04" className="form-label">Category</label>
                 <select
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
         
          
        </select>
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
                 <button className="btn btn-primary" type="submit">Create</button>
               </div>
             </form> 
             
        </main>
        
        )
      
}

export default AddItem
