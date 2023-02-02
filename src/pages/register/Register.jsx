import styles from './Register.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className={styles['form-container']}>
            <div className={styles['form-wrapper']}>
                <span className={styles.logo}>Xhatar</span>
                <span className={styles.title}>Sign-up</span>
                <form>
                    <input type="text" placeholder="username"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button type="submit" className="btn">Sign up</button>
                </form>
                <p>
                    Already have an account? <Link to="/login" className={styles.title}>Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;