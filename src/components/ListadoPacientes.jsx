import { useEffect } from 'react'
import React from 'react'
import Paciente from './Paciente'
const ListadoPacientes = ({pacientes ,setPaciente, eliminarPaciente}) => {

  return (

    <div className='md:w-1/2 lg:w-5/6'>
        
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
          <p className='text-xl mt-5 mb-5 text-center'>
            Administra tus{' '}
            <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
          </p>

          <div className='md:h-screen overflow-y-scroll'>
          { pacientes.map( paciente => (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente = {setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
          

          ))}
          </div>
        </>

      ):(
        <>
        <h2 className='font-black text-3xl text-center'>Todavia no tiene pacientes</h2>
        <p className='text-xl mt-5 mb-5 text-center'>
          Comienze a llenar el formulario{' '}
          <span className='text-indigo-600 font-bold'>y comenzaran a aparecer aqui</span>
        </p>
        </>


      )}

  </div>
  )
}

export default ListadoPacientes