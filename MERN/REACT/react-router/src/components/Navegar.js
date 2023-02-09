import {Link, NavLink} from 'react-router-dom'

const Navegar = () => {
  return (
    <div>
        <h1>Barra de Navegación</h1>
        <NavLink to={"/home"}>Home</NavLink>
    </div>
  )
}

export default Navegar