import React from 'react'

function Donate() {
  return (
   <div className='container mt-0 padding-top-0'>
       <div  className="fw-bold"><h1>Payment Details</h1>
       <form>
     <div className="mb-3">
       <label htmlFor="exampleInputEmail1" className="form-label">Airtel or MTN number to be debited</label>
       <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:300,height:50}} />
     </div>
     <div className="mb-3">
       <label htmlFor="exampleInputPassword1" className="form-label" >St Reacheal Church Merchant Code</label>
       <input type="password" className="form-control" id="exampleInputPassword1" style={{width:300,height:50}}/>
     </div>
     <div className="mb-3">
       <label htmlFor="exampleInputPassword1" className="form-label" >Amount</label>
       <input type="password" className="form-control" id="exampleInputPassword1" style={{width:300,height:50}}/>
     </div>
     
     <button type="submit" className="btn btn-primary">Confirm Donation</button>
   </form>

   <div className='container mt-5'> Note: The information filled is only meant for the transaction and is not to be shared with any their party </div>
   </div>
   </div>
   )
   }

export default Donate;