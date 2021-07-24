import React from 'react';
import user from './user.css';

const User = (props) => {
    // console.log(user)
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
                    <p className="cart"><button onClick={() => props.handleAddToCart(props.user)} className="btn"><span className="fas fa-plus"></span> Cart</button></p>
                </div>
            </div>
        </div>
    );
};



export default User;