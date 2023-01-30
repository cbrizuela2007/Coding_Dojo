import React from 'react'
import './PersonaCard.css'

class PersonaCard extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {edad: props.edad}
    }

    

    render(){

        const {nombre, apellido, edad, color_cabello} = this.props

        

        return (
            <div className='personaCard'>
                <h1>{apellido}, {nombre}</h1>
                <p>Edad: {this.state.edad}</p>
                <p>Color de cabello: {color_cabello}</p>
                <button onClick={()=> this.setState({edad: this.state.edad+1})}>Birthday Button for {nombre} {apellido}</button>
            </div>
            
        )
    }
}

export default PersonaCard