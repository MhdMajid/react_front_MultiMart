import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../Auth/Logout'

const DashHome = () => {
  return (
    <div>

<main className="main-wrap">
  <div class="row align-items-md-stretch">
    <div class="col-md-6">
        <div
            class="h-100 p-5 text-white  "
        >
            <h2>Welcome in Dashboard</h2>
            <p>
                Admin Controller
            </p>
            <Link
                className="btn btn-outline-primary"
                to="/"
            >
                Home 
            </Link>
            <Logout classlog='btn btn-outline-danger' />
        </div>
    </div>
  </div>
  
</main>

      
    </div>
  )
}

export default DashHome
