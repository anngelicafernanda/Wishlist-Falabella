//fabi
import React, {useContext} from 'react';
import close from '../images/close.png';
import { ListContext } from '../context/ListContext';

export function Alert() {
  const { setAlert, alert, alertMessage } = useContext(ListContext);

  setTimeout(() => {
    setAlert(false);
  }, 3000);

  return alert ? (
    <div className=' flex flex-row-reverse justify-around items-center w-[319px] h-[41px] text-[12px] text-alert bg-info rounded-md sticky bottom-5'>
      <img src={close} onClick={() => setAlert(false)}></img>
      <p>{alertMessage}</p>
    </div>
  ) : "";
}
