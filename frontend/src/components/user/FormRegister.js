// import { render } from "@testing-library/react";
import React, {useState, useEffect} from "react";
// import {useParams, useNavigate} from "reac-router-dom";

import * as Server from './UserServer';

const FormRegister = () => {
    // HOOK useState
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value});
    }

    async function handleSubmit(event) {
        event.preventDefault();

        // let formData = new FormData();  
        // formData.append('username', user.username);
        // formData.append('email', user.email);
        // formData.append('password', user.password);
        
        try {
            // console.log('formData:', formData);
            console.log('user:', user);
            const response = await Server.createUser(user);
            const data = response.json();
            console.log('DATA: ', data);
        } catch (error) {
            console.log(error);
        }
    }
    // Efecto
    useEffect(() => {
    }, [])

    return(
        <>
        <div>
            <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">Formulario de Registro</h2>
            <hr style={{color: 'pink'}}></hr>
            <form className="form-register" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre de Usuario</label>
                    <input className="form-control" type={'text'} name={'username'} id={'username'} 
                           value={user.username} onChange={handleInputChange}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control" type={'email'} name={'email'} id={'email'} 
                           value={user.email} onChange={handleInputChange}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input className="form-control" type={'password'} name={'password'} id={'password'} 
                           value={user.password} onChange={handleInputChange}>
                    </input>
                </div>
                <button
                    type="submit"
                    className="btn btn-block mb-4 btn-success"
                    value={'Submit'}
                    >
                    Registrarte
                </button>
            </form>
            </div>
        </div>
        </>
    )
}

export default FormRegister;
