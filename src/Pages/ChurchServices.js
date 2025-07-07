import React from 'react'

function Services() {
  return (
    <div>
    <h1 className='container  mt-5'>Church Prayer Program</h1>
    <h2 className='container  mt-5'>Sunday Services</h2>
    <div className="container">
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Service</th>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>First Service</td>
      <td>7:00AM</td>
      <td>9:00AM</td>
    </tr>
    <tr>
    <td>Second Service</td>
      <td>9:30AM</td>
      <td>12:00AM</td>
    </tr> 
  </tbody>
</table>
</div>

<h2 className='container  mt-5'>Morning Glory- Week Days</h2>
 <div className="container">
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Day</th>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>Monday</td>
      <td>7:00AM</td>
      <td>7:30AM</td>
    </tr>
    <tr>
    <td>Tuesday</td>
      <td>7:00AM</td>
      <td>7:30AM</td>
    </tr> 
    <tr>
    <td>Wednesday</td>
      <td>7:00AM</td>
      <td>7:30AM</td>
    </tr> 
    <tr>
    <td>Thursday</td>
      <td>7:00AM</td>
      <td>7:30AM</td>
    </tr> 
    <tr>
    <td>Friday</td>
      <td>7:00AM</td>
      <td>7:30AM</td>
    </tr> 
  </tbody>
</table>
</div>
   <h2 className='container  mt-5'>Online Fellowship-Week Days</h2>
 <div className="container">
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Day</th>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>Monday</td>
      <td>9:00PM</td>
      <td>9:30PM</td>
    </tr>
    <tr>
    <td>Wednesday</td>
      <td>9:00AM</td>
      <td>9:30AM</td>
    </tr> 
    <tr>
    <td>Friday</td>
      <td>9:00PM</td>
      <td>9:30PM</td>
    </tr> 
    </tbody>
</table>

</div>
</div>
  )
}

export default Services