
import React from 'react'
import { Fragment } from 'react'
import {useState} from 'react'


function MyFormData() {
  const[addFormData,setAddFormData]=useState();

const  onChangeHandler=(event)=>{
const myTextField=event.target.getAttribute('name');
const myTextFieldValue=event.target.value;
const myFormData={...addFormData}
myFormData[myTextField]=myTextFieldValue
setAddFormData(myFormData)
console.log(addFormData)
}
  return (
<Fragment>
<div>Personal Profile</div>
<form className="form control">
    <label>Enter your Name:</label>
    <input className='mt-20' name='name' type='text' placeholder='your name' onChange={onChangeHandler}></input><br/>
    <label>Enter your email:</label>
    <input className='mt-20' name='email' type='text' placeholder='your email' style={{width:250}}onChange={onChangeHandler}></input> <br/>
    <label>Enter your Age:</label>
    <input className='mt-20'name='age' type='text' placeholder='your age' onChange={onChangeHandler}></input><br/>
  </form>

  <button type='submit' onChange={onChangeHandler}> Submit</button>
</Fragment>
  )                                                                                                                              
                                                                                                                          
}

export default MyFormData


