import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useParams } from "react-router-dom"
export default function Deleteuser(){

  const {id} =useParams();

  const Navigate=useNavigate();
  const handeldelete = () =>  {
    axios.delete(`https://test-project-k7jg.onrender.com/api/users/${id}`).then(() =>{
      alert("user deleted");
      Navigate('/');
    })
  }
  
  return (
   <div class='p-4'>
    <h1 className='text-3xl my-4'>Delete User</h1>
    <div className='flex flex-col items-center border-2'>
      <h3 className='text-2xl'>Are u sure u want to delete</h3>
      <button className='p-4 m-8 w-full' onClick={handeldelete}>yes delete</button>
    </div>
   </div>
  )
}
