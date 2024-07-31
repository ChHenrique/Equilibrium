import React,{ useState } from 'react'
import './index.css'
import Logo from './logo'

function Header(){

    return(   
        <div id='Header' className='w-screen h-20 border-inherit border-2 flex flex-row items-center absolute bg-white'  draggable="false">
                <Logo draggable='false'/>
                 <div className='w-full flex justify-end items-center' draggable="false">
                    <a href="#" className=" font-poppins text-lg m-2 font-bold mr-8 text-slate-950 hover:text-hover hover:font-black transition ease duration-200 cursor-pointer" draggable="false">Sou Psicologo</a>
                    <a href="#" className=" font-poppins text-lg m-2 font-bold mr-8 text-slate-950 hover:text-hover hover:font-black transition ease duration-200 cursor-pointer" draggable="false">Sou Paciente</a>
                    <a href="#" className=" font-poppins text-lg m-2 font-bold mr-8 text-slate-950 hover:text-hover hover:font-black transition ease duration-200 cursor-pointer" draggable="false">Plano de Saude</a>
                    <a href="#" className=" font-poppins text-lg m-2 font-bold mr-8 text-slate-950 hover:text-hover hover:font-black transition ease duration-200 cursor-pointer" draggable="false">Sobre nós</a>
                    <a href="#"><button className=' bg-primaria m-3 w-20 h-10 rounded-md text-white text-lg font-bold font-poppins mr-8 transition hover:bg-blue-700 ease duration-300 cursor-pointer' draggable="false">Entrar</button></a>
                 </div>

        </div>
    )
}

export default Header