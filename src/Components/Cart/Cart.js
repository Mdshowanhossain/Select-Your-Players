import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import cart from './cart.css';

const Cart = (props) => {
    const user = props.user;

    let salary = 0;

    props.user.forEach(user => {
        // console.log(user.salary)
        salary = salary + user.salary
    })

    return (
        <div className="cart-container">
            <div>
                <h2>Total Players Added: {props.user.length}</h2><br />
                <hr />
                <h3>Total Salary:{salary}</h3>
            </div>
            <div className="add">

                {
                    user.map(user => <CartDetails user={user.id} user={user} />)
                }

            </div>
        </div>
    );
};

export default Cart;