import React from 'react'

function Page404() {
  return (
    <div className="container">
  <div className="row align-items-center height-100vh text-center">
    <div className="col-lg-8 m-auto">
      <p className="mb-50">
        <img src="/assets/imgs/theme/404.png" alt="" className="hover-up" />
      </p>
      <h2 className="mb-30">Page Not Found</h2>
      <p className="font-lg text-grey-700 mb-30">
        The link you clicked may be broken or the page may have been removed.
        <br /> visit the{" "}
        <a href="index.html">
          {" "}
          <span> Homepage</span>
        </a>{" "}
        or{" "}
        <a href="page-contact.html">
          <span>Contact us</span>
        </a>{" "}
        about the problem
      </p>
     
    </div>
  </div>
</div>

  )
}

export default Page404