import React from 'react';
import { Dropdown } from 'bootstrap'
import{useNavigate} from 'react-router-dom'
import Login from './Login';
import Form from 'react-bootstrap/Form';
import{useState} from 'react'

function Register() {

     const[firstName,setfirstName]=useState('');
     const[lastName,setlastName]=useState('');
     const[otherName,setOtherName]=useState('');
     const[village,setVillage]=useState('');
     const[zone,setZone]=useState('');
     const[churchZone,setChurchZone]=useState('');
     const[emailAddress,setEmailAddress]=useState('');
     const[contact,setContact]=useState('')
     const[password,setPassword]=useState('')

const handleSubmit=(event)=>{
  event.preventDefault();
  fetch("http://localhost:9093/api/addchurchmember",{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({firstName:firstName,lastName:lastName,otherName:otherName,village:village,zone:zone,churchZone:churchZone,emailAddress:emailAddress,contact:contact,password:password})
  })
  .then(res=>console.log(res)) 
  .catch(er=>console.log(er))
}
  function onfirstNameChange(event){
    setfirstName(event.target.value)
  }
  function onlastNameChange(event){
    setlastName(event.target.value)
  }
  function onotherNameChange(event){
    setOtherName(event.target.value)
  }
  function onvillageChange(event){
    setVillage(event.target.value)
  }
  function onZoneChange(event){
    setZone(event.target.value)
  }
  function onchurchZoneChange(event){
    setChurchZone(event.target.value)
  }
  function onemailAddressChange(event){
    setEmailAddress(event.target.value)
  }
  function oncontactChange(event){
    setContact(event.target.value)
  }
  function onpasswordChange(event){
    setPassword(event.target.value)
  }
return( 
 <div className='container mt-0'> 
      <h1 className=" fw-bold  mt-0 ml-5">Create Account</h1>
      <form className='form1' onSubmit={handleSubmit} >
  <div className="input-group" style={{ width: 800, height: 50 }}>
  <span className="input-group-text" >First and last name and Other Names</span>
  <input type="text" name="firstName" className="form-control" placeholder='First Name'onChange={onfirstNameChange}/>
  <input type="text" name="lastName" className="form-control" placeholder='Last Name' onChange={onlastNameChange}/>
   <input type="text" name="otherName" className="form-control" placeholder='Other Name' onChange={onotherNameChange}/>

</div>
<div className="input-group" style={{width:800,height
  :50}}>
  <span className="input-group-text">Village Name and Zone</span>
  <input type="text" name="village" className="form-control" placeholder='Village e.g Bulange' onChange={onvillageChange}/>
  <input type="text" name="zone" className="form-control" placeholder='Zone e.g Zone A'  onChange={onZoneChange}/>
</div>
<div className="input-group" style={{width:800,height
  :50}}>
  <span className="input-group-text">Church Zone</span>
  <select className="form-select" name="churchZone" onChange={onchurchZoneChange}>
  <option selected>Church Zone</option>
  <option value="Mark">Mark</option>
  <option value="John">John</option>
  <option value="Luke">Luke</option>
  <option value="Matthew">Matthew</option>
</select>
</div>
 <div className="input-group" style={{width:800,height
  :50}}>
  <span className="input-group-text">Email Address</span>
  <input type="text" name="emailAddress" className="form-control" placeholder='e.g. sebuyungodenis@gmail.com' onChange={onemailAddressChange}/>
</div>
<div className="input-group" style={{width:800,height
  :50}}>
  <span className="input-group-text">Contact Number</span>
  <input type="text" name="contact" className="form-control" placeholder='Mobile phone number' onChange={oncontactChange}/>
  </div>
   
<div className="input-group" style={{width:800,height
  :50}}>
  <span className="input-group-text">Password</span>
  <input type="password" className="form-control" id="inputPassword" placeholder='Enter strong password' name="password"   onChange={onpasswordChange}/>
    </div>
   <br/>     
<div className="d-flex  gap-4">                                                                                                                                                                                                                  
<button type="submit btn-sm " className="btn btn-primary" style={{width:200,height:50}}  onClick={handleSubmit}>Submit</button>
<button type="submit btn-sm " className="btn btn-primary" style={{width:300,height:50}}>Already registered? Login</button>
<button type="submit btn-sm " className="btn btn-primary" style={{width:300,height:50}}>Registered Members</button>

</div>
</form>
  </div>
 
   
    )
}

export default Register