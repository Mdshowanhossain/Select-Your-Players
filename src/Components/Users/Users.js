import React, { useState } from 'react';
import User from '../User/User';
import users from './users.css';
import fakeData from '../fakeData.json'
import Cart from '../Cart/Cart';
// import Cart from '../Cart/Cart';


const Users = () => {

    const [users, setUsers] = useState([])

    const handleAddToCart = (user) => {
        // console.log(user)
        const newUser = [...users, user]
        setUsers(newUser);
    }
    return (

        <div className="flex">
            <div className="container">
                {
                    fakeData.map(user => <User handleAddToCart={handleAddToCart} user={user} key={user.id}></User>)
                }
            </div>
            <div className="right-side">
                <Cart user={users} />
            </div>
        </div>
    )
};

export default Users;