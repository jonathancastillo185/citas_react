const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente
    
    const handleEliminar = () => {

        const respuesta = confirm('Estas seguro?');

        if (respuesta){
            eliminarPaciente(id)
        }

    }


    return (

    <div className='m-5 bg-slate-200 px-5 py-10 rounded-xl shadow-xl '>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{' '}
            <span className=' font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propiertario:{' '}
            <span className=' font-normal normal-case'>{propietario}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email:{' '}
            <span className=' font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta:{' '}
            <span className=' font-normal normal-case'>{fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{' '}
            <span className=' font-normal normal-case'>{sintomas}</span>
        </p>    

        <div className="flex justify-between">
            <button type="button" className=" font-bold uppercase py-3 px-4 bg-indigo-600 hover:bg-indigo-800 shadow-md rounded-xl m-1 text-white" onClick={() => setPaciente(paciente)}>Editar</button>
            <button type="button" className=" font-bold uppercase py-3 px-4 bg-red-600 hover:bg-red-900 shadow-md rounded-xl m-1 text-white" onClick={handleEliminar}>Eliminar</button>
        </div>
    </div>

  )
}

export default Paciente
