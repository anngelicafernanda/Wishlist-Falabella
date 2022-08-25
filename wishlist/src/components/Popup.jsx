import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListContext } from '../context/ListContext';
import cancel from '../images/close.png'
import "./popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"


export function Popup(props) {
	const { createListfromProduct, setAlert, setAlertMessage } =
		useContext(ListContext);
	const [name, setName] = useState('');
	const navigate = useNavigate();
	const [status, setStatus] = useState('Pública');

	useEffect(() => {
		if (props.listStatus === 'Privada') {
			setStatus('Privada');
		}
        if (props.nameList){
            setName(props.nameList)
        }
	}, []);

	const hasName =
		props.title === 'Nueva lista' ||
		props.title === 'Crear lista' ||
		props.title === 'Editar lista'
			? name
			: true;

	const handleClick = () => {
		//hacer un switch case
		if (hasName) {
			if (props.title === 'Nueva lista') {
				//CHECK
				props.clickFunction(name, status);
				props.setTrigger(false);
				setAlertMessage('Tu lista ha sido creada exitosamente');
				setAlert(true);
				setStatus('Pública');
			} else if (props.title === 'Eliminar producto') {
				props.clickFunction(props.id, props.product, props.product.productId);
				props.setTrigger(false);
				setAlertMessage('Su producto fue eliminado exitosamente de la lista');
				setAlert(true);
			} else if (props.title === 'Eliminar lista') {
				props.clickFunction(props.id);
				props.setTrigger(false);
				navigate('/Mis-Listas');
				setAlertMessage('Su lista fue eliminada exitosamente');
				setAlert(true);
			} else if (props.title === 'Editar lista') {
				props.clickFunction(name, status);
				props.setTrigger(false);
				setAlertMessage('Tu lista ha sido editada exitosamente');
				setAlert(true);
			} else if (props.title === 'Crear lista') {
				createListfromProduct(name, props.product, status);
				props.setTrigger(false);
				setAlertMessage('Tu lista ha sido creada exitosamente');
				setAlert(true);
				setStatus('Pública');
			}
		} else {
			setAlertMessage('Introduzca un nombre para la lista');
			setAlert(true);
		}
	};

return (
    <>
        <div>
        { props.trigger ? (
            <div className="popup">
                <div className="popup-inner">
                    <button 
                    onClick={() => props.setTrigger(false)} 
                    className="close-btn">
                    <FontAwesomeIcon  icon={faClose} />
                    </button>
                    <div className="popup-text">
                        <h4 className='popup-text-h4'>{props.title}</h4>
                        <p className='popup-desc'>{props.desc}</p>
                    </div>
                    <div className='popup-submit'>                         
                            {props.btnName === "Crear lista" ? 
                            <div>
                                <input className='inputText' 
                                onChange={(e) => setName(e.target.value)} 
                                type="text"/> 
                                <p className='popup-input'>Privacidad de la lista:</p>
                                <div className='popup-privacy' onChange={(e)=>setStatus(e.target.value)}>
                                    <label className='popup-privacy-label'><input type="radio" value="Pública" name="status" checked/>Pública</label>                                    
                                    <label className='popup-privacy-label'><input type="radio" value="Privada" name="status"/>Privada</label>
                                </div>
                            </div>
                            : null}
                        {props.title === "Editar lista" ? ( 
                            <div className='popup-submit'>
                                <p className='popup-input'>Privacidad de la lista:</p>
                                <input className='inputText' 
                                onChange={(e) => setName(e.target.value)} 
                                type="text" 
                                placeholder={props.nameList}
                                defaultValue={props.nameList}
                                /> 
                                {props.listStatus === 'Pública' ? (
                                    <div className='popup-privacy' 
                                        onChange={(e)=>setStatus(e.target.value)}>
                                        <label className="popup-privacy-label"><input 
                                        type="radio" 
                                        value="Pública" 
                                        name="status"
                                        checked
                                        />Pública</label>
                                        <label className='popup-privacy-label'><input 
                                        type="radio" 
                                        value="Privada" 
                                        name="status"/>Privada</label>
                                    </div>
                                ) : (
                                    <div className='popup-privacy' 
                                        onChange={(e) => setStatus(e.target.value)}>
                                        <label className="popup-privacy-label"><input 
                                        type="radio" 
                                        value="Pública" 
                                        name="status" />Pública</label>
                                        <label className="popup-privacy-label"><input
                                            type="radio"
                                            value="Privada"
                                            name="status"
                                            checked
                                        />Privada</label>
                                    </div>
                                    )}
                            </div>
                        ) : null}
                    </div>                        
                    <div>
                        <button className='popup-btn' onClick={handleClick}>{props.btnName}</button>
                    </div>
                </div>
            </div>
            ) : ( 
                ''
            )}
        </div>
    </>
);
}
