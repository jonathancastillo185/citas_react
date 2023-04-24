import { useState, useEffect } from "react"
import Error from "./Error";


const Formulario = ({ pacientes, setPacientes , paciente , setPaciente}) => {

      const[nombre, setNombre] = useState('');
      const[propietario , setPropietario] = useState('');
      const[email, setEmail] = useState('');
      const[fecha, setFecha] = useState('');
      const[sintomas, setSintomas] = useState('');
      const[error, setError] = useState(false);

      useEffect(()=>{

          if(Object.keys(paciente)) {

              setNombre(paciente.nombre)
              setPropietario(paciente.propietario)
              setEmail(paciente.email)
              setFecha(paciente.fecha)
              setSintomas(paciente.sintomas)
          }

      },[paciente])


      const generarId = () => {

        const random = Math.random().toString(35).substr(2)
        const fecha = Date.now().toString()
        return random + fecha

      }


    const handelSubmit = (e) =>{
        e.preventDefault(); 

        //validacion del formulario
        if([nombre,propietario,email,fecha,sintomas].includes("")){
            console.log('todos los campos son obligatorios')
            setError(true)
        }else{
          setError(false)
           
          const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,

          }

          if(paciente.id){
              //Editando Registro
              objetoPaciente.id = paciente.id
              const pacientesActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

              setPacientes(pacientesActualizado)
              setPaciente({})

          }else{
              //Creando nuevo registro 
              objetoPaciente.id = generarId();
              setPacientes([...pacientes, objetoPaciente] );

          }



          //reiniciar formulario
          setNombre('')
          setPropietario('')
          setEmail('')
          setFecha('')
          setSintomas(' ')

        }
    }

  return (
    <div className=' md:w-1/2 lg:w-2/6 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Paciente</h2>
      <p className=' text-lg mt-5 text-center mb-5'>Anadir pacientes {' '}
      <span className=' text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form action="" onSubmit={handelSubmit}
      className=' shadow-xl rounded-lg py-10 px-5 bg-slate-200'>

      {error &&  <Error><p>Debe rellenar todos los campos</p></Error>}


{/*                              Mascota                                             */}

      <div className=''>
        <label htmlFor="Mascota" className=' block text-gray-700 uppercase font-bold'>
          Nombre Mascota
        </label>
        <input 
          id='Mascota'
          type="text"
          placeholder='Nombre de la mascota'
          className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg '
          value={nombre}
          onChange= {(e) => { setNombre(e.target.value)}}
        />
      </div>

{/*                              Propietario                                             */}

      <div className=' mt-5'>
        <label htmlFor="Propietario" className=' block text-gray-700 uppercase font-bold'>
          Nombre Propietario 
        </label>
        <input 
          id='Propietario'
          type="text"
          placeholder='Nombre del Propietario'
          className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg '
          value={propietario}
          onChange= {(e) => { setPropietario(e.target.value)}}
        />
      </div>

{/*                              Email                                             */}

      <div className='mt-5 '>
        <label htmlFor="Email" className=' block text-gray-700 uppercase font-bold'>
          Direccion de E-mail
        </label>
        <input 
          id='Email'
          type="text"
          placeholder='Ingrese su e-mail'
          className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
          value={email}
          onChange= {(e) => { setEmail(e.target.value)}}
        />
      </div>

{/*                              Alta                                             */}

<div className='mt-5 '>
        <label htmlFor="Alta" className=' block text-gray-700 uppercase font-bold'>
          Fecha de Alta
        </label>
        <input 
          id='Alta'
          type="date" 
          className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
          value={fecha}
          onChange= {(e) => { setFecha(e.target.value)}}
        />
      </div>


{/*                              sintomas                                             */}

<div className='mt-5 '>
        <label htmlFor="sintomas" className=' block text-gray-700 uppercase font-bold'>
          Sintomas
        </label>
        <textarea 
        id='sintomas'
        className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
        placeholder='Describe los sintomas'
        value={sintomas}
        onChange= {(e) => { setSintomas(e.target.value)}}
        />
      </div>



{/*                              Boton de envio                                            */}
      <input 
      type="submit" 
      className=' bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors mb-5 mt-3 rounded-lg'
      value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
      />

      </form>
  


    </div>
  )
}

export default Formulario
