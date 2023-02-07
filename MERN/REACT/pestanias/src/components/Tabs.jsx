import { useState } from "react"
import { useEffect } from "react"
const Tabs = ({ tabs, setTab }) => { 

  useEffect(() => {
    console.log('actualizando tabs')
  }, [tabs])

  const handleClick = (indice) => {

    /*const tabsAux = tabs.filter((e, i) => {
      if (i == indice) 
        e.estado = "activo"
      else
        e.estado = "inactivo"
      
      return e;
    }
    )
   setTab(tabsAux)
*/
    tabs.forEach((e, i) => {
      if (i == indice)
        e.estado = "activo"
      else
        e.estado = "inactivo"
    });

    /*setTab(tabs.map((e, i) => {
        if (i == indice)
          e.estado = "activo"
        else
          e.estado = "inactivo"

        return e;
      }))*/


    setTab([...tabs])


  }


  return (
    <div >
      {tabs.map((e, i) => (
        <button key={i} onClick={() => handleClick(i)} className={e.estado == "activo" ? "btn btn-primary" : "btn btn-secondary"} style={{ margin: "10px" }}>{e.label}</button>)
      )}
    </div>
  )
}

export default Tabs