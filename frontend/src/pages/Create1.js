import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Create1(){

const[firstname,setFirstname]=useState('');

const[email,setEmail]=useState('');


const[password,setPassword]=useState('');




  const Navigate=useNavigate();
async function handlesubmit(event){


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
      console.log(data.firstname);
   
     axios.post("https://test-project-k7jg.onrender.com/api/users",data).then(() => {
      Navigate('/');


  }).catch((error) => {
      console.log(error);
  });


}

 

  return (
    <div className="container my-4">
      <div className="row">
        <div className="com-md-8 mx-auto rounded border p-4">
          <h2 className="text-center md-5">create user</h2>
    <form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-lable">firstname</label>
    <input type="text" value={firstname} onChange={(e) =>setFirstname(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="mb-3">
    <label for="exampleinput" className="form=label">password</label>
    <input type="text"  value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleCheck1"></input>
   </div>
  <button type="submit"  className="btn btn-success">save</button>
</form>
</div>
</div>
</div>
  )
}
