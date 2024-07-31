import './index.css'
import Terapia from './assets/terapia.png'

function Main(){
    return(
    <div className='  flex w-screen h-screen bg-fundo justify-center items-center' draggable="false">
               <div className='font-satoshi-Regular w-1/3 h-full justify-center items-center flex flex-col m-10' draggable="false">
               <h1 className=' text-6xl m-4 text-justify font-bold text-slate-950' draggable="false">Buscar ajuda é um sinal de coragem, não de fraqueza.</h1>
               <h2 className=' text-2xl m-4 text-justify' draggable="false">Todo mundo merece um espaço para ser ouvido e compreendido. A terapia oferece essa oportunidade em um ambiente de apoio</h2>
               <a href=""><button className=' m-8 text-2xl text-white bg-primaria p-3 rounded-2xl font-light pl-12 pr-12 cursor-pointer p-3' draggable="false">Agendar sua consulta</button></a>
               </div>
               <div className='w-5/12 h-full h-full justify-center items-center flex' draggable="false">
                     <img src={Terapia} alt="Homem fazendo terapia" draggable="false"/>
               </div>

    </div>


    )
}

export default Main