import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



export default function Login () {
    const [LoginSuccess, setLoginSuccess] = useState(false)
    const [LoginFailure, setLoginFailure] = useState(false)
    const navigate = useNavigate ()

    function HandleLogin (e: any) {
        e.preventDefault()
    
        const data = new FormData (e.currentTarget)
        console.log("data email", data.get("email"));
        console.log("data password", data.get("password"));
        
        const email = data.get("email")
        const password = data.get("password")
    
    if (email === "wira@mail.com" && password === "123") {
        setLoginSuccess(true)
        setLoginFailure(false)
        return navigate('/admin')
    } else {
        setLoginSuccess(false)
        setLoginFailure(true)
    }

    }
    return (
    <div>
            {LoginSuccess && (  <div className="alert alert-success" role="alert">
            Login Berhasil!
            </div>)}
            {LoginFailure && (<div className="alert alert-danger" role="alert">
            Login Gagal Periksa Kembali Akun Anda!
            </div>)}
        <div className='container card align-content-center w-25 shadow p-5' style= {{marginTop:"10rem"}}>
            <Form onSubmit={HandleLogin}>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <h1 className='text-center fw-bolder text-success'>LOGIN</h1>
                    <Form.Label className='fw-bold text-success'>Username</Form.Label>
                    <FormControl className='shadow p-3 bg-body-tertiary rounded' type="email" placeholder="Enter username" name="email" />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label className='fw-bold text-success'>Password</Form.Label>
                    <FormControl className='shadow p-3 bg-body-tertiary rounded' type="password" placeholder="Password" name="password"/>
                </Form.Group>
                <Button className='mb-3 w-100 fw-bolder' variant="success" type="submit">
                  SUBMIT
                </Button>
                <div className='text-center'>
                <span className='fst-italic text-center'>Belum memiliki akun?</span> <a href="/register" className="text-decoration-none">Register</a>
                </div>
            </Form>
        </div>
    </div>
    )
}


