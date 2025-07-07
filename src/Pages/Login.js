import React from 'react'
import form from 'bootstrap'
function Login() {
  return (
    <div className='container mt-0 padding-top-0'>
    <h1 className="fw-bold">Login</h1>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:300,height:50}} />
    <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" style={{width:300,height:50}}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
)
}

export default Login