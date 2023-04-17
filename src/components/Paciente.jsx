import Swal from "sweetalert2"

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, alta, sintomas, id} = paciente
  
  const handleEliminar = () => {
    const respuesta = Swal.fire({
      title: '¿Estás seguro que desesas eliminar al paciente ' + nombre + '?',
      text: "No se puede revertir esta accción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar paciente'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'Registro eliminado con éxito',
          'success',
          eliminarPaciente(id)
        )
      }
    })
  }

  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl '>
        
        <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: {""}
        <span className='font-normal normal-case'>{nombre}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario: {""}
        <span className='font-normal normal-case'>{propietario}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: {""}
        <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha alta del paciente: {""}
        <span className='font-normal normal-case'>{alta}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sintomas: {""}
        <span className='font-normal normal-case'>{paciente.sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button 
            type="button"
            className="py-2 px-10 
            bg-emerald-600
            hover:bg-emerald-700 
            text-white 
            font-bold 
            uppercase 
            rounded-lg"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>

          <button 
          type="button"
          className="py-2 px-10 
            bg-red-600 
            hover:bg-red-700 
            text-white 
            font-bold 
            uppercase 
            rounded-lg
            overflow-hidden"
            onClick={ handleEliminar }
          >
            Eliminar
          </button>
        </div>

  </div>
  )
}

export default Paciente