import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import { createMemorySessionStorage } from 'react-router-dom'
import{useState} from 'react'

function EditableRow({rowMember,editableRowOnChangeHandler,editChurchMember}){
    return(
   <Fragment>
<tr>
  <td>
 <input
 required="required" 
 placeholder="edit id"
 name="id"
 value={rowMember.id}
 onChange={editableRowOnChangeHandler}
 />
  </td>
 <td>
 <input 
 type="text" 
 required="required" 
 placeholder="first Name"
 name="firstName"
 onChange={editableRowOnChangeHandler}
/>
  </td>
 <td>
 <input 
 type="text" 
 required="required" 
 placeholder="edit last name"  
 name="lastName"
 onChange={editableRowOnChangeHandler}
 />
</td>                                                                                                                                                                          
<td>
 <input 
 type="text" 
 required="required" 
 placeholder="edit Email"  
 name="email"
 onChange={editableRowOnChangeHandler}
 />
 </td>
<td>
 <input 
 type="text" 
 required="required" 
 placeholder="edit Contact"  
 name="contact"
 onChange={editableRowOnChangeHandler}
 />
</td>
 <td>
 <input 
 type="text" 
 required="required" 
 placeholder="edit village"  
 name="village"
 onChange={editableRowOnChangeHandler}
 />
  </td>
<td>
 <input
 type="text" 
 required="required" 
 placeholder="edit zone"  
 name="zone"
 onChange={editableRowOnChangeHandler}
 />
</td>
<td>
   <input 
 type="text" 
 required="required" 
 placeholder="edit church Zone"  
 name="churchZone"
 onChange={editableRowOnChangeHandler}
 />
</td>
  <td>
 <input 
 type="text" 
 required="required" 
 placeholder="edit password"  
 name="password"
 onChange={editableRowOnChangeHandler}
 />
</td>
  <td><button type="Submit" className="btn btn-warning" onClick={(event)=>editChurchMember(event,rowMember)} >Update</button></td>
</tr>
</Fragment>
)
  }                                                                                                                                                                                                                                                                                                
export default EditableRow;