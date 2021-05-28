import React from 'react'
import OneOrder from './OneOrder'
import './UserOrders.css'

function UserOrders() {
    return (
        <div>
            <h1 className="">Mis pedidos</h1>
            <section>
                <div className="conteiner-orders">
                    <OneOrder />
                    <OneOrder />
                </div>
            </section>
        </div>

    );
}

export default UserOrders;