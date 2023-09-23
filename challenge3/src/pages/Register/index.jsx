import UserInput from "../../components/UserInput";
import { Link } from 'react-router-dom';
import { RegisterPage } from "./style";
import { useState } from 'react';
import { User, Fingerprint, Calendar, At, Lock, ShieldCheck } from "@phosphor-icons/react";
import background from "../../assets/sideImage.png";
import { StyledButton } from "../../components/UI/button/style";



function Register() {
    const [nome, setNome] = useState('');
    const [user, setUser] = useState('');
    const [birth, setBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
      <RegisterPage>
        <div className="half">
          <form className="form">
            <hgroup>
              <h1>Olá,</h1>
              <p>Por favor, registre-se para continuar.</p>
            </hgroup>
            <div className="cadastro">
              <h2>Cadastro</h2>
              <UserInput
                label="Nome"
                icon={<User size={24} />}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <UserInput
                label="Usuário"
                icon={<Fingerprint size={24} />}
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <UserInput
                label="Nascimento"
                icon={<Calendar size={24} />}
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
              />
              <UserInput
                label="Email"
                icon={<At size={24} />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <UserInput
                label="Senha"
                icon={<Lock size={24} />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <UserInput
                label="Confirmar Senha"
                icon={<ShieldCheck size={24} />}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>
            <Link to="/">
                <StyledButton primary="true">Registrar-se</StyledButton>
            </Link>
            <p className="redirect">
              Já possui uma conta?{" "}
              <span className="login">
                <Link to="/">
                  <strong>Faça Login</strong>
                </Link>
              </span>
            </p>
          </form>
        </div>
        <div className="half">
          <div className="background">
            <img src={background} />
          </div>
        </div>
      </RegisterPage>
    );
}

export default Register;