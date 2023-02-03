const ListaTarea = ({ listatareas, setListaTarea }) => {

  /*setTarea(tarea: ["hule"])*/
  

  const seleccionar = indice => {
    const listaauxiliar = listatareas.filter((objeto, i) => {
      if (i == indice) {
        objeto.status = !objeto.status;
        
      }
      return objeto;
    })

    setListaTarea(listaauxiliar)
  }



  const eliminar = indice =>{
    const listaauxiliar = listatareas.filter((objeto, i) => i != indice)

    setListaTarea(listaauxiliar)
  }

  return (
    <>
      {listatareas.map((e, i) =>
        <div key={i}>
          <label className={e.status ? 'tachar' :' sintachar' }>{i}:{e.tarea}</label>
          <input type="checkbox" onClick={() => seleccionar(i)} />
          <button onClick={()=> eliminar(i)}>Delete</button>
        </div>)}
    </>
  )
}

export default ListaTarea