import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListContext } from '../context/ListContext';
import "./popup.css";

export function Popup(props) {
    const {createListfromProduct} = useContext(ListContext);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleClick = () => { //hacer un switch case

        if(props.title === "Nueva lista") {
            props.clickFunction(name)

            props.setActive(true)
            props.setTrigger(false)

        }
        else if(props.title === "Eliminar producto"){
            props.clickFunction(props.id, props.product, props.product.productId)
            props.setTrigger(false)
        }
        else if(props.title === "Eliminar lista"){
            props.clickFunction(props.id)
            props.setTrigger(false)
            navigate('/Mis-Listas')
        }
        else if(props.title === "Editar lista"){
            props.clickFunction(name)
            props.setTrigger(false)
        }
        else if (props.title === "Crear lista"){
            console.log('hola')
            createListfromProduct(name, props.product)
            props.setTrigger(false)
        }
    }

    return (
        <>
            <div>
            {
            (props.trigger) ? (
                <div className="popup">
                    <div className="popup-inner">
                        <button onClick={() => props.setTrigger(false)} className="close-btn">X</button>
                        <div className="popup-text">
                            <h4>{props.title}</h4>
                                {props.desc}
                        </div>
                        <div className="popup-submit">
                            {props.btnName === "Crear lista" ? <input onChange={(e) => setName(e.target.value)} className='inputText' type="text" /> : null}
                            {props.title === "Editar lista" ? <input onChange={(e) => setName(e.target.value)} className='inputText' type="text" placeholder={props.nameList}/> : null}
                            <button onClick={handleClick}>{props.btnName}</button>
                        </div>
                    </div>
                </div>
                ) 
                : ""
            }
            </div>
            <div>
                    {
                    (props.active) ? (
                        <div className='flex justify-center sticky bottom-5'>
                            <div className=' flex flex-row-reverse m-0 justify-around items-center w-[319px] h-[41px] text-[12px] text-alert bg-info rounded-md'>
                                <div onClick={() => props.setActive(false)}>X</div>
                                <p>{props.alert}</p>
                            </div>
                        </div>
                        ) 
                        : ""
                    }
            </div>
        </>
    )
}
