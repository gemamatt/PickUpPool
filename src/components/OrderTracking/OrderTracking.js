import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import './OrderTracking.css'
import MapView from './MapView';
import OrderLocation from './OrderLocation'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function OrderTracking() {
    const [lat, setLat] = useState (19.43676970998405);
    const [lng, setLng] = useState (-99.14099943570316);

    const setCenter = (lat,lng) =>{
        setLat (lat);
        setLng (lng);
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC6ymkUmHMLmj5Sr6xDHhC50YYfmT1QP3U' }}
          defaultCenter={setLat,setLng}
          defaultZoom={12}
        />
    };

    const addMarker = (lat, lng) => {
        return (
            <AnyReactComponent
            latitud={lat}
            longitud={lng}
            text = "My Marker"
          />
        );
      };
   return (
        <>
            <Navbar />
            <div className='conteiner-orderTracking'>
                <div className="tracking">
                    <h2>Rastreo de Pedidos</h2>
                </div>
                <section>
                    <div className="conteiner-map">
                       <MapView OrderLocation  setCenter={setCenter} setMarker={addMarker}/>
                       
                    </div>
                </section>
            </div>
        </>
    );
}

export default OrderTracking;