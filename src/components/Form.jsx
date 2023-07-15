import React, { useState } from 'react'
import { LuNfc } from "react-icons/lu";
import { motion } from 'framer-motion';
import { UploadCards } from '../supabase/uploadCard';
import Image from "../assets/index"

export const Form = () => {

  const [isFlipped, setIsFlipped] = useState(false); //voltear tarjeta 
  const [tipoTarjeta, setTipoTarjeta] = useState('Desconocido');
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    Numero: "",
    Fecha: "",
    Nombre: "",
    CVV: "",
  })   

//   funcion para limpiar formulario 
  const ResetFrom = () => {
    const reset = {
        Numero: "",
        Fecha: "",
        Nombre: "",
        CVV: ""
      }
    setData(reset)
    setTipoTarjeta('Desconocido')
  }

//   tomar informacion del formulario 
  const handleChange = (e) => {
    
    const { name, value } = e.target;

    const formattedValue = value.replace(/\d{4}(?=\d)/g, '$& '); //agregar espacio cada 4 numero en el campo Numero
    // Identificar cuando se debe voltear la tarjeta 
    if(name == "CVV"){
      setIsFlipped(true)
    }else{
      setIsFlipped(false)
    }
    setData(prevData => ({
      ...prevData,
      [name]: (name == "Numero"? formattedValue : value)
    }));
    // llamado de funcion para detectar el tipo de tarjeta
    if (name == "Numero") {detectarTipoTarjeta(value.substring(0, 4))}
  };
  
  // funcion que detecta el tipo de tarjeta 
  const detectarTipoTarjeta = (numeroTarjeta) => {
    const regexMastercard = /^5[1-5]/;
    const regexVisa = /^4/;
    const regexAmericanExpress = /^3[47]/;

    if (regexMastercard.test(numeroTarjeta)) {
      setTipoTarjeta('Mastercard');
    } else if (regexVisa.test(numeroTarjeta)) {
      setTipoTarjeta('Visa');
    } else if (regexAmericanExpress.test(numeroTarjeta)) {
      setTipoTarjeta('American Express');
    } else {
      setTipoTarjeta('Desconocido');
    }
  };
 
