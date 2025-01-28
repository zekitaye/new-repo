
import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
export default function Show(){
  const[user1,setuser]=useState({})
  const {id} =useParams();


  useEffect(() => {
    axios.get(`https://new-repo-h35k.onrender.com/api/users/${id}`).then((response) =>
    {
      setuser(response.data);
    
    }).catch((error) =>{
      console.log(error);
    })
  },[])
  return (
    <div>
      <h1>{user1.firstname}</h1>
      <h1>{user1.email}</h1>
      <h1>{user1.password}</h1>
    </div>
  )
}
