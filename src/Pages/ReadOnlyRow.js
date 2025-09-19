import React from 'react'

const ReadOnlyRow=({rowMember,handleEditClick,handleDeleteClick,editChurchMemberId})=>{
 return(
<>     
<tr>
<td>{rowMember.id}</td>
<td>{rowMember.firstName}</td>
<td>{rowMember.lastName}</td>
<td>{rowMember.emailAddress}</td>
<td>{rowMember.contact}</td>
<td>{rowMember.village}</td>
<td>{rowMember.zone}</td>
<td>{rowMember.churchZone}</td>
<td>{rowMember.password}</td>
<td><button type="button" className="btn btn-primary"onClick={(event)=>editChurchMemberId(event,rowMember)} >Edit</button></td>
<td><button type="button" className="btn btn-danger"  onClick={(event)=>handleDeleteClick(event,rowMember)} >Delete</button></td>
</tr>
</>
 ) 
}
export default ReadOnlyRow