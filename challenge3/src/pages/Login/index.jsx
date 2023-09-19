import { Link } from 'react-router-dom';
function Login() {
    return (
    <div>
        <h1>My Login Page</h1>
        <p>
            <Link to="/user/home">Entrar</Link>
        </p>
        <p>
            Register <Link to="/register">now</Link>.
        </p>
    </div>
    );
}

export default Login;