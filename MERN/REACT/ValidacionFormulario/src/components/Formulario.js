import React, { useReducer, useState } from 'react';

/*const initialState = {
    name: '',
    email: ''
};*/

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};


function reducer(state, action) {
    
    let errorAux = null;
    
    if (action.type == "firstName" && action.payload.length < 3)
        errorAux = "El nombre debe tener al menos 3 caracteres"
    else if (action.type == "lastName" && action.payload.length < 3 && action.payload.length > 0)
        errorAux = "El apellido debe tener al menos 3 caracteres"
    else if (action.type == "email" && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(action.payload)) === false)
        errorAux = "El email debe contener @ y un dominio ej: .com, es"

    return {
        ...state,
        [action.type]: { value: action.payload, error: errorAux }
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {

        const { name, value } = e.target;
        console.log()
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            {/*JSON.stringify(state)*/}
            <div>
                <label>
                    <span>Name:</span>{' '}
                    <input
                        name="firstName"
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
                {state.firstName.error != null ? <p>{state.firstName.error}</p> : ""}
            </div>
            <div>
                <label>
                    <span>Apellido:</span>{' '}
                    <input
                        name="lastName"
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
                {state.lastName.error != null ? <p>{state.lastName.error}</p> : ""}
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
                {state.email.error != null ? <p>{state.email.error}</p> : ""}
            </div>
        </div>
    );
}