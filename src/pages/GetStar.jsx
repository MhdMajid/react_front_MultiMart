import { Rating } from '@mui/material'
import React from 'react'

const GetStar = () => {
  return (
<Rating
  name="simple-controlled"
  
  defaultValue={prop.Rating}

  precision={0.5}

  readOnly 
size="small"
/>
    )
}

export default GetStar