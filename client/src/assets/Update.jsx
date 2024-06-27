import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/getuser/${id}`)
            .then(result => {
                const userData = result.data;
                setName(userData.name || ''); // Set default value to empty string if undefined
                setEmail(userData.email || '');
                setCity(userData.city || '');
            })
            .catch(err => console.log(err));
    }, [id]);

    const submit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, city })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className='vh-100  d-flex justify-content-center align-items-center' style={{ width: '550%' }}>
                <div className='w-100 d-flex justify-content-center'>
                    <div className='w-50 bg-white rounded p-3'>
                        <h2>Update Data</h2><br />
                        <form className="requires-validation" noValidate>
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div><br />
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div><br />
                            <div className="form-group">
                                <input className="form-control" type="text" name="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                            </div><br />
                            <button className='btn btn-info' onClick={submit}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update;
