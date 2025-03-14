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

import { Link } from "react-router-dom"
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

import axios from 'axios'
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

import {useState,useEffect} from 'react'
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

 export default function Home1(){
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

  const[users,setusers]=useState([]);
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

  useEffect(() => {
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

    axios.get('http://localhost:7000/api/users').then((response) => {
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

      setusers(response.data);
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

    }).catch((error) =>{
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

      console.log(error);
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

    });
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

  },[]);
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

  return (
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

    <div>
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

      <div className="p-4">
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

        <div className="flex justify-between items-center">
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

        <h2 className="text-center md-5">users</h2>
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

          <Link to='/create'>
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

<button type="button" class="btn btn-success">Add</button>
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

          </Link>
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

        </div>
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

      </div>
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

    <table class="table">
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

  <thead>
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

    <tr>
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

      <th scope="col">#</th>
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

      <th scope="col">name</th>
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

      <th scope="col">email</th>
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

      <th scope="col">password</th>
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

      <th scope="col">edit</th>
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

      <th scope="col">delete</th>
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

      <th scope="col">view</th>
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

    </tr>
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

  </thead>
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

  <tbody>
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

    {
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

    users.map((user1,index) => (
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

      <tr key={user1._id}>
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

      <td>{index + 1}</td>
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

      <td>{user1.firstname}</td>
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

      <td>{user1.email}</td>
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

      <td>{user1.password}</td>
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

      <td><Link to={`/edit/${user1._id}`}><button type="button" class="btn btn-primary">Edit</button></Link></td>
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

      <td><Link to={`/${user1._id}`}><button type="button" class="btn btn-danger">Delete</button></Link></td>
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

      <td><Link to={`/show/${user1._id}`}><button type="button" class="btn btn-secondary">view</button></Link></td>
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

      </tr>
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

    )
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

  )
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

    }
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

  </tbody>
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

</table>
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

</div>
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

  )
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

}
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

