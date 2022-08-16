import React, { useState } from 'react'
import { AGREGAR } from '../../types/types'
import { useDispatch, useSelector } from 'react-redux/es/exports'

export const Todo = () => {

  const state = useSelector((state)=> state.todoReducer)/* NO MUESTRA EL STATE Y NO SE ACTUALIZA EL VALOR */

  const [texto, setTexto] = useState("")
  const [tarea, setTarea] = useState([])


  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch({type: AGREGAR, text: tarea})
    setTarea([])
    setTexto("")
    console.log(state)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={texto} onChange={(e)=>{setTexto(e.target.value)}}/>
        <button type='submit' onClick={()=>{setTarea(texto)}}>DISPATCH</button>
      </form>      
    </div>
  )
}
