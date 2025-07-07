import React from 'react'

function Events(){
  return (
    <div>
    <h1 className="container mt-5">Events</h1>
    <h2 className="container mt-5">Church Events</h2>
   <div className="container">
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Event</th>
      <th scope="col">Date</th>
     </tr>
  </thead>
  <tbody>
    <tr>
    <td>Mothers' Union</td>
      <td>12/4/2025</td>
    </tr>
    <tr>
    <td>Fathers'Day</td>
      <td>23/5/2025</td>
      </tr> 
    <tr>
    <td>St Reacheal's Day</td>
      <td>10/8/2025</td>
    </tr> 
    </tbody>
</table>

</div>
      <h2 className="container mt-5">Youth Events</h2>
      <div className="container">
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Event</th>
      <th scope="col">Date</th>
     </tr>
  </thead>
  <tbody>
    <tr>
    <td>KAYOREKO</td>
      <td>Every First Sunday of the Month</td>
    </tr>
    </tbody>
</table>


<h2 className="container mt-5">Children's Events</h2>
      <div className="container">
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Event</th>
      <th scope="col">Date</th>
     </tr>
  </thead>
  <tbody>
    <tr>
    <td>Children's Day Out</td>
      <td>12/3/2025</td>
    </tr>
    </tbody>
</table>
</div>
</div>
 </div>
  )
}

export default Events
