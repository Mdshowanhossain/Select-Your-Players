import React from 'react';
import User from '../../User/User';
import users from './users.css';
import fakeData from '../fakeData.json'



const Users = () => {
    // console.log(fakeData)
    return (

        <div className="flex">
            <div className="container">
                {
                    fakeData.map(user => <User user={user}></User>)
                }
            </div>
            <div className="right-side"></div>
        </div>
    )
};

export default Users;