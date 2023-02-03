import { useState } from "react";
const Form = ({listatareas, setListaTarea}) => {


  const adminForm = evento => {
    evento.preventDefault();
    setListaTarea([...listatareas, {tarea: evento.target[0].value, status:false}])
    // console.log(tarea)
    // console.log("linea 12", evento.target[0].value)

    /*setTarea(evento.target.value)*/
  }

  return (
    <>
      <form onSubmit={adminForm}>
        <input type="text" placeholder="Ingrese tarea" className="form-control" />
        <button type="submit" className="btn btn-primary">Add</button>


      </form>

    </>
  )
}

export default Form