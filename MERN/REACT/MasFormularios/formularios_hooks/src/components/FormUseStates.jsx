import React, {useState} from 'react'

const FormUseStates = () => {

    const [Nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const crearUsuario = evento => {
        evento.preventDefault();

    }

    return (
        <>
            <form onSubmit={crearUsuario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" onChange={evento => setNombre(evento.target.value)} className="form-control" id="nombre"/>
                    {(Nombre.length <2 && Nombre != "")? <p className='text-danger'>Nombre debe contener al menos 2 caracteres</p> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" onChange={evento => setApellido(evento.target.value)}  class="form-control" id="apellido" />
                    {(Apellido.length <2 && Apellido != "")? <p className='text-danger'>Apellido debe contener al menos 2 caracteres</p> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" onChange={evento=> setEmail(evento.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {(Email.length <5 && Email != "")? <p className='text-danger'>Email debe tener al menos 5 caracteres</p> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" class="form-label">Password</label>
                    <input type="password" onChange={evento => setPassword(evento.target.value)} class="form-control" id="exampleInputPassword" />
                    {(Password.length <8 && Password != "")? <p className='text-danger'>Password debe tener al menos 8 caracteres</p> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputConfirmPassword" class="form-label">Confirm Password</label>
                    <input type="password" onChange={evento => setConfirmPassword(evento.target.value)} class="form-control" id="exampleInputConfirmPassword" />
                    {(Password != ConfirmPassword != "") && ConfirmPassword != ""? <p className='text-danger'>Las claves no coinciden</p> : null}
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <p>Nombre: {Nombre}</p>
            <p>Apellido: {Apellido}</p>
            <p>Email: {Email}</p>
            <p>Password: {Password}</p>
            <p>Confirm Password: {ConfirmPassword}</p>
        </>
    )
}

export default FormUseStates