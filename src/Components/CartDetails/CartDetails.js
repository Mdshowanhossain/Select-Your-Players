import React from 'react';
import cartDetails from './cartDetails.css';


const CartDetails = ({ user }) => {

    return (
        <div className="cartDetails">
            <div className="cartDetails-image">
                <img src={user.image} alt="" />
            </div>
            <h5>{user.firstName + ' ' + user.lastName}</h5>
        </div>
    );
};

export default CartDetails;