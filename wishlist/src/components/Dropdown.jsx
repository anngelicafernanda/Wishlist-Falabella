import React, {useState, useEffect, useRef} from 'react';
import downarrow from '../imgFalabella/down-arrow-search.svg';
import check from '../images/check.png';

export function Dropdown({lists, product, handleSelect}) {
    const [dropdown, setDropdown] = useState(false)
    let dropdownRef = useRef();

    const handleClick = (e) =>{
        handleSelect(e.currentTarget.id,product)
        setDropdown(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if(!dropdownRef.current.contains(event.target)){
                setDropdown(false)
            }       
        })
    })

    return (
        <div ref={dropdownRef} id={product.productId}className='w-[200px] m-0-auto relative'> 
            <div id={product.productId} className=' p-[10px] shadow bg-white flex justify-between w-full rounded-full mt-2 h-10 items-center cursor-pointer '
            onClick={(e)=>{setDropdown(!dropdown)}}> Agregar a la lista
                <img src={downarrow} className="color-black w-3"/>
            </div>
            {dropdown && 
                <div className='absolute p-[5px] shadow mt-0.5 text-sm w-full z-10 bg-white'>
                    {lists.map((list)=>
                        list.productsId.includes(product.productId) ? (
                            <div className='hover:bg-gray-light cursor-pointer flex justify-between p-1 border-b border-gray-light ' id='disabled' onClick={(e)=>{handleClick(e)}}>{list.name} 
                                <img src={check} className='w-4 h-4'/>
                            </div>
                        )
                        :(<div className='hover:bg-gray-light cursor-pointer p-1 border-b border-gray-light  ' id={list.docId} onClick={(e)=>{handleClick(e)}}>{list.name} </div>)
                        )}
                        <div className='hover:bg-gray-light cursor-pointer mt-2 text-center ' id='crear' onClick={(e)=>{handleClick(e)}}>Crear lista +</div>
                </div>
            }
            
        </div>
    )
}
