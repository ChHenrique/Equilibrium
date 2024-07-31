import './index.css'
import Card1 from './assets/card1.png'
import Card2 from './assets/card2.png'
import Card3 from  './assets/card3.png'




function Cards(){

return(
    <div className='w-screen h-[800px] bg-hoverb justify-center items-center flex font-satoshi-Regular'>
           <div id='card1' className='h-[390px] w-[300px] bg-white flex justify-center items-center flex-col m-10 rounded-2xl p-4 transition ease duration-500'>
                <img src={Card1} alt="" className='w-[180px] m-4'/>
                <h1 className='text-[19.2px] text-hoverb flex justify-center items-center text-center'>Agende Facilmente</h1>
                <h2 className='text-[16.8px] text-slate-950 flex justify-center items-center text-center'>Escolha entre consultas online 
ou presenciais e agende no horário que for mais conveniente para você,
 tudo em poucos cliques.</h2>
           </div>
           <div id='card2' className='h-[650px] w-[500px] bg-white flex justify-center items-center flexcol flex-col m-10 rounded-2xl p-4 transition ease duration-500'>
               <img src={Card2} alt="" className='w-[250px] m-4'/>
               <h1 className='text-[32px] text-hoverb flex justify-center items-center text-center'>Encontre Seu Psicólogo Ideal</h1>
               <h2 className='text-[28px] text-slate-950 flex justify-center items-center text-center'>Navegue por perfis de psicólogos especializados, leia avaliações de outros clientes e escolha o profissional perfeito para suas necessidades.</h2>
           </div>
           <div id='card3' className='h-[390px] w-[300px] bg-white flex justify-center items-center flex-col m-10 rounded-2xl p-4 transition ease duration-500'>
               <img src={Card3} alt="" className='w-[180px] m-4'/>
                <h1 className='text-[19.2px] text-hoverb flex justify-center items-center text-center'>Segurança e Privacidade</h1>
                <h2 className='text-[16.8px] text-slate-950 flex justify-center items-center text-center'>Realize pagamentos de forma segura diretamente pela plataforma e tenha a certeza de que suas informações são protegidas.</h2>
           </div>
    </div> 
 )

}


export default Cards