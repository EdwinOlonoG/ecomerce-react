import { useState } from "react"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    function logIn() {
        console.log('logIn');
    }

    return (
        <>
            <h2>Iniciar Sesion</h2>
            <form onSubmit={logIn}>
                Correo
                <input type="email" ></input>
                Contrasena
                <input type="password"></input>
                <button type="submit" onClick={logIn}>Login</button>
            </form>
        </>
    )
}

export default Login;