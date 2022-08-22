//fabi
import React from 'react'
import { useState } from 'react';
import "./popup.css";


export function Popup(props) {

    const [name, setName] = useState("");

    const handleClick = () => {
        if(props.btnName === "Crear") {
            props.clickFunction(name)
        }
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn"></button>
            </div>
            <div className="popup-text">
                {props.title}
                {props.desc}
            </div>
            <div className="popupsubmit">
                {props.btnName === "Crear" ? <input onChange={(e) => setName(e.target.value)} className='inputText' type="text" /> : null}
                <button onClick={handleClick}>{props.btnName}</button>
            </div>
        </div>
    ) : "";
}
