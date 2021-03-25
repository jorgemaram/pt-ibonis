import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Error from './Error';
import useActivities from '../hooks/useActivities';

const InputNif = styled.input`
    width: 100%;
    display:block;
    padding: 1rem;
    box-shadow: inset;
    border: none;
    font-size: 1.6rem;
    font-family: "Helvetica neue", Helvetica, sans-serif;
    color: #22d099;
    font-weight: 200;
    box-shadow: 2px 2px 10px #666;
    margin-bottom: 10px;
    ::-webkit-input-placeholder { color: #22d099; };
    :-moz-placeholder { /* Firefox 18- */ color: #22d099; };
    ::-moz-placeholder { /* Firefox 19+ */ color: #22d099; };
    :-ms-input-placeholder { color: #22d099; };
`

const Boton = styled.input`
    max-width: 50%;
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    line-height: 48px;
    padding: 10px;
    background-color: #000;
    border: none;
    text-align: center;
    width: 100%;
    color: #FFF;
    font-family:"Helvetica neue", Helvetica, sans-serif;
    text-transform: uppercase;

    &:hover {
        background-color: #22d099;
        cursor:pointer;
    }
`

const Formulario = ({ getNif, getActivity_sector }) => {
    
    const [activitiesList, saveActivitiesList] = useState([]);
    const [error, saveError] = useState(false);
    
    const [nif, setNif] = useState('');
    const [activity, SelectActivity] = useActivities('', activitiesList);

    // Ejecutar llamado a la API
    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://demos.inbonis.com/api-coach-es-informa/activities';

            const resultado = await axios.get(url);
            console.log(resultado.data)

            saveActivitiesList(resultado.data);
        }
        consultAPI();
    }, []);


    // cuando el usuario hace submit
    const showResults = e => {
        e.preventDefault();

        //validar si ambos campos estan llenos
        if (nif === '' || activity === '') {
            saveError(true);
            return;
        }

        // pasar los datos al componente principal
        saveError(false);
        getNif(nif);
        getActivity_sector(activity)
    }

    return (
        <form
            onSubmit={showResults}
        >
            <InputNif type='text' placeholder='NIF' id='nif' value={nif} onChange={e => setNif(e.target.value)} />
            {error ? <Error mensaje="Por favor, rellena este campo" /> : null}

            <SelectActivity />
            {error ? <Error mensaje="Por favor, rellena este campo" /> : null}

            <Boton
                type="submit"
                value="Continuar →"
            />
        </form>
    );
}

export default Formulario;