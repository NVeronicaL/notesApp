// import { render } from "@testing-library/react";
import React, {useState, useEffect} from "react";
// import {useParams, useNavigate} from "reac-router-dom";

import * as Server from './NotaServer';
// Imports de elementos de bootstrap
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const ListNota = () => {
    // HOOK useState
    const [notas, setNotas] = useState({
        // title: '',
        // description: '',
        // status: '',
        // deadline: '',
        // creation_date: '',
        // user: ''
    });

    const getNotas = async () => {
        try {
            const response = await Server.listNota();
            const data = response.json();
            console.log(data);
            const {title, description, status, deadline, creation_date, user} = data;
            setNotas({title, description, status, deadline, creation_date, user});
            console.log(data.nota);
        } catch (error) {
            console.log(error);
        }
    }
    // Efecto
    useEffect(() => {
        getNotas();
    }, [])


    return(
        <div>
            <h1>Notas</h1>
        </div>
    )
}

export default ListNota;
