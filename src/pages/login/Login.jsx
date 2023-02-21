import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Login.module.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
    
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setErr(true);
        } 
    }
    return (
        <div className={styles['form-container']}>
            <div className={styles['form-wrapper']}>
                <span className={styles.logo}>Xhatar</span>
                <span className={styles.title}>Sign-in</span>
                <form onSubmit={submitHandler}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button type="submit">Sign in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>
                    Don't have an account? <Link to="/register" className={styles.title}>Sign-up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;