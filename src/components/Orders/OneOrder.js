import React, { useState } from 'react'
import { collectionOrders } from '../../firebase'
import './UserOrders.css'
import { useHistory } from 'react-router-dom'

function OneOrder() {
    let history = useHistory();

    function handleClick() {
        history.push('/details');
    }
    const [createN, setCreate] = useState([]);

    React.useEffect(() => {
        const getNotes = async () => {
            const { docs } = await collectionOrders()
            const newArray = docs.map((item) => ({ id: item.id, ...item.data() }))
            setCreate(newArray)
        }
        getNotes()
    }, [])

    return (
        <>
            <div onClick={handleClick} className="ordersDad">
            {
                createN.length !== 0 ? (
                    createN.map((item) => (
                        
                        <span className="ordersBoy" key={item.id}>
                            <p>Id: {item.numOrden}</p>
                            <p>Tamaño: {item.tamaño}</p>
                        </span>
                                    
                    ))
                    ) : (
                        <span>No existen ordenes</span>
                        )
            }
            </div>
        </>
    );
}

export default OneOrder;