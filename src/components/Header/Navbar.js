import { Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <header>
      


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <a className="navbar-brand" href="#">
            <img 
              src="/Assets/image/logo.png" // Replace with the path to your image
              alt="UziNotes Logo"
              style={{ width: '30px', height: '30px', marginRight: '8px' }} // Adjust the size and margin as needed
            />
            UziNotes
          </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Contacts</a>
        </li>
        
      </ul>
      <Space>

<Link to='/auth/login' className='text-decoration-none border border-dark px-3 py-2 text-white bg-dark rounded'>Login</Link>
<Link to='/auth/register' className='text-decoration-none border border-success px-3 py-2 text-white bg-success rounded'>Register</Link>
</Space >
    </div>
  </div>
</nav>
    </header>
  )
}
