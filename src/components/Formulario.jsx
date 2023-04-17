import { useState, useEffect, Fragment } from "react"
import Error from "./Error";
import Swal from "sweetalert2";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])
  

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random+fecha;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    //Validación del formulario
    if([nombre, propietario, email, alta, sintomas].includes("")){
      Swal.fire({
        title:'Error',
        text: 'Todos los campos son requeridos',
        icon: 'error'
      });
      
      setError(true)
      return
    }else{
      //Setear el error en falso
      setError(false)

      //Alerta de guardado
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Paciente guardado con éxito',
        showConfirmButton: false,
        timer: 1500
      })

      //Objeto de paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas,
      }

      if(paciente.id){
        //Editar registro
        objetoPaciente.id = paciente.id;
        const pacientesActualizado = pacientes.map( pacienteState => pacienteState.id ===
          paciente.id ? objetoPaciente : pacienteState );
          setPacientes(pacientesActualizado)
          setPaciente({})
      }else{
        //Nuevo registro
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);
      }

      //Reiniciar formulario
      setNombre("")
      setPropietario("")
      setEmail("")
      setAlta("")
      setSintomas("")
    } 
  }

  return (
    <div className='md:w-1/2 lg:w:2/5 mx-5'>
      
        <h2 className='font-black text-3xl text-center'>
          Seguimiento Pacientes
        </h2>

        <p className='text-lg mt-5 text-center mb-10'>
          Añade Pacientes y {""}
          <span className='text-blue-500 font-bold'>
            Administralos
          </span>
        </p>

        <form 
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        onSubmit={handleSubmit}
        >
          <div className='mb-5'>
            <label htmlFor='mascota'
            className='block text-gray-700 uppercase font-bold'>Nombre Mascota
            </label>
            <input id="mascota" type="text" 
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='propietario'
            className='block text-gray-700 uppercase font-bold'>Nombre Propietario
            </label>
            <input id="propietario" type="text" 
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='email'
            className='block text-gray-700 uppercase font-bold'>Email
            </label>
            <input id="email" type="email" 
            placeholder='Email del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='alta'
            className='block text-gray-700 uppercase font-bold'>Alta de la mascota
            </label>
            <input id="alta" type="date" 
            className='border-2 w-full p-2 mt-2 rounded-md'
            value={alta}
            onChange={ (e) => setAlta(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='sintomas'
            className='block text-gray-700 uppercase font-bold'>Sintomas
            </label>
            <textarea
              id="sintomas"
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              placeholder='Describe los sintomas'
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value) }
              />
          </div>
          { paciente.id ? 
          <input type="submit" 
          className='bg-yellow-600 w-full p-3 text-white uppercase font-bold 
          hover:bg-yellow-500 cursor-pointer transition-all rounded-md' 
          value="Editar paciente"
          />
          :
          <input type="submit" 
          className='bg-emerald-600 w-full p-3 text-white uppercase font-bold 
          hover:bg-emerald-700 cursor-pointer transition-all rounded-md' 
          value="Agregar paciente "
          />
          }
        </form>

    </div>
  )
}

export default Formulario