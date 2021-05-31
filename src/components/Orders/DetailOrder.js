import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import './DetailOrder.css';
import Navbar from '../Navbar/Navbar'
import swal from 'sweetalert';
import arrow from '../../assets/back.png';
import { db } from '../../firebase';


const DetailOrder =()=>{

    let history = useHistory();

    function handleClick() {
        history.push('/orders');
    }

    const [hours, setHours] = useState('');
    const [places, setPlaces] = useState('');

    const scheduleOrder = async (e) =>{
        e.preventDefault();
        const saveOrder = {
            hours: hours,
            places: places
        };
        try{
            await db.collection('orders').add(saveOrder);
            swal('Pedido programado','¡La información de tu entrega ha sido guardada exitosamente!', 'success');
            console.log('Programando entrega');
        }
        catch(error){
            console.log('Datos no guardados', error);
        }
    };
    
    // const initialStateValues = {
    //     hours: '',
    //     places: '',
    // };

    // const [values, setValues] = useState(initialStateValues);

    // const handleSelectChange = e =>{
    //     const {name, value} = e.target;
    //     console.log(name, value);
    //     setValues({...values, [name]: value})
    // }

    // const scheduleOrder = async (e) => {
    //     await db.collection('schedule').add(initialStateValues);
    //     // await db.collection('orders').doc().set(object)
    // }

    // const alertSuccess = (e) =>{
    //     e.target.reset();
    //     swal('Pedido programado','¡La información de tu entrega ha sido guardada exitosamente!', 'success');
    // }

    return(
        <div className='viewPrincipal'>
            <Navbar/>
            <img onClick={handleClick} src={arrow} className="return" alt="return" />
            <div className='conteiner-userorders'>
                <div className="my-orders">
                    <h2>Mis pedidos</h2>
                </div>
                <section> 
                    <form className="container-orders" >
                        <div className='hours'>
                            <p>Hora de entrega:</p>
                            <select value={hours} onChange={(e) => {setHours(e.target.value)}} required>
                                <option></option>
                                <option >10:00</option>
                                <option >10:30</option>
                                <option >11:00</option>
                                <option >11:30</option>
                                <option >12:00</option>
                                <option >12:30</option>
                                <option >13:00</option>
                                <option >13:30</option>
                                <option >14:00</option>
                                <option >14:30</option>
                                <option >15:00</option>
                                <option >15:30</option>
                                <option >16:00</option>
                                <option >16:30</option>
                                <option >17:00</option>
                                <option >17:30</option>
                                <option >18:00</option>
                                <option >18:30</option>
                                <option >19:00</option>
                            </select>
                        </div>
                        <div className='delivery-point'>
                            <p>Punto de entrega:</p>
                            <select value={places} onChange={(e) => {setPlaces(e.target.value)}} required>
                                <option></option>
                                <option >Ángel de la Independencia</option>
                                <option >Hemiciclo a Benito Juárez</option>
                                <option >Palacio de Bellas Artes</option>
                                <option >Palacio de Correos</option>
                                <option >Plaza Garibaldi</option>
                                <option >Monumento a la Revolución</option>
                                <option >Templo Mayor</option>
                                <option >Torre Latino</option>
                                <option >Zócalo</option>
                            </select>
                        </div>
                        <div className='confirm'>
                            <input type="submit" value="Confirmar Pickeo"  onClick={scheduleOrder} />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default DetailOrder;
