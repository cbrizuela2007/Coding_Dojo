const Informacion = ({informacion}) => {

  const getDatos = (objeto) => {

    let content = [];
    let x = 0;
    for (let clave in objeto) {
      //console.log("valor", objeto[clave])

      if (x == 0) {
        content.push(<h1>{objeto[clave]}</h1>)
        x = 1;
      }
      else
        content.push(<li><span className='clave'>{clave}:</span> {objeto[clave]}</li>)
    }
    //console.log("clave", Object.entries(clave));
    console.log("getdatos", content);
    return content;

  }
  return (
    <div>
      <div className='informacion'>
        {/*Object.entries(informacion).forEach(([key, value]) => {
                    if (typeof(value) === "string") {
                        <p>e}</p>
                    }
                     
            })*/}
        {/* {for (let clave in perro){
            console.log(perro[clave]);
} } */}
        <ul>{getDatos(informacion)}</ul>
      </div>
    </div>
  )
}

export default Informacion