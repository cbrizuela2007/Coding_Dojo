
import axios from 'axios';
import { useState } from 'react';
      
const ListaPokemon = (props) => {
  
	const [pokemon, setPokemon] = useState([]);

	const consultarDatos = () => {
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=2000')
			.then(response => {setPokemon(response.data.results)})
	};

	return (
		<div>
			<button onClick={consultarDatos}>Fetch pokemon</button>
			<ul className='lista'>
				{pokemon.map((currentPokemon, index)=>{
					return (<li key={index}>{currentPokemon.name}</li>)
				})}
			</ul>
      
    </div>
    
    );
}
export default ListaPokemon;