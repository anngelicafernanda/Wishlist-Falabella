//fabi
import React from 'react';
import close from '../images/close.png'
// import trash from '../images/trash.png'

export function Alert(props) {

  return (props.trigger) ? (
    <div className=' flex flex-row-reverse justify-around items-center w-[319px] h-[41px] text-[12px] text-alert bg-info rounded-md sticky bottom-5'>
      <img src={close} onClick={() => props.setTrigger(false)}></img>
      <p>{props.alert}</p>
    </div>
  ) : "";
}
// className=' w-[319px] h-[41px] text-[12px] text-alert'