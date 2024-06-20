import {  useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import { AdminAxios, Axios } from "../back-end/api/Axios"


const Contact = () => {
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
    <>
   <>
  <section className="hero-2 bg-green">
    <div className="hero-content">
      <div className="container">
        <div className="text-center">
          <h4 className="text-brand mb-20">Get in touch</h4>
          <h1 className="mb-20 wow fadeIn animated font-xxl fw-900">
            Let's Talk About <br />
            Our <span className="text-style-1">Idea</span>
          </h1>
          <p className="w-50 m-auto mb-50 wow fadeIn animated">
          Let me tell you about the services our website offers.
           You can purchase your essentials online through it,
         and if you have a product you want to showcase on our site,
          you can send us its specifications. Afterwards, your product will be displayed, 
          reaching other users for sale.
          </p>
          <p className="wow fadeIn animated">
            <a
              className="btn btn-brand btn-lg font-weight-bold text-white border-radius-5 btn-shadow-brand hover-up"
              href="page-about.html"
            >
              About Us
            </a>
           
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="pt-50 pb-50">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-10 m-auto">
          <div className="contact-from-area padding-20-row-col wow FadeInUp">
            <h3 className="mb-10 text-center">For Sellers </h3>
            <p className="text-muted mb-30 text-center font-sm">
            Begin your journey in selling and showcasing your products on our website.
            </p>
            <form
              className="contact-form-style text-center"
              onSubmit={CreateItem}
              id="contact-form"
              action="#"
              method="post"
              
            >
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="input-style mb-20">
                    <input  placeholder="Product Name" type="text"
                     name="name"
                     value={form.name} 
                     onChange={handleFormChange}
                    
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="input-style mb-20">
                    <input  placeholder="Product Price" type="number"
                   value={form.price} 
                   name="price"
                   onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="input-style mb-20">
                    <input
                     
                      placeholder="Your Phone"
                      type="tel"
                      value={form.phone} 
                      name="phone"
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="input-style mb-20">
                    <input  placeholder="Product Type" type="text" 
                    
                    value={form.type} 
                    name="type"
                    onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="textarea-style mb-30">
                    <textarea
                     
                      placeholder="Description about your products
                      "
                      defaultValue={""}
                      value={form.details} 
                    name="details"
                    onChange={handleFormChange}
                    />
                    <div className="">
                      <label for="formFile" className="form-label">Upload Image About Your Product</label>
                      <input className="form-control mb-5" type="file" id="formFile"
                       onChange={changeHandlerImg}
                      />
                    </div>
                  </div>
                  <button className="submit submit-auto-width" type="submit">
                    Send message
                  </button>
                </div>
              </div>
            </form>
            <p className="form-messege" />
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </>
  )
}

export default Contact
