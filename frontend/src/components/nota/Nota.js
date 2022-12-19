// import { render } from "@testing-library/react";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
// import {Link} from "react-router-dom";

// Imports de elementos de bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import axios from "axios";

// import * as Server from './NotaServer';


const Nota = ( ) => {

    let { id } = useParams();

    // HOOK useState
    const [nota, setNota] = useState({
        // title: '',
        // description: '',
        // status: '',
        // deadline: '',
        // creation_date: '',
        // user: ''
    });

    // Efecto
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/nota/detail-nota/'+id).then((response) => {
            console.log(response);
            setNota(response.data);
          });
    }, [id])


    return(
        <div style={{background:"#dee2e6",padding: "10px", marginTop: "50px"}}>
        <Card style={{ width: '18rem', alignItems:"center"}}>
        <Card.Body>
            <Card.Title>{nota.title}</Card.Title>
            <hr></hr>
            <Card.Text>
                {nota.description}
            </Card.Text>
            <Button variant="primary">Editar</Button>
            <Button variant="danger">Eliminar</Button>
            <hr></hr>
            <Card.Subtitle className="mb-2 text-muted">Fecha de creación: {nota.creation_date}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Fecha de cierre: {nota.deadline}</Card.Subtitle>
        </Card.Body>
        </Card>
        </div>
    )
}

export default Nota;
