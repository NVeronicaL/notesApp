// import { render } from "@testing-library/react";
import React, {useState, useEffect} from "react";
// import {useParams, useNavigate} from "reac-router-dom";
import {Link} from "react-router-dom";

// Imports de elementos de bootstrap
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import axios from "axios";

// import * as Server from './NotaServer';


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

    // Efecto
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/nota/nota-list/').then((response) => {
            console.log(response);
            setNotas(response.data);
          });
    }, [])


    return(
        <div className='NotesList'>
            {notas.length ? (
            <>
                <h5>Todas las notas</h5>
                {notas.map((nota) => (
                    <ListGroup key={nota.id}>
                        <ListGroup.Item >N°{nota.id} - {nota.title} <Link to={'#'}>Ver</Link></ListGroup.Item>
                    </ListGroup>
                ))}
            </>
            ) : null}
        </div>
    )
}

export default ListNota;
