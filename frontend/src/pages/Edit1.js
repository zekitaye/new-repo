

import axios from 'axios';

import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Edit1(){
 
  const[firstname,setFirstname]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');



  const {id} =useParams();


  useEffect(() => {
    axios.get(`http://localhost:7000/api/users/${id}`).then((response) =>
    {
     
      setFirstname(response.data.firstname);
      setEmail(response.data.email);
      setPassword(response.data.password);   
    


    

    }).catch((error) =>{
      console.log(error);
    })
  },[])










 const Navigate=useNavigate();
async function handlesubmitupdate(event){

  event.preventDefault();
   const data ={
    firstname:firstname,
    email:email,
    password:password,
   };
   
  
  if(!firstname || !email || !password){
  
  alert("fields required");
  Navigate('/');

     }
      
   
     axios.put(`http://localhost:7000/api/users/${id}`,data).then(() => {
      Navigate('/');


  }).catch((error) => {
      console.log(error);
  });


}

 

  return (
    <div className="container my-4">
      <div className="row">
        <div className="com-md-8 mx-auto rounded border p-4">
          <h2 className="text-center md-5">Edit User</h2>
    <form onSubmit={handlesubmitupdate}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-lable">firstname</label>
    <input value={firstname} type="text" name="firstname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange= {(e) => setFirstname(e.target.value) }></input>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input value={email} type="text" name="email" className="form-control" id="exampleInputPassword1" onChange= {(e) => setEmail(e.target.value) }></input>
  </div>

  <div className="mb-3">
    <label for="exampleinput" className="form=label">password</label>
    <input value={password} type="text"  name="password" className="form-control" id="exampleCheck1" onChange= {(e) => setPassword(e.target.value) }></input>
   </div>
  <button type="submit" className="btn btn-primary">Edit</button>
</form>
</div>
</div>
</div>
  )
}
