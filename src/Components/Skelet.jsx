import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const Skelet = () => {
    return (
        <div className="col-lg-3 col-md-4 col-12 col-sm-6">    
        <div className="product-cart-wrap mb-30">
          {/* <div className="product-img-action-wrap">
            
            
          </div>
          <div className="product-content-wrap">
            
          </div> */}
          <Skeleton variant="rounded"  width={210} height={360} />

        </div>
      </div>
      )
}

export default Skelet
