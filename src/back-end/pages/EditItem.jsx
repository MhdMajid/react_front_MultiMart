import {  useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import { Axios,  } from "../api/Axios"
import LoadingSubmit from "../../LoadingSubmit"


const EditItem = () => {
  const navigate = useNavigate()
  const catid=""
  // get id from URL
  const {id} = useParams() 

  // get iteam with id
  const [lodaing,setlodaing] = useState(false)
   const [name , setName] = useState('')
   const [Category_id , setCategory_id] = useState('')
   const [price , setprice] = useState('')
   const [description, setDescription] = useState('')

   
   async function fetchitem ()  {
      try{
        setlodaing(true)
        const res = await Axios.post('item/getItem',{"item_id": id })
        console.log(res.data)
        const { price, description, Category_id, name } = res.data.data
        setprice(price)
        setName(name)
        
        setDescription(description)
        setCategory_id(Category_id)
        setlodaing(false)
        // console.log(price)
        // console.log(name)
        // console.log(description)
        // console.log(Category_id)
      } catch(err){console.log(err)
        setlodaing(true)}
  }
      useEffect(() => {
        fetchitem();
    }, [])
  //  end get iteam 
  

    // console.log(item)

    // get all category
    const [cat, setCat] = useState([])
    useEffect(() => {
        fetchCat();
    }, [])

    const fetchCat = async () => {
        
        await Axios.get('category/getAllCategories').then(({ data }) => {setCat(data.data)})
                                                        //  .then(({data}) => console.log(data)) 
                                                        //  .catch(({response}) => console.log(response)) 
    }

    // useState for add image
    const [image, setImage] = useState('')
    // get image in the list
    const changeHandlerImg = (e) => {
      setImage(e.target.files[0]);
      // console.log(e.target.files[0])
    }


    // 0000000000000000000000000
    //  create iteame
    async function EditItem(e){
      e.preventDefault()
      try {
        const formdata = new FormData()

        formdata.append('id',id)
        formdata.append('name',name)
        formdata.append('category_id',Category_id)
        formdata.append('price', price)
        formdata.append('description',description)
        if(image !== ""){
          formdata.append('item_image',image)
        }
        console.log(formdata)
        await Axios.post('item/updateItem' , formdata )
        navigate("/DashBoard/Products")
        console.log("trueeee")
      } catch (error) {
        console.log("errorrrrrr")
        console.log(error)
      }
    }
    // 0000000000000000000000000



  
    return (
  
        <main className="main-wrap">
          {lodaing && <LoadingSubmit/>}
              
              <div className="container pt-4 ">
              <h1 >Add new</h1>
              <h2>Item</h2>
              </div>
              <hr /><hr />

             <form className="row g-3 needs-validation" novalidate onSubmit={EditItem}>
               <div className="row  ">
               <div className="col-md-4 ">
                 <label for="validationCustom01" className="form-label">Name</label>
                 <input type="text" className="form-control" id="validationCustom01" 
                  required
                  // name="name"
                  value={name} 
                  onChange={(e)=>{setName(e.target.value)}}
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
                  value={price} 
                  // name="price"
                  onChange={(e) => {setprice(e.target.value)}} 
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
                    value={description} 
                    // name="description"
                    onChange={(e) => { setDescription(e.target.value) }}
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
          onChange={(e)=>{setCategory_id(e.target.value)}}
          value={Category_id}
       >
          <option selected>Category</option>
         { cat.length > 0 && (
              cat.map((row,key)=>(
                 <option key={key}
                  value={row.id}
                  // {(Category_id === row.Category_id) && "selected"}
                   >{row.name}
                   </option>)
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
                 <button className="btn btn-primary" type="submit">Edit</button>
               </div>
             </form> 
             
        </main>
        
        )
      
}

export default EditItem