//   evaluar formulario anter de enviar la informacion 
  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    // Validación del campo nombre
    if (/\d/.test(data.Nombre)) {
      errors.nombre = 'Este campo solo acepta letras.';
    }

    // Validación del campo numero
    if (/[a-zA-Z]/.test(data.Numero)) {
        errors.numero = 'Este campo solo acepta numeros.';
    }

    // Validacion para las tarjetas desconocidad 
    if (tipoTarjeta == "Desconocido") {
        errors.tarjeta = "Tarjeta no identificada"
    }
    if (data.Numero.length < 19) {
        errors.tarjeta2 = "Tarjeta incompleta"
    }
    setErrors(errors);

    // Si no hay errores, se puede enviar el formulario
    if (Object.keys(errors).length === 0) {
      // Aquí puedes manejar la lógica para enviar los datos del formulario
      UploadCards({
        Numero: data.Numero,
        Nombre: data.Nombre,
        CVV: data.CVV,
        Fecha: data.Fecha,
        Tipo: tipoTarjeta
      })
      ResetFrom()
      setIsFlipped(false)
    }

  };
  return (
    <div className='md:w-[680px] w-[95%] h-auto bg-white flex flex-col items-center justify-center rounded-xl border border-black'>
        <div className='h-[100px] w-full flex justify-center relative'>
            {/* card component */}
            <div className=' sm:w-[520px] w-[390px] sm:h-[310px] h-[230px] absolute rounded-lg bottom-0 flex flex-col items-center justify-between'>
            <motion.div className="w-full h-full"
                    style={{ perspective: "1000px" }}
                >
                    <motion.div
                        className='cardfront py-8 px-8 flex flex-col justify-between bg-slate-900 rounded-lg'
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isFlipped ? -180 : 0 }}
                    >
                      <div className='flex flex-col gap-y-5 w-full'>
                        <div className='flex relative items-center gap-4'>
                            <h2 className='text-white sm:text-[2rem] text-sm font-bold'>monobank</h2>
                            <hr className=' sm:h-8 h-6 w-[1.5px] bg-slate-400'/>
                            <p className=' text-slate-400 sm:text-[1.2rem] text-sm'>Universal Bank</p>
                            <LuNfc className='text-slate-400  sm:text-[2.5rem] text-2xl absolute end-0 self-center'/>
                        </div>
                        <div className='flex justify-between pe-5 sm:mt-3 mt-1'>
                            <img src={Image.Chip} className=' sm:h-14 h-10 mb-1'/>
                            <span className=' text-slate-400 sm:text-[1.2rem] text-xs self-end'>world</span>
                        </div>
                    </div>
                    <div className='text-slate-400 sm:text-2xl text-sm w-full flex justify-center items-end' style={{letterSpacing:"5px", wordSpacing: "15px"}}>{data.Numero? data.Numero : "#### #### #### ####"}</div>
                    <div className='w-full flex justify-between'>
                        <div className='flex flex-col w-[70%] pr-3 gap-y-2'>
                            <div className='text-slate-400 w-full flex justify-end mt-2 items-center gap-x-2'>
                                <span className='sm:text-[7px] text-[4px]  text-center'>
                                    VALID<br/>THRU
                                </span>
                                <p className='sm:text-lg text-xs'>{data.Fecha? data.Fecha : "00/00"}</p>
                            </div>
                            <p className='text-slate-400 sm:text-2xl text-sm uppercase' style={{letterSpacing:"1px"}}>{data.Nombre? data.Nombre : "YOUR NAME"}</p>
                        </div>
                        {
                            tipoTarjeta == 'American Express'? <img src={Image.American} className='sm:h-16 h-10 self-center'/> :( tipoTarjeta == "Visa"? <img src={Image.Visa} className=' sm:h-10 h-6 self-center'/> : (tipoTarjeta == "Mastercard")? <img src={Image.Mastercard} className=' sm:h-16 h-10 self-center'/>: <div className='sm:h-16 h-10'></div>) 
                        }    
                    </div>
                    </motion.div>
                    <motion.div
                        className="cardback bg-slate-900 rounded-lg flex flex-col items-center py-8 gap-y-8"
                        style={{ transform: "rotateY(180deg)"}}
                        initial={{ rotateY: 180 }}
                        animate={{ rotateY: isFlipped ? 0 : 180 }}
                    >
                    {/* Contenido de la parte posterior de la tarjeta */}
                    <div className='w-full h-14 bg-slate-700'></div>
                    <div className='w-[90%] h-14 bg-slate-100 flex justify-end items-center px-3'>
                      <p className=' text-xl'>{data.CVV? data.CVV: "123"}</p>
                    </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
        <div className='py-11 sm:w-[520px] w-[90%]'>
          {/* Formulario */}
            <form onSubmit={handleSubmit} className='flex flex-col sm:gap-y-11 gap-y-4'>
                <div className='sm:flex justify-between gap-x-10'>
                    <div className='sm:w-1/2 w-full flex flex-col gap-y-2'> 
                        <label className='font-bold'>Número de Tarjeta </label>
                        <input className='rounded-lg border border-gray-300 h-10 px-2' onChange={handleChange} name='Numero' maxLength={19} required value={data.Numero}/>
                        {errors.numero && <span className=' text-[12px] text-red-600'>{errors.numero}</span>}
                        {errors.tarjeta && <span className=' text-[12px] text-red-600'>{errors.tarjeta}</span>}
                        {errors.tarjeta2 && <span className=' text-[12px] text-red-600'>{errors.tarjeta2}</span>}
                    </div>
                    <div className='sm:w-1/2 w-full flex flex-col gap-y-2'>
                        <label className='font-bold'>Fecha Vencimiento </label>
                        <input className='rounded-lg border border-gray-300 h-10 px-2' onChange={handleChange} name='Fecha' required value={data.Fecha}/>
                    </div>
                </div>
                <div className='sm:flex justify-between gap-x-10'>
                    <div className='sm:w-1/2 w-full flex flex-col gap-y-2'>
                        <label className='font-bold'>Nombre Titular </label>
                        <input className='rounded-lg border border-gray-300 h-10 px-2' onChange={handleChange} name='Nombre' maxLength={20} required value={data.Nombre}/>
                        {errors.nombre && <span className=' text-[12px] text-red-600'>{errors.nombre}</span>}
                    </div>
                    <div className='sm:w-1/2 w-full flex flex-col gap-y-2'>
                        <label className='font-bold'>CVV </label>
                        <input className='rounded-lg border border-gray-300 h-10 w-40 px-2' onChange={handleChange} name='CVV' required value={data.CVV}/>
                    </div>
                </div>
                <div className='flex gap-x-4'>
                    <button type="submit" className=' bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-[6px] rounded-full text-sm'>agregar tarjeta</button>
                    <span className=' bg-gray-200 hover:bg-gray-300 text-gray-400 px-4 py-[6px] rounded-full text-sm' onClick={ResetFrom}>Cancelar</span>
                </div>
            </form>
        </div>
    </div>
  )
}
