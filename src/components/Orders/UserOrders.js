import React from 'react'
import Navbar from '../Navbar/Navbar'
import OneOrder from './OneOrder'
import './UserOrders.css'

function UserOrders() {
    
    return (
        <>
            <Navbar />
            <div className='conteiner-userorders'>
                <h1>Mis pedidos</h1>
                    <div className="conteiner-orders">
                        <OneOrder />
                    </div>
            </div>
        </>
    );
}

export default UserOrders;
