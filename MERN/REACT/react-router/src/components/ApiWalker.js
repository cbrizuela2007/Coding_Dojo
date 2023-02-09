import { useEffect, useState } from 'react'
import axios from 'axios'
import Informacion from './Informacion'
import { useParams,Link} from 'react-router-dom'

const ApiWalker = () => {

    var {id} = useParams();


    const conectar=()=>{
        console.log("impreseion desde conectar", id)
        let identificador;
        if (id!==undefined){
            identificador = id;
            //valorIngresado = id;
        }
        else  
            identificador = valorIngresado;
    
        axios.get(`https://swapi.dev/api/${valorSeleccionado}/${identificador}`.toLowerCase())
        .then(resultado => {
            setInformacion(resultado.data);
            console.log("1", resultado.data);
            console.log("i", informacion);
        })
    }

    const handleClick = () => {
        if (/*valorIngresado != "" &&*/ isNaN(valorIngresado) == false) {
           // alert("ejecutando handleclick")
            conectar();
        }
        else
            alert("Debe ingresar un valor numérico")

    }


    const [opciones, setOpciones] = useState(["People", "Films","Starships","Vehicles","Species"])
    const [valorSeleccionado, setValorSeleccionado] = useState("People")
    const [valorIngresado, setValorIngresado] = useState("")
    const [informacion, setInformacion] = useState({})

useEffect(()=>{
    if (id!= undefined){
        conectar();
    }
},[])

    console.log("cadena", `https://swapi.dev/api/${valorSeleccionado}/${valorIngresado}`.toLowerCase())
    return (
        <>
          {id==undefined ? <div className='layoutIngreso'>
                <div className='seleccionDatos'>
                    <label>Search for:</label>
                    <select value={valorSeleccionado} onChange={(e) => setValorSeleccionado(e.target.value)}>
                        {opciones.map((e, i) => <option key={i} value={e}>{e}</option>)}
                    </select>
                </div>
                <div className='ingresoDatos'>
                    <label>id:</label>
                    <input onChange={(e) => setValorIngresado(e.target.value)}></input>
                    <button onClick={handleClick}>Search</button>
                </div>
            </div>:<Link to={"/"}>Ir a buscador</Link>}
            <Informacion informacion={informacion}></Informacion>
        </>
    )
}

export default ApiWalker