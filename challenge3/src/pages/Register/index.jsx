import UserInput from "../../components/UserInput";
import { Link } from 'react-router-dom';
import { RegisterPage } from "./style";
import user from "../../assets/userIcon.svg"
import React, { useState } from 'react';


function Register() {
    const [nome, setNome] = useState('');
    //const [email, setEmail] = useState('');
    return (
      <RegisterPage>
        <hgroup>
            <h1>Olá</h1>
            <p>Por favor, registre-se para continuar.</p>
        </hgroup>
        <h2>Cadastro</h2>
        <UserInput
            label="Nome"
            icon={user}
            valor={nome}
            onChange={(e) => setNome(e.target.value)}
            />
        <p>
            Já possui uma conta? <Link to="/">Faça Login</Link>.
        </p>
      </RegisterPage>
    );
}

export default Register;