import React, { useState } from 'react';
import user from './user.css';

const User = (props) => {
    // console.log(user)
    const [active, setDeactive] = useState(false);

    const { firstName, lastName, gender, email, address, image, phone, salary } = props.user;
    return (
        <div className="user">
            <div className="photo">
                <img src={image} alt="" />
                <div className="description">
                    <p><i className="fas fa-user"></i>Name: <span className="name">{firstName + ' ' + lastName}</span></p>
                    <p><i className="fas fa-venus-mars" />Gender: {gender}</p>
                    <p><i className="fas fa-envelope" />Email: {email}</p>
                    <p><i className="fas fa-phone-alt" />Phone: {address}</p>
                    <p><i className="fas fa-address-card" />Address: {phone}</p>
                    <p><i className="fas fa-money-bill-alt" />Salary: {salary}</p>

                    <p className="Button"><button onClick={() => {
                        props.handleAddToCart(props.user); setDeactive(true);
                    }} className={active ? "disable" : "Button-Class fas fa-plus"}>{active ? "Added" : "ADD"}</button></p>
                </div>
            </div>
        </div >
    );
};
export default User;
