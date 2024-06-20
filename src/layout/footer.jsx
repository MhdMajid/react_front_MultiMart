const footer = () => {

  return (
    <footer className="main">
    <section className="newsletter p-30 text-white wow fadeIn animated">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-md-3 mb-lg-0">
            <div className="row align-items-center">
              <div className="col flex-horizontal-center">
                <img
                  className="icon-email"
                  src="/assets/imgs/theme/icons/icon-email.svg"
                  alt=""
                />
                <h4 className="font-size-20 mb-0 ml-3">
                  Sign up to Newsletter
                </h4>
              </div>
             
            </div>
          </div>
          <div className="col-lg-5">
          </div>
        </div>
      </div>
    </section>
    <section className="section-padding footer-mid">
      <div className="container pt-15 pb-20">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="widget-about font-md mb-md-5 mb-lg-0">
               {/*<div className="logo logo-width-1 wow fadeIn animated">
                <a href="index.html">
                  <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                </a>
              </div>*/}
              <h5 className="mt-20 mb-10 fw-600 text-grey-4 wow fadeIn animated">
                Contact
              </h5>
             
              <p className="wow fadeIn animated">
                <strong>Phone: </strong>(+963) - 852- 1459
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3">
            <h5 className="widget-title wow fadeIn animated">About</h5>
            <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
              <li>
                <a href="/About">About Us</a>
              </li>
             
              <li>
                <a href="#">Privacy Policy</a>
              </li>
             
              <li>
                <a href="/Contact">Contact Us</a>
              </li>
            
            </ul>
          </div>
          <div className="col-lg-2  col-md-3">
            <h5 className="widget-title wow fadeIn animated">My Account</h5>
            <ul className="footer-list wow fadeIn animated">
              <li>
                <a href="/Login">Login</a>
              </li>
              <li>
                <a href="/Cart">View Cart</a>
              </li>
              <li>
                <a href="/Wishlist">My Wishlist</a>
              </li>
            
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="row">
            
              <div className="col-md-4 col-lg-12 mt-md-3 mt-lg-0">
                <p className="mb-20 wow fadeIn animated">
                  Secured Payment Gateways
                </p>
                <img
                  className="wow fadeIn animated"
                  src="/assets/imgs/theme/payment-method.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container pb-20 wow fadeIn animated">
      <div className="row">
        <div className="col-12 mb-20">
          <div className="footer-bottom" />
        </div>
        <div className="col-lg-6">
          <p className="float-md-left font-sm text-muted mb-0">
             <strong className="text-brand"></strong> 
          </p>
        </div>
      
      </div>
    </div>
  </footer>
  )
}

export default footer