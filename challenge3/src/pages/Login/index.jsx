import { Link } from 'react-router-dom';
import { LoginPage } from './style';
import { StyledButton } from "../../components/UI/button/style";
import background from "../../assets/sideImage.png";
import UserInput from "../../components/UserInput";
import { useState } from 'react';
import { User, Lock } from "@phosphor-icons/react";

function Login(person) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    
  return (
      <LoginPage>
        <div className="half">
          <form className="form">
            <hgroup>
              <h1>Olá,</h1>
              <p>Para continuar navegando de forma segura, efetue o login.</p>
            </hgroup>
            <div className="login">
              <h2>Login</h2>
              <UserInput
                label="Usuário"
                icon={<User size={24} />}
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <UserInput
                label="Senha"
                icon={<Lock size={24} />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to={`/${person.id}/home`}>
                <StyledButton primary="true">Entrar</StyledButton>
            </Link>
            <p className="redirect">
              Novo por aqui?{" "}
              <span className="register">
                <Link to="/register">
                  <strong>Registre-se</strong>
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
      </LoginPage>
  );
}

export default Login;