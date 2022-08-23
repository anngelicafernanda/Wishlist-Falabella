//fabi
import React from 'react'
import { useState } from 'react';
import "./popup.css";


export function Popup(props) {

    const [name, setName] = useState("");


    const handleClick = () => { //hacer un switch case
        if(props.title.props.children === "Nueva Lista") {
            props.clickFunction(name)
        }
        else if(props.title.props.children === "Eliminar Producto"){
            console.log('hola')
            props.clickFunction(true)
            props.setTrigger(false)
        }
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button onClick={() => props.setTrigger(false)} className="close-btn">X</button>
                <div className="popup-text">
                    {props.title}
                    {props.desc}
                </div>
                <div className="popup-submit">
                    {props.btnName === "Crear lista" ? <input onChange={(e) => setName(e.target.value)} className='inputText' type="text" /> : null}
                    <button onClick={handleClick}>{props.btnName}</button>
                </div>
            </div>
        </div>
    ) : "";
}
