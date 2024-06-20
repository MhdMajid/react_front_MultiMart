import { useEffect, useState } from "react"
// import { Navigate } from "react-router-dom"
import {  Axios } from "../api/Axios"
import LoadingSubmit from "../../LoadingSubmit"

const AddCategory = () => {
  
  const [lodaing,setlodaing] = useState(false)
  const [error,seterror] = useState(false)
  // show category
  const [cat, setCat] = useState([])
  const [editcat, seteditcat] = useState([])
  const [runEffaect , setRun] =  useState(0);
  



  useEffect(() => {
      fetchCat();
  }, [runEffaect])

  const fetchCat = async () => {
      setlodaing(true)
      await Axios.get('category/getAllCategories').then(({ data }) => {setCat(data.data)})
                                                      //  .then(({data}) => console.log(data)) 
                                                      //  .catch(({response}) => console.log(response)) 
      setlodaing(false)
                                                    }
  // ------------

  //Edite category 
  function handlupdate(id){
    // e.preventDefault()
    try {
       setlodaing(true)
      //  setnameedit(e.target.value)
    Axios.post('category/update',{
      "name":editcat,
      "id":id,
    })
    seteditcat("")
    setRun((pref)=>pref+1)
    setlodaing(false)
    } catch (error) {
      setlodaing(false)
      console.log(error)
    }
   


    setlodaing(false) }
// ----------------

// delete Category
  function handldelete(id){
    // e.preventDefault()
    setlodaing(true)
    Axios.post('category/delete',{
      "id":id
    })

    setRun((pref)=>pref+1)
  setlodaing(false)}
// -----------------

const [name , setname] = useState('')

  // ---------------------
  async function Createcategory(e){
    e.preventDefault()
    try {
      await Axios.post('category/create' ,{
        "name" : name,
      } )
      setname("")
      seterror(false)
      console.log("true")
      setRun((pref)=>pref+1)
    } catch (error) {
      console.log(error)
      if(error.response.status == 422){
        seterror(true)
      }
    } }


 
  return (

<main className="main-wrap">
      { lodaing &&   <LoadingSubmit/> }  
      
     <form className="row g-3 needs-validation" 
     onSubmit={Createcategory}
     >
       <div className="m-3">
       <h1 >Add new</h1>
      <h2>category</h2>
         <label for="validationCustom01" className="form-label">Prouct name</label>
         <input type="text" className="form-control " id="validationCustom01" required
          value={name} 
          name="name"
          onChange={(e)=>{setname(e.target.value)}}
          />
          {error && <b>the category already created </b>}

       </div>
       <div className="col-12">
         <button className="btn btn-primary" type="submit">Add category</button>
       </div>
       <br />
     </form>

    { cat.length > 0 && (
              cat.map((row,key)=>(
                <div key={key} className="m-3" >

                <div  className="mb-4 d-flex">
                  <input
                    type="text"
                    class="form-control  "
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder={row.name}
                    // value={handleChange}
                    onChange={(e)=>{seteditcat(e.target.value)}}
                  />
                </div>
                <button type="submit" onClick={()=>handlupdate(row.id)} className="btn btn-success  m-1">Edit</button>
                <button type="submit" onClick={()=>handldelete(row.id)} className="btn btn-danger   m-1">Delete</button>
                
    </div>
          )))}
      
</main>

    
  )
}

export default AddCategory