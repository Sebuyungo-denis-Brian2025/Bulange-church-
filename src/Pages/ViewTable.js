/*
import React from 'react'
import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ReadOnlyRow from './ReadOnlyRow';

function ViewTable() {
       const[churchMember,setChurchMember]=useState([]);
       const[churchMemberId,setChurchMemberId]=useState('');

     useEffect(()=>{
        fetch("http://localhost:9093/api/getallchurchmembers",{
        method:"GET",
        headers:{"Content-Type":"application/json"}
        })
          .then(resp=>(resp.json()))
          .then(data=>setChurchMember(data))
          .catch(err=>console.log("Processing Error:", err))
      })
     /*
     .catch(er=>console.log(er))},[])
          useEffect(()=>{fetch(`http://localhost:9093/api/getchurchmember/${churchMemberId}`)
            .then(response=>response.json)
            .then(data=>console.log(data)
            .catch(err=>console.log('Identified error:',err)))},[])

        function handleSearchChange(event){
           setChurchMemberId(event.target.value)
        }

        <tr key={index}>
       <td>{member.id}</td>
       <td>{member.firstName}</td>
       <td>{member.lastName}</td>
       <td>{member.emailAddress}</td>
       <td>{member.contact}</td>
       <td>{member.village}</td>
       <td>{member.zone}</td>
        <td>{member.churchZone}</td>
       <td>{member.password}</td>
      <td><button type="submit btn-sm " className="btn btn-primary" style={{width:50,height:30}} >Edit</button></td>
      <td><button type="submit btn-sm " className="btn btn-danger" style={{width:70,height:30}} >Delete</button></td>
</tr>
      
  return(
    <>
    <div className='container-fluid mt-3 my-600'>
  <button type="submit btn-sm " className="btn btn-primary"  style={{width:70,height:30}}>Search</button>
 <input type='text' style={{width:150,height:30}} placeholder='search by id' ></input>
   </div>
  <div>
    <table className="table table-striped table-hover">
 <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th> 
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th> 
      <th scope="col">Village</th> 
      <th scope="col">Zone</th>
      <th scope="col">churchZone</th>
      <th scope="col">password</th>
    </tr>
  </thead>
    <tbody>                                                               
      {
     churchMember.map((member,index)=>(
     <ReadOnlyRow member={member} index={index}/>
       ))}
   </tbody >
</table>

<button type="submit btn-sm " className="btn btn-primary" style={{width:200,height:50}} >View church Members</button>

</div>
</>
  )

export default ViewTable */
