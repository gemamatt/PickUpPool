import React, { useState } from 'react';
import { db } from '../../firebase';

export const PickerCancel = () =>{

    const[commit, setCommit] = useState('');

    const commitCancelation = async (e) =>{
        const newCancelation = {
           commit: commit
        };
        try{
            await db.collection('pickerCancelation').add(newCancelation);
            console.log('Comentario de cancelación exitoso');
        }
        catch(error){
            console.log('No exitoso', error)
        }
    };


    return(
        <div className="cancelContainer">
            <h1>¿Por qué estás cancelando la entrega?</h1>
            <div className="buttonCancel">
                <button className="firstButton">La tienda no lo tiene en existencia</button>
                <button className="secondButton">No se actualizaron los datos del nuevo picker</button>
                <button className="thirdButton">Otro</button>
                <p>Comentario:</p>
                <textarea type="text" value={commit} onChange={(e) => { setCommit(e.target.value)}} placeholder="Coloca tus comentarios aquí....."></textarea>
                <button className="enviar" onClick={commitCancelation}>ENVIAR CANCELACIÓN</button>
            </div>
        </div>
    )
}