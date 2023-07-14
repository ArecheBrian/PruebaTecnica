import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <header className=' h-20 w-full bg-slate-900 flex justify-start items-center gap-x-4 px-5'>
        <Link to={"/"}>
            <button className=' bg-sky-800 text-white px-4 py-2 rounded-full'>ADD CARD</button>
        </Link>
        <Link to={"/Wallet"}>
            <button className=' bg-sky-200 px-4 py-2 rounded-full'>WALLET</button>
        </Link>
    </header>
  )
}
