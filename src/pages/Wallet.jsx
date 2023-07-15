import React, { useEffect } from 'react'
import { Nav } from '../components/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from '../redux/feature/cardsSlice'
import { Cards } from '../components/Cards'

export const Wallet = () => {

  const state = useSelector((state)=> state?.cardsSlice)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCards())
  },[])
  
  return (
    <div className='w-[100vw] flex flex-col items-center'>
      <Nav/>
      <section className='flex justify-center gap-5 py-10 w-full flex-wrap'>
        {
          state.status == "success" && (
            state.cardsData.map((item, index)=>{
              return (
                <Cards key={index} Nombre={item.Nombre} Numero={item.Numero} Fecha={item.Fecha} Tipo={item.Tipo}/>
              )
            })
          ) 
        }
      </section>
    </div>
  )
}
