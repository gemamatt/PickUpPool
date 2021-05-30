import React from 'react'
import './RegisterPicker.css'

export const RegisterPicker = () => {
    return (
        <div className='registerPicker'>
            <h1 className='titlePicker'>REGISTRATE COMO PICKER</h1>
            <div className='registerDivFormP'>
                <form className='registerPickerForm'>
                    <label htmlFor='name'>Nombre completo*</label>
                    <input type='text' className='registerPickerInput' />
                    <label htmlFor='key'>Clave Electoral*</label>
                    <input type='text' className='registerPickerInput' />
                    <label htmlFor='key'>No. de placas*</label>
                    <input type='text' className='registerPickerInput' />
                    <div className='radioButtom'>
                        <div className='radioButtomOne'>
                            <input type='radio' name='bicicleta' />Bicicleta
                            <input type='radio' name='automovil' />Automóvil
                        </div>
                        <div className='radioButtomTwo'>
                            <input type='radio' name='motocicleta' />Motocicleta
                            <input type='radio' name='caminando' />Caminando
                        </div>
                    </div>
                    <label htmlFor='telephone'>Teléfono*</label>
                    <input type='number' className='registerPickerInput' />
                    <button value='regPicker' className='registerPickerButton'>
                    UNIRME
                    </button>
                </form>
            </div>
        </div>
    );
};
