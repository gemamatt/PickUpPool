import React, {useState} from 'react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const OrderLocation = ({setCenter, setMarker}) => {
    const [lat, setLat] = useState (19.43676970998405);
    const [lng, setLng] = useState (-99.14099943570316);

    const findMe = () => {
        if(!navigator.geolocation){
            alert("Lo sentimos, el explorador no soporta geolocalización");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position)=>{
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                if(setCenter){
                    setCenter(latitude, longitude);
                }
                if(setMarker){
                    setMarker(latitude, longitude,'Estamos en camino', 'lat: ${latitude}, lng:${longitude}')
                }
            },
            (error) => {
                alert('Error al obtener la úbicacion');
            }
        );
    }; 
    
    return(
        <AnyReactComponent
        latitud={lat}
        longitud={lng}
        text = "My Marker"
      />
    )

};

export default OrderLocation;