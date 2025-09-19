//import logo from './logo.svg';
import UsersTable from './Pages/EditableRow';
import{BrowserRouter,Routes,Route, Await} from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar'
import Header from './Pages/Header'
import Login from'./Pages/Login'
import Register from'./Pages/Register'
import ChurchServices from './Pages/ChurchServices';
import Events from './Pages/Events';
import Donate from './Pages/Donate';
//import ViewTable from './Pages/ViewTable';
import ReadOnlyRow from './Pages/ReadOnlyRow';
// ADDED CODE
import { useState, useEffect } from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import EditableRow from './Pages/EditableRow';
import { Fragment } from 'react';
import MyFormData from './Pages/myFormData';

function App() {  
       const[churchMember,setChurchMember]=useState([]);
       const[EditChurchMember,setEditChurchMemberId]=useState();
       const[editedForm, setEditedForm]=useState({
          id:'',
          firstName:'',
          lastName:'',
          email:'',
          contact:'',
          village:'',
          zone:'',
          churchZone:'',
          password:'',
        });
       const[deleteRowId,setDeleteRowId]=useState();
       const[mySelectedChurchMemberId,setSelectedChurchMembersId]=useState();
       const[searchChurchMember,setSearchChurchMember]=useState('');
       const[churchMemberResult, setChurchMemberResult]=useState();
       const[deletedRow, setDeletedRow]=useState();
      
      //All church members API call
        useEffect(()=>{
        fetch("http://localhost:9093/api/getallchurchmembers",{
        method:"GET",
        headers:{"Content-Type":"application/json"}
        })
          .then(resp=>(resp.json()))
          .then(data=>setChurchMember(data))
          .catch(err=>console.log("Processing Error:", err))}
        )
        
        //single church member table filter
   /*
          const getMySelectedChurchMember=((churchMember)=>churchMember.filter((churchMember)=>{
            
          console.log(Array.isArray(churchMember))}))
             
        */

          const editChurchMemberId=((event,rowMember)=>{
          setEditChurchMemberId(rowMember.id)
          }
          )

          //Creates a form data(key-value) pairs form the editable row for updating the database.
          const editableRowOnChangeHandler=(event)=>{
             const editableTextField=event.target.getAttribute('name')
             const editedValue=event.target.value
             const FormData={...editedForm}
             FormData[editableTextField]=editedValue
             setEditedForm(FormData)
             console.log(editedForm)
            }

            //Edit method for churchmember
            const editChurchMember=(event)=>{
                const rowId=editedForm.id;
           fetch(`http://localhost:9093/api/updatechurchmember/${rowId}`,{
                method:'PUT',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(editedForm)
               })
               .then((response)=>{
                if(response.ok){
                  console.log('update successfull')
                }else{console.log('Failed to update record')}
               }).catch(err=>console.log('Problem updating due to',err))
                    }
  
       
   //Row delete event Handler
    const handleDeleteClick=(event,rowMember)=>{
    setDeleteRowId(rowMember.id)
    fetch(`http://localhost:9093/api/deletechurchmember/${deleteRowId}`,{
      method:'DELETE',
     })
       .then(console.log('data deleted successfully'))
       .catch(err=>console.log('Identified error:',err))
          }

// search parameter onChange event handler
   function searchParameterOnChangeHandler(event){
       setSearchChurchMember(event.target.value)
    }
 
   
  return (

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    /*
  
   <ReadOnlyRow/>
   <ViewTable/>
  </>

  <UsersTable/>
 
<NavBar/>


<>
 <BrowserRouter> 
  <Routes>
 <Route index element={<Header />} />
 <Route path="/login" element={<Login />} />
 <Route path="/register" element={<Register/>} />
 <Route path="/register" element={<Register />} />
 <Route path="/church-services" element={<ChurchServices />}/>
 <Route path="/events" element={<Events />} />
 <Route path="/donate" element={<Donate />} />
 </Routes>
</BrowserRouter> 
</>
*/

  <>
  <div className='container-fluid mt-3 my-600'>
  <form className='form-control'>
  <label>Search Church member</label>
  <input className='input group ' type='text' value={searchChurchMember} style={{width:200,height:30}} onChange={searchParameterOnChangeHandler} placeholder='search church member'></input>
  </form>
   </div>
  <div>
    <form>
    <table id="myTable" className="table table-striped table-hover">
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
      <th>Actions</th>
    </tr>
  </thead>
    <tbody>{
     churchMember.filter(curChurchMember=>(
     searchChurchMember===''? curChurchMember:
     curChurchMember.firstName.toLowerCase().includes(searchChurchMember)||
     curChurchMember.lastName.toLowerCase().includes(searchChurchMember) ||
     curChurchMember.id.toString().includes(searchChurchMember) ||
     curChurchMember.village.includes(searchChurchMember)  
    )).map((curChurchMember,index)=>{
return(
    <Fragment>
    {EditChurchMember===curChurchMember.id ? (
    <EditableRow rowMember={curChurchMember} editableRowOnChangeHandler={editableRowOnChangeHandler} editChurchMember={editChurchMember}/>):(
    <ReadOnlyRow rowMember={curChurchMember}handleDeleteClick={handleDeleteClick} churchMemberResult={churchMemberResult}  editChurchMemberId={editChurchMemberId} />
    )}
    </Fragment>
  )
})}  
  </tbody >
</table>
</form>
</div>
</>
)
}

export default App;