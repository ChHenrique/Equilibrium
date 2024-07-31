import './index.css'
import logo from'./assets/Logo.svg'

function Logo(){

return(
            <div id='Logo' className=' font-satoshi-bold relative h-20 w-80 ml-7 items-center justify-center flex' draggable='false'>
                    <img src={logo} alt="Logo Equilibrium" className='h-9 w-80' draggable="false"/>
            </div>)
}

export default Logo