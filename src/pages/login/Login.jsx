import { Link } from "react-router-dom";
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles['form-container']}>
            <div className={styles['form-wrapper']}>
                <span className={styles.logo}>Xhatar</span>
                <span className={styles.title}>Sign-in</span>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button type="submit">Sign in</button>
                </form>
                <p>
                    Don't have an account? <Link to="/register" className={styles.title}>Sign-up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;