import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Show = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(result => {
                // After successful deletion, fetch users again to update the list
                fetchUsers();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container" style={{marginLeft:"180px"}}>
            <div className="row justify-content-center align-items-center text-center">
                <div className="col">
                        <h2 className="m-0">Students List</h2>
                        <Link to="/insert"><button className="btn btn-info">Insert</button></Link>
                    </div>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr className='text-center'>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => (
                                        <tr key={index} className='text-center'>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.city}</td>
                                            <td className='d-flex justify-content-evenly'>
                                                <Link to={`/update/${user._id}`}><button className="btn btn-success">Update</button></Link>
                                                <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
       
    )
}

export default Show
