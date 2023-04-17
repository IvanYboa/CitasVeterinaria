import vetLogo from '../assets/vet.svg'
import "./styles/Logo-animation.css"

function Header() {

    return(
        <header className='flex flex-wrap items-center'>
            <div className="flex items-center">
                <img 
                src={ vetLogo } 
                alt="Logo Veterinaria" 
                className='w-10 logo-container'
                />
            </div>
            <div className="flex items-center">
                <h1 className="
                font-black 
                text-5xl 
                text-center 
                overflow-hidden
                "
                >
                Pacientes {""}
                    <span className="text-blue-500">Veterinaria</span>
                </h1>
            </div>
            
        </header>
    )

}

export default Header