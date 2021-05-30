import React from 'react'
import Navbar from '../Navbar/Navbar'
import Deliveries from '../Deliveries/Deliveries'
import './PickerOrders.css'

function PickerOrders() {
    
    return (
        <>
            <Navbar />
            <div className='conteiner-pickerorders'>
                <h1>Entregas</h1>
                    <div className="conteiner-orders">
                        <Deliveries />
                    </div>
            </div>
        </>
    );
}

export default PickerOrders;