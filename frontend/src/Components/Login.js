import React from 'react'

const Login = () => {
  return (
    <div className='container mt-5 col-lg-5'>
      <h3 className='m-2'>Login</h3>

      <div class="input-group mb-3">
        <span class="input-group-text"></span>
        <div class="form-floating">
          <input type="text" class="form-control" placeholder="Username" />
          <label for="floatingInputGroup1">Username</label>
        </div>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text"></span>
        <div class="form-floating">
          <input type="text" class="form-control" placeholder="Email@exmple.com" />
          <label for="floatingInputGroup1">Email</label>
        </div>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text"></span>
        <div class="form-floating">
          <input type="password" class="form-control" placeholder="Password" />
          <label for="floatingInputGroup1">Password</label>
        </div>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text"></span>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingInputGroup1" placeholder="Confirm_Password" />
          <label for="floatingInputGroup1">confirm Password</label>
        </div>
      </div>

      <button type="button" class="btn btn-primary col-3">Register</button>

    </div>
  )
}

export default Login