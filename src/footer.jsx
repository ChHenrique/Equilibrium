import './index.css'
import uatsap from './assets/whatsapp.png'
import insta from './assets/instagram.png'
import email from './assets/email.png'
import logozin from './assets/Logopequena.svg'


function Footer(){
return(
<div className='h-[180px] w-screen bg-white justify-end flex flex-col items-center absolute mb-auto'>
    <div><img src={logozin} alt="" className='h-20 w-20 m-4' /></div>
     <div className='h-[30px] w-30 flex flex-row justify-evenly'>
    <a href=""><img src={uatsap} alt="" className='h-6 w-6 ml-3'/></a>
    <a href=""><img src={insta} alt="" className='h-6 w-6 ml-3'/></a>
    <a href=""><img src={email} alt="" className='h-6 w-6 ml-3'/></a>

     </div>
   <h2 className='font-poppins font-thin text-xs m-2'>© 2024 Equilibrium </h2>


</div>
)
}

export default Footer