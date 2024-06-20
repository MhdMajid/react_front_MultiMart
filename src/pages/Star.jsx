import React, { useState, useEffect } from 'react';
import Cookie from "cookie-universal";
import Rating from '@mui/material/Rating';
import { Axios } from '../back-end/api/Axios';

const Star = (props) => {

const [value, setValue] = useState(0);
const [run, setrun] = useState(0);
const [flag, setflag] = useState(false);
const cookie = Cookie()
const token = cookie.get("e-c");
// console.log(value)

useEffect(()=>{
  getRating()
  
},[run])
const getRating = async ()=>{
  const formdata = new FormData()
  formdata.append('item_id',props.id)
 if(token !=  undefined){
  await Axios.post('rating/userRating',formdata)
  .then(({data})=>{
    console.log(data.data[0].rating +" : user rating")
    setValue(data.data[0].rating)
    setflag(true)
  })
  .catch(({response})=>{console.log(response)})

 }
}



const addRating = async (event, newValue) => {
 console.log(value + ' : value')
 console.log(props.id + ' : item id')
 console.log(newValue + ' : new value')
 setValue(newValue)

  if (flag && newValue == null ){
  
    await Axios.post('rating/deleteRating',{
      'item_id':props.id,
     })
     .then(console.log('delete rating seccussfly'))
     .then(setrun((pref=>pref+1)))
     .then(setflag(false))
     .catch(({response}) => {console.log(response.data)})
  }

  else if(flag && newValue != null){
   await Axios.post('rating/updateRating',{
      'item_id':props.id,
      'rating' :newValue
     })
     .then(console.log('update rating seccussfly'))
     .then(setrun((pref=>pref+1)))
     .catch(({response}) => {console.log(response.data)})
  }

  else{
    await Axios.post('rating/addrating',{
      'item_id':props.id,
      'rating' :newValue
     })
     .then(console.log('rating seccussfly'))
     .then(setrun((pref=>pref+1)))
     .catch(({response}) => {console.log(response)})

  }
}



  return (
<Rating
  name="simple-controlled"
  // onChangeActive={}
  // defaultValue={3.9}
  value={value}
  precision={0.5}
  onChange={addRating}
/>
  );
};

export default Star;
