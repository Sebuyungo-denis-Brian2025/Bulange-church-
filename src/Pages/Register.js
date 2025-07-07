import React from 'react';
import { Dropdown } from 'bootstrap';
import form from 'bootstrap';
import{useNavigate} from 'react-router-dom'
import Login from './Login';
function Register() {

  const nav=useNavigate();
  const handleLoginClick=()=>{
     nav("/login")
  }
  return (
 <div className='container mt-0'>
      <h1 className=" fw-bold  mt-0 ml-5">Create Account</h1>
      <form>
        <div className="input-group" style={{ width: 800, height: 50 }}>
  <span className="input-group-text" >First and last name and Other Names</span>
  <input type="text" aria-label="First name" className="form-control"  />
  <input type="text" aria-label="Last name" className="form-control"/>
   <input type="text" aria-label="Last name" className="form-control"/>

</div>
<div className="input-group" style={{width:800,height
  :50}}>
  <span className="input-group-text">Village Name and Zone</span>
  <input type="text" aria-label="First name" className="form-control"/>
  <input type="text" aria-label="Last name" className="form-control"/>
</div>
<div className="input-group" style={{width:800,height
  :50}}>
  <span className="input-group-text">Church Zone</span>
  <select class="form-select" aria-label="Default select example">
  <option selected>Church Zone</option>
  <option value="1">Mark</option>
  <option value="2">John</option>
  <option value="3">Luke</option>
  <option value="4">Matthew</option>
</select>
</div>
 <div className="input-group" style={{width:800,height
  :50}}>
  <span className="input-group-text">Email Address</span>
  <input type="text" aria-label="First name" className="form-control"/>
</div>
<div className="input-group" style={{width:800,height
  :50}}>
  <span className="input-group-text">Contact Number</span>
  <input type="text" aria-label="First name" className="form-control"/>
  </div>
   
<div className="input-group" style={{width:800,height
  :50}}>
  <span className="input-group-text">Password </span>
  <input type="password" class="form-control" id="inputPassword" placeholder='Enter strong password'/>
    </div>
   <br/>     
<div className="d-flex  gap-4">                                                                                                                                                                                                                  
<button type="submit btn-sm " className="btn btn-primary" style={{width:200,height:50}}>Submit</button>
<button className="btn btn-primary btn-xl text-lowercase "onClick={handleLoginClick} >Already have an account?  Log in</button>
</div>
</form>
  </div>
   
    )
}

export default Register