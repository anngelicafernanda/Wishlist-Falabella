import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListContext } from '../context/ListContext';
import cancel from '../images/close.png';
import './popup.css';

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
				{props.trigger ? (
					<div className="popup">
						<div className="popup-inner">
							<button
								onClick={() => props.setTrigger(false)}
								className="close-btn"
							>
								<img src={cancel} />
							</button>
							<div className="popup-text">
								<h4>{props.title}</h4>
								<p className="fixed bottom-[290px]">{props.desc}</p>
							</div>
							<div className="popup-submit">
								{props.btnName === 'Crear lista' ? (
									<>
										<input
											onChange={(e) => setName(e.target.value)}
											className="inputText"
											type="text"
										/>
										<p>Privacidad de la lista:</p>
										<div onChange={(e) => setStatus(e.target.value)}>
											<input
												type="radio"
												value="Pública"
												name="status"
												checked
											/>
											<label className="text-sm">Pública</label>
											<br></br>
											<input type="radio" value="Privada" name="status" />
											<label className="text-sm">Privada</label>
										</div>
									</>
								) : null}
								{props.title === 'Editar lista' ? (
									<>
										<input
											onChange={(e) => setName(e.target.value)}
											className=""
											type="text"
											placeholder={props.nameList}
										/>
										{props.listStatus === 'Pública' ? (
											<div onChange={(e) => setStatus(e.target.value)}>
												<input
													type="radio"
													value="Pública"
													name="status"
													checked
												/>
												<label className="text-sm">Pública</label>
												<br></br>
												<input type="radio" value="Privada" name="status" />
												<label className="text-sm">Privada</label>
											</div>
										) : (
											<div onChange={(e) => setStatus(e.target.value)}>
												<input type="radio" value="Pública" name="status" />
												<label className="text-sm">Pública</label>
												<br></br>
												<input
													type="radio"
													value="Privada"
													name="status"
													checked
												/>
												<label className="text-sm">Privada</label>
											</div>
										)}
									</>
								) : null}
							</div>
							<div className="popup-btn flex justify-center h-[50px] fixed bottom-[140px] right-[455px]">
								<button onClick={handleClick}>{props.btnName}</button>
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
