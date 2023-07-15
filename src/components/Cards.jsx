import React from 'react'
import { LuNfc } from "react-icons/lu";
import Image from "../assets/index"

export const Cards = ({Nombre, Numero, Fecha, Tipo}) => {
    function ocultarDigitos(numero) {
        const digitosOcultos = numero.slice(2, -4).replace(/[0-9]/g, '#');
        const primerosDigitos = numero.slice(0, 2);
        const ultimosDigitos = numero.slice(-4);
        
        return primerosDigitos + digitosOcultos + ultimosDigitos;
    }
    const numeroOculto = ocultarDigitos(Numero);

  return (
        <div className='sm:w-[520px] w-[390px] sm:h-[310px] h-[230px] rounded-lg flex flex-col justify-between p-8 bg-slate-900'>
            <div className='flex relative items-center gap-4 '>
                <h2 className='text-white sm:text-[2rem] text-sm font-bold'>monobank</h2>
                <hr className=' sm:h-8 h-6 w-[1.5px] bg-slate-400'/>                     
                <p className=' text-slate-400 sm:text-[1.2rem] text-sm'>Universal Bank</p>
                <LuNfc className='text-slate-400  sm:text-[2.5rem] text-2xl absolute end-0 self-center'/>
            </div>
            <div className='flex justify-between pe-5 sm:mt-3 mt-1 '>
                <img src={Image.Chip} className=' sm:h-14 h-10 mb-1'/>
                <span className=' text-slate-400 sm:text-[1.2rem] text-xs self-end'>world</span>
            </div>
            <div className='text-slate-400 sm:text-2xl text-sm w-full flex justify-center items-end ' style={{letterSpacing:"5px", wordSpacing: "15px"}}>{numeroOculto}</div>
            <div className='w-full flex justify-between'>
                <div className='flex flex-col w-[70%] pr-3 gap-y-2'>
                    <div className='text-slate-400 w-full flex justify-end mt-2 items-center gap-x-2'>
                        <span className='sm:text-[7px] text-[4px]  text-center'>
                            VALID<br/>THRU
                        </span>
                        <p className='sm:text-lg text-xs'>{Fecha}</p>
                    </div>
                    <p className='text-slate-400 sm:text-2xl text-sm uppercase' style={{letterSpacing:"1px"}}>{Nombre}</p>
                </div>
                {
                    Tipo == "Mastercard"? <img src={Image.Mastercard} className=' sm:h-16 h-10 self-center'/>:(Tipo == "Visa"? <img src={Image.Visa} className=' sm:h-10 h-6 self-center'/> : <img src={Image.American} className='sm:h-16 h-10 self-center'/>)
                }
            </div>
        </div>
  )
}
