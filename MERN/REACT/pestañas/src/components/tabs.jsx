const tabs = ({ tabs, setTab }) => {

  const handleClick = (evento, indice) => {

    const tabsAux = tabs.filter((e, i) => {
      if (i == indice) 
        e.estado = "activo"
      else
        e.estado = "inactivo"
      
      return e;
    }
    )

    console.log(tabsAux);
    setTab(tabsAux);
  }

  return (
    <div >
      {tabs.map((e, i) =>
        <button onClick={() => handleClick(e, i)} className={e.estado == "activo" ? "btn btn-primary" : "btn btn-secondary"} style={{ margin: "10px" }}>{e.label}</button>
      )}
    </div>
  )
}

export default tabs