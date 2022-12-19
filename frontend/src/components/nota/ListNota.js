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
        <>
        <div className="col-md-8 mx-auto" style={{background:"#dee2e6",padding: "10px", marginTop: "50px"}}>
        <h2 className="mb-3 text-center">Todas las Notas</h2>
            {notas.length ? (
            <>
                {notas.map((nota) => (
                    <ListGroup key={nota.id}>
                        <ListGroup.Item >N°{nota.id} - {nota.title} <Link to={'/nota/'+ nota.id}>Ver</Link></ListGroup.Item>
                    </ListGroup>
                ))}
            </>
            ) : null}
        </div>
        </>
    )
}

export default ListNota;
