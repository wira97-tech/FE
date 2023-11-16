import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl } from 'react-bootstrap';


export default function Register() {
  return (
    <div className='container card align-content-center w-25 shadow p-5' style= {{marginTop:"2rem"}}>
    <Form>
         <h1 className='text-center fw-bolder text-success'>REGISTER</h1>
        <Form.Group className="mb-3 " controlId="nama">
            <Form.Label className='fw-bold text-success'>Fullname</Form.Label>
            <FormControl className='shadow p-3 bg-body-tertiary rounded' type="name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="alamat">
            <Form.Label className='fw-bold text-success'>Alamat</Form.Label>
            <FormControl className='shadow p-3 bg-body-tertiary rounded' type="alamat" name="alamat" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="jeniskelamin">
            <Form.Label className='fw-bold text-success'>Jenis Kelamin</Form.Label>
            <FormControl className='shadow p-3 bg-body-tertiary rounded' type="name" name="jeniskelamin" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="username">
            <Form.Label className='fw-bold text-success'>Username</Form.Label>
            <FormControl className='shadow p-3 bg-body-tertiary rounded' type="name" name="username" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label className='fw-bold text-success'>Password</Form.Label>
            <FormControl className='shadow p-3 bg-body-tertiary rounded' type="password" name="password"/>
        </Form.Group>
        <Button className='mb-3 w-100 fw-bolder' variant="success" type="submit">
            SUBMIT
        </Button>
        <div className='text-center'>
        <span className='fst-italic text-center'>Belum memiliki akun?</span> <a href="#" className="text-decoration-none">Register</a>
        </div>
    </Form>
</div>
  )
}
