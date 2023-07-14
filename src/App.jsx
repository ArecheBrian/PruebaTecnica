import { useEffect, useState } from 'react'
import { Form } from './components/Form'
import { useDispatch, useSelector } from 'react-redux'
import { Nav } from './components/Nav'

function App() {
  // const state = useSelector((state)=> state?.cardsSlice)
  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(fetchCards())
  // },[])

  return (
    <div className='w-[100vw] flex flex-col items-center'>
      <Nav/>
      <section className=' min-h-screen flex justify-center items-center pt-28 w-full'>
        <Form/>
      </section>
    </div>
  )
}

export default App
