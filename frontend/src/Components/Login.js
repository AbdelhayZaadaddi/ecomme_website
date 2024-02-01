import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Login = () => {
  return (
    <div className='container mt-5'>
        <InputGroup className="mb-3 col-lg-9 d-flex justify-content-center">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        </InputGroup>
    </div>
  )
}

export default Login