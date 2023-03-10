// import { render } from "@testing-library/react";
import React, {useState, useEffect} from "react";
// import { useNavigate } from "react-router-dom";

import axios from "axios";


// import * as Server from './NotaServer';

const FormNota = () => {
    // const navigate = useNavigate();

    // HOOK useState
    const [nota, setNota] = useState({
        title: '',
        description: '',
        status: '',
        deadline: '',
        creation_date: '',
        user: ''
    });

    const [status, setStatus] = useState({
        1: '',
        2: '',
        3: ''
    });

    const handleInputChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setNota({ ...nota, [e.target.name]: e.target.value});
    }

    const handleSelectChange = (e) => {
        setStatus({...status, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // let formData = new FormData();
        // formData.append('title', nota.title);
        // formData.append('description', nota.description);
        // formData.append('status', nota.status);
        // formData.append('deadline', nota.deadline);
        // formData.append('creation_date', nota.status);
        // formData.append('user', nota.user);
        
        axios
        .post('http://127.0.0.1:8000/nota/create-nota/', nota, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log(response);
            setNota(response.data);
            // navigate('/notas');
        });
    }
    // Efecto
    useEffect(() => {
    }, [])

    return(
        <>
        <div>
            <div className="col-md-3 mx-auto" style={{background:"#dee2e6",padding: "10px", marginTop: "50px"}}>
            <h2 className="mb-3 text-center">Formulario de Nota</h2>
            <hr style={{color: 'pink'}}></hr>
            <form className="form-nota"onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input className="form-control" type={'text'} name={'title'} id={'title'} 
                           value={nota.title} onChange={handleInputChange}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripci??n</label>
                    <input className="form-control" type={'text'} name={'description'} id={'description'} 
                           value={nota.description} onChange={handleInputChange}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <select value={nota.status} onChange={handleSelectChange}>
                        <option value="1">Pendiente</option>
                        <option value="2">En Proceso</option>
                        <option value="3">Finalizado</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de cierre</label>
                    <input className="form-control" type={'date'} name={'deadline'} id={'deadline'} 
                           value={nota.deadline} onChange={handleInputChange}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de creaci??n</label>
                    <input className="form-control" type={'date'} name={'creation_date'} id={'creation_date'} 
                           value={nota.creation_date} onChange={handleInputChange}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Autor</label>
                    <input className="form-control" type={'text'} name={'user'} id={'user'} 
                           value={nota.user} onChange={handleInputChange}>
                    </input>
                </div>
                <button
                    type="submit"
                    className="btn btn-block mb-4 btn-success"
                    value={'Submit'}
                    >
                    Crear
                </button>
            </form>
            </div>
        </div>
        </>
    )
}

export default FormNota;
