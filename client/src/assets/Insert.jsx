import {React  , useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Insert = () => {

    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [city , setCity] = useState()

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add",{name,email,city})
        .then(result => {
            navigate('/');
            console.log(result)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='vh-100 d-flex justify-content-center align-items-center' style={{ width: '550%' }}> {/* Add style attribute with width: 100% */}
            <div className='w-100 d-flex justify-content-center'> {/* Add d-flex and justify-content-center classes */}
                <div className='w-50 bg-white rounded p-3'>
                <h2 className='text-dark'>Insert Data</h2><br/>
                    <form className="requires-validation" noValidate>

                        <div className="form-group">
                            <input className="form-control" type="text" name="name" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                            <br/>
                        </div>

                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="E-mail Address" onChange={(e) => setEmail(e.target.value)} />
                            <br/>
                        </div>

                        <div className="form-group">
                            <input className="form-control" type="text" name="city" placeholder="City" onChange={(e) => setCity(e.target.value)}  />
                            <br/>
                        </div>

                        <Link to="/"><button className='btn btn-info' onClick={submit}>Insert</button></Link>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Insert
