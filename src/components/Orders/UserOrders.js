import React from 'react'
import { Redirect } from 'react-router'
import Navbar from '../Navbar/Navbar'
import OneOrder from './OneOrder'
import './UserOrders.css'

function UserOrders(props) {

    if(!props.user){
        return <Redirect to="/"/>
    }

    return (
        <>
            <Navbar />
            <div className='conteiner-userorders'>
                <div className="my-orders">
                    <h1>Mis pedidos</h1>
                </div>
                <section>
                    <div className="conteiner-orders">
                        <OneOrder />
                        <OneOrder />
                    </div>
                </section>
            </div>
        </>

    );
}

export default UserOrders;