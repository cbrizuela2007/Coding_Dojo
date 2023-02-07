const Informacion = ({ tabs }) => {
  console.log(tabs)
  return (
    <>
      {tabs.map((e,i) => {
        if (e.estado == "activo") {
          return <textarea key={i} cols="30" rows="10" defaultValue={e.contenido}></textarea>
        }
        

      })}


    </>
  )
}

export default Informacion