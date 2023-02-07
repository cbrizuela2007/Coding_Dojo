import { useRef } from "react"

const Prueba = () => {
    
    const inputRef = useRef(null)
    const resultRef = useRef(null)
    const labelNombre = useRef(null)

    const makeThings = () => {
        console.log(labelNombre)
        console.log(labelNombre.current.children[0].value)
        resultRef.current.innerHTML= inputRef.current.value
        //inputRef.current.value = "cambio"
    }
    return (
        <div>
            <label ref={labelNombre}>Nombre:<input type="text" onChange={makeThings} ref={inputRef} id="hola"/></label>
            
            <button onClick={makeThings}>Hacer cosas</button>
            <div ref={resultRef}>
                
            </div>
        </div>
    )
}

export default Prueba