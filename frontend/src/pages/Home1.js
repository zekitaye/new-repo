import { Link } from "react-router-dom"
import axios from 'axios'
import {useState,useEffect} from 'react'

 export default function Home1(){
  const[users,setusers]=useState([]);

  useEffect(() => {

    axios.get('http://localhost:7000/api/users').then((response) => {
      setusers(response.data);
    }).catch((error) =>{
      console.log(error);
    });

  },[]);
  return (
    <div>
      <div className="p-4">
        <div className="flex justify-between items-center">
        <h2 className="text-center md-5">users</h2>
          <Link to='/create'>
          
<button type="button" class="btn btn-success">Add</button>

          </Link>
        </div>
      </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">edit</th>
      <th scope="col">delete</th>
      <th scope="col">view</th>
    </tr>
  </thead>
  <tbody>
    {
    users.map((user1,index) => (
      <tr key={user1._id}>
      <td>{index + 1}</td>
      <td>{user1.firstname}</td>
      <td>{user1.email}</td>
      <td>{user1.password}</td>
      <td><Link to={`/edit/${user1._id}`}><button type="button" class="btn btn-primary">Edit</button></Link></td>
      <td><Link to={`/${user1._id}`}><button type="button" class="btn btn-danger">Delete</button></Link></td>
      <td><Link to={`/show/${user1._id}`}><button type="button" class="btn btn-secondary">view</button></Link></td>
    
      </tr>
    )
  )
    }
  
    
  </tbody>
</table>
</div>
  )
}



